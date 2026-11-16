# Design system — Fintech Trading SaaS Landing Page Template

`SN-W00966` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black hero has a large white headline whose final word fades to grey, with a small amber badge above it. Buttons are a solid white primary and an outlined secondary, and a live ticker in green and red sits at the bottom. The page is dark, with restrained glow.

**Mood:** dark, precise, trading-led, restrained, sharp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#10b981` · `#f59e0b` · `#a1a1aa` · `#18181b` · `#f43f5e` · `#3b82f6` · `#34d399` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(245,158,11,0.6)]`, `shadow-blue-900/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium tracking-wide text-white transition-all flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #52525b;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#52525b',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Fade the last headline word from white to grey.
- **Do:** Use white for the primary button and an outline for the secondary.
- **Do:** Show live prices with green and red only.
- **Don't:** Don't style this as a light page.
- **Don't:** Don't use the amber (#f59e0b) for large areas.
- **Don't:** Don't add decorative glow beside the ticker.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
