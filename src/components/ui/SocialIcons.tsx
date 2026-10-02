import React from "react";

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path
        d="M9 9.5c.3-.3.8-.3 1.1.1l1.1 1.4c.3.3.3.8 0 1.1l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.3-.3.8-.3 1.1 0l1.4 1.1c.4.3.4.8.1 1.1-.8.8-1.9 1-2.9.5-2.5-1.1-4.5-3.1-5.6-5.6-.5-1-.3-2.1.5-2.9z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinterestIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.87 2.5c-4.9 0-7.87 3.27-7.87 7.2 0 2.58 1.42 4.38 2.25 4.38.35 0 .56-.93.56-1.19 0-.3-.72-.92-.72-2.18 0-2.65 1.95-4.9 5.1-4.9 2.73 0 4.58 1.83 4.58 4.43 0 3.09-1.6 5.48-3.9 5.48-.84 0-1.48-.6-1.48-1.43 0-.77.34-1.51.68-2.29.38-.97.74-2 .74-2.73 0-1.25-.79-1.84-1.88-1.84-1.49 0-2.7 1.55-2.7 3.63 0 1.01.32 1.76.32 1.76l-1.34 5.67c-.42 1.7-.09 3.79-.04 4.02.04.18.23.08.32-.05.15-.22 1.93-2.45 2.1-3.26l.75-2.95c.42.75 1.48 1.38 2.65 1.38 3.55 0 6.22-3.26 6.22-7.59 0-3.99-3.24-7.49-7.88-7.49z" />
    </svg>
  );
}

export const SOCIAL_PROFILES = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/famousletterpressindia/",
    icon: InstagramIcon,
    handle: "@famousletterpressindia",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+918416099340",
    icon: WhatsAppIcon,
    handle: "+91 84160 99340",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCpRrZSVggl79UKEQ3650WMQ",
    icon: YouTubeIcon,
    handle: "Famous Letterpress",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/famousletterpress/",
    icon: PinterestIcon,
    handle: "@famousletterpress",
  },
];
