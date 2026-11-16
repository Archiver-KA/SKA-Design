# Design system — Off-Road E‑Board Landing Page Template

`SN-W01281` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, photographic off-road page: a full-bleed landscape under a black gradient, with white headlines and grey support text. The UI has no colour of its own, so the photograph supplies all the tone, and white pill buttons are the only solid shapes. The headline is large sans-serif, with the second line in muted grey for emphasis.

**Mood:** cinematic, dark, rugged, monochrome, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#71717a` · `#d4d4d8` · `#a1a1aa` · `#f97316` · `#18181b` · `#3f3f46` · `#e4e4e7` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-4`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="text-xs font-medium bg-zinc-100 text-black px-4 py-2 rounded-full hover:bg-zinc-300 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Map / location (`map-location`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
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
    background: '#000000',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline line in white and the second in muted grey (#71717a)
- **Do:** Use full-bleed landscape photography under a dark gradient for hero sections
- **Do:** Keep buttons as white pills with dark text for the primary action, and outlined pills for the ghost action
- **Don't:** Don't add orange or blue accents.
- **Don't:** Don't place text over bright areas of the photo without the dark gradient
- **Don't:** Don't use light page backgrounds for hero or section bands

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
