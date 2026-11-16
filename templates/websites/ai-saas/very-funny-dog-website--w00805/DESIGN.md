# Design system — Very Funny Dog Website

`SN-W00805` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A loud, playful light page with a cream ground, thick black borders and a yellow highlight behind the headline's key word. Red (#ef4444) is the button colour, and a black ticker band runs along the top with tilted sticker labels. The headline is set in a heavy sans in heavy capitals.

**Mood:** playful, loud, cartoonish, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffdf0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#fef08a` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#1f2937` · `#ef4444` · `#111827` · `#fef08a` · `#eab308` · `#6b7280` · `#3b82f6` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Comic Sans MS
- **Body:** Comic Sans MS
- **Loaded families:** Inter, Comic Sans MS
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 18px
- **Weights in use:** black, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-[6px_6px_0px_#000]`, `shadow-[8px_8px_0px_#000]`, `shadow-[4px_4px_0px_#000]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-red-500 text-white px-5 py-3 rounded-none text-xl font-black uppercase border-4 border-black hover:bg-red-600 transition-all active:translate-y-1 shadow-[4px_4px_0px_#000] rotate-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fffdf0;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #000000;
  --color-accent: #ef4444;
  --color-accent-2: #fef08a;
  --font-display: "Comic Sans MS", sans-serif;
  --font-body: "Comic Sans MS", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffdf0',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#000000',
    accent: '#ef4444',
    accent2: '#fef08a',
  },
  fontFamily: { display: ['Comic Sans MS'], sans: ['Comic Sans MS'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy capitals, with the key word on a yellow highlight
- **Do:** Use the red (#ef4444) for the primary button only
- **Do:** Frame cards and images with thick black borders
- **Don't:** Don't use soft shadows; the style uses hard outlines
- **Don't:** Don't round the main cards; the corners are square
- **Don't:** Don't set body text in a thin weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
