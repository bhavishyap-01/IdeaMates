# IdeaMates

IdeaMates helps students share project ideas and find teammates with complementary skills. This milestone version is a front-end-only prototype built with Next.js App Router, React, and JavaScript. It uses realistic sample content and local browser storage; it has no backend, database, or external API.

## Run locally

1. Install Node.js 18.17 or newer.
2. Install packages with `npm install`.
3. Start the development server with `npm run dev`.
4. Open `http://localhost:3000`.

For the demo login, use any valid email address and a password of at least six characters. Registration, profile edits, project changes, and join requests are stored in the current browser only.

## Features

- Landing page with a quick explanation of the product and featured ideas.
- Demo login and registration, plus an editable student profile.
- Browse, search, and filter ten sample projects.
- Project detail pages with join requests.
- Create, edit, and delete projects.
- Dashboard for a student's projects, incoming requests, and sent request status.
- Responsive layouts, form validation, loading, empty, not-found, and error states.

## Folder structure

```text
app/                 Next.js routes and global styles
components/          Reusable navigation, fields, cards, buttons, and forms
context/             AuthContext and ProjectContext providers and hooks
data/                Sample projects and student profiles
public/              Static assets (add project-owned assets here)
DESIGN-SYSTEM.md     Product colors, typography, and component guidance
PRODUCT-ASSUMPTIONS.md Student-authored product assumptions; preserve as written
```

## State flow

`data/seed.js` supplies the initial sample projects. `AuthProvider` and `ProjectProvider` expose state and actions through React Context; `useAuth()` and `useProjects()` read those values in components and pages. Changes are saved to localStorage so the demo survives a refresh in the same browser. This is prototype persistence, not account security or shared multi-user data.

## Team contribution plan

These are suggested ownership areas for two students; use the actual GitHub account names when creating issues.

| Student 1 | Student 2 |
| --- | --- |
| Next.js setup, auth UI, Navbar, Dashboard, React Context | Landing page, reusable components, forms, cards, responsive UI, dummy data |

## Suggested issues

### Student 1

1. **[P1] Set up the Next.js app and shared auth state** — Add the App Router foundation and demo login, registration, and logout state. **Expected outcome:** a student can enter the app and keep a demo session after refresh. **Priority:** High.
2. **[P1] Build navigation and student dashboard** — Add responsive navigation, project overview, and request management. **Expected outcome:** students can reach core pages and review requests in one place. **Priority:** High.
3. **[P2] Add project and profile Context actions** — Centralize create, edit, delete, join, and request-review behavior. **Expected outcome:** updates appear consistently across pages. **Priority:** Medium.

### Student 2

4. **[P1] Create the landing page and responsive visual system** — Build the landing story and shared page styles. **Expected outcome:** the product is understandable and usable on mobile and desktop. **Priority:** High.
5. **[P1] Build reusable form and card components** — Add accessible buttons, inputs, badges, project cards, and project forms. **Expected outcome:** project pages share consistent controls and clear validation. **Priority:** High.
6. **[P2] Add realistic sample data and project discovery** — Seed projects and implement search, topic filters, and detail pages. **Expected outcome:** users can explore a believable board of ideas. **Priority:** Medium.

## Suggested feature branches and PR descriptions

- `feat/app-foundation-auth` — **PR:** “Add the IdeaMates app foundation and demo authentication.” Includes app setup, providers, auth pages, and navigation.
- `feat/project-discovery` — **PR:** “Add sample projects and project discovery.” Includes seed data, browse/search/filter UI, cards, and project detail pages.
- `feat/project-workflows` — **PR:** “Add project publishing and teammate requests.” Includes create/edit forms, join requests, dashboard actions, and profile editing.
- `style/responsive-design-system` — **PR:** “Apply the responsive IdeaMates design system.” Includes tokens, mobile layout refinements, and accessible interaction states.

Use Conventional Commit prefixes such as `feat:`, `fix:`, `docs:`, `style:`, and `refactor:`. Example: `feat: add project join requests`.

## Manual milestone tasks

- Students should review and maintain their own `PRODUCT-ASSUMPTIONS.md`; this implementation leaves it untouched.
- Create the wireframe before presenting the interface and compare it with the finished app.
- Create the planned issues, branches, commits, and pull requests under both students' GitHub accounts.
- Record the presentation video and check with the instructor about any deadline extension.
