# Design system — Music Festival Landing Page Template

`SN-W03728` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `ru`

## Direction

Black page with a very large bold sans headline in white, set over two lines, and a faint outlined repeat of the same words in dark grey filling the background behind it. A short paragraph of event details sits above, and a thin outlined button holds the ticket action in the corner. The ghosted type adds scale and depth without any colour.

**Mood:** bold, monochrome, festival, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#262626` · `#737373` · `#171717` · `#a3a3a3` · `#525252` · `#d4d4d4` · `#404040` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 48px · h3 16px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="border border-white/30 px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 font-semibold flex items-center gap-2 backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Feature grid (`features`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Call to action (`cta`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in very large bold sans, white, over two lines
- **Do:** Repeat the headline as a faint outlined ghost behind the text in dark grey
- **Do:** Use a thin outlined button for the ticket action
- **Don't:** Don't add colour to the page
- **Don't:** Don't set the ghost text at a strength that competes with the headline
- **Don't:** Don't use a light page background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
