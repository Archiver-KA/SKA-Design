# Design system — Mathvin AI Education Landing Page Template

`SN-W03501` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bright, product-led landing page on a white ground, with Inter set heavy and tight for the headline. A purple-to-cyan gradient (#8b5cf6 to #06b6d4) picks out the emphasis word, and soft pale-blue glows sit behind floating stat chips. A solid orange primary button is the one warm note on the page and marks the main action.

**Mood:** bright, modern, energetic, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#8b5cf6` | Primary action and highlights |
| Second accent | `#06b6d4` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#f1f5f9` · `#8b5cf6` · `#06b6d4` · `#64748b` · `#475569` · `#f8fafc` · `#e2e8f0` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Pricing (`pricing`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #8b5cf6;
  --color-accent-2: #06b6d4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#8b5cf6',
    accent2: '#06b6d4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasis word in a purple-to-cyan gradient, once per headline
- **Do:** Use the solid orange primary button as the only warm colour in a section
- **Do:** Float the diagnostic stat chips on soft glowing backgrounds around the hero
- **Don't:** Don't use the purple gradient on body text
- **Don't:** Don't add a second warm accent beside the orange button
- **Don't:** Don't remove the white ground; the layout relies on it for contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
