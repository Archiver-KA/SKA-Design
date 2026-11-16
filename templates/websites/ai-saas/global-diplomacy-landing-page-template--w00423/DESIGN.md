# Design system — Global Diplomacy Landing Page Template

`SN-W00423` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy page with a single warm amber accent (#f59e0b), carried by the second headline word and the small tag above it. The headline is a large white sans, and the square white button beneath gives a plain, official tone. Muted grey sets the supporting copy beside a thin left rule. The page is low-key, with no decoration in the background beyond a faint texture.

**Mood:** official, dark, restrained, serious, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050a14` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#fbbf24` · `#050a14` · `#a1a1aa` · `#000000` · `#52525b` · `#71717a` · `#1e293b` · `#fef3c7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-amber-500 text-black px-6 py-3 rounded text-xs font-semibold tracking-widest hover:bg-amber-400 transition-all uppercase">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050a14;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #52525b;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050a14',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#52525b',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use amber (#f59e0b) only for the second headline word and the small tag
- **Do:** Keep the primary button a square-cornered white block
- **Do:** Set supporting copy in muted grey beside a thin left rule
- **Don't:** Don't use the amber as a button fill
- **Don't:** Don't add ornament to the background; the navy stays plain
- **Don't:** Don't round the corners of the primary button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
