# Design system — Artistic Portfolio & Composer Template

`SN-W01817` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Austere and technical dark template: a near-black ground with a large bold uppercase grotesque headline in white, a grey subline with wide tracking and a short rule beneath it, and soft grey body copy below. A faint ghosted image sits behind the top left. Colour is almost absent; the type and generous dark space carry the design.

**Mood:** austere, dark, technical, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#312e81` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#262626` · `#ffffff` · `#171717` · `#525252` · `#0a0a0a` · `#a3a3a3` · `#737373` · `#e5e5e5` · `#404040` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 36px · body 20px
- **Weights in use:** light, normal, extralight
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-40`, `py-32`
- **Common gaps:** `gap-2`, `gap-2.5`, `gap-10`

**Primary button**

```html
<a class="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors text-base font-normal">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #312e81;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#312e81',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white uppercase grotesque
- **Do:** Keep the subline grey with wide tracking, under a short rule
- **Do:** Keep body copy soft grey, not white
- **Don't:** Don't add bright colour; the hero is monochrome
- **Don't:** Don't centre the headline; it is left-aligned
- **Don't:** Don't set the body paragraph in pure white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
