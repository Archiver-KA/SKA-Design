# Design system — Restaurant & Hotel

`SN-W02969` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, cinematic restaurant page: a near-black ground with white Geist headlines at 72px, and a single amber (#f59e0b) used for the primary button and small tags. Photography sits in rounded-2xl cards with dark labels, so the amber does most of the colour work. The look is dark throughout, with the amber as the one accent.

**Mood:** dark, cinematic, warm, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#6b7280` · `#9ca3af` · `#d1d5db` · `#050505` · `#000000` · `#fbbf24` · `#22c55e` · `#0f0f0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Inter, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-[32px]` (32px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(245,158,11,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-5 py-2 rounded-full bg-gradient-to-b from-amber-500 text-xs font-semibold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all border to-amber-600 text-white border-t-white/20 border-b-amber-700">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Product grid (`product-grid`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use the amber (#f59e0b) only for the primary button and small tags.
- **Do:** Set headlines in Geist on the near-black ground, in white.
- **Do:** Frame photographs in rounded-2xl cards with a dark label over the image.
- **Don't:** Don't set text in black on the dark ground.
- **Don't:** Don't use bright amber as a page ground.
- **Don't:** Don't switch the page to a white ground; the dark look is the design.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
