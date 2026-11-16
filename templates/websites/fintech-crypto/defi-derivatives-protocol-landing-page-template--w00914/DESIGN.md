# Design system — DeFi Derivatives Protocol Landing Page Template

`SN-W00914` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark institutional DeFi hero on black, centred and built on contrast. The second headline line carries a blue-to-violet gradient fill, which is the only colour in the first screen. The primary button is white with dark text and the secondary is outlined, and a faint glow sits behind a dark product window below the fold.

**Mood:** institutional, dark, gradient-led, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#94a3b8` · `#64748b` · `#e2e8f0` · `#475569` · `#f1f5f9` · `#000000` · `#cbd5e1` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[380px]`
- **Section padding:** `py-12`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-brand-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Logo cloud (`logo-cloud`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f1f5f9;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #facc15;
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
    surface: '#f1f5f9',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line with the blue-to-violet gradient fill
- **Do:** Keep the primary button white with dark text and the secondary outlined
- **Do:** Keep body copy in muted grey at a comfortable width
- **Don't:** Don't use the gradient on body text or buttons
- **Don't:** Don't add light sections to the hero; the page is dark
- **Don't:** Don't stack more than one gradient headline in a view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
