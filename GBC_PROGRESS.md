# Growth Bureau Collective: Project Progress

Attach this file and the master project prompt when you start each new development chat.

## Status

- **Current phase:** Phase 1 is complete. Phase 2 is next.
- **Last updated:** 14 Nov 2026
- **Branch:** `claude/fervent-knuth-czs9wq`

## Decisions made

1. **Stack:** the preferred stack from the master prompt.
   - Next.js 16.4 (App Router, Cache Components, Partial Prefetching), React 19.3, TypeScript, Tailwind CSS 4.3, Framer Motion, Lucide.
   - Supabase (Postgres, Auth, Storage, RLS), Stripe, Resend, the Anthropic API, Recharts and Three.js are installed but not wired up yet.
   - Deployment target: Vercel.
   - Next.js 16 has breaking changes. Read `node_modules/next/dist/docs/` before changing framework code (see `AGENTS.md`).
   - With Cache Components on, `dynamicParams` isn't available. For unknown slugs, call `notFound()` in the page.
2. **Environment:** package installs work. In cloud sandboxes, run tests with `PW_CHROMIUM_PATH=/opt/pw-browsers/chromium`.
3. **Logo:** supplied. The originals are in `brand-source/`. Transparent WebP versions are in `public/brand/`, all used through `src/components/brand/GbcEmblem.tsx`:
   - `GbcEmblem`: the geometric monogram, the primary logo. Used in the nav, the footer, the hero and the Growth Hub section.
   - `GbcSerifMark`: the serif GBC from the lockup. Used as a faint watermark in the hero, the portfolio section and the consultation CTA.
   - `GbcLockup`: the full lockup. Not placed yet.
   - The favicon, Apple touch icon and social-share image are generated from these, in `src/app/`.
4. **Content rules:** no invented testimonials, awards, history, results, legal claims or compliance claims.
   - Portfolio and testimonials live in `src/content/showcase.ts`, and both are empty.
   - With no portfolio items, the homepage shows an honest "case studies in preparation" panel with a consultation link.
   - With no testimonials, the testimonials section is hidden entirely.
   - Process steps and "Why GBC" points describe how GBC works; they make no factual claims.
5. **Accessible gold:** `#D4A37A` on cream only reaches about 2:1 contrast. Gold text on light backgrounds uses the `gold-deep` token (`#8A5F36`).
6. **Content files:** all copy lives in `src/content/` (`site.ts`, `home.ts`, `services.ts`, `showcase.ts`). In Phase 9 it moves to the database so admins can edit it.
7. **Planned routes:** pages not built yet show a branded "coming soon" page.
   - Single-segment pages are listed in `src/content/planned-pages.ts` and served by `src/app/[slug]`.
   - Service pages use `src/app/services/[slug]`.
   - When you build a real page, delete its entry from `planned-pages.ts`. A real folder such as `src/app/about/` takes priority anyway.
8. **Navigation:**
   - Desktop (1280px and up) shows About, Services, Packages, Portfolio, Academy, Insights and Contact, plus "Log in" and a gold **Growth Hub** button.
   - Below 1280px, a menu holds everything. Growth Hub is first, then Book a consultation, then Log in.
   - Show/hide classes go on a wrapper element. The `inline-flex` in the button's own classes overrides `hidden` (a bug found and fixed in Phase 1).
9. **Skill:** the ui-ux-pro-max design skill is installed at `.claude/skills/ui-ux-pro-max/`.

## Phase 1: completed

- **Design tokens and fonts:** brand colours, `gold-deep`, `smoke` and `stone` in `src/app/globals.css`. Cormorant Garamond for display and Inter for body text, via `next/font`.
- **Components** (`src/components/`):
  - `ui/`: Button/ButtonLink, Card, Input/Textarea, Modal (native `<dialog>`), and Container/Section/Eyebrow/SectionHeading.
  - `layout/`: Nav, Footer, ComingSoon.
  - `motion/`: Reveal, a scroll-triggered reveal that turns off under reduced motion.
- **Homepage, all 11 sections from the brief:** Hero, Philosophy (with mission and vision), Our approach, Featured services, Why choose GBC, Strategic process, Portfolio showcase, Growth Hub introduction, Testimonials (hidden until real ones exist), Consultation CTA and Footer.
- **Hero copy and CTAs** match the brief exactly. "Discover Your Growth Potential" goes to `/book`, and "Explore Our Services" goes to `/services`.
- **Gold particles:** turn off under reduced motion, and pause when off-screen or the tab is hidden.
- **Other pages:** a branded 404, and "coming soon" pages for every route in the brief.
- **Project files:** `.env.example`, README, and this file.

### Phase 1 test results (Playwright, desktop 1440×900 and Pixel 7)

21 passed and 1 skipped. The skipped test checks the mobile menu, so it only runs on the phone size.

Covered:
- no console errors
- no sideways scrolling, also checked at 375px
- skip link first in tab order
- mobile menu opens and closes with Escape
- no particles under reduced motion
- all 9 section headings present, in the brief's order
- hero copy and CTA links
- five service cards, which open their pages
- no testimonials section while there is no data
- Growth Hub button reachable on desktop and mobile
- header stays on one line at 375px

Issues found and fixed:
- nav links to unbuilt pages caused 404s
- buttons wrapped onto two lines
- an empty gap in the services grid
- crowded header on phones, caused by the hide-class bug

## Next exact task (Phase 2: public pages and navigation)

Build these real pages, deleting each one's entry from `planned-pages.ts` as you go:

1. `/about`: story, mission, vision, values, philosophy, approach to growth, and why GBC is different. Mission and vision text is in `src/content/home.ts`. The **story** needs the owner's input. Use a clearly marked placeholder; don't invent history.
2. `/services`, plus a full `/services/[slug]` page per service: replace the ComingSoon in `src/app/services/[slug]/page.tsx`.
3. `/packages`: GBC Essentials, Elevate and Elite, with deliverables, monthly content allowances, a comparison table and add-ons. Put the data in `src/content/packages.ts` so admins can edit it in Phase 9. **Prices aren't in the brief:** ask the owner, or show "Price on request".
4. `/portfolio`: grid plus detail pages, driven by `showcase.ts`, with an empty state.
5. `/growth-hub`: Growth Hub introduction, the Free/Plus/Elite comparison, and features.
6. `/academy`: Learning Academy introduction, with the five course categories from the brief.
7. `/insights`: blog index plus an article template, driven by a content file, with an empty state.
8. `/contact`: contact form with validation. The form can store submissions once Phase 3 adds the database; until then, show a clear "not yet connected" state rather than a fake success message.
9. `/book`: consultation form UI with all the brief's fields and validation. Same rule as contact: never claim it was submitted without backend confirmation.
10. `/privacy` and `/terms`: structured pages with clearly marked placeholders for reviewed legal text. No invented compliance claims.
11. Leave `/login` and `/register` as "coming soon"; they arrive in Phase 3.
12. Add page metadata (title, description, canonical URL) for every page.
13. Extend the Playwright tests: every nav link reaches a real page, and the forms validate. Run `npm test` and record the results here.

**Questions to ask the owner during Phase 2:** package prices; contact details (email, phone, location, social media accounts); the company story for the About page.

## Phase checklist

- [x] 1. Architecture, branding, design system, homepage
- [ ] 2. Public pages and navigation
- [ ] 3. Auth, database, permissions (Supabase schema and RLS)
- [ ] 4. Growth Hub dashboard and Growth Planner
- [ ] 5. Learning Academy and Resource Library
- [ ] 6. AI Growth Assistant and Website Concierge
- [ ] 7. Community and Client Workspace
- [ ] 8. Memberships and Stripe
- [ ] 9. Admin Dashboard and booking
- [ ] 10. SEO, security, performance, testing
- [ ] 11. Visual polish (including the 3D Three.js emblem) and deployment prep

## Credentials needed (when each phase arrives)

| Phase | Credentials |
|---|---|
| Phase 3 | Supabase project URL, anon key and service-role key |
| Phase 6 | Anthropic API key |
| Phase 8 | Stripe secret key, publishable key and webhook secret, plus price IDs for Plus and Elite (monthly and annual) |
| Phase 9 | Resend API key and a verified sending domain |
| Phase 11 | Vercel account and domain name |
