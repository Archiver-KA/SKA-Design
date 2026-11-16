# Design system — AI-First Tech Agency Landing Page Template

`SN-W01431` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with the headline in white, a large sans set in tight lines, and the eyebrow and logo mark in orange (#f97316). A glassy dark dashboard mock floats on the right, with stat tiles and an orange progress bar, and the primary button is a solid white pill beside an outlined secondary. Orange is the only colour on the screen.

**Mood:** sharp, dark, technical, orange-accented, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#a1a1aa` · `#18181b` · `#71717a` · `#000000` · `#e4e4e7` · `#09090b` · `#030303` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Inter, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 12px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Stats band (`stats`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the eyebrow, the brand mark and the progress bar in orange (#f97316), with no other orange fills.
- **Do:** Set the headline in a heavy sans in white, in tight lines, on the near-black ground (#09090b).
- **Do:** Use a solid white pill for the primary button and an outlined pill for the secondary.
- **Don't:** Don't use the light mode tokens; the ground is near-black.
- **Don't:** Don't leave the dashboard header out of the mock.
- **Don't:** Don't use orange for body copy; it is an accent only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
