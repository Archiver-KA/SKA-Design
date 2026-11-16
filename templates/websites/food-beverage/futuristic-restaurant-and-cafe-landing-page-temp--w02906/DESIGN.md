# Design system — Futuristic Restaurant & Cafe Landing Page Template

`SN-W02906` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black page with a heavy serif wordmark in off-white, stacked on two lines and split by a red and cyan offset that reads as a glitch. The nav is small tracked caps in muted grey, and the single bright element is a mint pill button (#86efac) in the top right. The stance is cyberpunk and loud: the offset effect carries the identity, and the page keeps all else black.

**Mood:** cyberpunk, glitch, stark, loud, black

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#86efac` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#fda4af` · `#fecdd3` · `#fb7185` · `#020202` · `#86efac` · `#fafafa` · `#f4f4f5` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Syne, Space Grotesk, Noto Sans JP, Merriweather, Montserrat, Geist
- **Scale (largest breakpoint):** h3 30px · body 14px
- **Weights in use:** semibold, extrabold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[85%]`
- **Common gaps:** `gap-4`, `gap-x-4`, `gap-y-4`

**Primary button**

```html
<a class="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Feature grid (`features`)
5. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020202;
  --color-surface: #fafafa;
  --color-text: #fafafa;
  --color-border: #ffffff;
  --color-accent: #86efac;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    surface: '#fafafa',
    ink: '#fafafa',
    line: '#ffffff',
    accent: '#86efac',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the display wordmark in a heavy serif, stacked over two lines, with a red and cyan offset.
- **Do:** Use the mint (#86efac) only for the primary welcome button.
- **Do:** Keep the page black (#020202) with small tracked nav labels in grey.
- **Don't:** Don't use light backgrounds; the page is black from edge to edge.
- **Don't:** Don't use rose (#f43f5e) for body text; it appears only as the glitch offset.
- **Don't:** Don't apply the chromatic offset to body copy or small labels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
