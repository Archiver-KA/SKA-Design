# Design system — Aether Luxury Horology Landing Page Template

`SN-W02701` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Luxury horology page on a near-black ground (#09090b) with a centred, bold sans headline in white, and a short grey supporting paragraph. Chrome is minimal: a small wordmark, a white pill button in the nav and a single outlined text link as the call to action. The page is almost entirely monochrome, and the tiny emerald status dot is the only colour on the first screen.

**Mood:** austere, monochrome, precise, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#09090b` · `#ffffff` · `#18181b` · `#d4d4d8` · `#27272a` · `#71717a` · `#a1a1aa` · `#e4e4e7` · `#000000` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Quicksand
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-12`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors font-quicksand">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Product detail (`product-detail`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #fafafa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#fafafa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on near-black (#09090b) with centred white headlines in bold sans.
- **Do:** Set supporting copy in the muted grey (#71717a) at a readable size.
- **Do:** Use the emerald (#10b981) only for small status marks, not for buttons or headlines.
- **Don't:** Don't add a bright colour block; the page is monochrome.
- **Don't:** Don't use emerald for the primary call to action.
- **Don't:** Don't add decorative imagery to the hero; the type carries the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
