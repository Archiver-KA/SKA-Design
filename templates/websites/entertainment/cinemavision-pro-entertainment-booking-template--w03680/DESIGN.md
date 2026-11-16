# Design system — CinemaVision Pro Entertainment Booking Template

`SN-W03680` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, cinematic booking hero with a large white sans-serif headline stacked tightly over two lines. Blue fills the primary action, and orange marks the key phrases in the body copy, so the two accents sit at different levels of the page. The product card at the right is a dark panel with a large image area and a price in the corner.

**Mood:** cinematic, bold, polished, commercial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#fb923c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#000000` · `#fb923c` · `#60a5fa` · `#4ade80` · `#d1d5db` · `#facc15` · `#f97316` · `#bfdbfe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** SF Pro Display
- **Body:** SF Pro Display
- **Loaded families:** SF Pro Display, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 24px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="apple-glass hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-2xl font-medium text-lg flex items-center justify-center font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #fb923c;
  --font-display: "SF Pro Display", sans-serif;
  --font-body: "SF Pro Display", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#fb923c',
  },
  fontFamily: { display: ['SF Pro Display'], sans: ['SF Pro Display'] },
} }
```

## Do and don't

- **Do:** Use the blue (#3b82f6) for the primary button only
- **Do:** Set key phrases in the orange (#fb923c) inside body copy, not in headings
- **Do:** Keep the headline large, white and tightly leaded
- **Don't:** Don't use the orange for buttons
- **Don't:** Don't place light cards on the dark hero
- **Don't:** Don't add more than one emphasised phrase per sentence

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
