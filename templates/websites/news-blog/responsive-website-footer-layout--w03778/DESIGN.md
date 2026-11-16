# Design system — Responsive Website Footer Layout

`SN-W03778` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light footer on a pale grey ground, with the brand mark and bold DM Sans headings set in dark text (#111827). Blue (#2563eb) is the only accent and appears on the subscribe button, so everything else stays neutral. The link columns are compact and the legal row sits in muted grey, giving a tidy, low-key finish.

**Mood:** neutral, clean, compact, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#2563eb` · `#ffffff` · `#93c5fd` · `#000000` · `#6b7280` · `#9ca3af` · `#111827` · `#1f2937` · `#dbeafe` · `#1e3a8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Inter
- **Scale (largest breakpoint):** body 16px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-inner`, `shadow-blue-100`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-3`, `gap-8`, `gap-10`

**Primary button**

```html
<a class="inline-flex items-center px-6 py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-100 dark:shadow-blue-900">…</a>
```

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #2563eb;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#2563eb',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the subscribe button in blue (#2563eb) and keep it the only solid colour in the footer.
- **Do:** Set headings and the brand name in DM Sans at bold weight.
- **Do:** Use dark text (#111827) for links and muted grey (#6b7280) for legal text.
- **Don't:** Don't add a second accent colour to the footer.
- **Don't:** Don't place the link columns on a saturated background.
- **Don't:** Don't use heavy borders between the link columns.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
