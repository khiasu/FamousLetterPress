# Famous Letterpress — Production Web Application & Admin Portal

> **Handcrafted in Nagaland · Designers Turned Printers**  
> Modern Next.js production rebuild replacing legacy WordPress/WooCommerce for [famousletterpress.com](https://famousletterpress.com).

---

## Overview

Famous Letterpress operates in the premium printing and bespoke stationery space in Nagaland, India. This repository contains the complete production-grade web application:
- **Public Brand & Portfolio Platform**: Editorial, tactile aesthetic celebrating pure cotton paper, vintage platen letterpress relief, hot foil stamping, and blind debossing.
- **Topical Cluster Architecture**: Dedicated experiences for Wedding Stationery, Luxury Business Cards, Personalised Stationery, and Channel Partners (B2B).
- **Direct Commerce**: Retained direct-order flow for Sample Kits (Wedding & Business Card) with Razorpay integration.
- **Early Bride Consultation**: Standalone bespoke consultation inquiry flow.
- **Editorial Journal**: SEO & Answer Engine Optimization (AEO) guides for paper weights, printing mechanics, and suite checklists.
- **Lightweight Admin Portal**: Internal CMS (`/admin`) for leads, orders, sample kit pricing, and site settings.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (Editorial palette: Cream, Ivory, Sand, Terracotta, Forest) |
| **Typography** | Cormorant Garamond (Editorial Serif) + Inter (Clean Modern Sans) |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) (Restrained, tactile micro-interactions) |
| **Database & ORM** | PostgreSQL via [Prisma ORM](https://www.prisma.io/) |
| **Payments** | [Razorpay](https://razorpay.com/) (UPI, Net Banking, Cards) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## Project Structure

```
famous-letterpress/
├── prisma/
│   ├── schema.prisma       # Database models (Services, Orders, Leads, Kits, Settings)
│   └── seed.ts             # Initial data seeding script
├── src/
│   ├── app/
│   │   ├── (public pages)
│   │   ├── weddings/
│   │   │   ├── wedding-stationery/
│   │   │   ├── wedding-sample-kit/
│   │   │   └── early-bride/
│   │   ├── business-cards/
│   │   │   └── business-card-sample-kit/
│   │   ├── personalised-stationery/
│   │   ├── channel-partners/
│   │   ├── work/           # Selected portfolio commissions
│   │   ├── journal/        # Editorial guides & SSG reader
│   │   ├── admin/          # Lightweight internal CMS
│   │   ├── api/            # Orders, payments, and form submission APIs
│   │   ├── sitemap.ts      # Dynamic XML sitemap generator
│   │   └── robots.ts       # Crawl directives
│   ├── components/         # Reusable UI, layout, forms, and shop components
│   ├── lib/
│   │   ├── data/           # Verified service, kit, and article data
│   │   └── prisma.ts       # Database client singleton
│   └── types/              # Strict TypeScript definitions
├── MIGRATION_GUIDE.md      # Vercel deployment & 301 redirect mapping
└── SPECIFICATION.md        # Full 71-section rebuild specification
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Generate Prisma Client & Run Dev Server
```bash
npx prisma generate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the public site or [http://localhost:3000/admin](http://localhost:3000/admin) to view the admin portal.

---

## Production Build

```bash
npm run build
```
Generates 35 optimized static (SSG) pages and serverless dynamic API routes with 0 errors.

---

## Migration & Deployment

See [`MIGRATION_GUIDE.md`](./MIGRATION_GUIDE.md) for full instructions on deploying to Vercel, configuring PostgreSQL, live Razorpay webhooks, and preserving WordPress SEO rankings via 301 redirects.
