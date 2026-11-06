# IdeaMates design system

## Visual direction

IdeaMates should feel optimistic, thoughtful, and easy to join. Warm off-white surfaces and a lively coral accent give the interface personality; deep green anchors the community sections. Rounded shapes and generous spacing keep the project listings approachable.

## Colors

| Token | Hex | Use |
| --- | --- | --- |
| Primary | `#FF6B4A` | Main actions and highlights |
| Primary dark | `#E95637` | Hover and emphasized links |
| Secondary | `#24433B` | Dark callouts and supporting actions |
| Background | `#FAF9F6` | App canvas |
| Surface | `#FFFFFF` | Cards and forms |
| Text | `#1D2824` | Main copy |
| Muted text | `#76817C` | Supporting copy |
| Accent | `#F7C76A` | Small moments of warmth |
| Success | `#23815B` | Accepted requests and success messages |
| Error | `#C94C43` | Validation and error messages |
| Border | `#E8E9E5` | Card and input outlines |

Colors are available as CSS variables in `app/globals.css`; common brand tokens are also exposed in `tailwind.config.js`.

## Typography

- **Font:** Manrope, loaded with `next/font/google` and assigned to `--font-body`.
- **H1:** responsive 2.3–4.5rem, weight 800, tight tracking.
- **H2:** responsive 1.8–2.7rem, weight 800, tight tracking.
- **Body:** 15px / 1.6, regular weight.
- **Button text:** 15px, weight 750.
- **Small text:** 12–13px, regular or bold depending on its role.

## Components and states

- **Navbar:** desktop links and actions wrap into a second row on narrow screens; current section is highlighted.
- **Button:** primary, secondary, and danger variants; small, default, and large sizes; hover, focus, and disabled states.
- **Input:** labeled text, email, password, select, and textarea fields; focus ring and invalid state with a linked message.
- **Card:** white surface, subtle outline, 20px radius; project cards lift slightly on hover.
- **Badge:** neutral, brand, success, and warning tones for tags and statuses.
- **Modal:** accessible dialog with a close action and outside-click dismissal.
- **Dropdown:** labeled select control for choosing a category.
- **LoadingState:** status message while local state is restored.
- **EmptyState:** clear message and next action when a list has no results.
- **ProjectCard:** category, name, description, skills, owner, location, and a detail link.

## Layout and accessibility

- Main content uses a centered 1160px maximum width with 24px desktop gutters and 16px mobile gutters.
- Project cards use three columns on wide screens, two on tablets, and one on phones.
- Forms use visible labels, semantic controls, keyboard focus outlines, and inline validation copy.
- Status feedback uses `role="status"`; validation and page errors use `role="alert"`.
