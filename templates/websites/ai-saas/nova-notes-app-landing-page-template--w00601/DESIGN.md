# Design system — Nova Notes App Landing Page Template

`SN-W00601` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark notes landing page on a near-black navy ground with a large white headline and a solid violet primary button. Violet glows and violet icon tiles run through the hero, and a calendar and note list sit below as the product preview. Colour is limited to violet on a cool black, so the page feels focused and quiet rather than loud.

**Mood:** focused, dark, quiet, violet-tinted, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a12` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8b5cf6` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#e2e8f0` · `#cbd5e1` · `#8b5cf6` · `#475569` · `#4f46e5` · `#171717` · `#d4d4d8` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-violet-900/25`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5 border border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Articles (`blog-articles`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a12;
  --color-surface: #171717;
  --color-text: #f4f4f5;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #8b5cf6;
  --color-accent-2: #8b5cf6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a12',
    surface: '#171717',
    ink: '#f4f4f5',
    muted: '#475569',
    line: '#ffffff',
    accent: '#8b5cf6',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to near-black navy (#0a0a12) with white headlines (#f4f4f5).
- **Do:** Use the solid violet (#8b5cf6) for the primary button and the icon tiles only.
- **Do:** Keep the product preview below the fold as a dark card with thin borders.
- **Don't:** Don't use the pale grey (#e2e8f0) as the accent; it is only a text tint.
- **Don't:** Don't add a second saturated colour to the hero; the violet is the only one.
- **Don't:** Don't use large blurred glows behind body text; keep glows behind the hero visual.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
