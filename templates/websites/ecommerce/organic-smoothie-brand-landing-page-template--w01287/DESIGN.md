# Design system — Organic Smoothie Brand Landing Page Template

`SN-W01287` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm, bold nutrition page on a cream-to-peach hero with charcoal type (#2f2e2e). The headline is heavy, all-caps Inter with a pale yellow (#f9db79) highlight bar under one key word, and a serif italic quote sits below it. A ring of circular text and a small stat card add energy around the product.

**Mood:** bold, fresh, playful, energetic, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2f2e2e` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#f9db79` | Primary action and highlights |

Palette by frequency of use: `#2f2e2e` · `#ffffff` · `#f9db79` · `#9ca3af` · `#6b7280` · `#f3f4f6` · `#4b5563` · `#000000` · `#fdf1ec` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Caveat, Montserrat, Inter
- **Scale (largest breakpoint):** h1 120px · h2 60px · h3 30px · body 14px
- **Weights in use:** bold, black, extrabold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-[95%]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="px-5 py-2 rounded-full text-xs font-heading font-bold text-gray-500 hover:text-[#2F2E2E] hover:bg-white/50 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #2f2e2e;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #f9db79;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#2f2e2e',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#f9db79',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans at very large size in #2f2e2e
- **Do:** Use the yellow (#f9db79) as a highlight bar under one key word per headline
- **Do:** Pair the big sans headline with a smaller serif italic quote
- **Don't:** Don't use yellow for text; it is a highlight only
- **Don't:** Don't add more than one circular text ring per hero
- **Don't:** Don't set body copy in all caps

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
