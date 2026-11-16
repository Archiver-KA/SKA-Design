# Design system — Dermatology Clinic Landing Page Template

`SN-W02367` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, editorial clinic hero: a charcoal ground with a thin top announcement bar and a bold serif headline. The type carries the design, with the serif set heavy and tight and a small grey body paragraph beneath it. The page relies on white type and serif display rather than colour.

**Mood:** editorial, medical, monochrome, bold, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#e5e5e5` · `#171717` · `#a3a3a3` · `#3b82f6` · `#525252` · `#000000` · `#737373` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-neutral-200/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Map / location (`map-location`)
6. About (`about`)
7. Marquee (`marquee`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #f5f5f5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #3b82f6;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#f5f5f5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display at bold weight, tight line height.
- **Do:** Keep the hero on the charcoal ground (#171717) with white headline type.
- **Do:** Use the white pill button for the primary action and the outlined pill for the second.
- **Don't:** Don't introduce the blue (#3b82f6) for buttons on the hero.
- **Don't:** Don't set the top announcement bar in a colour; it stays a quiet line of text.
- **Don't:** Don't use drop shadows on the buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
