# Design system — Anime Cloud Game & Cloud Hosting Template

`SN-W00205` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark hero built on near-black (#050505), where a blue headline glow carries most of the personality. The headline is large, bold and centred, with the glow applied to the text itself. Feature chips sit beneath it, followed by a filled blue primary button and a dark outlined secondary, so blue is reserved for the main action.

**Mood:** dark, glowing, bold, gaming

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#a3a3a3` · `#0a0a0a` · `#60a5fa` · `#2563eb` · `#111111` · `#737373` · `#000000` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 20px · h2 24px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-blue-500/20`, `shadow-blue-500/40`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-black font-semibold py-3 rounded-lg transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Services (`services`)
4. Pricing (`pricing`)
5. Cart / checkout (`cart-checkout`)
6. Call to action (`cta`)
7. Comparison (`comparison`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans with a blue glow on the text
- **Do:** Use blue (#3b82f6) for the primary button and the glow only
- **Do:** Keep the secondary button as a dark outline on the near-black ground
- **Don't:** Don't add a second accent colour to the hero; blue is the only accent
- **Don't:** Don't place the glowing headline on a light background
- **Don't:** Don't apply the glow to body text; it is reserved for the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
