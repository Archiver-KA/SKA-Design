# Design system — Finex Finance SaaS Landing Page Template

`SN-W00942` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pure black SaaS hero with a large white sans headline, where the final word Simply carries the only blue [#3b82f6]. Blue also fills the Watch Demo button, so the secondary action is the one that stands out, while Start Free is a dark pill. A phone mock with a Stats header floats beneath the hero to show the product.

**Mood:** minimal, dark, crisp, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0c` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#0a0a0c` · `#3b82f6` · `#60a5fa` · `#6b7280` · `#d1d5db` · `#6366f1` · `#000000` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader, Oswald
- **Scale (largest breakpoint):** h1 24px · h2 60px · h3 14px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-[0_0_10px_rgba(59,130,246,0.2)]`
- **Content width:** `max-w-3xl`, `max-w-5xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden md:block bg-white text-black hover:bg-gray-200 transition-colors px-6 py-2.5 rounded-full text-sm font-semibold tracking-tight font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0c;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
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
    background: '#000000',
    surface: '#0a0a0c',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline word in blue (#3b82f6)
- **Do:** Use blue for the Watch Demo action and keep Start Free as a dark pill
- **Do:** Let a phone mock float beneath the hero to show the product
- **Don't:** Don't use blue on body text
- **Don't:** Don't add a second accent colour in the hero
- **Don't:** Don't set the hero on a light ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
