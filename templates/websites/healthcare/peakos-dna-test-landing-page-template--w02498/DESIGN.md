# Design system — PeakOS DNA Test Landing Page Template

`SN-W02498` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bright, centred product hero on white with a soft lavender-blue wash at the top right and one indigo word in the headline. The headline is near-black bold sans, and the word 'genes' is set in indigo (#4f46e5) to carry the hook. A solid blue pill button sits under two lines of grey copy, so the page reads as clean and medical-tech.

**Mood:** bright, clean, clinical, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#eef2ff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#6366f1` · `#4f46e5` · `#3b82f6` · `#27272a` · `#a1a1aa` · `#52525b` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-indigo-500/5`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-zinc-900 rounded-full hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. About (`about`)
5. Pricing (`pricing`)
6. Feature grid (`features`)
7. Stats band (`stats`)
8. Team (`team`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #eef2ff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #4f46e5;
  --color-accent-2: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#eef2ff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#4f46e5',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one word in each headline in indigo (#4f46e5) for emphasis
- **Do:** Use the solid blue pill button as the only primary action in the hero
- **Do:** Keep the soft lavender gradient in the corners, not behind text
- **Don't:** Don't use red (#dc2626) in the layout.
- **Don't:** Don't run headlines past two lines
- **Don't:** Don't use a dark hero; the page is light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
