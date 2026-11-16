# Design system — Mystic Manifestation Landing Page Template

`SN-W00555` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero (#020617) with a left-aligned headline in white Inter, where the words 'digital' and 'alchemy' carry a rose-to-violet gradient. A product card on the right shows a status panel in slate tones with a rose progress bar. The primary button is solid white and the secondary is outlined, so the gradient is kept to the headline words and the card.

**Mood:** mystical, dark, glowing, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#64748b` · `#94a3b8` · `#0f172a` · `#020617` · `#1e293b` · `#475569` · `#fb7185` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 18px · h3 16px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-medium text-white px-3 py-1.5 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f43f5e;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f43f5e',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the rose (#f43f5e) gradient on the headline keywords only
- **Do:** Use slate surfaces for product cards, with small status labels and a single progress bar
- **Do:** Left-align the headline and pair it with a solid white primary pill button
- **Don't:** Don't apply the gradient to body copy
- **Don't:** Don't put rose on card backgrounds; it is for emphasis only
- **Don't:** Don't centre the hero text; the layout is left-aligned

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
