# Design system — Physio & Pilates App Landing Page Template

`SN-W02667` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A warm, muted hero with a white serif headline centred over a grey-taupe photographic ground. The terracotta (#c06c4e) buttons are the only saturated colour, and the nav and CTA use the same tone. Serif headlines set in regular weight give a calm, spa-like feel, while small sans-serif buttons keep the actions clear. The layout is centred and generous.

**Mood:** warm, calm, spa-like, muted, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#78716c` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#292524` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#c06c4e` | Primary action and highlights |

Palette by frequency of use: `#f5ecdf` · `#c06c4e` · `#ffffff` · `#1c1917` · `#292524` · `#000000` · `#78716c` · `#cc6343` · `#57534e` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Lato
- **Loaded families:** Lato, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 18px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="bg-[#C06C4E] hover:bg-[#a85a3f] text-white text-sm font-medium tracking-widest uppercase px-6 py-3 rounded-full transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Pricing (`pricing`)
5. Product grid (`product-grid`)
6. Articles (`blog-articles`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #78716c;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #292524;
  --color-border: #f5f5f4;
  --color-accent: #c06c4e;
  --font-display: "Playfair Display", serif;
  --font-body: "Lato", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#78716c',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#292524',
    line: '#f5f5f4',
    accent: '#c06c4e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Set headlines in a regular-weight serif in white over the photograph.
- **Do:** Use terracotta (#c06c4e) for the primary button and the nav CTA only.
- **Do:** Keep the hero centred with two buttons side by side under the copy.
- **Don't:** Don't use the terracotta as a page background; it is for buttons.
- **Don't:** Don't set body copy in the serif.
- **Don't:** Don't put white text on a light part of the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
