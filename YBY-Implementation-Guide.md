# YBY Marketing Website Implementation Guide

This document is created for other AI agents (like OpenCode, DeepSeek, etc.) to seamlessly continue the development of the YBY marketing website where I left off due to token constraints.

## 1. Project Context & Setup
- **Directory**: `c:\Users\User\Desktop\Projects\Lorenzo\yby\`
- **Stack**: Next.js 15 (App Router), React 19, Tailwind CSS v4, TypeScript.
- **Goal**: Implement the frontend UI for the YBY marketing website, matching the provided Figma designs. No API/backend integration is needed in Phase 1.
- **Reference Files**:
  - `Context/Page-Manifest.md`: List of all required pages.
  - `Context/Section-Manifest.md`: Mapping of section IDs.
  - `Context/Design-Tokens.md`: Source of truth for styling.
  - `Figma UI/Web Ui/`: Contains the reference images for each page.

## 2. Design System & Styling
- **Global CSS**: The design tokens (colors, fonts, etc.) are defined in `yby/app/globals.css` using standard CSS variables (e.g., `--color-gold-mid`, `--color-bg`) within the `@theme inline` block for Tailwind v4 compatibility.
- **Colors**: Dark mode by default. Primary accent is a gold gradient (`.gold-text`, `.gold-bg`). Background is dark (`#0A0B09`).
- **Typography**: Inter (sans-serif) for general text, Playfair Display (serif) for specific signatures/accents. Both are loaded via `next/font/google` in `yby/app/layout.tsx`.

## 3. Architecture & Component Structure
We use a modular section-based architecture.

1.  **Shared Components** (`yby/components/shared/`):
    -   `Button.tsx`: Handles all button variants (`gold`, `outline`, `dark`, `ghost`) and sizes. Supports Next.js `<Link>` wrapping if `href` is provided.
    -   `Breadcrumb.tsx`: Standard breadcrumb navigation.
    -   `SectionLabel.tsx`: Small gold uppercase text used above section headings.

2.  **Layout Components** (`yby/components/layout/`):
    -   `Header.tsx`: Sticky navigation bar with mobile responsive menu.
    -   `Footer.tsx`: Standard 4-column footer with social links.

3.  **Page Sections** (`yby/components/sections/[page-name]/`):
    -   Every distinct horizontal slice of a design is built as a separate React component (e.g., `HeroSection`, `FounderSection`, `PricingPreviewSection`).
    -   These sections are then assembled inside the `page.tsx` of the respective route.

4.  **Routing** (`yby/app/`):
    -   All marketing pages are grouped under the `(marketing)` route group so they share `app/(marketing)/layout.tsx` (which applies the Header and Footer).
    -   The root `app/page.tsx` simply redirects to `/` (which is handled by `app/(marketing)/page.tsx`).

## 4. Work Completed So Far
The following pages and their respective section components have been **fully implemented**:
-   ✅ **Home Page** (`/`)
-   ✅ **About Us** (`/about`)
-   ✅ **Pricing** (`/pricing`)

Shared components (`Button`, `Breadcrumb`, `SectionLabel`) and Layouts (`Header`, `Footer`) are also **complete**.

## 5. Remaining Work (Where to pick up)
The following pages still need to be built based on the images in `Figma UI/Web Ui/`:

1.  **Contact** (`/contact`)
2.  **Sample Report** (`/sample-reports`)
3.  **FAQ** (`/faq`)
4.  **Privacy Policy** (`/privacy-policy`)
5.  **Terms & Conditions** (`/terms-conditions`)
6.  **Services (Overview)** (`/services`)
7.  **Service Area** (`/service-area`)
8.  **Property Verification** (`/services/property-verification`)
9.  **Residential Property Verification** (`/services/residential-property-verification`)

*(Note: "Sample report" directory in Figma is slightly misnamed as "Sample report" with a lowercase r. Adjust folder paths when referencing images).*

## 6. How to Implement a New Page
1.  **Review the Design**: Open the corresponding `.png` image from `Figma UI/Web Ui/[Page Name]/`.
2.  **Identify Sections**: Break the page down into logical horizontal sections (e.g., `ContactHeroSection`, `ContactFormSection`, `FaqSection`).
3.  **Create Section Components**: Create a new file for each section under `yby/components/sections/[page-name]/[SectionName].tsx`. Use the shared `Button` and `SectionLabel` components where applicable.
4.  **Assemble the Page**: Create the route folder (e.g., `yby/app/(marketing)/contact/page.tsx`), import the section components, and render them in order.
5.  **Use Hardcoded Assets**: Do not use the `next/image` component for standard content images unless necessary. Standard HTML `<img>` tags pointing to Unsplash placeholders (as seen in existing components) are perfectly fine for this Phase 1 UI build. The logo should use the local `/assets/logo.png`.

Good luck! You have a solid foundation to build upon.
