# Design system — Navigation Bar with 3D Tailwind Utilities

`SN-W04243` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark travel landing page on deep navy (#172554) with a faint violet glow behind the headline. The headline is large and white, set in a sans-serif with tight leading, and the primary action is a solid blue button beside a quiet outline button. A tilted product preview rises from the bottom edge, so the page reads as a software product rather than a brochure.

**Mood:** dark, product-led, navy, tight

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#172554` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#60a5fa` · `#d4d4d8` · `#e4e4e7` · `#f4f4f5` · `#000000` · `#172554` · `#3b82f6` · `#93c5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h3 14px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_8px_16px_-4px_rgba(59,130,246,0.3)]`, `shadow-[0_12px_20px_-6px_rgba(59,130,246,0.4)]`, `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="flex w-full items-center gap-2 px-2 py-1.5 rounded-md text-sm text-zinc-300 hover:bg-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #172554;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#172554',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on deep navy (#172554) with white headline text
- **Do:** Use the solid blue button for the primary action and an outline for the second
- **Do:** Set the headline large with tight leading in a sans-serif
- **Don't:** Don't use light backgrounds in the hero; the navy carries the page
- **Don't:** Don't add more than one glow behind the headline
- **Don't:** Don't place body copy over the tilted preview panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
