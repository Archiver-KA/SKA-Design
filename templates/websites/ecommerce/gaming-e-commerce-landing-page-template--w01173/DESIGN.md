# Design system — Gaming E-commerce Landing Page Template

`SN-W01173` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, futuristic accessories page on near-black (#050505) with a very faint grid texture behind the hero. The headline is very large and heavy sans, stepping from grey to pure white across three lines, and a cyan (#06b6d4) pill is the single action colour. A small outlined eyebrow label and a ghost button sit beside it, under a rounded translucent navigation bar.

**Mood:** futuristic, dark, precise, intense

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#0a0a0a` · `#000000` · `#050505` · `#404040` · `#e5e5e5` · `#262626` · `#161616`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Space Grotesk, Geist, Manrope, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 14px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_22px_-6px_rgba(6,182,212,0.35)]`, `shadow-[0_0_18px_-8px_rgba(6,182,212,0.35)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative h-12 px-8 rounded-full bg-trust-500 text-black text-sm font-semibold tracking-tight hover:bg-trust-400 transition-all shadow-[0_0_26px_rgba(6,182,212,0.35)] hover:shadow-[0_0_34px_rgba(6,182,212,0.55)] flex items-center gap-2 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Product grid (`product-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#06b6d4',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use cyan (#06b6d4) for the primary button and for small glowing details only.
- **Do:** Set the hero headline in very large heavy sans, stepping from grey to white across the lines.
- **Do:** Keep the faint grid texture behind the hero and use translucent panels for the navigation.
- **Don't:** Don't add cyan to body text; it is for actions and details.
- **Don't:** Don't set the page on a light ground; the style depends on near-black.
- **Don't:** Don't use more than one bright accent colour on a screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
