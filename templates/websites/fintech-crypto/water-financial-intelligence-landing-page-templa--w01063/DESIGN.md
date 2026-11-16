# Design system — Water Financial Intelligence Landing Page Template

`SN-W01063` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black fintech page has a light sans headline in white, and the phrase cashflow intelligence is set in an italic serif in mint green (#6ee7b7), the signature pairing. A small green-outlined pill labels the audience above, and the primary action is a dark pill with a light border. A dark workspace bar previews the product below, so mint is the only accent.

**Mood:** sleek, monochrome, precise, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#312e81` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#6ee7b7` · `#34d399` · `#d4d4d4` · `#f5f5f5` · `#22d3ee` · `#a3a3a3` · `#e5e5e5` · `#2dd4bf`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 60px · h3 16px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-emerald-900/25`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-medium text-black hover:bg-emerald-300 transition font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Timeline (`timeline`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #312e81;
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
    surface: '#171717',
    ink: '#ffffff',
    muted: '#d4d4d4',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#312e81',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasised phrase in italic serif in mint (#6ee7b7) and the rest of the headline in white sans
- **Do:** Use a dark pill with a light border for the primary button, not a filled colour
- **Do:** Keep the status pill small, with a mint dot and a faint outline
- **Don't:** Don't use mint for buttons or large fills; it marks the emphasis only
- **Don't:** Don't set the whole headline in the serif; only the phrase takes it
- **Don't:** Don't put a bright fill on the primary action; the buttons are dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
