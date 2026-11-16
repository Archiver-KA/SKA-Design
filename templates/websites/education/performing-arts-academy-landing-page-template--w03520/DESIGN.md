# Design system — Performing Arts Academy Landing Page Template

`SN-W03520` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

An elegant, gallery-like academy page with a large serif headline in near-black, where key words switch between roman and grey italic for contrast. The palette is strictly neutral, with white and warm grey surfaces and black pill buttons as the only dark accents. Thin outlined frames and generous margins give the page a quiet, art-school calm.

**Mood:** elegant, gallery-like, quiet, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1a1a1a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1a1a1a` · `#78716c` · `#000000` · `#fdfcf8` · `#a8a29e` · `#f5f5f4` · `#d6d3d1` · `#e7e5e4` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Instrument Serif, Inter, Plus Jakarta Sans, Geist, ./index.html
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[1800px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-8 py-3.5 rounded-full bg-[#1a1a1a] text-[#Fdfcf8] text-sm font-medium hover:bg-stone-800 transition-all flex items-center gap-2">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f4;
  --color-text: #1a1a1a;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #1a1a1a;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f4',
    ink: '#1a1a1a',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#1a1a1a',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with one word in grey italic for contrast
- **Do:** Use black pill buttons for the primary action and outlined pills for secondary ones
- **Do:** Keep the page to white and warm grey surfaces with no coloured accents
- **Don't:** Don't add saturated colours to headings or buttons
- **Don't:** Don't set headings in a sans-serif face
- **Don't:** Don't crowd the hero with extra cards or badges

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
