# Design system — Auré Natural Skincare Landing Page Template

`SN-W02705` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Natural skincare page with a white navigation bar sitting above a near-black hero. The headline is a bold serif in white, with a tracked uppercase tagline above it and two pill buttons below, one solid white and one outlined. Contrast is strong and the layout is simple, so the botanical feel comes from the type and the calm, dark field rather than from imagery or green.

**Mood:** clean, botanical, high contrast, simple

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#7f1d1d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#525252` · `#a3a3a3` · `#404040` · `#e5e5e5` · `#262626` · `#f5f5f5` · `#d4d4d4` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[1190px]`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="add-to-cart flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 animate-on-scroll scale-in stagger-8">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)
7. Sidebar (`sidebar`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #e5e5e5;
  --color-accent: #f59e0b;
  --color-accent-2: #7f1d1d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#e5e5e5',
    accent: '#f59e0b',
    accent2: '#7f1d1d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on near-black (#171717) with white bold serif headlines.
- **Do:** Set the tagline in small, widely tracked uppercase above the headline.
- **Do:** Pair a solid white pill with an outlined pill as the hero button pair.
- **Don't:** Don't set the headline in Inter; use the bold serif.
- **Don't:** Don't place a light nav bar over a dark hero without a clear edge.
- **Don't:** Don't add amber (#f59e0b) to the hero; the hero uses white and near-black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
