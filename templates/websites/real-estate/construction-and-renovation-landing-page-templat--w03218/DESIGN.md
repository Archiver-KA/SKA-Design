# Design system — Construction and Renovation Landing Page Template

`SN-W03218` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `it`

## Direction

A centred intro shows a wordmark with RG in white and S.r.l. in orange on a deep navy ground (#0a0d1f), with a short orange rule beneath. The palette is navy, white and orange, with glass panels and gradient fills. The intro is sparse and centred.

**Mood:** minimal, dark, modern, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0d1f` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#0a0d1f` · `#000000` · `#f4f3ef` · `#0e1228` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, ./index.html
- **Scale (largest breakpoint):** h2 48px · h3 48px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/60`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-28`, `py-40`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="cta-btn group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] border border-white/20 rounded-full px-5 py-2.5 hover:bg-white hover:text-[#0a0d1f] transition-all duration-300 will-change-transform">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** GSAP, Lenis smooth scroll, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0d1f;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0d1f',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the navy ground (#0a0d1f) and use white for the wordmark.
- **Do:** Use the orange (#f97316) for one accent word or rule per screen.
- **Do:** Keep the intro centred and sparse, with a single thin rule under the wordmark.
- **Don't:** Don't add colours beyond navy, white and orange; that is the whole palette here.
- **Don't:** Don't use the preloader as a model for the full page layout.
- **Don't:** Don't use a light background; the intro surface is dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
