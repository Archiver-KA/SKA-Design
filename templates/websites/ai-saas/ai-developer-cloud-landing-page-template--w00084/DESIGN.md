# Design system — AI Developer Cloud Landing Page Template

`SN-W00084` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

MJStudio is a dark developer-cloud page on a near-black ground, with white headlines set in Inter at a very large size. The page is built from grey UI surfaces and white pill buttons, and the indigo brand colour appears only in small accents and the logo mark. Depth comes from a glowing code panel that sits under the hero and from glass-style cards, not from colour blocks.

**Mood:** dark, technical, developer-focused, stark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#71717a` · `#a1a1aa` · `#27272a` · `#d4d4d8` · `#52525b` · `#000000` · `#3f3f46` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-inter)
- **Body:** var(--font-inter)
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(99,102,241,0.5)]`, `shadow-[0_0_10px_#6366f1]`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-all hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #4ade80;
  --font-display: "var(--font-inter)", sans-serif;
  --font-body: "var(--font-inter)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#27272a',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['var(--font-inter)'], sans: ['var(--font-inter)'] },
} }
```

## Do and don't

- **Do:** Keep the hero on a near-black ground (#000000) with white headlines in Inter
- **Do:** Use indigo (#6366f1) for the logo mark and small accents, not for large background fields
- **Do:** Show code and terminal panels as the main visual, with a glow behind them
- **Don't:** Don't use indigo as a full-page background; the ground is near-black
- **Don't:** Don't set headlines in a light weight at small sizes; the hero relies on size
- **Don't:** Don't add extra accent colours beyond the one brand hue and the greys

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
