# Design system — One Slide Website Landing Page Template

`SN-W02145` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

This is a dark one-slide landing layout on near-black (#0a0a0a), with a floating rounded nav bar holding an orange (#ff7700) logo square and a bold white pill button. The wordmark is tight sans with 'WEB' picked out in orange, the only colour in the layout.

**Mood:** bold, dark, direct, modern, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff7700` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff7700` · `#22c55e` · `#000000` · `#080808` · `#ff9933` · `#ffd700` · `#0a0a0a` · `#eeeeee` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syne
- **Body:** Inter
- **Loaded families:** Inter, Syne
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_20px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="hidden md:block text-[10px] font-bold bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Pricing (`pricing`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #080808;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff7700;
  --color-accent-2: #22c55e;
  --font-display: "Syne", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#080808',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff7700',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Syne'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the floating nav bar as a dark rounded panel with a white pill button on the right.
- **Do:** Use orange (#ff7700) for the logo mark and the emphasis word in the wordmark.
- **Do:** Keep the black ground and let the hero content sit below the nav.
- **Don't:** Don't use the orange as a page ground; it is an accent only.
- **Don't:** Don't use the green (#22c55e) as an accent.
- **Don't:** Don't add extra chrome beside the nav; the page is a single slide.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
