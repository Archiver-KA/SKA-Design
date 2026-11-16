# Design system — Boba Builder Product Configurator Template

`SN-W02849` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A neutral, product-first configurator. An off-white ground (#fafafa) holds white option cards on hairline borders (#e4e4e7), and the selected option is marked by a near-black outline (#18181b) rather than a colour fill. Option tiles carry small swatches or dots, so the only real colour comes from the drink preview in the left panel. The layout is quiet and functional.

**Mood:** neutral, tidy, product-first, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#a1a1aa` · `#e4e4e7` · `#71717a` · `#fafafa` · `#f4f4f5` · `#d4d4d8` · `#27272a` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-inner`, `shadow-2xl`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white px-3 py-2 rounded-md transition-colors border border-zinc-700">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#27272a',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Mark the selected option with a dark outline, not a colour fill
- **Do:** Keep option cards white on the #fafafa ground with #e4e4e7 borders
- **Do:** Let the product preview carry the colour and keep the interface neutral
- **Don't:** Don't add accent colours to chrome or buttons; the product is the colour
- **Don't:** Don't use shadows on option cards; hairline borders separate them
- **Don't:** Don't mix selection styles within one option group

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
