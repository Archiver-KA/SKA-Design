# Design system — Integrated Camp Services Landing Page Template

`SN-W03961` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dramatic hero where a soft abstract field of red and grey ribbons moves behind the headline, and the headline mixes white words with red ones. The primary button is solid deep red, and the secondary is a pale translucent pill. Heavy grotesque headlines and pill-shaped controls give the page a bold, energetic character, with red as the single accent.

**Mood:** bold, energetic, dramatic, glossy, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#9d1a10` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#9d1a10` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9d1a10` · `#0f172a` · `#f1f5f9` · `#64748b` · `#94a3b8` · `#e2e8f0` · `#020617` · `#475569` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-slate-900/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="text-sm font-semibold text-slate-900 px-5 py-2.5 rounded-full hover:bg-slate-100 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #9d1a10;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #9d1a10;
  --color-accent-2: #1e293b;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#9d1a10',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#9d1a10',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy grotesque sans-serif, with one red word and one faded red line
- **Do:** Use deep red (#9d1a10) for the primary button and the logo only
- **Do:** Keep the hero background as a soft abstract field behind the text
- **Don't:** Don't place body copy over the brightest red ribbons
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't square off the buttons; keep them pill-shaped

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
