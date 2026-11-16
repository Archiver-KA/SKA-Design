# Design system — Electria Electrical Services Landing Page Template

`SN-W03884` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, high-contrast electrical page on near-black, with a bright yellow primary button and yellow highlights in the top bar and the call to action. The headline is heavy uppercase sans-serif in white, and the photo sits in a tall rounded panel on the right. Yellow is the only colour on the page, used for calls to action and the logo mark.

**Mood:** bold, industrial, high-contrast, direct, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#000000` · `#9ca3af` · `#f3f4f6` · `#f9fafb` · `#facc15` · `#1f2937` · `#e5e7eb` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Space Grotesk
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 16px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-gray-100`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Logo cloud (`logo-cloud`)
5. FAQ (`faq`)
6. Benefits (`benefits`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f9fafb;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #facc15;
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
    surface: '#f9fafb',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans-serif, white on black
- **Do:** Use the yellow (#facc15) for the primary call to action and the logo mark only
- **Do:** Place the photo in a tall rounded panel with a dark tint
- **Don't:** Don't set body copy in uppercase; only headlines are capitalised
- **Don't:** Don't use a second accent colour beside the yellow
- **Don't:** Don't use a light background in the hero; the black ground is the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
