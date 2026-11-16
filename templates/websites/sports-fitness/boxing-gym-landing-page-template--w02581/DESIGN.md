# Design system — Boxing Gym Landing Page Template

`SN-W02581` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A gritty gym page with a full-bleed black-and-white photograph of a boxer under a dark tint, and a heavy white sans-serif headline whose second line drops to grey. The deep green (#006847) appears on the primary support button and nowhere else, so the colour reads as a small signal against a black and grey page. The overall tone is hard, documentary and direct.

**Mood:** gritty, documentary, direct, dark, disciplined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#006847` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#006847` · `#18181b` · `#000000` · `#a1a1aa` · `#71717a` · `#27272a` · `#52525b` · `#e4e4e7` · `#dc2626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-lg`, `shadow-[0_0_15px_rgba(0,104,71,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="bg-[#006847] hover:bg-[#005036] text-white px-8 py-3.5 text-sm font-medium rounded transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,104,71,0.4)] w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Schedule (`schedule-agenda`)
5. Pricing (`pricing`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)
10. Video / media (`video-media`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #006847;
  --color-accent-2: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#006847',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero photograph in black and white under a dark tint so the white headline stays legible
- **Do:** Set the second headline line in muted grey to step down the hierarchy
- **Do:** Use the deep green (#006847) only for the primary button
- **Don't:** Don't colour the hero photograph; the monochrome treatment is part of the look
- **Don't:** Don't use the red as a fill for buttons; it is a secondary signal at most
- **Don't:** Don't set body copy in pure white at small size over the photo; keep it short

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
