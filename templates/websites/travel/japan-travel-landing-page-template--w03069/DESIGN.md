# Design system — Japan Travel Landing Page Template

`SN-W03069` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bold travel hero where a full-width photograph of blossom and Mount Fuji fills a rounded frame, with a large white uppercase sans wordmark across the centre. The text sits directly on the sky and the mountain, so the photograph is the main graphic element. Buttons are white and outlined pills, and the navigation is light, with a dark button at the far right.

**Mood:** bold, scenic, airy, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#000000` · `#f1f5f9` · `#facc15` · `#475569` · `#334155` · `#94a3b8` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-1`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Listings (`listings`)
5. Pricing (`pricing`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --color-accent-2: #1e293b;
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
    surface: '#f1f5f9',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0f172a',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a full-width photograph in a rounded frame as the hero
- **Do:** Set the wordmark in heavy uppercase white sans
- **Do:** Keep buttons as white and outlined pills over the photo
- **Don't:** Don't use the yellow (#facc15) as an accent; it does not show in the first screen
- **Don't:** Don't place body text over the bright blossom area without a shadow
- **Don't:** Don't introduce a second photo of equal size in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
