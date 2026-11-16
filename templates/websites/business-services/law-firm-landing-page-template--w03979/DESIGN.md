# Design system — Law Firm Landing Page Template

`SN-W03979` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

An editorial hero where a large light serif headline runs in roman type on the first line and italic on the second, set over a darkened photograph that fades to near-black at the bottom. The warm brown button (#ac8160) is the only colour, which keeps the page restrained. Small uppercase labels and thin navigation give it a formal, print-like tone.

**Mood:** editorial, restrained, formal, warm, print-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ac8160` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#e7e5e4` · `#f5f5f4` · `#0c0a09` · `#d6d3d1` · `#a8a29e` · `#57534e` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-brand-100/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-stone-950 hover:bg-brand-700 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-sm transition-all shadow-lg shadow-stone-900/10 hover:shadow-brand-700/20 flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Team (`team`)
5. Case studies (`case-studies`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #f5f5f4;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #ac8160;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#f5f5f4',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#ac8160',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light serif, with the second line in italic
- **Do:** Use the warm brown (#ac8160) only for the primary button
- **Do:** Keep navigation and labels in small, widely spaced uppercase
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't place body copy over the brightest part of the photograph
- **Don't:** Don't set the headline in bold weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
