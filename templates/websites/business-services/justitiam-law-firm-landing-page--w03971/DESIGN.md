# Design system — Justitiam Law Firm Landing Page 

`SN-W03971` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, premium law-firm page on a near-black ground (#050608) with soft indigo glows behind the centred headline. The headline is a light-weight sans-serif in grey-white, and a white primary button sits beside a translucent outline button. A dark product preview under the hero shows the firm's client tools, so the page presents its software as well as its services.

**Mood:** premium, cool, restrained, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050608` | Page ground |
| Surface | `#0a0c14` | Cards, panels, raised areas |
| Text | `#94a3b8` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#0ea5e9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#64748b` · `#818cf8` · `#6366f1` · `#0ea5e9` · `#c084fc` · `#a855f7` · `#f8f9fc` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** ui-sans-serif
- **Body:** ui-sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(79,70,229,0.3)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-white/10 hover:bg-white/5 transition text-sm text-slate-300 font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Timeline (`timeline`)
6. Process / steps (`how-it-works`)
7. Articles (`blog-articles`)
8. Contact form (`contact-form`)
9. Footer (`footer`)
10. Feature grid (`features`)
11. Dashboard preview (`dashboard-preview`)
12. Comparison (`comparison`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050608;
  --color-surface: #0a0c14;
  --color-text: #94a3b8;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #0ea5e9;
  --font-display: "ui-sans-serif", serif;
  --font-body: "ui-sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050608',
    surface: '#0a0c14',
    ink: '#94a3b8',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#0ea5e9',
  },
  fontFamily: { display: ['ui-sans-serif'], sans: ['ui-sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#050608) with soft indigo glows behind the headline
- **Do:** Set headlines in light-weight sans-serif in grey-white
- **Do:** Pair the white primary button with a translucent outline secondary
- **Don't:** Don't let the glows become saturated; keep them faint
- **Don't:** Don't set headlines in a heavy weight
- **Don't:** Don't place bright panels on the dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
