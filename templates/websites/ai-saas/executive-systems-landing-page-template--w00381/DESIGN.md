# Design system — Executive Systems Landing Page Template

`SN-W00381` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a large headline in Manrope, centred in two lines, with a silver-to-grey gradient fill on the second line. Violet (#7c3aed) is the single colour and sits on the primary button, while the secondary is a dark outline button. A faint circular vignette behind the hero gives the page a quiet, cinematic focus on the type.

**Mood:** cinematic, dark, focused, austere, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#7c3aed` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#7c3aed` · `#a3a3a3` · `#ef4444` · `#9ca3af` · `#000000` · `#050505` · `#f87171` · `#6b7280` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight-custom`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_10px_#7C3AED]`, `shadow-[0_0_30px_-10px_rgba(124,58,237,0.6)]`, `shadow-[0_0_15px_-5px_#7C3AED]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="btn-shimmer px-8 py-4 bg-electric text-white text-sm font-semibold rounded-sm tracking-wide shadow-[0_0_30px_-10px_rgba(124,58,237,0.6)] border border-electric hover:scale-105 transition-transform duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #7c3aed;
  --color-accent-2: #ef4444;
  --font-display: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#7c3aed',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Manrope'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline large and centred, with a silver-to-grey gradient on the second line.
- **Do:** Use the violet (#7c3aed) only on the primary button.
- **Do:** Keep the secondary button dark with a thin grey outline.
- **Don't:** Don't use the red (#ef4444); the action colour is violet.
- **Don't:** Don't add colour to body copy; it stays grey (#9ca3af).
- **Don't:** Don't add a bright background; the hero stays near black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
