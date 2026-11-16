# Design system — Construction Landing Page Template for Hotel Renovations

`SN-W03038` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A full-width black slider sets the top of the page: a centred logo badge with a red ring and white wordmark sits on a plain black field, with four pagination dots at the lower right. Nav links are bold and spaced across the top, and the nav and logo are set in a serif. Below the black hero the page turns white, a stark black-and-white contrast with red and blue used only in the logo.

**Mood:** stark, industrial, solid, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#006caf` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#006caf` · `#1e293b` · `#0f172a` · `#000000` · `#94a3b8` · `#cbd5e1` · `#f1f5f9` · `#f8fafc` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Roboto
- **Body:** Roboto
- **Loaded families:** Urbanist, Roboto
- **Scale (largest breakpoint):** h1 116px · h2 116px · h3 24px · body 26px
- **Weights in use:** bold, medium, extrabold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="bg-white/10 border border-white/40 text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-10 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center mx-auto gap-3 font-['Urbanist'] text-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Call to action (`cta`)
5. Team (`team`)
6. Case studies (`case-studies`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #006caf;
  --color-accent-2: #ef4444;
  --font-display: "Roboto", sans-serif;
  --font-body: "Roboto", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#006caf',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Roboto'], sans: ['Roboto'] },
} }
```

## Do and don't

- **Do:** Keep the hero a full-bleed black field with the logo badge centred
- **Do:** Use the red ring (#ef4444) and blue (#006caf) only in the logo and key actions
- **Do:** Switch to a white ground below the hero
- **Don't:** Don't put the logo badge on a light hero; it is designed for black
- **Don't:** Don't add colours beyond the red and blue of the mark
- **Don't:** Don't set the nav in a light weight; it is bold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
