# Design system — Algo Trading Landing Page Template

`SN-W00867` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, document-like page: a light grey canvas (#e5e7eb) holds a white sheet with a short headline and a long letter-style body in grey, as if the sales copy were a personal email. The one blue CTA sits in the top bar, and small amber status text sits above the headline. The layout is a centred white column with sans text, so the reading experience is the design.

**Mood:** light, letter-like, calm, text-led, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e5e7eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#111827` · `#4b5563` · `#f3f4f6` · `#ffffff` · `#6b7280` · `#9ca3af` · `#d1d5db` · `#22c55e` · `#e5e7eb` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 36px · h2 20px · h3 20px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_4px_20px_rgba(0,0,0,0.04)]`, `shadow-lg`
- **Content width:** `max-w-[850px]`, `max-w-2xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-xs font-medium px-4 py-1.5 rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #e5e7eb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #22c55e;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e5e7eb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#22c55e',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the body in a single white column on the light grey canvas
- **Do:** Set the page as a long sales letter with a short headline and grey body text
- **Do:** Keep the primary CTA in the top bar as one solid blue
- **Don't:** Don't add hero imagery; the layout depends on text
- **Don't:** Don't set the letter body in pure black; keep it mid-grey
- **Don't:** Don't use more than one bright accent per view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
