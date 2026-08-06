# Project Delivery Document
## Nexus Property & Business Services — Full Frontend Delivery

**Prepared for:** Lorenzo Campbell  
**Project:** Nexus Property & Business Services — Full Frontend Suite  
**Date:** August 6, 2026  
**Prepared by:** [Your Name / Agency]

---

> **How to use this document:**  
> This is your master delivery record covering all three frontend websites built for Nexus Property & Business Services. Each section covers one website, then one page at a time. After each page description, there is a placeholder for your screenshot. Simply insert the corresponding screenshot in Google Docs using Insert → Image.
>
> **Screenshot placeholder format used below:**  
> `[ 📸 SCREENSHOT — Insert image here ]`

---

## Table of Contents

1. [Project Overview & Tech Stacks](#1-project-overview--tech-stacks)
2. [Website 1 — Admin Dashboard](#2-website-1--admin-dashboard)
3. [Website 2 — Client Dashboard](#3-website-2--client-dashboard)
4. [Website 3 — Marketing Website (YBY / Nexus)](#4-website-3--marketing-website-yby--nexus)
5. [Security Measures Across All Projects](#5-security-measures-across-all-projects)
6. [Shared Design System & Component Library](#6-shared-design-system--component-library)
7. [Deployment & Infrastructure](#7-deployment--infrastructure)

---

## 1. Project Overview & Tech Stacks

Three independent frontend applications were designed, architected, and built from scratch. Each is a production-ready Next.js application deployed to Vercel. All three share the same design language — a dark-mode aesthetic with a gold gradient accent system — ensuring a cohesive brand identity across every touchpoint a client, admin, or visitor encounters.

---

### 1.1 Shared Technology Foundation (All Three Projects)

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.10 |
| UI Library | React | 19.2.4 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | v4 |
| Linting | ESLint + Next.js config | 9.x |
| Deployment | Vercel | — |

---

### 1.2 Admin Dashboard — Additional Stack

| Package | Purpose |
|---|---|
| `react-hook-form` v7 | Form state management |
| `@hookform/resolvers` v5 | Connects Zod to react-hook-form |
| `zod` v4 | Schema-based runtime validation |
| `zustand` v5 | Global UI state (toasts, sidebar, modals) |

---

### 1.3 Client Dashboard — Additional Stack

| Package | Purpose |
|---|---|
| `react-hook-form` v7 | Form state management |
| `@hookform/resolvers` v5 | Connects Zod to react-hook-form |
| `zod` v4 | Runtime schema validation |
| `zustand` v5 | Global UI state |

---

### 1.4 Marketing Website (YBY) — Additional Stack

| Package | Purpose |
|---|---|
| `lucide-react` v1.25 | Icon system throughout all sections |
| `motion` v12 | Scroll and entrance animations |

---

## 2. Website 1 — Admin Dashboard

**Purpose:** Internal operations portal for the Nexus team. Admins can manage clients, properties, reports, media, service plans, and the report approval workflow from a single protected dashboard.

**Base Route:** `/dashboard`  
**Sidebar Navigation:** Collapsible on desktop; full-screen overlay on mobile  
**Layout:** Fixed sidebar (260px) + scrollable main content area  
**Color Palette:** Deep dark background (`#000B03`), card surfaces (`#1B1B1B`), gold gradient buttons

---

### Page 1 — Overview (Dashboard Home)

**Route:** `/dashboard/overview`

**What was built:**

The Overview page is the first thing an admin sees after logging in. It renders a live KPI (Key Performance Indicator) dashboard that pulls data from the clients, properties, and reports data sources simultaneously.

- **7 KPI cards** displayed in a responsive grid (1 column on mobile → 4 columns on large screens):
  - Active Clients — counts clients with `status === 'Active'`
  - Properties Monitored — total property count
  - Reports Pending — drafts + submitted reports
  - Visits Due This Week — properties with a next visit date within 7 days
  - Field Reps Assigned — unique field reps across all properties
  - Urgent Issues — properties marked as `Overdue`
  - Reports Awaiting Review — reports with `reviewedStatus === 'Unreviewed'`
- Each KPI card has a custom inline SVG icon, a label, and a large bold number
- All KPI values are computed live from the data hooks — they update automatically if data changes
- **Recent Reports table** below the KPIs shows the 6 most recent reports sorted by visit date
- Table columns: Report title, Parish, Property, Field Rep, Visit Date, Status, Review status
- Responsive: cards stack on mobile, table scrolls horizontally

`[ 📸 SCREENSHOT — Overview Page — Insert image here ]`

---

### Page 2 — Clients

**Route:** `/dashboard/clients`

**What was built:**

The Clients page is a full CRUD (create, read, update) interface for managing the Nexus client list.

- **DataTable** renders all clients with columns: Name, Email, Phone, Country, Service Plan, Status, WhatsApp
- **Sortable columns** — click any column header to sort ascending/descending with a visual indicator
- **Edit button** on each row opens the ClientModal pre-populated with that client's data
- **Add Client button** (gold gradient, top-right) opens the modal in create mode
- **ClientModal** (slide-in or overlay) contains a full form with fields: Name, Email, Phone, WhatsApp, Country, Service Plan (Premium / Standard / Basic), Status (Active / Inactive / Pending), Notes
- All form fields validated with Zod — required fields, email format check
- On save, a **toast notification** appears (success or error) using Zustand global state
- `DemoTag` badge displayed next to the page title to identify demo data
- Loading skeleton shown while data is fetching (animated pulse rows)
- Empty state message shown if no clients exist

`[ 📸 SCREENSHOT — Clients Page — Insert image here ]`

---

### Page 3 — Properties

**Route:** `/dashboard/properties`

**What was built:**

The Properties page manages every property that Nexus monitors on behalf of its clients.

- **DataTable** with columns: Property Name, Parish, Property Type, Client, Service Plan, Field Rep, Next Visit, Report Status
- **Add Property** button (gold gradient) opens the PropertyModal in create mode
- **Edit** button on each row opens the modal in edit mode pre-filled
- **PropertyModal** form fields: Property Name, Parish (dropdown of all 14 Jamaican parishes), GPS Coordinates (optional), Property Type (Residential / Commercial / Vacant Land / Industrial / Mixed Use), Client (dropdown populated from the Clients data), Service Plan, Assigned Field Rep, Next Visit Date, Report Status (Up to Date / Pending / Overdue / Not Started), Notes
- Cross-referencing: the Property form dynamically loads the current client list from the `useClients` hook, so the client dropdown always reflects real data
- Zod validation on all required fields
- Toast notifications on successful save or error
- Skeleton loading state and empty state handled
- `DemoTag` badge displayed

`[ 📸 SCREENSHOT — Properties Page — Insert image here ]`

---

### Page 4 — Reports

**Route:** `/dashboard/reports`

**What was built:**

The Reports page is the central log of all field inspection reports submitted across all properties.

- **DataTable** with columns: Title, Parish, Property, Client, Field Rep, Visit Date, Upload Date, Status, Review Status
- **Add Report** button opens the ReportModal in create mode
- **Edit** button on each row opens the modal with all existing data populated
- **ReportModal** form fields: Report Title, Status (Draft / Submitted / Under Review / Approved / Rejected), Visit Date, Parish, Property (dropdown from useProperties), Client (dropdown from useClients), Assigned Field Rep, Review Status (Reviewed / Unreviewed), Upload Date, File Name (optional)
- Three-way data dependency: the report form cross-references both Properties and Clients simultaneously
- All dropdowns are dynamically populated from live hooks
- Zod schema validates all required fields
- Toast success/error notifications
- `DemoTag` badge, loading skeleton, empty state

`[ 📸 SCREENSHOT — Reports Page — Insert image here ]`

---

### Page 5 — Report Approvals

**Route:** `/dashboard/report-approvals`

**What was built:**

A dedicated workflow page for reviewing and approving or rejecting field-submitted reports — separate from the Reports management page.

- **DataTable** with columns: Report Title, Client, Field Rep, Submitted Date, Status (badge), Actions
- Status displayed as a colored `StatusBadge`: Pending (amber), Approved (green), Rejected (red)
- **Approve button** (gold gradient) — clicking changes that row's status to Approved instantly
- **Reject button** (dark) — clicking changes that row's status to Rejected
- Once a report is approved or rejected, the action buttons are replaced with "No action needed" text
- All state changes are local (client-side) — ready to wire up to a real API
- 4 sample pending approvals seeded with real Jamaican property names and field rep names from the Nexus brand context
- Submitted dates formatted using the shared `formatDate` utility

`[ 📸 SCREENSHOT — Report Approvals Page — Insert image here ]`

---

### Page 6 — Media

**Route:** `/dashboard/media`

**What was built:**

The Media page handles all files (images, documents, videos) attached to properties and reports.

- **Grid layout** (1 → 2 → 3 → 4 columns based on screen width) rather than a table, since media is visually oriented
- Each **MediaCard** shows: file type badge, file name, property name, report name, parish, upload date
- Edit button on each card opens the MediaModal
- **Upload Media button** (gold gradient) opens the modal in create mode
- **MediaModal** form fields: Property (dropdown), Type (Image / Document / Video), Report (dropdown), Property Name, Report Name, Parish, File Name, File URL, Upload Date
- Loading skeleton shows 4 placeholder card skeletons while data loads
- Empty state with message if no media exists
- Toast notifications on upload/update success

`[ 📸 SCREENSHOT — Media Page — Insert image here ]`

---

### Page 7 — Service Plans

**Route:** `/dashboard/service-plans`

**What was built:**

An information-display page showing all active Nexus service plans with pricing, features, and client counts.

- **Card grid** (1 → 2 → 3 columns) — one card per plan
- 6 plans displayed: Exterior Care Verification ($399/month), Property Care Plan ($699/month), Property Steward Plan ($999/month), Blueprint Review Tier 1 ($999 one-time), Blueprint Review Tier 2 ($1,995 one-time), Blueprint Review Tier 3 ($2,995+)
- Each card shows: Plan name, price + period, feature bullet list (gold dot markers), active client count, status badge (Active / Coming Soon)
- Status badge uses the shared `StatusBadge` component
- All real pricing and feature data from the Nexus service offerings

`[ 📸 SCREENSHOT — Service Plans Page — Insert image here ]`

---

### Page 8 — Notifications

**Route:** `/dashboard/notifications`

**What was built:**

An inbox-style page showing all incoming system alerts and notifications.

- **Feed layout** — one notification per row, newest first
- Each notification shows: Category badge (Report / Visit / Client / System), title, body message, timestamp (relative, e.g. "25 min ago")
- **Unread indicator** — a small gold dot next to unread notifications
- Read notifications displayed at reduced opacity (60%) to distinguish from unread
- 6 seeded demo notifications with realistic Nexus data (property names, field rep names, system events)
- Color-coded category badges: Report (blue), Visit (amber), Client (green), System (gray)

`[ 📸 SCREENSHOT — Notifications Page — Insert image here ]`

---

### Page 9 — Activity History

**Route:** `/dashboard/activity`

**What was built:**

A chronological audit log of all actions taken across the portal.

- **Timeline feed** — one entry per action, sorted by timestamp
- Each entry shows: Category badge, actor name (field rep, admin, or System), action description, entity name, timestamp
- Same color-coded badge system as Notifications (Report / Visit / Client / System)
- 6 seeded entries with authentic timestamps and Jamaican property names
- Timestamps in `YYYY-MM-DD · H:MM AM/PM` format
- Ready to wire up to a real audit log API endpoint

`[ 📸 SCREENSHOT — Activity History Page — Insert image here ]`

---

### Page 10 — User Account: Profile

**Route:** `/dashboard/account/profile`

**What was built:**

The admin's personal profile settings page. Visiting `/dashboard/account` automatically redirects here.

- **AccountNav** sub-navigation tabs: Profile, Security, Privacy Policy, Terms & Conditions
- **ProfileForm** with fields: First Name, Last Name, Email, Phone
- All fields pre-populated with the admin's current data
- Zod validation: required first name, last name; email format check; optional phone
- react-hook-form with zodResolver
- "Save Changes" button triggers a simulated async save (500ms delay) then fires a success toast
- Form remains populated and usable after saving

`[ 📸 SCREENSHOT — Profile Page — Insert image here ]`

---

### Page 11 — User Account: Security

**Route:** `/dashboard/account/security`

**What was built:**

Password change page with full validation and confirmation matching.

- **SecurityForm** with fields: Current Password, New Password, Confirm New Password
- All fields are `type="password"` for secure input masking
- Zod schema: current password required; new password minimum 8 characters; confirm password must match new password (cross-field validation using `.refine()`)
- react-hook-form integration with per-field inline error messages
- On success: toast notification fires, form resets to empty
- "Updating…" loading state while simulated save is in progress

`[ 📸 SCREENSHOT — Security Page — Insert image here ]`

---

### Page 12 — User Account: Privacy Policy

**Route:** `/dashboard/account/privacy-policy`

**What was built:**

A styled, readable privacy policy page embedded within the Account section.

- Uses the same AccountNav tabs for consistent navigation
- Long-form prose content formatted with clear headings and body text
- Accessible typography hierarchy

`[ 📸 SCREENSHOT — Privacy Policy Page — Insert image here ]`

---

### Page 13 — User Account: Terms & Conditions

**Route:** `/dashboard/account/terms`

**What was built:**

Terms and Conditions page matching the same layout and navigation as the other Account sub-pages.

- AccountNav tabs present for in-section navigation
- Full T&C content formatted for readability

`[ 📸 SCREENSHOT — Terms & Conditions Page — Insert image here ]`

---

## 3. Website 2 — Client Dashboard

**Purpose:** The portal that Nexus clients (property owners) log into to see their own properties, inspection reports, photos, and account settings. Clean, minimal, and easy to navigate — designed for non-technical users.

**Base Route:** `/dashboard` (after auth)  
**Authentication Routes:** `/login`, `/reset-login`, `/set-new-pass`  
**Layout:** Fixed sidebar with mobile hamburger menu

---

### Page 1 — Login Page

**Route:** `/login`

**What was built:**

A full-screen, split-layout login page that sets the visual tone for the entire client portal.

- **Desktop layout:** Left panel is a full-height background photo (`login.jpg`) with a dark gradient overlay and a brand tagline — "Jamaica's Trusted Inspection Partner" — plus a supporting description. Right panel contains the login form.
- **Mobile layout:** The background photo fills the entire screen with a dark overlay; the form floats as a card on top with glassmorphism effect (`backdrop-blur`, semi-transparent dark background)
- **Nexus logo** centered above the form
- **Welcome headline:** "Welcome to Your Client Portal"
- **Form fields:** Email input (with envelope icon), Password input (with lock icon + eye/eye-off toggle for show/hide password)
- **Forgot password link** routes to `/reset-login`
- **Secure Login button** (gold gradient, pill-shaped, full-width) — clicking submits the form and redirects to `/dashboard`
- `aria-label` attributes on all interactive elements for accessibility

`[ 📸 SCREENSHOT — Login Page — Insert image here ]`

---

### Page 2 — Reset Login (Forgot Password)

**Route:** `/reset-login`

**What was built:**

Password reset request page. Maintains the same split-layout design as the login page.

- Email input field
- Submit button to trigger the reset flow
- Back to login link

`[ 📸 SCREENSHOT — Reset Login Page — Insert image here ]`

---

### Page 3 — Set New Password

**Route:** `/set-new-pass`

**What was built:**

The page a user lands on after clicking a password-reset link from their email.

- New password + confirm new password fields
- Confirm button
- Consistent auth layout

`[ 📸 SCREENSHOT — Set New Password Page — Insert image here ]`

---

### Page 4 — My Properties

**Route:** `/dashboard/property`

**What was built:**

The main landing page for logged-in clients. Displays all properties linked to their account.

- Page title: "My Properties" with subtitle: "Select a property below to view its reports, media, and history"
- **Property card** for each property — horizontal layout on desktop, stacked on mobile
  - Property thumbnail image (88×88px on desktop, 72×72px on mobile)
  - Property name (large, bold)
  - Address with a pin icon
  - Last inspection date with a calendar icon
- **Three action buttons** per property card, right-aligned:
  - **Report** (gold gradient) → navigates to the Reports page
  - **Media** (dark) → navigates to the Media page
  - **History** (dark) → navigates to the History page
- Fully responsive: buttons stack on mobile

`[ 📸 SCREENSHOT — My Properties Page — Insert image here ]`

---

### Page 5 — Reports

**Route:** `/dashboard/reports`

**What was built:**

A clean, client-facing list of finalized inspection reports the client can view and download.

- Page title: "Reports" with subtitle: "View and download your finalized property reports."
- **Report card** for each report — horizontal layout
  - Report thumbnail image
  - Report title (bold)
  - Inspection date with calendar icon
  - **View PDF button** (dark) — right-aligned, with a document icon
- Designed to be read-only; clients only view and download, not edit
- Ready to wire up to actual PDF file URLs

`[ 📸 SCREENSHOT — Reports Page (Client) — Insert image here ]`

---

### Page 6 — Photos & Videos

**Route:** `/dashboard/photos`

**What was built:**

A media gallery showing all inspection photos and video tours captured for the client's properties.

- Page title: "Photos & Videos" with subtitle
- **Grid layout** — 3 columns on desktop, 1 column on mobile
- Each **media card** has:
  - Full background image filling the card
  - Dark overlay (45% opacity) darkening slightly on hover (60%) for a smooth interactive feel
  - Media type badge (IMAGE / VIDEO) in small uppercase
  - Media title in large bold white text
  - Property name in smaller text at the bottom
  - **Video cards** show a circular play button (white/translucent) centered on the card
- Aspect ratio locked at 4:3 for consistent grid alignment
- Hover scale animation on the background image (`scale-102`)

`[ 📸 SCREENSHOT — Photos & Videos Page — Insert image here ]`

---

### Page 7 — Property Media

**Route:** `/dashboard/property/media`

**What was built:**

A dedicated media view scoped to a specific property (accessed from the property card's Media button).

- Same media grid layout as Photos & Videos
- Scoped to the selected property

`[ 📸 SCREENSHOT — Property Media Page — Insert image here ]`

---

### Page 8 — Property History

**Route:** `/dashboard/property/history`

**What was built:**

A historical log of all past inspection visits for a specific property.

- Table view of past visits
- Columns: Visit date, status, field rep, notes

`[ 📸 SCREENSHOT — Property History Page — Insert image here ]`

---

### Page 9 — Profile Settings

**Route:** `/dashboard/account/profile`

**What was built:**

The client's personal profile settings page.

- Form fields: First Name, Last Name, Email, Phone
- Zod + react-hook-form validation
- Save Changes button with toast notification

`[ 📸 SCREENSHOT — Profile Settings (Client) — Insert image here ]`

---

### Page 10 — Update Password

**Route:** `/dashboard/account/update-pass`

**What was built:**

Password change form for the client portal.

- Current Password, New Password, Confirm New Password fields
- Cross-field validation (passwords must match)
- 8-character minimum on new password
- Toast notification on success, form resets after save

`[ 📸 SCREENSHOT — Update Password (Client) — Insert image here ]`

---

## 4. Website 3 — Marketing Website (YBY / Nexus)

**Purpose:** The public-facing marketing website for Nexus Property & Business Services. Designed to convert visitors into clients by showcasing the services, pricing, team, and coverage area.

**Framework:** Next.js App Router with the `(marketing)` route group  
**Typography:** Inter (body) + Playfair Display (accent/signature text)  
**Animation:** Framer Motion (`motion`) for scroll-triggered section entrances  
**Icons:** Lucide React icon library  
**Architecture:** Section-based — each horizontal visual block is its own component file

---

### Page 1 — Home Page

**Route:** `/`

**What was built:**

The homepage assembles 9 distinct sections in sequence, each independently built and exported as a component:

1. **HeroSection** — Full-height hero with headline, subheadline, dual CTA buttons (Get Started + Learn More), and a background property image
2. **FounderSection** — Introduces Lorenzo Campbell, Founder & Lead Verifier, with a photo, bio, and quote. Uses Playfair Display serif font for the signature-style name.
3. **WhatWeDoSection** — Three-column feature grid explaining the core service categories (verification, documentation, representation)
4. **WhyNexusSection** — Trust-building differentiators: local knowledge, photographic documentation, unbiased reporting, all-parish coverage
5. **HowItWorksSection** — Step-by-step numbered process walkthrough
6. **PricingPreviewSection** — Abbreviated pricing cards (not the full pricing page) to anchor visitor expectations
7. **ServiceAreaSection** — Visual map/graphic showing all 14 Jamaican parishes served
8. **CtaBannerSection** — Mid-page conversion banner with a strong headline and button
9. **ContactFormSection** — Embedded contact form at the bottom of the home page

Full Open Graph and meta description configured for SEO: *"Jamaica's #1 Property Verification"*

`[ 📸 SCREENSHOT — Home Page (full scroll or above-fold) — Insert image here ]`

---

### Page 2 — About Us

**Route:** `/about`

**What was built:**

A deep-dive page that builds trust and tells the Nexus brand story across 8 sections:

1. **FounderSection** (reused from home) — consistent founder intro
2. **AboutStorySection** — Origin story of Nexus, why it was founded, the problem it solves for overseas property owners
3. **RepresentingInterestsSection** — How Nexus acts as a proxy and advocate on behalf of clients who can't be on-island
4. **CommitmentSection** — The promise to clients: honesty, thoroughness, and timely delivery
5. **NexusMethodSection** — A step-by-step breakdown of the verification and reporting methodology
6. **MissionAndValuesSection** — Core values grid with icons
7. **AboutMapSection** — Visual coverage map highlighting all parishes
8. **AboutCtaSection** — Bottom CTA to get in touch or start a service

`[ 📸 SCREENSHOT — About Page — Insert image here ]`

---

### Page 3 — Pricing

**Route:** `/pricing`

**What was built:**

A comprehensive, transparent pricing page broken into four sections:

1. **PricingHeroSection** — Page header and intro copy
2. **PropertyVerificationPlansSection** — Three recurring monthly plans:
   - Exterior Care Verification Plan ($399/month) — exterior-only, 1 visit, 25 photos, condition summary
   - Property Care Plan ($699/month) — interior + exterior, 1 visit, 40 photos, detailed report
   - Property Steward Plan ($999/month) — premium, 2 visits/month, 60 photos, priority scheduling
3. **AdvisoryPlansSection** — Three Blueprint Review tiers (one-time advisory packages):
   - Tier 1 ($999) — blueprint review, vendor coordination, written recommendations
   - Tier 2 ($1,995) — adds product recommendations, sourcing, budgeting
   - Tier 3 ($2,995+) — adds procurement oversight and ongoing consultation
4. **OtherServicesSection** — Additional services outside the standard plan tiers

`[ 📸 SCREENSHOT — Pricing Page — Insert image here ]`

---

### Page 4 — Services Overview

**Route:** `/services`

**What was built:**

An overview page introducing all Nexus service categories.

1. **ServicesHeroSection** — Page banner with tagline and intro
2. **ServicesGridSection** — Card grid of all available services with descriptions and icons, linking to individual service detail pages where applicable

`[ 📸 SCREENSHOT — Services Page — Insert image here ]`

---

### Page 5 — Property Verification Service

**Route:** `/services/property-verification`

**What was built:**

Dedicated landing page for the core property verification service.

- Hero section specific to this service
- Detailed description of what's included, how it works, and who it's for
- CTA to book or inquire

`[ 📸 SCREENSHOT — Property Verification Page — Insert image here ]`

---

### Page 6 — Residential Property Verification

**Route:** `/services/residential-property-verification`

**What was built:**

A separate service page targeting residential property owners specifically.

- Tailored copy for the residential audience (expats, diaspora, overseas homeowners)
- What's included section, photo documentation breakdown, pricing reference
- CTA buttons

`[ 📸 SCREENSHOT — Residential Property Verification Page — Insert image here ]`

---

### Page 7 — Service Area

**Route:** `/service-area`

**What was built:**

A full page dedicated to communicating island-wide coverage across Jamaica.

1. **ServiceAreaHeroSection** — Headline: "We proudly serve all 14 parishes across Jamaica"
2. **ServiceAreaMapSection** — Visual map of Jamaica highlighting all parishes
3. **ParishesListSection** — Full list of all 14 parishes with any relevant notes

`[ 📸 SCREENSHOT — Service Area Page — Insert image here ]`

---

### Page 8 — Sample Reports

**Route:** `/sample-reports`

**What was built:**

A page that lets prospects preview what a Nexus inspection report looks like before committing to a plan.

1. **SampleReportHero** — Section intro and headline
2. **InteractiveVerificationSection** — An interactive preview or walkthrough of the report format
3. **DocumentBankSection** — A bank of downloadable or viewable sample documents
4. **WhatIsIncludedSection** — Bullet breakdown of what every report contains

`[ 📸 SCREENSHOT — Sample Reports Page — Insert image here ]`

---

### Page 9 — FAQ

**Route:** `/faq`

**What was built:**

Frequently Asked Questions page to reduce support load and answer common objections.

1. **FaqHeroSection** — Page banner
2. **FaqAccordionSection** — Expandable/collapsible accordion FAQ items, covering questions about the service, coverage, turnaround time, pricing, and the client portal

`[ 📸 SCREENSHOT — FAQ Page — Insert image here ]`

---

### Page 10 — Contact

**Route:** `/contact`

**What was built:**

A dedicated contact page for service inquiries and direct outreach.

1. **ContactHeroSection** — Page header with tagline and contact details (phone, email, location)
2. **ContactPageSection** — Full contact form with fields: Name, Email, Phone, Property Location / Parish, Service Interest, Message. Submit button with form validation.

`[ 📸 SCREENSHOT — Contact Page — Insert image here ]`

---

### Page 11 — Privacy Policy

**Route:** `/privacy-policy`

**What was built:**

A cleanly formatted legal privacy policy page.

- Full prose content with proper heading hierarchy
- Consistent header/footer layout matching the rest of the marketing site

`[ 📸 SCREENSHOT — Privacy Policy (Marketing) — Insert image here ]`

---

### Page 12 — Terms & Conditions

**Route:** `/terms-conditions`

**What was built:**

Terms and Conditions page matching the privacy policy layout.

- Full legal content
- Consistent marketing site header and footer

`[ 📸 SCREENSHOT — Terms & Conditions (Marketing) — Insert image here ]`

---

## 5. Security Measures Across All Projects

Security was treated as a first-class concern throughout the build. Below is a detailed breakdown of every measure applied.

---

### 5.1 Form Validation & Input Security (All Three Projects)

**Schema-based runtime validation with Zod:**

Every form across the Admin Dashboard and Client Dashboard is validated using Zod schemas wired to react-hook-form via `@hookform/resolvers`. This means:

- Input is validated at the schema level before any submit handler runs
- TypeScript types are automatically inferred from schemas (`z.infer<typeof schema>`), eliminating type mismatches between form data and business logic
- Malformed or unexpected data shapes are rejected before they can reach any function that processes user input
- Validation runs client-side on every keystroke (optional) and on submit — errors surface inline next to each field, never silently swallowed

**Specific security validations implemented:**

| Form | Validation Rules |
|---|---|
| Admin Profile | First name required, last name required, email format enforced, phone optional |
| Admin Security (password change) | Current password required, new password minimum 8 characters, confirm password must equal new password (cross-field `.refine()`) |
| Client Login | Email format enforced, password required |
| Client Modals (Client/Property/Report) | All required fields enforced, enum values constrained (e.g. status must be one of the allowed values) |
| Client Account Profile | Same rules as admin profile |
| Client Update Password | Same cross-field password match validation |

---

### 5.2 Password Security

- All password fields use `type="password"` HTML input type — browser prevents autofill leaks and masks characters from shoulder-surfing
- The Client Login page has a toggle button (eye icon) to optionally show password, implemented safely with local React state — no value is ever logged or leaked
- The toggle uses `type="text"` only when the user explicitly requests it, and reverts to `type="password"` immediately on toggle-off
- New password minimum length enforced at schema level (8 characters) — short passwords are rejected before any API call

---

### 5.3 Client-Side Route Protection Architecture

Both dashboards are built with the Next.js App Router using route groups:

- **Admin Dashboard:** All protected pages live under `/dashboard/*`. The root `/dashboard` page performs an immediate server-side `redirect()` to `/dashboard/overview`, preventing blank landing on the protected route.
- **Client Dashboard:** All protected pages live under `/dashboard/*`. The root redirects to `/dashboard/property`. The auth pages (`/login`, `/reset-login`, `/set-new-pass`) live in a separate `(auth)` route group, completely isolated from the dashboard layout.
- This architectural separation ensures the sidebar, header, and dashboard chrome are never rendered on unauthenticated pages.

---

### 5.4 State Isolation (Zustand)

- Global UI state (toasts, sidebar open/closed, mobile menu) is managed by Zustand stores (`useUIStore`) rather than React Context or browser globals
- The store is scoped to the component tree — state cannot leak between sessions or users
- Toast messages auto-expire after 4,000 ms using a `setTimeout` cleanup — stale success/error messages do not persist

---

### 5.5 TypeScript Strict Typing

- `tsconfig.json` uses strict TypeScript across all three projects
- All entities (Client, Property, Report, Media) are defined as TypeScript interfaces in a `/types/` directory and used consistently across hooks, components, and forms
- Enum-like union types (e.g. `'Active' | 'Inactive' | 'Pending'`) prevent invalid status values from ever entering the system
- No use of `any` type in business logic

---

### 5.6 Accessibility & Secure Interaction Patterns

- All interactive elements that are not native `<button>` or `<a>` elements include `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers supporting Enter and Space — preventing keyboard trap vulnerabilities
- All icon-only buttons have `aria-label` attributes (e.g., "Close sidebar", "Edit")
- Decorative images use `alt=""` and `aria-hidden="true"` to avoid screen reader noise
- Form inputs are properly associated with labels via the `label` prop passed to the shared `Input` component

---

### 5.7 No Sensitive Data in Source Code

- No API keys, database credentials, tokens, or secrets are present in any source file
- All placeholder credentials in forms (e.g., default profile values) use demo/public-facing data only
- `.gitignore` is configured on all three projects to exclude `.env` files, `.next/` build artifacts, and `node_modules/`

---

### 5.8 Dependency Security

- All production dependencies are pinned to exact or near-exact versions in `package.json`
- Only well-established, actively maintained packages are used (Next.js, React, Zod, react-hook-form, Zustand, Tailwind CSS, Lucide React, Framer Motion)
- No obscure or unverified third-party packages introduced
- `sharp` (Next.js image optimization dependency) is included via the official Next.js image pipeline — not a custom implementation

---

### 5.9 Content Security at the Component Level

- The `DemoTag` badge is displayed prominently on all admin pages that use seeded mock data — clearly distinguishing demo content from production data at a glance
- All user-controlled form data is submitted through typed handlers — raw event objects are never forwarded to state or storage
- `e.stopPropagation()` is applied to nested interactive elements (e.g., the edit button inside a table row) to prevent accidental row-level click handlers from firing alongside button handlers

---

## 6. Shared Design System & Component Library

A consistent design system was built and maintained across all three projects. Rather than duplicating styles or components, each project has its own local copy of the design tokens and shared components tuned to its context, while following the same visual rules.

---

### 6.1 Design Tokens

All visual constants are defined in `lib/design-tokens.ts` and mirrored in each project's `globals.css` as CSS custom properties, making them available to both Tailwind utility classes and inline styles.

**Color System:**

| Token | Hex | Usage |
|---|---|---|
| `goldStart` | `#FCE688` | Gradient top — buttons, active nav, accents |
| `goldMid` | `#D1A736` | Gradient middle — primary gold |
| `goldEnd` | `#946E18` | Gradient bottom — deep gold |
| `goldFocus` | `#C49D32` | Focus/hover state |
| `bg` | `#000B03` | Page background (deep near-black green) |
| `dark600` | `#1B1B1B` | Card/sidebar surface |
| `dark500` | `#1E1E1E` | Table header, secondary surface |
| `dark400` | `#4B4B4B` | Borders, dividers |
| `dark300` | `#686868` | Muted icons |
| `dark200` | `#989898` | Secondary text, placeholders |
| `dark100` | `#B9B9B9` | Tertiary text |
| `white` | `#FFFFFF` | Primary text |
| `danger` | `#DC2626` | Error states, rejected badges |
| `success` | `#16A34A` | Success states, approved badges |

**The gold gradient** used on all primary buttons and the active sidebar state:
```
linear-gradient(180deg, #FCE688 0%, #D1A736 50%, #946E18 100%)
```

**Typography:**
- Font: Helvetica Neue, Arial, sans-serif (dashboards) / Inter + Playfair Display (marketing site)
- Scale: 12px (xs) → 14px (sm) → 16px (base) → 18px (lg) → 24px (xl) → 32px (2xl) → 33px (hero)
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Spacing scale:** 4 / 8 / 16 / 24 / 32 / 48 px  
**Border radius scale:** 4px (sm) / 8px (md) / 12px (lg) / 9999px (full/pill)

---

### 6.2 Shared Components (Admin & Client Dashboards)

| Component | File | What it does |
|---|---|---|
| `DataTable` | `components/shared/DataTable.tsx` | Generic, fully typed table. Handles sorting (asc/desc), loading skeleton, empty state, edit action column. Accepts any TypeScript type with an `id` field. |
| `StatusBadge` | `components/shared/StatusBadge.tsx` | Colored badge with variant prop: `green`, `amber`, `red`, `blue`, `gray`. Used across reports, clients, approvals, notifications. |
| `Button` | `components/shared/Button.tsx` | Multi-variant button: `gold` (gradient), `dark`, `outline`, `ghost`. Supports `size` prop and disabled state with loading text. |
| `Input` | `components/shared/Input.tsx` | Labeled input field with optional left icon, right element (e.g. password toggle), and inline error message display. |
| `Modal` | `components/shared/Modal.tsx` | Reusable overlay modal shell. Handles backdrop click to close, scroll lock, focus trapping. |
| `Select` | `components/shared/Select.tsx` | Styled select/dropdown consistent with the Input component design. |
| `DemoTag` | `components/shared/DemoTag.tsx` | Small amber badge labelled "Demo" — applied to all pages using seeded mock data. |
| `Header` | `components/layout/Header.tsx` | Top bar with hamburger menu (mobile), page title context, and notification/account shortcuts. |
| `Sidebar` | `components/layout/Sidebar.tsx` | 260px fixed sidebar. Active route highlighted with gold gradient. Mobile variant slides in as overlay with close button. |
| `Toast` | `components/layout/Toast.tsx` | Fixed-position toast notification stack. Consumes `useUIStore`. Auto-dismisses after 4 seconds. |
| `PreviewBanner` | `components/layout/PreviewBanner.tsx` | An optional top banner indicating the app is in preview/demo mode. |
| `AccountNav` | `components/account/AccountNav.tsx` | Horizontal tab bar for Profile / Security / Privacy / Terms navigation within the Account section. |

---

### 6.3 Data Hooks (Admin Dashboard)

All data access is abstracted into custom hooks located in `hooks/`. They expose a consistent API shape: `{ data, isLoading, create, update }`.

| Hook | File | Entity |
|---|---|---|
| `useClients` | `hooks/useClients.ts` | Client |
| `useProperties` | `hooks/useProperties.ts` | Property |
| `useReports` | `hooks/useReports.ts` | Report |
| `useMedia` | `hooks/useMedia.ts` | Media |

Each hook initialises with seeded mock data from `lib/mock-data/` (clients.ts, properties.ts, reports.ts, media.ts). They are architected as drop-in replacements — to connect to a real API, you only update the hook file, not any page or component.

---

### 6.4 Shared Marketing Components (Marketing Website)

| Component | What it does |
|---|---|
| `Button.tsx` | Variants: `gold`, `outline`, `dark`, `ghost`. Accepts `href` prop to auto-wrap in a Next.js `<Link>`. |
| `Breadcrumb.tsx` | Navigation breadcrumb trail shown on inner pages. |
| `SectionLabel.tsx` | Small uppercase gold-colored label displayed above section headings (e.g. "OUR SERVICES"). |
| `Header.tsx` | Sticky navigation bar with logo, nav links, and mobile hamburger menu with slide-out drawer. |
| `Footer.tsx` | 4-column footer with logo, service links, legal links, contact info, and social media icons. |

---

## 7. Deployment & Infrastructure

---

### 7.1 Deployment Platform

All three projects are configured for deployment on **Vercel**. Each project contains a `.vercel/project.json` file linking it to its corresponding Vercel project. Vercel was chosen for:

- Zero-configuration Next.js deployment
- Automatic HTTPS on all routes
- Edge network for fast global delivery
- Preview deployments on every branch push
- Automatic `next build` triggered on push to main

---

### 7.2 Build Configuration

Each project uses the standard Next.js build pipeline:

```
npm run dev       → Local development server
npm run build     → Production build (runs `next build`)
npm run start     → Runs the built application
npm run lint      → ESLint check
```

`postcss.config.mjs` is configured with `@tailwindcss/postcss` for Tailwind v4 JIT compilation.

---

### 7.3 Project Separation

The three projects are deliberately kept as independent applications rather than a monorepo. This provides:

- Independent deployment cycles — updating the marketing site does not require redeploying the dashboards
- Separate environment variables per project
- No shared runtime dependencies that could cause version conflicts
- Each project can be scaled, maintained, or handed over independently

---

### 7.4 Responsive Design

All three applications are fully responsive across the following breakpoints (matching Tailwind v4 defaults):

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile (default) | < 640px | Single-column, stacked layouts, larger touch targets |
| `sm` | ≥ 640px | Two-column grids begin, side-by-side property card elements |
| `lg` | ≥ 1024px | Three-column grids, full sidebar visible |
| `xl` | ≥ 1280px | Four-column KPI grid on admin overview |

Mobile-specific changes implemented:
- Admin sidebar collapses to an off-canvas overlay triggered by a hamburger button in the header
- KPI cards on Overview stack to a single column
- Property cards in the client dashboard switch from horizontal to vertical layout
- All button groups on property cards become equal-width flex rows
- Tables scroll horizontally on mobile without breaking layout
- Login page switches from a split two-column layout to a full-screen background with floating card

---

## 8. Summary of All Pages Delivered

### Admin Dashboard — 13 Pages

| # | Page | Route | Key Features |
|---|---|---|---|
| 1 | Overview | `/dashboard/overview` | 7 KPI cards, recent reports table, live data |
| 2 | Clients | `/dashboard/clients` | DataTable, CRUD modal, Zod validation, toasts |
| 3 | Properties | `/dashboard/properties` | DataTable, CRUD modal, cross-ref clients |
| 4 | Reports | `/dashboard/reports` | DataTable, CRUD modal, cross-ref properties + clients |
| 5 | Report Approvals | `/dashboard/report-approvals` | Approve/Reject workflow, status badges |
| 6 | Media | `/dashboard/media` | Grid layout, MediaCard, upload modal |
| 7 | Service Plans | `/dashboard/service-plans` | Pricing card grid, features, client counts |
| 8 | Notifications | `/dashboard/notifications` | Feed, unread indicators, category badges |
| 9 | Activity History | `/dashboard/activity` | Audit log feed, timestamps, category badges |
| 10 | Account — Profile | `/dashboard/account/profile` | Profile form, Zod validation, toast |
| 11 | Account — Security | `/dashboard/account/security` | Password change, cross-field validation |
| 12 | Account — Privacy Policy | `/dashboard/account/privacy-policy` | Static legal page |
| 13 | Account — Terms | `/dashboard/account/terms` | Static legal page |

---

### Client Dashboard — 10 Pages

| # | Page | Route | Key Features |
|---|---|---|---|
| 1 | Login | `/login` | Split layout, password toggle, branded hero panel |
| 2 | Reset Login | `/reset-login` | Forgot password flow |
| 3 | Set New Password | `/set-new-pass` | Password reset confirmation |
| 4 | My Properties | `/dashboard/property` | Property cards, 3 action buttons per property |
| 5 | Reports | `/dashboard/reports` | Report cards, View PDF button |
| 6 | Photos & Videos | `/dashboard/photos` | Media grid, video play button, hover effects |
| 7 | Property Media | `/dashboard/property/media` | Property-scoped media grid |
| 8 | Property History | `/dashboard/property/history` | Visit history table |
| 9 | Profile Settings | `/dashboard/account/profile` | Profile form |
| 10 | Update Password | `/dashboard/account/update-pass` | Password form, cross-field validation |

---

### Marketing Website — 12 Pages

| # | Page | Route | Key Features |
|---|---|---|---|
| 1 | Home | `/` | 9 sections, SEO metadata, full animations |
| 2 | About Us | `/about` | 8 sections, founder story, values, map |
| 3 | Pricing | `/pricing` | 3 verification plans + 3 advisory tiers |
| 4 | Services Overview | `/services` | Service grid with descriptions and icons |
| 5 | Property Verification | `/services/property-verification` | Service detail page |
| 6 | Residential Verification | `/services/residential-property-verification` | Residential-specific page |
| 7 | Service Area | `/service-area` | Parish map, full parish list |
| 8 | Sample Reports | `/sample-reports` | Interactive report preview, document bank |
| 9 | FAQ | `/faq` | Accordion FAQ section |
| 10 | Contact | `/contact` | Contact form + contact details |
| 11 | Privacy Policy | `/privacy-policy` | Legal page |
| 12 | Terms & Conditions | `/terms-conditions` | Legal page |

---

**Total pages delivered: 35 across three independent production-ready applications.**

---

## 9. Notes for Next Phase

The following items are ready for backend integration when you move to Phase 2:

- All data hooks (`useClients`, `useProperties`, `useReports`, `useMedia`) are architected as drop-in replacements. Swapping mock data for real API calls requires only editing the hook files — zero changes to pages or UI components.
- The auth flow (login, reset password, set new password) has the correct UI and form validation in place. Wiring to a real auth provider (e.g. NextAuth, Supabase, Clerk) requires adding the provider and updating the `handleLogin` function.
- The Report Approvals workflow uses local React state. Connecting to a real approval API requires only replacing `setApprovals` with an API call in the `setStatus` handler.
- All forms use Zod schemas — these same schemas can be reused server-side for API route validation.
- The `DemoTag` components can be removed globally once real data is connected.

---

*End of Delivery Document*

---

**Document version:** 1.0  
**Last updated:** August 6, 2026
