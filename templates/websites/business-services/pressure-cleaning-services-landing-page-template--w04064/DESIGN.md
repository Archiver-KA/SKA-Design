# Design system — Pressure Cleaning Services Landing Page Template

`SN-W04064` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A photographic hero where a full-bleed image of a pressure wash sits under a dark veil, and the headline pairs a bold sans first line with a large italic serif second line. The contrast between the two type styles is the main device, and the image carries the mood. Dark pill buttons and a floating white trust card keep the actions clear without adding colour.

**Mood:** photographic, confident, editorial, clean, grounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#f4f4f5` · `#71717a` · `#ffffff` · `#d4d4d8` · `#e4e4e7` · `#a1a1aa` · `#52525b` · `#fafafa` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist Sans
- **Body:** Geist Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 16px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-zinc-200/50`
- **Content width:** `max-w-screen-2xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:block bg-zinc-900 text-white px-4 py-2 rounded-md text-[13px] font-medium hover:bg-zinc-800 transition shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #18181b;
  --font-display: "Geist Sans", sans-serif;
  --font-body: "Geist Sans", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#18181b',
  },
  fontFamily: { display: ['Geist Sans'], sans: ['Geist Sans'] },
} }
```

## Do and don't

- **Do:** Pair a bold sans headline with an italic serif second line, as in the hero
- **Do:** Put white text over a dark overlay on the hero photograph
- **Do:** Keep the primary button near-black (#18181b) with a grey secondary button beside it
- **Don't:** Don't set body copy in italics; the italic serif is for the headline only
- **Don't:** Don't place text directly on bright parts of the photograph without the overlay
- **Don't:** Don't add a second floating card; one trust card is the design

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
