# Design system — Wealth Management Landing Page Template

`SN-W01065` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A monochrome wealth page is built on a greyscale photograph of tall office towers under a dark overlay, with a very large uppercase headline in white and a second word in grey. Navigation is a thin row of tracked uppercase links, and the call to action is a thin-outlined rectangle. The restraint and the photograph carry the mood, so no colour is needed.

**Mood:** monochrome, austere, premium, still

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#000000` · `#a1a1aa` · `#18181b` · `#09090b` · `#3f3f46` · `#27272a` · `#52525b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 12px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_rgba(255,255,255,0.5)]`
- **Content width:** `max-w-screen-2xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="hidden md:flex group relative overflow-hidden bg-white text-black px-8 py-3 text-xs uppercase tracking-widest font-semibold transition-transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Map / location (`map-location`)
4. Call to action (`cta`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
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
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero photograph in greyscale with a dark overlay
- **Do:** Set the headline in bold uppercase white, with the second word in grey
- **Do:** Use thin-outlined rectangular buttons with tracked uppercase labels
- **Don't:** Don't add a green accent; the page is monochrome.
- **Don't:** Don't use filled buttons in the hero; they stay outlined
- **Don't:** Don't colour the photograph; keep it greyscale

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
