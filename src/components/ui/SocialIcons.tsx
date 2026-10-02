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
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.49 0-2.94-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.177 8.177 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24zm-3.26 3.68c-.18 0-.48.07-.73.34-.25.28-.94.92-.94 2.24s.96 2.58 1.09 2.76c.14.18 1.89 2.88 4.57 4.04.64.28 1.14.44 1.53.57.64.2 1.22.17 1.68.1.52-.07 1.59-.65 1.81-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31-.28-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.13-.18.27-.7 1.04-.86 1.22-.16.18-.32.2-.59.07-.28-.14-1.16-.43-2.21-1.36-.81-.73-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.28.27-.46.09-.18.05-.34-.02-.47-.07-.13-.59-1.42-.81-1.94-.21-.51-.43-.44-.59-.45-.15-.01-.32-.01-.48-.01z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
      <path d="M12 0a12 12 0 0 0-4.37 23.18c-.05-.98-.1-2.49.02-3.56.11-.98.74-5.6.74-5.6s-.19-.38-.19-.94c0-.88.51-1.54 1.15-1.54.54 0 .8.41.8.9 0 .55-.35 1.36-.53 2.12-.15.64.32 1.16.95 1.16 1.14 0 2.02-1.2 2.02-2.94 0-1.54-1.1-2.61-2.68-2.61-1.83 0-2.9 1.37-2.9 2.78 0 .55.21 1.14.48 1.46.05.06.06.12.04.18l-.18.73c-.03.12-.1.15-.22.09-1.02-.48-1.66-1.98-1.66-3.18 0-2.59 1.88-4.97 5.43-4.97 2.85 0 5.07 2.03 5.07 4.75 0 2.83-1.78 5.11-4.26 5.11-.83 0-1.61-.43-1.88-.94l-.51 1.95c-.19.71-.69 1.6-1.03 2.15A11.98 11.98 0 1 0 12 0z" />
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
