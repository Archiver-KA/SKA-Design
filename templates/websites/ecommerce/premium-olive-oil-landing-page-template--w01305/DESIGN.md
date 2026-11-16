# Design system — Premium Olive Oil Landing Page Template

`SN-W01305` · ecommerce · light mode · Sinera Atlas theme `market` · language `pt`

## Direction

A premium olive oil page on a cream ground (#f8f4ed), with a dark green outline button in the header and a deep green hero field (#2d4a22). The look is modest: a small serif wordmark, a quiet uppercase nav, and a dark green photographic ground in place of imagery.

**Mood:** heritage, quiet, premium, earthy, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f4ed` | Page ground |
| Surface | `#8b7355` | Cards, panels, raised areas |
| Text | `#1e1e15` | Headings and primary copy |
| Muted text | `#2c2c2a` | Secondary copy, captions |
| Border | `#8b7355` | Hairlines, dividers, outlines |
| Accent | `#1a2e14` | Primary action and highlights |
| Second accent | `#c9a84c` | Supporting highlights |

Palette by frequency of use: `#1a2e14` · `#8b7355` · `#c9a84c` · `#f8f4ed` · `#ffffff` · `#6b6b5e` · `#2d4a22` · `#2c2c2a` · `#2a2a20` · `#1e1e15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** var(--font-sans)
- **Loaded families:** Playfair Display, Lato
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_rgba(201,168,76,0.8)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full bg-[#1A2E14] text-[#F8F4ED] py-4 font-medium hover:bg-[#2D4A22] transition-colors flex justify-center items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8f4ed;
  --color-surface: #8b7355;
  --color-text: #1e1e15;
  --color-muted: #2c2c2a;
  --color-border: #8b7355;
  --color-accent: #1a2e14;
  --color-accent-2: #c9a84c;
  --font-display: "Playfair Display", serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f4ed',
    surface: '#8b7355',
    ink: '#1e1e15',
    muted: '#2c2c2a',
    line: '#8b7355',
    accent: '#1a2e14',
    accent2: '#c9a84c',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Keep the header on the cream ground (#f8f4ed) with a dark green outline button at the right
- **Do:** Use the deep green (#2d4a22) for full-bleed hero fields behind type
- **Do:** Set the wordmark in a small serif in dark green
- **Don't:** Don't use the gold (#c9a84c) as a page background; it is an accent only
- **Don't:** Don't use the brown (#8b7355) for buttons.
- **Don't:** Don't add a second accent colour beside the deep green.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
