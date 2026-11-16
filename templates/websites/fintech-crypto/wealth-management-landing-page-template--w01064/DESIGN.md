# Design system — Wealth Management Landing Page Template

`SN-W01064` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black wealth page where the headline is a large white sans and its second phrase is muted slate, so the hero reads in two tones. Lime (#c6f91f) is the only bright colour: it marks the outlined text links and the chart on the product panel, which sits against a lime-to-black gradient on the right. The product mockup set against that gradient is the signature of the page.

**Mood:** sharp, dark, data-led, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05080a` | Page ground |
| Surface | `#1e293b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c6f91f` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c6f91f` · `#05080a` · `#000000` · `#64748b` · `#475569` · `#334155` · `#1e293b` · `#94a3b8` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_#c6f91f]`, `shadow-2xl`, `shadow-[0_0_15px_rgba(198,249,31,0.1)]`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full py-4 mb-10 rounded-lg border border-white/10 bg-transparent text-white group-hover:bg-[#c6f91f] group-hover:text-black group-hover:border-[#c6f91f] transition-all duration-300 text-sm font-medium font-geist reveal-on-scroll">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)
4. Services (`services`)
5. Feature grid (`features`)
6. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #05080a;
  --color-surface: #1e293b;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #c6f91f;
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
    background: '#05080a',
    surface: '#1e293b',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#c6f91f',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#c6f91f) for the text links and chart highlights only
- **Do:** Set the headline in white sans, with the second phrase in muted slate (#64748b)
- **Do:** Place the product panel over a lime-to-black gradient on the right half of the hero
- **Don't:** Don't use lime for body text; it is reserved for links and data
- **Don't:** Don't fill buttons in lime; the primary buttons are outlined
- **Don't:** Don't remove the gradient behind the product panel; it is the main visual

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
