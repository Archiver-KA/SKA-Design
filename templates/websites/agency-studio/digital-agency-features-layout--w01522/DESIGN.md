# Design system — Digital Agency Features Layout

`SN-W01522` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black section with a two-tone headline, where the first word takes an indigo-to-lavender gradient and the rest is white. Feature cards sit in a grid on a navy surface (#0f172a) with thin borders and small indigo icon tiles, so each service reads as a compact unit. The composition is symmetrical and centred, with generous space above the grid.

**Mood:** calm, structured, dark, indigo-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#6366f1` · `#818cf8` · `#a5b4fc` · `#9ca3af` · `#0f172a` · `#1e293b` · `#d1d5db` · `#ffffff` · `#000000` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-8`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md px-8 py-3 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-accent: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#9ca3af',
    accent: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the indigo gradient (#6366f1) on one headline word only
- **Do:** Put each feature in a navy card (#0f172a) with a small indigo icon tile
- **Do:** Keep headings centred above the card grid
- **Don't:** Don't use indigo for card backgrounds
- **Don't:** Don't mix icon styles across the grid
- **Don't:** Don't remove the card borders; the grid depends on them

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
