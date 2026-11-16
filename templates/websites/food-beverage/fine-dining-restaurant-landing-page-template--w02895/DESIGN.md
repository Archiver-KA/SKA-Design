# Design system — Fine Dining Restaurant Landing Page Template

`SN-W02895` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, ceremonial hero with a centred, two-line serif headline in large white type, where the middle word is set in italic amber. The background is a near-black (#0c0a09) with no imagery, so the page relies on type, a tagline, and two buttons: a solid amber primary and a thin outlined secondary. The stance is formal, with amber used only for the italic word and the main action.

**Mood:** formal, ceremonial, dark, warm, typographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#78716c` · `#0c0a09` · `#d6d3d1` · `#a8a29e` · `#78350f` · `#e7e5e4` · `#b45309` · `#1c1917`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 18px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-amber-700/20 hover:bg-amber-700/30 text-amber-200 border border-amber-700/50 px-6 py-2.5 rounded-sm transition-all duration-300 text-sm tracking-wide uppercase font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Menu list (`menu-list`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #e7e5e4;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#e7e5e4',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif at display size, centred, with the key word in italic amber.
- **Do:** Use amber (#f59e0b) for the italic word and the solid primary button only.
- **Do:** Pair a solid amber primary button with a thin outlined secondary button.
- **Don't:** Don't add photography behind the hero; it relies on type and flat black.
- **Don't:** Don't use a second accent colour; the page is black, white and amber.
- **Don't:** Don't set the headline in Inter; the headline is a serif display face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
