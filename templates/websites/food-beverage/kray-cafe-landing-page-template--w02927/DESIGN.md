# Design system — Kray Cafe Landing Page Template

`SN-W02927` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, scrapbook-style cafe page: a warm off-white ground with tilted photo cards, tape strips and small handwritten-style labels floating over it. Colour is kept to a camel-brown button (#a68a6d) and a charcoal panel (#292524) that carry the calls to action. Inter is used throughout, so the collage and the cards do the work of giving the page its character.

**Mood:** casual, warm, tactile, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#e8dec6` | Primary action and highlights |
| Second accent | `#fca5a5` | Supporting highlights |

Palette by frequency of use: `#a68a6d` · `#ffffff` · `#292524` · `#78716c` · `#f5f5f4` · `#e7e5e4` · `#e8dec6` · `#57534e` · `#44403c` · `#fdfbf7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist
- **Scale (largest breakpoint):** h2 30px · h3 24px · body 18px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_15px_rgba(0,0,0,0.08)]`, `shadow-[2px_4px_12px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-1`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-[#A68A6D] hover:bg-[#8e7358] text-white px-6 py-2.5 rounded-sm rotate-1 hover:rotate-0 text-sm font-medium transition-all shadow-md hover:shadow-lg active:scale-95 border-2 border-transparent hover:border-[#FDFBF7] ring-1 ring-offset-2 ring-[#A68A6D] font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #292524;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #e7e5e4;
  --color-accent: #e8dec6;
  --color-accent-2: #fca5a5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#292524',
    ink: '#111111',
    muted: '#ffffff',
    line: '#e7e5e4',
    accent: '#e8dec6',
    accent2: '#fca5a5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Tilt photo cards slightly and add a tape strip to the top edge of each
- **Do:** Use the camel-brown (#a68a6d) for the header booking button only
- **Do:** Keep the charcoal (#292524) panel for the main call to action card
- **Don't:** Don't use a dark page background; the ground is light
- **Don't:** Don't add more than one accent colour to a card group
- **Don't:** Don't rely on the collage for information; the cards are decoration around the copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
