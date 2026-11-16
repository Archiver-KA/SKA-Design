# Design system — PC Computer Shop E-commerce Landing Page Template

`SN-W01293` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, technical hardware page on near-black (#0a0a0a) with a large white Inter headline and grey supporting copy. A small indigo (#6366f1) badge and a glowing blue photograph of cooling fans carry the colour, while the primary action is a white pill. Rounded tiles in a bento grid make the page feel like a tech showroom.

**Mood:** dark, technical, modern, precise, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#a3a3a3` · `#737373` · `#000000` · `#171717` · `#0a0a0a` · `#262626` · `#404040` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="h-10 px-6 rounded bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#ffffff',
    accent: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in large white Inter, tightly spaced, on near-black (#0a0a0a)
- **Do:** Use indigo (#6366f1) for small badges and status tags only
- **Do:** Make the primary button a white pill and the secondary a dark outlined pill
- **Don't:** Don't use indigo for large fills; it is a tag colour
- **Don't:** Don't set grey body copy darker than #737373 on the dark ground
- **Don't:** Don't add more than one glow photograph per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
