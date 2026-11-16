# Design system — AI Travel Planner Landing Page Template

`SN-W03019` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A green-gradient hero, moving from a muted forest grey-green at the top to a lighter sage at the bottom, carries a large white sans headline on three centred lines. A single white pill with dark text is the only action in view. The first screen uses only greens and white, so the look is calm and product-led.

**Mood:** calm, airy, natural, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#022c22` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#064e3b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ecfdf5` · `#064e3b` · `#022c22` · `#d1fae5` · `#059669` · `#a7f3d0` · `#10b981` · `#047857` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_32px_rgba(0,0,0,0.1)]`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-medium transition duration-200 border border-white/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #022c22;
  --color-border: #ffffff;
  --color-accent: #064e3b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#022c22',
    line: '#ffffff',
    accent: '#064e3b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans on three centred lines
- **Do:** Use a white pill with dark text as the single primary action
- **Do:** Keep the hero on a deep-to-light green gradient
- **Don't:** Don't add a second accent hue; the first screen has only greens and white
- **Don't:** Don't use bright green for buttons; the buttons are white
- **Don't:** Don't set white headlines over pale areas; the gradient needs its darker top

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
