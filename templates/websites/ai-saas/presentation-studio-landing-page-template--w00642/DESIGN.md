# Design system — Presentation Studio Landing Page Template

`SN-W00642` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A stark light page built on one oversized lowercase headline, set right-aligned at about 160px. The type is near-black (#171717) on a faint grey gradient, and a small cobalt dot (#0055ff) marks availability at the bottom left.

**Mood:** stark, editorial, oversized, lowercase, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#0055ff` | Primary action and highlights |

Palette by frequency of use: `#0055ff` · `#171717` · `#e5e5e5` · `#ffffff` · `#a3a3a3` · `#737373` · `#fafafa` · `#f5f5f5` · `#525252` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 160px · h2 48px · h3 24px · body 16px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.02)]`, `shadow-[0_8px_30px_rgba(0,85,255,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="bg-[#0055FF] text-white px-8 py-4 rounded-full text-sm font-normal hover:bg-blue-600 transition-colors inline-flex items-center gap-2 group shadow-lg shadow-[#0055FF]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Logo cloud (`logo-cloud`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #0055ff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#0055ff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in lowercase at very large size, right-aligned, near-black (#171717) on near-white
- **Do:** Use the cobalt (#0055ff) only for small status markers
- **Do:** Keep body copy small, grey and right-aligned under the headline
- **Don't:** Don't add colour blocks; the page is black on near-white
- **Don't:** Don't put the cobalt on large type
- **Don't:** Don't add decorative imagery; the type is the design

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
