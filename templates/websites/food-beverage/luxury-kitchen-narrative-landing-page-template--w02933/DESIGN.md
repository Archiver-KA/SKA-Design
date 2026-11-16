# Design system — Luxury Kitchen Narrative Landing Page Template

`SN-W02933` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A chapter-style narrative page on near-black (#0c0a09) with a Cormorant Garamond headline in warm off-white (#e7e5e4). Small uppercase eyebrows and numbered page labels in amber (#f59e0b) structure the story like an index, with generous space between entries. The amber is held to small labels, so the page stays restrained.

**Mood:** narrative, refined, restrained, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#292524` · `#a8a29e` · `#78716c` · `#d6d3d1` · `#e7e5e4` · `#0c0a09` · `#d97706` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 24px · body 12px
- **Weights in use:** light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-amber-900/30 border border-amber-700/50 hover:bg-amber-800/40 text-amber-100 px-6 py-3 rounded-sm uppercase tracking-[0.15em] text-xs transition-all duration-300 flex items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #292524;
  --color-text: #e7e5e4;
  --color-muted: #a8a29e;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#292524',
    ink: '#e7e5e4',
    muted: '#a8a29e',
    line: '#ffffff',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the story headlines in Cormorant Garamond in warm off-white (#e7e5e4)
- **Do:** Use amber (#f59e0b) only for eyebrows and numbered labels
- **Do:** Space each story entry generously and keep it to one headline and one line of text
- **Don't:** Don't use the brown (#78350f) as a page ground; the ground is near-black
- **Don't:** Don't set amber in large areas or in body text
- **Don't:** Don't add decorative imagery that competes with the typography

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
