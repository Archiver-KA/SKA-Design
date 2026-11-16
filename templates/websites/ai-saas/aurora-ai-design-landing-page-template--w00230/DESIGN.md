# Design system — Aurora AI Design Landing Page Template

`SN-W00230` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, product-first hero on near-black (#09090b), with a centred white headline in two lines and a grey subtitle. The main element is a large prompt composer: a dark rounded panel with a text area and a row of tool chips (Prompt Builder, Attach, Variables, Presets). A faint indigo haze sits behind the headline, so the page works as the interface itself.

**Mood:** dark, product-led, focused, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#d4d4d8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#d4d4d8` · `#e4e4e7` · `#27272a` · `#71717a` · `#f4f4f5` · `#3f3f46` · `#a1a1aa` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl bg-zinc-800 px-4 py-2.5 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Call to action (`cta`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #d4d4d8;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f4f4f5',
    muted: '#d4d4d8',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Make the prompt composer the largest element below the headline
- **Do:** Use the indigo (#6366f1) haze behind the headline only
- **Do:** Set tool chips as small, dark, outlined pills under the input
- **Don't:** Don't put a light panel in the hero
- **Don't:** Don't use indigo as a fill for large areas
- **Don't:** Don't add more than one headline colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
