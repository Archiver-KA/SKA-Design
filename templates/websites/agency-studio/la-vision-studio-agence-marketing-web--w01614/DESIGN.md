# Design system — La vision studio agence marketing web 

`SN-W01614` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A warm-black studio page on near-black brown (#1c1917). A very large uppercase wide sans headline in off-white runs off the frame edge, so the type reads as texture, and small floating cards sit over it: a grey portrait tile on the left and a dashboard card on the right. The palette stays in warm neutrals with almost no saturated colour.

**Mood:** editorial, warm, dark, expressive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#0c0a09` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b08d6a` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#b08d6a` · `#1c1917` · `#d6d3d1` · `#78716c` · `#a8a29e` · `#e7e5e4` · `#57534e` · `#10b981` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 12px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-stone-900/5`, `shadow-[0_0_5px_rgba(16,185,129,0.8)]`
- **Content width:** `max-w-[85rem]`, `max-w-[87.5rem]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 bg-white text-stone-900 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-normal tracking-tight hover:bg-stone-200 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Marquee (`marquee`)
6. Services (`services`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #0c0a09;
  --color-text: #f5f5f4;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #b08d6a;
  --color-accent-2: #10b981;
  --font-display: "Oswald", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#0c0a09',
    ink: '#f5f5f4',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#b08d6a',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Oswald'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline very large in uppercase, off-white, allowed to crop at the frame edge
- **Do:** Keep the palette to warm neutrals on near-black (#1c1917) and off-white (#f5f5f4)
- **Do:** Layer small floating cards over the headline with a translucent surface
- **Don't:** Don't add saturated colour to the headline
- **Don't:** Don't place body copy over the cropped headline
- **Don't:** Don't use the dashboard card as a decorative background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
