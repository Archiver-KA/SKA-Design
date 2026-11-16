# Design system — AI Truck Driver Recruiting Landing Page Template

`SN-W00169` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

Dark product page on near-black (#09090b) with a serif headline in white and blue italic phrases (#3b82f6) for emphasis. Floating dashboard cards with monospace data sit over the hero, and a diagonal cyan (#0ea5e9) bar is the only saturated shape in the composition. Thin borders and dark cards do the separation work rather than shadows.

**Mood:** dark, technical, editorial, data-driven

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#a1a1aa` · `#18181b` · `#10b981` · `#000000` · `#0ea5e9` · `#71717a` · `#27272a` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader, Google Sans Flex, Oswald, DM Sans, Cormorant Garamond
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="ml-auto px-2 py-1 bg-indigo-500 text-white rounded text-[10px] font-medium hover:bg-indigo-600 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in the serif display in white, with one phrase per heading in blue italic
- **Do:** Show product data in small monospace cards with thin borders on the near-black ground
- **Do:** Use the cyan (#0ea5e9) for a single diagonal accent shape, never for text
- **Don't:** Don't set whole headlines in blue; it marks one phrase at most
- **Don't:** Don't fill cards with bright colour; they sit on the dark ground with borders
- **Don't:** Don't swap the serif headline for a plain sans-serif; the headline style depends on it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
