# Design system — Creative Agency Landing Page Template

`SN-W01476` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page (#0a0a0a) with white headline type and a short, confident hero: a two-line statement whose second line uses a blue gradient (#60a5fa). Colour is kept to that gradient and a small green status dot in the pill above the headline. Buttons are a solid white primary and a thin-outlined ghost secondary. The page relies on large type against a flat dark ground rather than on imagery.

**Mood:** confident, dark, minimal, tech-forward

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#a3a3a3` · `#000000` · `#0a0a0a` · `#10b981` · `#d4d4d4` · `#262626` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Bricolage Grotesque
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-purple-900/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-4 py-2 rounded-full transition-colors font-medium font-sans bg-white text-black hover:bg-neutral-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Services (`services`)
5. Pricing (`pricing`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large in one sans, and colour only the second line with the blue gradient (#60a5fa).
- **Do:** Keep the page ground flat at #0a0a0a; do not place photography behind the hero.
- **Do:** Use a solid white button for the primary action and a thin-outlined ghost button beside it.
- **Don't:** Don't use the green (#10b981) for buttons; keep it to the status dot.
- **Don't:** Don't add a light background section in the first screen; the dark ground is the identity.
- **Don't:** Don't apply the gradient to body text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
