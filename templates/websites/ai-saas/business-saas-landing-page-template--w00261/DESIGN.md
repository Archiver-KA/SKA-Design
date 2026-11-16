# Design system — Business SaaS Landing Page Template

`SN-W00261` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A dark, editorial business-platform hero: a near-black warm ground (#1c1917) with large uppercase white serif headlines and a grey subline. The primary action is a white outlined pill, and the page keeps to white and warm grey with no bright accent. The result is formal and quiet rather than a startup launch.

**Mood:** formal, quiet, monochrome, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#b08d6a` · `#78716c` · `#e7e5e4` · `#a8a29e` · `#d6d3d1` · `#fafaf9` · `#f5f5f4` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 14px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-stone-900/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="sm:mt-4 inline-flex items-center justify-center gap-2 sm:px-6 sm:py-3.5 hover:bg-stone-50 hover:border-stone-300 transition-colors uppercase text-xs font-normal text-stone-700 tracking-widest bg-white w-full border-stone-200 border rounded-full mt-6 pt-3 pb-3 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Dashboard preview (`dashboard-preview`)
5. About (`about`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #1c1917;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#1c1917',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase serif in white on near-black (#1c1917)
- **Do:** Use white pill buttons for the primary and nav actions
- **Do:** Keep the subline in warm grey (#a8a29e) below the headline
- **Don't:** Don't add a bright accent colour such as the bronze (#b08d6a)
- **Don't:** Don't set body copy in the display serif; it is for headlines only
- **Don't:** Don't use drop shadows on the pills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
