# Design system — Non-profit Donation Landing Page Template

`SN-W03629` · events · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A dark, energetic donation page on a near-black ground, with a bold uppercase sans-serif headline in which the middle lines run into a green gradient. A greyscale sports photograph sits in a dark translucent card beside the copy, carrying a live campaign progress panel. Green is the only accent, used for the gradient words, the primary button and the progress details.

**Mood:** energetic, dark, community-driven, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#10b981` · `#09090b` · `#cbd5e1` · `#18181b` · `#a1a1aa` · `#000000` · `#94a3b8` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-zinc-200 h-10 px-6 py-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #e2e8f0;
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
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold uppercase sans-serif, with the key words in the green gradient (#34d399)
- **Do:** Use the green for the primary button and progress indicators only
- **Do:** Frame photographs in dark translucent cards with a small status label
- **Don't:** Don't use light backgrounds for the hero
- **Don't:** Don't colour the photographs; keep them greyscale
- **Don't:** Don't set body copy in green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
