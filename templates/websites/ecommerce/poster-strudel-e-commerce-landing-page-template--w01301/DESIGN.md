# Design system — Poster Strudel E-Commerce Landing Page Template

`SN-W01301` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, moody art-print page on a deep navy-black ground (#0b1120), with a soft gradient glow behind the hero. The headline is large Outfit in off-white (#eae5dc), and its key word is set in a terracotta gradient (#9c6644) that matches the primary button. A tall framed gallery card on the right is the only object, and small uppercase labels frame the navigation.

**Mood:** moody, dark, gallery, warm, contemporary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b1120` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#eae5dc` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#9c6644` | Primary action and highlights |
| Second accent | `#161f2e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9c6644` · `#eae5dc` · `#0b1120` · `#000000` · `#161f2e` · `#334155` · `#2e4057` · `#c9a688` · `#855639`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_-5px_rgba(156,102,68,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-screen-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-[#9C6644] hover:bg-[#855639] text-white rounded-full font-medium transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(156,102,68,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b1120;
  --color-surface: #000000;
  --color-text: #eae5dc;
  --color-border: #ffffff;
  --color-accent: #9c6644;
  --color-accent-2: #161f2e;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b1120',
    surface: '#000000',
    ink: '#eae5dc',
    line: '#ffffff',
    accent: '#9c6644',
    accent2: '#161f2e',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set the highlighted headline word in terracotta (#9c6644) and the rest in off-white (#eae5dc)
- **Do:** Use terracotta (#9c6644) for the primary button and one highlight per screen
- **Do:** Show the art collection in tall framed cards on the dark ground
- **Don't:** Don't set light grey or white page backgrounds; the ground is navy-black
- **Don't:** Don't add bright colours; the glow is the only atmosphere
- **Don't:** Don't set the headline in a serif; the display type is Outfit

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
