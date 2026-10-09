/**
 * Gmail API Transporter using Google OAuth 2.0
 * Directly mirrors the live WordPress WP Mail SMTP configuration (info@famousletterpress.com)
 */

interface SendEmailParams {
  to?: string;
  replyTo?: string;
  subject: string;
  html: string;
  text?: string;
}

const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID || "";
const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET || "";
const GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN || "";
const SENDER_EMAIL = process.env.GMAIL_SENDER_EMAIL || "info@famousletterpress.com";
const SENDER_NAME = "Famous Letterpress";

// Cache token in memory
let cachedAccessToken: string | null = null;
let tokenExpiry = 0;

async function getAccessToken(): Promise<string> {
  const now = Date.now();
  if (cachedAccessToken && now < tokenExpiry - 60000) {
    return cachedAccessToken;
  }

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GMAIL_CLIENT_ID,
      client_secret: GMAIL_CLIENT_SECRET,
      refresh_token: GMAIL_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to refresh Gmail access token: ${errText}`);
  }

  const data = await res.json();
  cachedAccessToken = data.access_token;
  tokenExpiry = now + (data.expires_in || 3600) * 1000;
  return data.access_token;
}

export async function sendStudioEmail({ to, replyTo, subject, html, text }: SendEmailParams) {
  try {
    const recipient = to || process.env.STUDIO_NOTIFICATION_EMAIL || "bizemp009@gmail.com";
    const accessToken = await getAccessToken();

    // Build standard RFC 2822 MIME message
    const boundary = "====_flp_boundary_" + Date.now();
    const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString("base64")}?=`;

    const rawMessage = [
      `From: "${SENDER_NAME}" <${SENDER_EMAIL}>`,
      `To: ${recipient}`,
      replyTo ? `Reply-To: ${replyTo}` : "",
      `Subject: ${utf8Subject}`,
      "MIME-Version: 1.0",
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      "",
      `--${boundary}`,
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: base64",
      "",
      Buffer.from(text || html.replace(/<[^>]*>/g, "")).toString("base64"),
      "",
      `--${boundary}`,
      "Content-Type: text/html; charset=UTF-8",
      "Content-Transfer-Encoding: base64",
      "",
      Buffer.from(html).toString("base64"),
      "",
      `--${boundary}--`,
    ]
      .filter((line) => line !== null && line !== undefined)
      .join("\r\n");

    // Base64URL encode for Gmail API
    const base64SafeMessage = Buffer.from(rawMessage)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    const gmailRes = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: base64SafeMessage }),
    });

    if (!gmailRes.ok) {
      const err = await gmailRes.json();
      console.error("Gmail API send error:", err);
      return { success: false, error: err };
    }

    const result = await gmailRes.json();
    return { success: true, messageId: result.id };
  } catch (error) {
    console.error("sendStudioEmail exception:", error);
    return { success: false, error };
  }
}
