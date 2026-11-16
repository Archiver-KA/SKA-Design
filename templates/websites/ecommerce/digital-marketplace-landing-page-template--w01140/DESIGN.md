# Design system — Digital Marketplace Landing Page Template

`SN-W01140` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A black digital-assets page has a very large white sans-serif headline stacked over three lines, with the middle word in grey. Thin dashed lines and a glowing amber node sit at the right of the hero, tying the copy to a ring-shaped motif. The amber (#f59e0b) appears only on the primary button and the node, so the look is sparse and premium.

**Mood:** sparse, premium, dark, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#000000` · `#a1a1aa` · `#71717a` · `#52525b` · `#e4e4e7` · `#27272a` · `#78350f` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_15px_rgba(0,0,0,0.5)]`, `shadow-2xl`, `shadow-[0_0_20px_rgba(245,158,11,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Common gaps:** `gap-2`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="bg-amber-500 hover:bg-amber-400 text-black px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 group/btn shadow-[0_0_20px_rgba(245,158,11,0.3)] font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans-serif, with the middle word in grey
- **Do:** Use amber (#f59e0b) only for the primary button and the glowing node
- **Do:** Draw supporting graphics as thin dashed lines on the black ground
- **Don't:** Don't use the pale yellow (#fde68a) for headlines; they are white.
- **Don't:** Don't fill the hero with extra colour or gradients
- **Don't:** Don't place the amber button on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
