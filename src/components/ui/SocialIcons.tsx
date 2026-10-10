import React from "react";

// WhatsApp Icon: Clean vector icon matching button text color
export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

// Pinterest Icon: Solid filled circle with white stylized 'P'
export function PinterestIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="M12.017 6c-3.328 0-5.417 2.39-5.417 5.21 0 1.348.514 2.548 1.616 2.996.179.073.277.04.32-.125.031-.122.107-.442.14-.582.046-.19.023-.257-.116-.422-.325-.386-.532-.888-.532-1.597 0-2.057 1.558-3.906 4.053-3.906 2.21 0 3.424 1.35 3.424 3.153 0 2.373-1.05 4.37-2.617 4.37-.864 0-1.511-.714-1.303-1.592.248-1.048.729-2.179.729-2.936 0-.678-.364-1.244-1.118-1.244-.886 0-1.598.916-1.598 2.146 0 .783.264 1.313.264 1.313s-.906 3.834-1.066 4.516c-.317 1.346-.047 2.986-.024 3.15.016.113.136.142.19.068.081-.104 1.13-1.399 1.486-2.693.1-.365.575-2.247.575-2.247.286.545 1.12.973 2.008.973 2.642 0 4.436-2.408 4.436-5.633C17.247 8.708 15.176 6 12.017 6z"
        fill="#FFFFFF"
      />
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

// Location / Map Pin Icon: Matching stroke and fill style
export function LocationIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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
    label: "Pinterest",
    href: "https://www.pinterest.com/famousletterpress/",
    icon: PinterestIcon,
    handle: "Famous Letterpress",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCpRrZSVggl79UKEQ3650WMQ",
    icon: YouTubeIcon,
    handle: "Famous Letterpress",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918416099340",
    icon: WhatsAppIcon,
    handle: "+91 84160 99340",
  },
];
