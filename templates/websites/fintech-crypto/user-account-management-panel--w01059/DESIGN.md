# Design system — User Account Management Panel

`SN-W01059` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark account panel shown inside a phone frame on a navy page, with a profile card at the top, an avatar in a blue-green gradient and a single outlined Edit Profile button. Each list row has a small coloured icon (blue, green, violet, yellow) and a chevron, so colour sits only in the icons. Rows are grouped under small labels, which keeps the panel easy to scan.

**Mood:** calm, functional, dark, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#252525` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#252525` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#252525` · `#6b7280` · `#d1d5db` · `#ffffff` · `#1a1a1a` · `#60a5fa` · `#000000` · `#9ca3af` · `#303030` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h2 20px · body 12px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[45px]` (45px)
- **Shadows:** `shadow`, `shadow-2xl`, `shadow-lg`

**Primary button**

```html
<a class="w-full mt-4 bg-[#252525] hover:bg-[#303030] text-white font-medium py-2.5 rounded-xl transition duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #252525;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #252525;
  --color-accent: #60a5fa;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#252525',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#252525',
    accent: '#60a5fa',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep card surfaces at #252525 on the dark ground with a thin border
- **Do:** Use one small coloured icon per row and keep the row text greyscale
- **Do:** Use a full-width outlined button for Edit Profile on the profile card
- **Don't:** Don't colour the row text; the icons carry the colour
- **Don't:** Don't use a filled primary button in the profile card; it stays neutral
- **Don't:** Don't drop the chevron on list rows; it signals navigation

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
