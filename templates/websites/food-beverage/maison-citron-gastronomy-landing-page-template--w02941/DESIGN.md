# Design system — Maison Citron Gastronomy Landing Page Template

`SN-W02941` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A warm, airy pastry-shop page on an off-white ground (#f9f8f6) with a near-black serif headline and a bright yellow pill button (#eab308) as the single colour. Tracked uppercase sans marks the wordmark and nav, and body copy sits in a soft grey. The serif headline and generous whitespace make the page feel like a bakery menu card.

**Mood:** elegant, warm, airy, artisanal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f8f6` | Page ground |
| Surface | `#eae8e2` | Cards, panels, raised areas |
| Text | `#1c1a17` | Headings and primary copy |
| Muted text | `#8c857d` | Secondary copy, captions |
| Border | `#eae8e2` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |

Palette by frequency of use: `#1c1a17` · `#8c857d` · `#eae8e2` · `#656058` · `#f9f8f6` · `#a39d95` · `#dedbd4` · `#000000` · `#ffffff` · `#3a2d25`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 112px · h2 60px · h3 30px · body 20px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-6`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center hover:bg-[#3A2D25] transition-all duration-300 text-base font-light text-white tracking-wide bg-yellow-500 rounded-full px-10 py-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Process / steps (`how-it-works`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9f8f6;
  --color-surface: #eae8e2;
  --color-text: #1c1a17;
  --color-muted: #8c857d;
  --color-border: #eae8e2;
  --color-accent: #eab308;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f8f6',
    surface: '#eae8e2',
    ink: '#1c1a17',
    muted: '#8c857d',
    line: '#eae8e2',
    accent: '#eab308',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a dark serif on the off-white ground
- **Do:** Use the yellow (#eab308) pill button for the primary action only
- **Do:** Keep the nav in tracked uppercase sans and the body in a muted grey
- **Don't:** Don't use yellow for text or large fills
- **Don't:** Don't add shadows to cards; the page is flat
- **Don't:** Don't use a sharp-cornered button; the pill shape is part of the style

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
