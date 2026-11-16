# Design system — Unified Workspace Landing Page

`SN-W03747` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, airy product page on a pale grey ground [#f3f4f6]. The centred headline is dark sans-serif, and its final word is set in a violet-to-indigo tone that carries the accent. The primary button is a soft purple gradient, and the product preview is a white table card with plain rows and small grey filter tabs. Structure stays simple, with generous spacing and rounded panels.

**Mood:** airy, friendly, clean, product-led, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#d1d5db` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#4b5563` · `#f9fafb` · `#f3f4f6` · `#111827` · `#6b7280` · `#9ca3af` · `#ffffff` · `#d1d5db` · `#f8fafc` · `#4f46e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 14px · body 14px
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-md`, `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-6`, `gap-2`, `gap-8`

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Hero (`hero`)
3. Comparison (`comparison`)
4. Case studies (`case-studies`)
5. Dashboard preview (`dashboard-preview`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #d1d5db;
  --color-accent: #10b981;
  --color-accent-2: #fef3c7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#4b5563',
    line: '#d1d5db',
    accent: '#10b981',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the violet accent only for the highlighted word and the primary button
- **Do:** Keep the table preview on white panels with thin grey dividers
- **Do:** Set the hero heading in dark sans-serif with one emphasised phrase
- **Don't:** Don't add gradients to the table or the page background
- **Don't:** Don't use the accent colour for body links
- **Don't:** Don't crowd the hero; keep generous space above the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
