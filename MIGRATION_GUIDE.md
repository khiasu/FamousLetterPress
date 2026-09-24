# Famous Letterpress — Production Deployment & Migration Guide

This document outlines the step-by-step procedure for deploying the new Next.js application to Vercel, connecting the PostgreSQL database, configuring Razorpay live payments, and migrating domain DNS without losing search engine rankings.

---

## 1. Architecture Summary

| Component | Target Solution |
| :--- | :--- |
| **Frontend & API** | Next.js (App Router, React 19, Tailwind CSS v4, Framer Motion) |
| **Hosting Platform** | Vercel (Edge Network) |
| **Database** | PostgreSQL (Supabase, Neon, or Vercel Postgres) via Prisma ORM |
| **Payment Gateway** | Razorpay (UPI, Credit/Debit Cards, Net Banking) |
| **Transactional Email**| Resend or SendGrid |
| **Media & CDN** | Cloudinary or Vercel Blob |
| **SEO & Redirects** | Native 301 permanent redirects mapped in `next.config.ts` |

---

## 2. Database Setup & Seeding

### Step 1: Provision PostgreSQL Database
Create a PostgreSQL database instance on [Supabase](https://supabase.com), [Neon](https://neon.tech), or Vercel Postgres.

### Step 2: Set Database Connection String
Copy the connection string into `.env.local`:
```bash
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@[HOST]:5432/postgres?sslmode=require"
```

### Step 3: Push Schema & Generate Prisma Client
Run the following command from `famous-letterpress/`:
```bash
npx prisma db push
```

### Step 4: Seed Initial Studio Data
Populate the database with the pre-configured services, sample kits, and portfolio items:
```bash
npx ts-node prisma/seed.ts
```

---

## 3. Razorpay Live Configuration

1. Log in to the [Razorpay Dashboard](https://dashboard.razorpay.com).
2. Generate Live API Keys (`Key ID` and `Key Secret`).
3. Add to your Vercel project environment variables:
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID`: `rzp_live_...`
   - `RAZORPAY_KEY_SECRET`: `...`
4. Set up Webhooks in the Razorpay dashboard:
   - Webhook URL: `https://famousletterpress.com/api/orders/verify-payment`
   - Secret: Set `RAZORPAY_WEBHOOK_SECRET`
   - Events subscribed: `payment.captured`, `order.paid`

---

## 4. Preserving SEO Equity (WordPress Migration)

To protect existing Google search rankings from the WordPress/WooCommerce site, permanent 301 redirects are already implemented in `next.config.ts`:

- `/product/wedding-sample-kit` &rarr; `/weddings/wedding-sample-kit`
- `/product/business-card-sample-kit` &rarr; `/business-cards/business-card-sample-kit`
- `/product-category/wedding-invitations` &rarr; `/weddings/wedding-stationery`
- `/product-category/business-cards` &rarr; `/business-cards`
- `/shop`, `/cart`, `/checkout` &rarr; `/weddings/wedding-sample-kit`
- `/early-bride` &rarr; `/weddings/early-bride`
- `/contact-us` &rarr; `/contact`
- `/portfolio` &rarr; `/work`

Before pointing DNS, verify the sitemap at `https://famousletterpress.com/sitemap.xml` and submit it to Google Search Console.

---

## 5. Deployment on Vercel

1. Push this repository to GitHub or GitLab.
2. In Vercel, select **Add New Project** and import the repository.
3. Configure the environment variables listed in `.env.example`.
4. Deploy! Next.js will build all 35 static routes and dynamic API endpoints automatically.
5. In Project Settings &rarr; **Domains**, map `famousletterpress.com` and `www.famousletterpress.com`.
