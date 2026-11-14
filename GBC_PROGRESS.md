# Growth Bureau Collective: Project Progress

Attach this file and the master project prompt when you start each new development chat.

## Status

- **Current phase:** Phases 1 and 2 are complete. Phase 3 is next.
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
7. **Routes and 404s:** the catch-all `[slug]` route was removed in Phase 2.
   - `/login` and `/register` are standalone "coming soon" pages (noindex) until Phase 3.
   - Unknown top-level addresses return a real 404.
   - Unknown service or article slugs show the not-found page with status 200 plus a "noindex" tag. This is how Next.js 16 handles streamed pages: the status is sent before the page knows it is missing.
   - With Cache Components, `generateStaticParams` must return at least one entry. `/insights/[slug]` returns a dummy `_` while there are no articles.
8. **Navigation:**
   - Desktop (1280px and up) shows About, Services, Packages, Portfolio, Academy, Insights and Contact, plus "Log in" and a gold **Growth Hub** button.
   - Below 1280px, a menu holds everything. Growth Hub is first, then Book a consultation, then Log in.
   - Show/hide classes go on a wrapper element. The `inline-flex` in the button's own classes overrides `hidden` (a bug found and fixed in Phase 1).
9. **Skill:** the ui-ux-pro-max design skill is installed at `.claude/skills/ui-ux-pro-max/`.
10. **Owner-supplied business details (14 Nov 2026):**
   - Agency packages: Essentials £299, Elevate £599, Elite £999. Shown as monthly; the owner hasn't explicitly confirmed "per month".
   - Growth Hub memberships, per month: Essential £9.99, Plus £19.99, Elite £39.99. The brief's "Free" tier is now "Essential". Annual prices aren't set yet.
   - Contact: email growthbureaucollective@gmail.com; Instagram @GrowthBureauCollectiive (double "i", as supplied; confirm with the owner).
   - The company story, approach, "collective mindset" and philosophy text on `/about` is the owner's own wording, in `src/content/about.ts`.
11. **Draft content needing owner review**, all in `src/content/packages.ts`:
   - package deliverables and monthly content allowances (marked `confirmed: false`)
   - the comparison table
   - the add-on list (all "Price on request")
   - Growth Hub tier feature lists, mapped from the brief
12. **Forms:** `/contact` and `/book` use server actions with zod validation (`src/lib/enquiries/`).
   - `storeEnquiry()` returns `not_configured` until Supabase is connected.
   - In that state the form says "Your message has not been sent" and offers a pre-filled email to the GBC address. It never shows a fake success.
   - Both forms include a privacy consent checkbox (required) and a marketing opt-in (optional).
13. **Legal pages:** `/privacy` and `/terms` are structured drafts. Sections marked "To be confirmed" need professionally reviewed wording. Nothing in them is a compliance claim.

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

## Phase 2: completed

Pages are in `src/app/`. Shared pieces are in `components/layout/PageShell.tsx` and `PageHero.tsx`, `components/pricing/PriceCard.tsx`, `components/forms/` and `components/legal/LegalPage.tsx`. Per-page metadata comes from `src/lib/metadata.ts`.

Pages built:
- `/about`: story, mission, vision, values, philosophy, approach, why we are different, and the lockup logo.
- `/services` and five `/services/[slug]` pages.
- `/packages`: three price cards with allowances, a comparison table (swipe hint on mobile) and six add-ons.
- `/portfolio`: uses the honest empty state.
- `/growth-hub`: features, plus the three membership tiers at `#membership`.
- `/academy`: the five course categories from the brief.
- `/insights`: topics plus an empty state, and an article template at `/insights/[slug]`.
- `/contact`: form, email and Instagram.
- `/book`: full consultation form. `?package=elevate` pre-selects the package.
- `/privacy` and `/terms`: legal page drafts.
- The footer now shows the email address and Instagram.

### Phase 2 test results

58 passed and 2 skipped. The skipped tests are the phone-menu test (desktop) and the desktop-nav sweep (mobile).

New coverage in `tests/pages.spec.ts`:
- every page returns 200, with the correct heading, a canonical URL, a meta description, no sideways scroll and no console errors
- every main-nav link reaches a real page
- unknown addresses return a 404; unknown services get "noindex"
- the owner's prices appear
- the owner's story appears
- the contact form validates, keeps entered values and never fakes success
- the booking form validates services, date and website, pre-fills the package and shows the honest "not sent" state

Fixed during Phase 2:
- unknown addresses returned 200 (fixed by removing the catch-all route)
- the date picker icon was invisible on dark fields (fixed with `color-scheme: dark`)
- the comparison table needed a mobile swipe hint

## Next exact task (Phase 3: auth, database, permissions)

**Needs from the owner first:** a Supabase project. Supply the project URL, anon key and service-role key; in the cloud session, use the secure credential prompt rather than pasting keys.

1. Add the Supabase clients: `@supabase/ssr` for browser and server, and a service-role client that is server-only.
2. Write the SQL migrations in `supabase/migrations/`. Tables:
   - profiles (role: member / client / admin), businesses, memberships, subscriptions, enquiries
   - courses, lessons, lesson_progress, resources, favourites
   - goals, tasks, milestones, weekly_reviews
   - community_posts, comments, reports
   - client_projects, deliverables, approvals
   - notifications, ai_conversations, ai_messages, payments
3. Turn on Row Level Security on every table. Members see only their own rows; clients see only their own projects; admins manage everything through server routes.
4. Auth: real `/login` and `/register` pages (replacing the coming-soon pages), plus email verification, password reset and sign-out.
5. Protect `/hub/*` (members), `/workspace/*` (clients) and `/admin/*` (admins), using `proxy.ts` or layouts. Read the Next 16 docs first: middleware was renamed to proxy.
6. Wire `storeEnquiry()` to insert into `enquiries` using the service role, so the contact and booking forms start returning real success.
7. Add an authenticated nav for members and clients.
8. Tests: register, log in, access rules for each role, and that one user can't read another user's data.

**Still to confirm with the owner:**
- are agency prices per month, and is there a setup fee or minimum term?
- add-on prices
- annual Growth Hub prices
- the Instagram handle spelling
- review the draft package deliverables

## Phase checklist

- [x] 1. Architecture, branding, design system, homepage
- [x] 2. Public pages and navigation
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
