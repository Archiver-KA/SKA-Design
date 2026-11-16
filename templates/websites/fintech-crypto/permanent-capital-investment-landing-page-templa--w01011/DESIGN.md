# Design system — Permanent Capital Investment Landing Page Template

`SN-W01011` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark institutional investment page on near-black navy (#030308), with a sans-serif headline whose second clause is set in a lavender-to-indigo gradient. Soft coloured glows sit in the hero corners, and content sections use thin-bordered panels rather than filled cards. The result is measured and private, with indigo (#6366f1) as the key accent.

**Mood:** measured, private, dark, institutional, atmospheric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030308` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#000000` · `#6366f1` · `#f43f5e` · `#cbd5e1` · `#0f172a` · `#3b82f6` · `#4f46e5` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-glass`, `shadow-glow`, `shadow-[0_0_50px_-12px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Comparison (`comparison`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030308;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030308',
    surface: '#0f172a',
    ink: '#cbd5e1',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline clause with the indigo gradient, keeping the first clause in white.
- **Do:** Use thin-bordered panels for sections rather than filled cards.
- **Do:** Keep the glows to the hero corners only, in indigo (#6366f1) and rose (#f43f5e).
- **Don't:** Don't use the rose for buttons or links.
- **Don't:** Don't add a light section into the dark page.
- **Don't:** Don't use drop shadows on the panels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
