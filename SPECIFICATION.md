# FAMOUS LETTER PRESS — WEBSITE REBUILD
## Production Website + Admin Portal Specification

---

# 01. PROJECT OVERVIEW

We are completely rebuilding the Famous Letter Press website from the ground up.

The existing website is built on WordPress and contains legacy WooCommerce functionality, old pages, custom PHP snippets, a large media library, outdated/unused commerce infrastructure and years of accumulated website content.

The new website must NOT reproduce the old WordPress architecture.

The new system will be a modern, production-grade web application hosted on Vercel.

The public website is primarily an INFORMATION, DISCOVERY, BRAND, PORTFOLIO and ENQUIRY platform.

The only current direct-commerce functionality that must remain is the ability to purchase sample kits through Razorpay.

The goal is to create a premium, extremely polished, fast, mobile-first website that communicates the quality of Famous Letter Press while creating a strong foundation for SEO, GEO and AEO.

---

# 02. BUSINESS CONTEXT

## Brand

Famous Letter Press

## Location

Nagaland, India.

## Core positioning

Famous Letter Press wants to be known for:

- Handcrafted in Nagaland
- Designers turned printers

The brand operates in the premium printing / stationery space.

The website must communicate craftsmanship, design quality, physical materials, printing expertise and the personality of the studio.

Do not invent claims, awards, statistics, clients, locations, capabilities or achievements.

If information is not provided, create an appropriate content placeholder rather than inventing facts.

---

# 03. PRIMARY PURPOSE OF THE WEBSITE

The founder has explicitly stated that the primary purpose of the new website is:

INFORMATION.

The website should help visitors:

1. Discover Famous Letter Press
2. Understand what the company offers
3. Explore services
4. See selected work
5. Understand the process
6. Understand materials and craftsmanship
7. Learn pricing where appropriate
8. Decide whether FLP is suitable for their project
9. Submit an enquiry / consultation request
10. Purchase sample kits
11. Contact FLP through WhatsApp / phone / email

The website should NOT be designed primarily as an ecommerce store.

---

# 04. CURRENT ACTIVE SERVICES

The founder has confirmed these active service categories:

1. Wedding Stationery
2. Business Cards
3. Personalised Stationery

Each should have its own strong dedicated page.

---

# 05. SAMPLE KITS

The founder has clarified that FLP currently has:

1. Wedding Sample Kit
2. Business Card Sample Kit

These should have their own dedicated pages.

Sample kits are the main direct-payment products currently retained from the old commerce system.

Payment must remain available through Razorpay.

Supported payment methods should be whatever Razorpay currently enables for the FLP account, including where applicable:

- UPI
- Credit cards
- Debit cards
- Net banking
- Wallets / other supported methods

Do not recreate WooCommerce.

---

# 06. EARLY BRIDE

The founder has confirmed that the Early Bride consultation/form must remain.

It should become a modern standalone experience.

The new implementation should:

- Collect required information
- Validate input
- Prevent spam
- Store submissions securely
- Notify FLP
- Show clear success/error states
- Work perfectly on mobile

Do not reproduce the current WordPress emergency PHP form architecture.

Build a clean API-backed implementation.

---

# 07. ORDER / ENQUIRY LOGIC

The normal customer journey is:

DISCOVER
→ UNDERSTAND
→ VIEW WORK
→ ENQUIRE / CONSULT
→ DISCUSS
→ ORDER

Customers generally contact FLP through:

- WhatsApp
- Phone
- Email
- Website enquiry / consultation forms

Online payment is currently primarily relevant to sample kits.

Do not introduce a full ecommerce cart/catalogue system.

---

# 08. CURRENT WEBSITE FUNCTIONALITY TO REMOVE

The following legacy infrastructure should NOT be rebuilt:

- WooCommerce
- WooCommerce product catalogue
- WooCommerce cart
- WooCommerce customer accounts
- Legacy WooCommerce checkout
- Old product categories
- Old ecommerce workflows
- Unused ecommerce pages
- Abandoned commerce functionality
- Legacy WordPress custom PHP form hacks
- Unnecessary WordPress plugins
- Legacy WordPress-specific dependencies

The old WordPress site is the SOURCE OF BUSINESS CONTENT, not the technical architecture to copy.

---

# 09. ADMIN PORTAL

A custom lightweight admin portal will be built for FLP.

The founder/team needs to eventually manage:

- Prices
- Services
- Images
- Portfolio
- FAQs
- Contact details
- Articles / Journal
- Offers

The current responsible administrator is:

Mr Khiasu

The admin portal should therefore be designed as a simple internal CMS.

DO NOT build CRM functionality yet.

DO NOT build inventory management yet.

DO NOT build production management yet.

DO NOT build a complex ERP.

The admin portal should only support the website's current content and operational needs.

---

# 10. ADMIN PORTAL — V1

Admin dashboard structure:

Dashboard

## Content

- Services
- Portfolio / Work
- FAQs
- Journal / Articles
- Offers
- Site Settings

## Products

- Wedding Sample Kit
- Business Card Sample Kit

## Leads

- General enquiries
- Early Bride consultations
- Channel Partner enquiries

## Orders

- Sample Kit Orders

## Media

- Image library

---

# 11. ADMIN REQUIREMENTS

Every editable content type should support:

- Create
- Read
- Update
- Delete / Archive
- Publish / Draft where appropriate
- Image upload
- SEO title
- SEO description
- Slug
- Visibility
- Ordering / sorting where useful

Do not hard-code editable business content into React components.

Content that the founder is expected to change must come from the database/CMS layer.

---

# 12. SAMPLE KIT ADMIN

Each sample kit should support:

- Name
- Slug
- Description
- Price
- Images
- What's included
- Materials
- Shipping information
- FAQ
- Availability
- Featured status
- SEO title
- SEO description
- Razorpay configuration/reference where required

Example:

Wedding Sample Kit

Business Card Sample Kit

The architecture should allow additional sample kits to be added later without rebuilding the website.

---

# 13. PROPOSED SITE ARCHITECTURE

Primary architecture:

/

├── /work/
│
├── /weddings/
│   ├── /wedding-stationery/
│   ├── /wedding-sample-kit/
│   └── /early-bride/
│
├── /business-cards/
│   └── /business-card-sample-kit/
│
├── /personalised-stationery/
│
├── /channel-partners/
│
├── /about/
│
├── /process/
│
├── /materials/
│
├── /faq/
│
├── /journal/
│
├── /contact/
│
└── /start-a-project/

This architecture is a baseline.

Before production launch, existing URLs must be mapped against the new architecture.

---

# 14. HOMEPAGE

The homepage should NOT attempt to contain everything.

Its job is to communicate:

WHO FLP IS
WHAT FLP DOES
WHY FLP IS DIFFERENT
WHAT FLP HAS CREATED
HOW TO WORK WITH FLP

Recommended structure:

1. Hero
2. Brand positioning
3. Core services
4. Selected work
5. Craft / materials
6. Designers turned printers
7. Handcrafted in Nagaland
8. Who FLP works with
9. Process
10. Sample kits
11. FAQ preview
12. Final enquiry CTA

The homepage should guide visitors into deeper pages rather than becoming an enormous SEO landing page.

---

# 15. WEDDING ARCHITECTURE

Wedding-related content should be treated as a major topical cluster.

Main:

/weddings/

Child pages:

/weddings/wedding-stationery/

/weddings/wedding-sample-kit/

/weddings/early-bride/

Potential future content can live under the wedding topic without destroying the existing architecture.

The wedding section should answer real customer questions around:

- Wedding stationery
- Invitations
- Customisation
- Materials
- Process
- Timelines
- Sample kits
- Consultation
- Pricing where appropriate
- Delivery

Do not keyword-stuff.

---

# 16. BUSINESS CARD ARCHITECTURE

/business-cards/

This page should communicate:

- What FLP offers
- Design/customisation
- Printing
- Materials
- Finishes
- Options
- Process
- Selected examples
- FAQs
- Sample kit
- Enquiry CTA

Business Card Sample Kit:

/business-cards/business-card-sample-kit/

---

# 17. PERSONALISED STATIONERY

/personalised-stationery/

This must be a complete standalone service page.

It should explain:

- What the service is
- Available options
- Customisation
- Materials
- Finishing
- Examples
- Process
- FAQs
- Enquiry CTA

Do not invent products that FLP does not actually provide.

---

# 18. CHANNEL PARTNERS

/channel-partners/

This is a dedicated B2B audience page.

Potential audiences may include:

- Wedding planners
- Event professionals
- Designers
- Agencies
- Other businesses
- Partners

Only include audience categories confirmed by FLP.

The page should explain:

- Who the program is for
- What FLP provides
- How collaboration works
- Capabilities
- Selected work
- Enquiry process
- Partner enquiry CTA

---

# 19. PEOPLE GETTING MARRIED

The founder requested a separate experience/page for people getting married.

This should be represented primarily through the /weddings/ experience rather than creating an awkward keyword-only page.

The content should be written for real couples planning their wedding.

It should help them understand:

- What FLP creates
- When to contact FLP
- What the process is
- What they can customise
- How samples work
- How to enquire
- What information they should prepare

---

# 20. WORK / PORTFOLIO

/work/

The founder explicitly wants:

SELECTED BEST WORK

NOT:

All historical work.

NOT:

Formal case studies.

The portfolio should be visually led.

Potential filtering:

- Weddings
- Business
- Personalised

Do not automatically migrate every old project.

Only high-quality, relevant work should become prominent.

---

# 21. CASE STUDIES

The founder does NOT want formal case studies.

Do not create a traditional:

Challenge → Solution → Results

case study system.

Portfolio entries should instead focus on:

- Visuals
- Project type
- Materials
- Techniques
- Relevant service
- Short description

Only include factual information that FLP provides.

---

# 22. ABOUT PAGE

/about/

This should be one of the strongest brand/entity pages.

It should establish:

- What Famous Letter Press is
- Where it is
- What it does
- Its story
- Designers turned printers
- Handcrafted in Nagaland
- Craft
- Materials
- Approach
- Studio / team information where supplied

Do not invent history.

---

# 23. PROCESS PAGE

/process/

Explain the real FLP workflow.

Potential structure:

DISCOVERY
→ CONSULTATION
→ DESIGN
→ PROOF
→ APPROVAL
→ PRODUCTION
→ DELIVERY

Only use steps confirmed by FLP.

The page should answer practical customer questions.

---

# 24. MATERIALS PAGE

/materials/

This should showcase the physical craft behind the brand.

Potential topics:

- Paper
- Letterpress
- Foil
- Embossing
- Debossing
- Printing
- Finishing
- Other actual FLP capabilities

Only include techniques confirmed by FLP.

This page should be highly visual but still semantically rich.

---

# 25. FAQ

/faq/

FAQs should be factual and useful.

Potential categories:

- General
- Weddings
- Business Cards
- Personalised Stationery
- Sample Kits
- Ordering
- Payments
- Delivery
- Process

Do not create hundreds of near-duplicate keyword questions.

Every answer should actually help a customer.

---

# 26. JOURNAL

/journal/

This will be the long-term content / topical authority section.

Possible content categories:

Wedding
Printing
Stationery
Materials
Design
Business

Potential topics:

- What is letterpress printing?
- Letterpress vs digital printing
- How to choose wedding invitation paper
- What should be included in a wedding invitation?
- What is embossing?
- What is foil stamping?
- Business card material guides
- Wedding stationery planning guides

Only publish useful original content.

Do not generate AI filler articles.

---

# 27. CONTACT

/contact/

Clearly communicate:

- Famous Letter Press
- Location
- Phone
- WhatsApp
- Email
- Business hours if supplied
- Social profiles if supplied
- Contact CTA

Business information must remain consistent across the website.

---

# 28. START A PROJECT

/start-a-project/

This is the primary general conversion page.

The form should collect useful project information rather than only:

Name
Email
Message

Possible fields:

- Name
- Email
- Phone / WhatsApp
- Service
- Project type
- Quantity
- Timeline
- Budget where appropriate
- Message
- Reference/upload where appropriate
- Preferred contact method

Do not make every field mandatory.

The form must be mobile-first.

---

# 29. DESIGN DIRECTION

The visual direction is:

MINIMAL
LUXURIOUS
FEMININE
SOFT
EDITORIAL
TACTILE
CRAFT-FOCUSED
PREMIUM
MODERN

The website should feel like a high-end stationery / design studio.

It should NOT look like:

- A generic SaaS website
- A WordPress template
- An ecommerce marketplace
- A generic AI-generated landing page
- A neon futuristic website
- A template packed with cards
- A design portfolio template from 2020

---

# 30. VISUAL PHILOSOPHY

Think:

Luxury editorial design
+
Premium stationery
+
Physical tactility
+
Modern digital interaction

The interface should feel like touching:

- Fine paper
- Embossed cards
- Letterpress impressions
- Soft cotton stock
- Foil
- Printed invitations

Translate those physical qualities into digital motion and texture without becoming gimmicky.

---

# 31. COLOR DIRECTION

Use a restrained palette.

Prefer:

- Warm whites
- Ivory
- Cream
- Soft beige
- Charcoal
- Deep muted green / brand-derived accent where appropriate

Do not use:

- Excessive gradients
- Neon
- Rainbow palettes
- Excessive glassmorphism
- Random accent colors

The existing brand identity should remain the source of truth for exact brand colors.

---

# 32. TYPOGRAPHY

Use a sophisticated editorial pairing.

Potential direction:

Elegant serif
+
Clean modern sans-serif

Typography should create hierarchy without requiring excessive font sizes.

Do not use trendy fonts simply because they look "luxury."

Performance and readability matter.

Use a small number of font families and weights.

---

# 33. MOBILE FIRST

Mobile is the primary design target.

Design in this order:

1. Mobile
2. Tablet
3. Desktop

Do not design desktop first and squeeze it into mobile.

Important mobile considerations:

- Thumb-friendly navigation
- Large touch targets
- Fast image loading
- Minimal header
- Sticky CTA where appropriate
- Short readable paragraphs
- Horizontal galleries where useful
- Smooth but restrained scrolling
- Proper form UX
- No tiny typography
- No hover-dependent interactions

---

# 34. ANIMATION PHILOSOPHY

Animations should feel:

THOUGHTFUL
SMOOTH
PHYSICAL
PREMIUM
SUBTLE

Not:

LOUD
GIMMICKY
CONSTANT
SLOW
DISTRACTING

Use animation to communicate:

- hierarchy
- transition
- depth
- interaction
- physicality
- continuity

---

# 35. ANIMATION EXAMPLES

Good:

- Soft page entrance
- Image reveal
- Typography reveal
- Subtle parallax
- Card elevation
- Image scale on hover
- Smooth navigation transitions
- Gentle scroll-linked movement
- Magnetic CTA movement used sparingly
- Text/image choreography
- Subtle paper-like movement

Avoid:

- Constant floating objects
- Excessive 3D
- Huge scroll animations
- Long loading animations
- Every element moving
- Excessive blur
- Heavy WebGL everywhere

The user should notice the quality of the experience, not the animation implementation.

---

# 36. 3D / OBJECT VISUALS

The website may use 3D/tactile representations of:

- Wedding invitations
- Business cards
- Stationery
- Paper
- Sample kits
- Printed objects

These should feel like premium physical objects.

Potential interaction:

Object enters viewport
→ subtle rotation
→ soft lighting
→ tactile movement
→ settles naturally

Do NOT make the website a 3D demo.

3D is supporting storytelling, not the primary content.

---

# 37. PERFORMANCE RULE

Every visual effect must justify its performance cost.

Priority:

1. Content
2. Speed
3. Accessibility
4. SEO
5. Interaction
6. Decorative effects

Do not sacrifice Core Web Vitals for visual effects.

Prefer:

- CSS transforms
- CSS opacity
- requestAnimationFrame only when necessary
- lazy loading
- responsive images
- image CDN
- compressed assets
- code splitting
- dynamic imports
- GPU-friendly transforms
- reduced-motion support

Avoid unnecessary:

- massive JavaScript animation libraries
- huge videos
- giant WebGL scenes
- unoptimized images
- blocking scripts

---

# 38. ACCESSIBILITY

Must support:

- Semantic HTML
- Keyboard navigation
- Focus states
- Screen reader labels
- Sufficient contrast
- Proper form labels
- Alt text
- Reduced motion
- Accessible buttons
- Accessible menus
- Accessible dialogs

Animations must respect:

prefers-reduced-motion

---

# 39. TECHNICAL STACK

Preferred stack:

Frontend:

Next.js
TypeScript
React

Styling:

Tailwind CSS

Animation:

Framer Motion / Motion where appropriate

Hosting:

Vercel

Database:

PostgreSQL

Media:

Cloudinary or equivalent image CDN

Payments:

Razorpay

Admin:

Custom lightweight admin portal

Authentication:

Secure admin authentication

Email:

Transactional email provider

Use managed infrastructure where possible.

Do not unnecessarily build infrastructure from scratch.

---

# 40. ARCHITECTURE PRINCIPLE

Separate:

PUBLIC WEBSITE
CONTENT
DATABASE
MEDIA
PAYMENTS
ADMIN

Do not tightly couple them.

Conceptually:

PUBLIC WEBSITE
      ↓
API / SERVER
      ↓
DATABASE

MEDIA → CLOUDINARY

PAYMENTS → RAZORPAY

ADMIN → SAME API / DATABASE

---

# 41. SECURITY

Admin must be protected.

Never expose:

- database credentials
- Razorpay secret keys
- API secrets
- admin credentials
- private environment variables

Use environment variables.

Never put secrets in frontend code.

Validate all form submissions server-side.

Never trust client-submitted prices.

For payments, verify Razorpay payment server-side / through webhook before marking an order as paid.

---

# 42. DATABASE

Initial models should include:

User/Admin

Service

PortfolioItem

FAQ

Article

Offer

SampleKit

Lead

Consultation

Order

Payment

Media

SiteSettings

Keep schemas simple and extensible.

Do not build CRM models yet.

---

# 43. PAYMENT ARCHITECTURE

Sample Kit:

Frontend
↓
Create payment/order
↓
Razorpay
↓
Customer pays
↓
Razorpay verification/webhook
↓
Server validates
↓
Order marked PAID
↓
Admin sees order
↓
Customer receives confirmation

Never mark an order as paid based solely on frontend success.

---

# 44. FORM ARCHITECTURE

All forms must:

- Validate client-side
- Validate server-side
- Sanitize input
- Rate limit
- Include spam protection
- Store lead
- Send notification
- Return meaningful errors
- Show success state

Forms should not rely solely on email delivery.

The database is the source of truth for submitted leads.

---

# 45. SEO STRATEGY

SEO is a core requirement.

The site must have:

- Clean semantic HTML
- Crawlable content
- Unique title tags
- Unique meta descriptions
- Canonical URLs
- XML sitemap
- robots.txt
- Open Graph metadata
- Twitter/X metadata where useful
- Breadcrumbs
- Internal linking
- Descriptive URLs
- Image alt text
- Optimised images
- Structured data where appropriate

Do not keyword stuff.

Do not generate duplicate pages.

Do not create thin SEO pages.

---

# 46. SEO CONTENT PRINCIPLE

Every major page must have a clear search intent.

Example:

Wedding Stationery

Business Cards

Personalised Stationery

Wedding Sample Kit

Business Card Sample Kit

Channel Partners

etc.

Each page must be genuinely useful for that topic.

---

# 47. AEO — ANSWER ENGINE OPTIMISATION

Content should be easy for search engines and AI systems to understand.

Important pages should directly answer real questions.

Examples:

What is Famous Letter Press?

Where is Famous Letter Press located?

What services does Famous Letter Press offer?

What wedding stationery does Famous Letter Press create?

How does the ordering process work?

Can I customise my stationery?

What sample kits are available?

How can I contact Famous Letter Press?

How can I work with Famous Letter Press as a channel partner?

Answers should be direct, factual and concise before deeper explanation.

Do not write content specifically for AI at the expense of humans.

---

# 48. GEO — GENERATIVE ENGINE / LOCAL DISCOVERY

Clearly establish the entity:

Famous Letter Press

What it is:
Premium printing / stationery studio

Where:
Nagaland, India

What it provides:
Wedding stationery
Business cards
Personalised stationery

Who it serves:
Customers seeking these services and relevant partners

Maintain consistent business information throughout:

- About
- Contact
- Footer
- Structured data
- Relevant content

Do not create fake location pages.

Do not create hundreds of city pages solely for SEO.

---

# 49. STRUCTURED DATA

Use structured data only where appropriate and truthful.

Potential types:

- Organization / LocalBusiness
- WebSite
- WebPage
- BreadcrumbList
- Service
- Product for sample kits
- Article
- FAQPage where eligible and appropriate

Do not add schema simply because it exists.

Schema must accurately represent visible page content.

---

# 50. INTERNAL LINKING

Build intentional relationships between pages.

Example:

Wedding Stationery
↓
Wedding Sample Kit
↓
Work
↓
Materials
↓
Process
↓
FAQ
↓
Start a Project

Business Cards
↓
Business Card Sample Kit
↓
Work
↓
Materials
↓
FAQ
↓
Start a Project

Avoid orphan pages.

---

# 51. CONTENT RULES

Never invent:

- Prices
- Services
- Materials
- Delivery times
- Locations
- Clients
- Awards
- Testimonials
- Statistics
- Certifications
- Manufacturing capabilities
- History

If information is unavailable:

Use a clear content placeholder and flag it for human review.

The website must represent the real business.

---

# 52. EXISTING WEBSITE MIGRATION

The old website contains valuable content and existing URLs.

The founder's biggest concern is:

RANKING LOSS.

Therefore:

Do NOT blindly recreate WordPress.

Do NOT blindly delete old pages.

Do NOT change every URL without mapping.

Before launch, create an old → new URL mapping.

Possible actions:

KEEP
REWRITE
MERGE
301 REDIRECT
RETIRE

Existing SEO value must be preserved wherever practical.

---

# 53. WORDPRESS MIGRATION PRINCIPLE

Migrate:

CONTENT
BUSINESS INFORMATION
VALUABLE MEDIA
SEARCH VALUE
RELEVANT URLs

Do NOT migrate:

WORDPRESS
WOOCOMMERCE
LEGACY PLUGINS
LEGACY PHP HACKS
UNUSED PRODUCTS
UNUSED MEDIA
BROKEN ARCHITECTURE

The objective is:

MIGRATE THE VALUE,
NOT THE LEGACY SYSTEM.

---

# 54. MEDIA STRATEGY

The current site contains a large image library.

Do not migrate every image.

Classify media:

USE
ARCHIVE
DELETE

Active images should be stored in a proper media system/CDN.

Images must be:

- Responsive
- Compressed
- Correctly sized
- Lazy loaded when appropriate
- Served in modern formats when possible
- Given descriptive filenames
- Given appropriate alt text

---

# 55. ADMIN UX

Admin portal should be dramatically simpler than the public website.

Prioritize clarity over visual extravagance.

Dashboard should show:

- New enquiries
- New consultations
- Recent orders
- Draft content
- Published content

Admin navigation:

Dashboard
Content
Products
Leads
Orders
Media
Settings

Do not overdesign the admin panel.

---

# 56. PUBLIC WEBSITE UX

Public website should feel:

CALM
PREMIUM
TACTILE
EDITORIAL
CONFIDENT

Whitespace is important.

Don't fill every viewport with content.

Use deliberate pacing.

Large typography can be used, but it must remain readable and performant.

---

# 57. COMPONENT SYSTEM

Create reusable components.

Examples:

Header
Footer
Button
CTA
Section
Container
Heading
Image
MediaGallery
PortfolioCard
ServiceCard
FAQAccordion
ArticleCard
FormField
Modal
Toast
Breadcrumb
PriceBlock
SampleKitCard
Testimonial only if actual data exists

Do not duplicate page-specific UI unnecessarily.

---

# 58. DESIGN SYSTEM

Define tokens for:

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Motion
- Breakpoints
- Container widths

Do not randomly choose values on every component.

The site must feel like one coherent design system.

---

# 59. RESPONSIVE BEHAVIOUR

Do not simply shrink desktop layouts.

Components should intentionally transform.

Examples:

Desktop:
Large editorial grid

Mobile:
Horizontal scroll / stacked cards

Desktop:
Large navigation

Mobile:
Minimal menu

Desktop:
Multi-column portfolio

Mobile:
Single-column / controlled horizontal gallery

All interactions must remain usable on touch devices.

---

# 60. PERFORMANCE TARGET

Target excellent Core Web Vitals.

Prioritize:

LCP
CLS
INP

Avoid:

- render-blocking scripts
- enormous images
- unnecessary hydration
- excessive client components
- unnecessary JavaScript
- giant animation bundles

Use Server Components wherever appropriate.

Only use client-side React where interactivity actually requires it.

---

# 61. NEXT.JS PRINCIPLES

Prefer:

Server Components
Static generation where appropriate
ISR where appropriate
Server-side data fetching
Dynamic imports
Image optimization
Metadata API

Avoid turning the entire application into a client-side SPA.

---

# 62. ANIMATION IMPLEMENTATION

Use animation libraries selectively.

Animation must not prevent:

- page interaction
- accessibility
- SEO
- fast rendering
- mobile performance

Respect:

prefers-reduced-motion

Animations should generally use:

transform
opacity

rather than expensive layout-triggering properties.

---

# 63. NO AI SLOP

This is extremely important.

The website must NOT feel AI-generated.

Avoid:

- Generic marketing phrases
- Repetitive sections
- Fake luxury language
- Excessive gradients
- Excessive glass cards
- "We are passionate about..."
- Empty buzzwords
- Repeated CTA sections
- Generic stock photography
- Fake testimonials
- Fake statistics

Every section should have a reason to exist.

---

# 64. CONTENT TONE

Tone:

Confident
Warm
Elegant
Human
Specific
Minimal

Avoid:

Overly corporate language
Overly poetic AI writing
Aggressive sales language
Excessive adjectives

The physical craftsmanship should communicate luxury more than exaggerated copy.

---

# 65. DEVELOPMENT WORKFLOW

Build in this order:

PHASE 1
Project foundation

PHASE 2
Design system

PHASE 3
Header / navigation / footer

PHASE 4
Homepage

PHASE 5
Core service pages

PHASE 6
Wedding system

PHASE 7
Sample kits + Razorpay

PHASE 8
Portfolio

PHASE 9
About / Process / Materials

PHASE 10
FAQ / Journal

PHASE 11
Forms

PHASE 12
Admin portal

PHASE 13
SEO / GEO / AEO

PHASE 14
Performance / accessibility

PHASE 15
Migration

PHASE 16
Production launch

---

# 66. IMPORTANT DEVELOPMENT RULE

Do not build the entire website as one giant generated response.

Work feature-by-feature.

After each major feature:

1. Run the application
2. Inspect visually
3. Test functionality
4. Check console
5. Check responsive behaviour
6. Fix problems
7. Commit changes

Never assume generated code works.

---

# 67. ANTIGRAVITY OPERATING RULES

Before implementing anything:

Inspect the existing project structure.

Do not overwrite working code blindly.

Do not install unnecessary dependencies.

Do not create duplicate components.

Do not invent content.

Do not create placeholder lorem ipsum in production components.

Keep code modular.

Keep server and client responsibilities clear.

Use environment variables.

Document important architectural decisions.

---

# 68. SEVEN-DAY MVP PRIORITY

The initial production target is approximately one week.

Therefore prioritize:

P0 — Must work

- Homepage
- Core services
- Wedding pages
- Business Cards
- Personalised Stationery
- Sample Kits
- Razorpay
- Early Bride
- Enquiry form
- Portfolio
- About
- Contact
- Admin content management
- SEO fundamentals
- Mobile responsiveness
- Performance

P1 — Important

- Process
- Materials
- FAQ
- Channel Partners
- Journal
- Advanced animations

P2 — Later

- Advanced analytics
- CRM
- Customer accounts
- Production workflow
- Advanced order management
- Advanced personalization

Do NOT let P2 features delay launch.

---

# 69. FINAL QUALITY BAR

Before considering the website complete, ask:

Does this look like a premium stationery studio?

Does it feel handcrafted rather than generated?

Does it work beautifully on a phone?

Does it load quickly?

Can the founder update content without a developer?

Can a visitor understand FLP within seconds?

Can a visitor find the right service?

Can a visitor see real work?

Can a visitor enquire easily?

Can a visitor buy a sample kit?

Can Google understand every important page?

Can AI systems understand what Famous Letter Press is, where it is, what it offers and who it serves?

Can we migrate the existing site's valuable URLs without unnecessarily losing search value?

If any answer is NO, the website is not finished.

---

# 70. NON-NEGOTIABLES

1. Mobile-first.
2. Premium minimal visual design.
3. Smooth but restrained animation.
4. Performance is more important than decoration.
5. No WooCommerce.
6. No legacy WordPress architecture.
7. Razorpay remains for sample kits.
8. Wedding Sample Kit remains.
9. Business Card Sample Kit remains.
10. Early Bride remains.
11. Wedding Stationery gets its own page.
12. Business Cards gets its own page.
13. Personalised Stationery gets its own page.
14. Selected portfolio work only.
15. No formal case studies.
16. Channel Partners gets its own page.
17. People getting married should have a dedicated wedding-focused experience.
18. Admin portal is required.
19. CRM is NOT part of V1.
20. No invented business information.
21. SEO/GEO/AEO are architectural requirements, not an afterthought.
22. Existing SEO value must be protected during migration.
23. Do not blindly migrate old WordPress content.
24. Do not sacrifice performance for animation.
25. Do not create generic AI-looking design or copy.

---

# 71. SOURCE OF TRUTH

When business information conflicts with assumptions made by the developer or AI:

THE FOUNDER'S CONFIRMED REQUIREMENTS TAKE PRIORITY.

When visual design conflicts with usability:

USABILITY TAKES PRIORITY.

When animation conflicts with performance:

PERFORMANCE TAKES PRIORITY.

When SEO conflicts with user experience:

USEFUL HUMAN CONTENT TAKES PRIORITY.

When legacy WordPress architecture conflicts with the new architecture:

THE NEW ARCHITECTURE TAKES PRIORITY, WHILE VALUABLE CONTENT AND SEARCH VALUE ARE PRESERVED.

---

# END OF SPECIFICATION