# Design system — Danlpet Digital Agency Landing Page Template

`SN-W01508` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page washed with soft pastel glows, lilac top right and pale green bottom left, which keep the ground airy. The headline pairs heavy dark-navy sans with an italic phrase, 'digital joy.', filled with a magenta-to-violet gradient (#d946ef). Colour lives only in that phrase, so the look is playful but restrained.

**Mood:** playful, airy, restrained, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d946ef` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#d946ef` · `#64748b` · `#cbd5e1` · `#0f172a` · `#c026d3` · `#e2e8f0` · `#e879f9` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Outfit, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 20px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-fuchsia-500/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex group relative px-6 py-2.5 bg-black text-white rounded-full text-sm font-medium overflow-hidden hover:scale-105 transition-transform">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Case studies (`case-studies`)
5. Services (`services`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #d946ef;
  --color-accent-2: #e2e8f0;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#d946ef',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy dark navy, and fill one italic phrase with the magenta-violet gradient (#d946ef).
- **Do:** Keep the pastel glows in the corners and behind the hero, never behind body copy.
- **Do:** Use a near-navy solid button for the primary action and a white outlined pill for the secondary.
- **Don't:** Don't set body copy in the gradient or in magenta.
- **Don't:** Don't use a dark background; the page is white with pastel light.
- **Don't:** Don't make the glows solid; they must stay soft and blurred.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
