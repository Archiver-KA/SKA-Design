# Design system — Kickboxing Gym Landing Page Template

`SN-W02646` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark gym landing page where the hero is a black-to-grey gradient and the headline splits into white and yellow (#fec400) lines. Yellow carries the headline emphasis and the primary booking input. Forms are rounded pills with thin grey outlines, which softens the otherwise hard black and yellow palette. Type is heavy sans-serif, set large and centred.

**Mood:** bold, warm-dark, confident, sporty, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fec400` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#9ca3af` · `#fec400` · `#6b7280` · `#e5e7eb` · `#d1d5db` · `#0a0a0a` · `#111111` · `#fef08a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 20px · body 16px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1600px]`, `max-w-[1400px]`
- **Section padding:** `py-24`, `py-14`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-white hover:bg-gray-200 text-black font-semibold uppercase tracking-[0.2em] py-4 px-10 text-xs transition-all hover:scale-105 rounded-sm inline-flex items-center gap-2 group mt-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Team (`team`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #fec400;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#111111',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#fec400',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasis line of each headline in #fec400.
- **Do:** Use pill-shaped inputs and buttons with thin grey outlines.
- **Do:** Keep the hero background as a vertical gradient from grey into black.
- **Don't:** Don't add a second accent colour beside the yellow.
- **Don't:** Don't use yellow for paragraph text.
- **Don't:** Don't use square corners on the booking input.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
