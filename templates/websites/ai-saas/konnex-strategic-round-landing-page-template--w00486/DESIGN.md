# Design system — Konnex Strategic Round Landing Page Template

`SN-W00486` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A monochrome investor page built from white and zinc greys, with near-black (#09090b) type and buttons carrying all the emphasis. Headlines are large, heavy Inter with tight spacing, and hairline borders (#e4e4e7) divide the stats and tokenomics blocks. Colour is almost absent, so the page reads as a sober financial document rather than a product launch.

**Mood:** monochrome, sober, financial, minimal, high contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#09090b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#09090b` | Primary action and highlights |

Palette by frequency of use: `#09090b` · `#ffffff` · `#71717a` · `#e4e4e7` · `#f4f4f5` · `#d4d4d8` · `#fafafa` · `#a1a1aa` · `#27272a` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 72px · h3 30px · body 10px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-zinc-200/50`
- **Content width:** `max-w-[1600px]`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="flex items-center gap-2 px-5 py-2 bg-zinc-950 text-white text-xs font-medium rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Newsletter signup (`newsletter`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #09090b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #09090b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f4f4f5',
    ink: '#09090b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#09090b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy Inter with tight tracking.
- **Do:** Use near-black (#09090b) for primary buttons and key figures.
- **Do:** Separate blocks with hairline borders (#e4e4e7) instead of shadows.
- **Don't:** Don't add saturated colour panels behind the hero.
- **Don't:** Don't introduce a second bright colour for buttons.
- **Don't:** Don't set small body copy in the light muted grey (#71717a) on white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
