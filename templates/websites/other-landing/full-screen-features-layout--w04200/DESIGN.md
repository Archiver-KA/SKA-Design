# Design system — Full Screen Features Layout

`SN-W04200` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A centred features block on a light grey ground (#f3f4f6), with a large geometric sans headline in near-black and a short grey subtitle. Three white cards sit in a row, each with one small line icon in violet or pink, and a solid indigo (#4f46e5) call to action sits below them. Rounded corners and wide spacing keep the section calm.

**Mood:** clean, calm, spacious, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#6b7280` · `#ffffff` · `#f3f4f6` · `#6366f1` · `#a855f7` · `#ec4899` · `#4f46e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 80px · h3 24px · body 15px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tightest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-14`, `py-20`
- **Common gaps:** `gap-8`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-7 py-3 bg-indigo-600 hover:bg-indigo-500 transition rounded-full text-white font-body font-medium text-[16px] shadow">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-accent: #6366f1;
  --font-display: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    accent: '#6366f1',
  },
  fontFamily: { display: ['Manrope'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large in Manrope with tight tracking
- **Do:** Use solid indigo (#4f46e5) for the single call to action
- **Do:** Keep the three feature cards equal in size with one line icon each
- **Don't:** Don't use more than one solid button in the section
- **Don't:** Don't colour the cards; keep them white on the grey ground
- **Don't:** Don't add gradients to the icons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
