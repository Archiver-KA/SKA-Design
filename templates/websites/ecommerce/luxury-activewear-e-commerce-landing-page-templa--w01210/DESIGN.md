# Design system — Luxury Activewear E-commerce Landing Page Template

`SN-W01210` · ecommerce · light mode · Sinera Atlas theme `market` · language `es`

## Direction

An editorial, minimal stance: a pale warm-white field with a large tight sans-serif headline in near-black, the last word set in italic, and a thin rule above the short body copy. One near-black pill button is the only action in the hero. A small floating product card in the corner adds a retail cue without colour.

**Mood:** minimal, editorial, warm, tight

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#efece6` | Page ground |
| Surface | `#efece6` | Cards, panels, raised areas |
| Text | `#111110` | Headings and primary copy |
| Muted text | `#1a1917` | Secondary copy, captions |
| Border | `#c8bfb2` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1a1917` · `#c8bfb2` · `#6b6560` · `#efece6` · `#111110` · `#e0dad0` · `#e8e3da` · `#ffffff` · `#8a8480` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 48px · body 14px
- **Weights in use:** light, extralight, thin
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-6`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-[#111110] text-[#EFECE6] px-8 py-4 rounded-full text-xs tracking-widest font-light hover:scale-[1.02] transition-transform duration-500 uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #efece6;
  --color-surface: #efece6;
  --color-text: #111110;
  --color-muted: #1a1917;
  --color-border: #c8bfb2;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#efece6',
    surface: '#efece6',
    ink: '#111110',
    muted: '#1a1917',
    line: '#c8bfb2',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a tight sans-serif at large size, with the final word in italic.
- **Do:** Use the near-black (#111110) pill button as the single call to action.
- **Do:** Keep the warm off-white ground (#efece6) and let the type carry the page.
- **Don't:** Don't add a bright accent colour.
- **Don't:** Don't use the sand (#c8bfb2) as the page background; keep the warm off-white ground.
- **Don't:** Don't place the floating product card over the headline; it sits in the lower right.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
