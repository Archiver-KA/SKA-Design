# Design system — Imaginova Gallery Landing Page Template

`SN-W00454` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark gallery page on a black-blue ground, with a large serif display headline and a search field at the centre of the hero. The contrast between the elegant serif and the functional sans controls gives the page its character. Cyan (#22d3ee) marks the primary action and the active chip, and the artwork supplies the colour.

**Mood:** editorial, quiet, dark, gallery-like, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b16` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#22d3ee` · `#06b6d4` · `#0b0b16` · `#3f3f46` · `#6366f1` · `#008cff` · `#0ea5e9` · `#00c0ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-normal`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-4`, `gap-x-4`, `gap-y-4`

**Primary button**

```html
<a class="flex items-center space-x-1 py-2 px-4 text-sm font-medium hover:bg-white/5 rounded-full transition-all duration-200 hover:text-cyan-400">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b16;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b16',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif display face at large size
- **Do:** Use cyan (#22d3ee) only for the main action and the active filter
- **Do:** Keep the search field centred with pill-shaped chips below it
- **Don't:** Don't set the headline in the sans body face
- **Don't:** Don't add colour to the interface chrome; the artwork should carry it
- **Don't:** Don't place more than one solid cyan button in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
