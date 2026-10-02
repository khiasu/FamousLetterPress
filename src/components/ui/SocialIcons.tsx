import React from "react";

// Facebook Icon: Solid filled circle with white 'f'
export function FacebookIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="M13.5 8.5H15V6h-2c-2.2 0-3.5 1.3-3.5 3.5V11H7.5v2.5H9.5V19h3v-5.5h2.2l.3-2.5h-2.5V9.6c0-.7.2-1.1 1-1.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Instagram Icon: Rounded square outline with center circle lens and top-right dot
export function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" ry="5.5" />
      <circle cx="12" cy="12" r="4.2" strokeWidth="2.2" />
      <circle cx="17.2" cy="6.8" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

// YouTube Icon: Solid pill/capsule rectangle with white centered play triangle
export function YouTubeIcon({ className = "w-7 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 20"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="27"
        height="19"
        rx="5.5"
        ry="5.5"
        fill="currentColor"
      />
      <path d="M11 6l7.5 4-7.5 4V6z" fill="#FFFFFF" />
    </svg>
  );
}

export const SOCIAL_PROFILES = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/famousletterpress/",
    icon: FacebookIcon,
    handle: "Famous Letterpress",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/famousletterpressindia/",
    icon: InstagramIcon,
    handle: "@famousletterpressindia",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCpRrZSVggl79UKEQ3650WMQ",
    icon: YouTubeIcon,
    handle: "Famous Letterpress",
  },
];
