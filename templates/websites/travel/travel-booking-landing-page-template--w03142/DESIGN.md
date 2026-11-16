# Design system — Travel Booking Landing Page Template

`SN-W03142` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A section of a booking page on a light ground, with three white service cards with rounded corners and dark sans titles, then a near-black band holding three short feature columns with circular icon placeholders. Contrast comes from that single dark band rather than from the page ground.

**Mood:** structured, rounded, soft, contrasting, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |
| Second accent | `#0ea5e9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#71717a` · `#e4e4e7` · `#a1a1aa` · `#f4f4f5` · `#fafafa` · `#000000` · `#09090b` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-[1300px]`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Listings (`listings`)
5. Services (`services`)
6. Comparison (`comparison`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #facc15;
  --color-accent-2: #0ea5e9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#facc15',
    accent2: '#0ea5e9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set service cards as white rounded panels with thin borders and a dark title
- **Do:** Use one near-black band for a highlight row of three features
- **Do:** Keep card copy short, with one line of grey body text
- **Don't:** Don't use the dark band for every section; it is a single contrast moment
- **Don't:** Don't add a second accent colour to the cards
- **Don't:** Don't make the grey body copy the only cue; keep titles dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
