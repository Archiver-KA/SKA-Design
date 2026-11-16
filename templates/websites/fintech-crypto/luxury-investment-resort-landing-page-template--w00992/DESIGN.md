# Design system — Luxury Investment Resort Landing Page Template

`SN-W00992` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, cinematic investment hero on a near-black navy ground (#0b1120), with a large white serif headline whose second line is set in gold (#d4af37). Gold is the single accent, used for the outlined nav button and the solid primary button, and the rest stays monochrome. Small uppercase labels and a pill badge add a quiet, editorial rhythm.

**Mood:** cinematic, editorial, luxurious, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b1120` | Page ground |
| Surface | `#94a3b8` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#0b1120` · `#64748b` · `#d4af37` · `#cbd5e1` · `#475569` · `#f8fafc` · `#0f172a` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-gold/5`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-12`, `gap-4`

**Primary button**

```html
<a class="w-full md:w-auto bg-gold text-[#0B1120] px-10 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-all duration-300 transform hover:-translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Timeline (`timeline`)
5. Logo cloud (`logo-cloud`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b1120;
  --color-surface: #94a3b8;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #d4af37;
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
    background: '#0b1120',
    surface: '#94a3b8',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in gold (#d4af37).
- **Do:** Use the solid gold button for the primary action and an outline button for the nav.
- **Do:** Keep the hero on the near-black navy ground (#0b1120).
- **Don't:** Don't use gold for body text.
- **Don't:** Don't add a light background section into the hero.
- **Don't:** Don't add a second serif face beside the display serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
