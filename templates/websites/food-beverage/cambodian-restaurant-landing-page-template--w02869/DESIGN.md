# Design system — Cambodian Restaurant Landing Page Template

`SN-W02869` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

Editorial and warm on a cream page. A serif headline is set in near-black (#1c1917) with one italic word in burnt orange-brown (#b45309), and that single italic word is the device the design repeats. The primary action is a near-black pill with a quiet outlined secondary beside it. Small rounded feature cards, one of them dark, float over the edge of an image panel for contrast.

**Mood:** editorial, warm, refined, cream

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#b45309` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#f5f5f4` · `#78716c` · `#e7e5e4` · `#fafaf9` · `#292524` · `#b45309` · `#57534e` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 30px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[40px]` (40px), `rounded-2xl` (16px)
- **Shadows:** `shadow-md`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="px-5 py-2 rounded-full border border-amber-600/20 bg-amber-700 text-white text-sm font-semibold hover:bg-amber-800 transition-all shadow-lg shadow-amber-700/20">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Menu list (`menu-list`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #b45309;
  --color-accent-2: #4ade80;
  --font-display: "Playfair Display", serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#b45309',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif with one italic word in burnt orange-brown (#b45309)
- **Do:** Use near-black pills (#1c1917) for the primary action and outlined pills for secondary
- **Do:** Keep floating feature cards small and rounded, placed over an image edge
- **Don't:** Don't set the headline in bold sans
- **Don't:** Don't colour the whole headline orange; only the italic word
- **Don't:** Don't use yellow for backgrounds; the page is cream

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
