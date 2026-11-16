# Design system — Service Business SaaS Landing Page Template

`SN-W00706` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pl`

## Direction

A bold black-and-yellow hero: a pure black ground (#000000) with white headline type where the second line is set in warm yellow (#f5b800). The same yellow fills the primary button with black text, and a small monospaced yellow label sits above the headline. Yellow is the one emphasis colour across the hero.

**Mood:** bold, energetic, direct, high contrast, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5b800` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f5b800` · `#000000` · `#a3a3a3` · `#b91c1c` · `#ef4444` · `#d4d4d4` · `#737373` · `#050505` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 12px · h3 30px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-black`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="rounded-md bg-[#F5B800] px-3.5 py-1.5 text-xs font-medium transition-colors text-black hover:bg-[#D9A300]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. FAQ (`faq`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #f5b800;
  --color-accent-2: #ef4444;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#f5b800',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in yellow (#f5b800) and keep the first line white.
- **Do:** Put black text on yellow buttons, never white text on yellow.
- **Do:** Use a small monospaced yellow label above the headline.
- **Don't:** Don't use yellow for body copy; keep it for emphasis and buttons.
- **Don't:** Don't put red beside yellow in the hero.
- **Don't:** Don't use a light background for the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
