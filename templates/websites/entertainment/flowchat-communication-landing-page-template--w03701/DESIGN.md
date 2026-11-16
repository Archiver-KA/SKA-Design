# Design system — FlowChat Communication Landing Page Template

`SN-W03701` · entertainment · dark mode · Sinera Atlas theme `workshop`

## Direction

Black page with a centred, medium-weight sans headline in white over two lines, followed by grey supporting copy. The primary call to action is a solid blue pill, paired with a quieter outlined pill, and a product preview in a dark app frame sits below. Blue is the only saturated colour in the first screen, so the emphasis stays on the buttons and the interface.

**Mood:** modern, calm, product-led, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#5eead4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#000000` · `#d1d5db` · `#60a5fa` · `#3b82f6` · `#5eead4` · `#93c5fd` · `#f3f4f6` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Dashboard preview (`dashboard-preview`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1f2937;
  --color-text: #f3f4f6;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #5eead4;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1f2937',
    ink: '#f3f4f6',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#5eead4',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use the blue (#60a5fa) for the primary button only
- **Do:** Centre the hero headline and keep it to two lines
- **Do:** Show the product as a dark app frame below the hero
- **Don't:** Don't add a second saturated colour to the hero
- **Don't:** Don't use an outlined button as the primary action
- **Don't:** Don't left-align the hero text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
