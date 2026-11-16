# Design system — AI Video Gift Landing Page Template

`SN-W00179` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

Deep green page (#284239) with cream type (#fdfcf8) and a large Playfair Display headline that runs over several short lines. The mood is romantic and crafted, with a plain sans-serif for navigation and body copy beneath the serif. Large rounded corners on the cards and image frames echo the soft, gift-like subject.

**Mood:** romantic, crafted, warm, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#284239` | Page ground |
| Surface | `#fdfcf8` | Cards, panels, raised areas |
| Text | `#fdfcf8` | Headings and primary copy |
| Muted text | `#314f44` | Secondary copy, captions |
| Border | `#284239` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#284239` · `#ffffff` · `#fdfcf8` · `#000000` · `#314f44` · `#ef4444` · `#f4dabf` · `#ebd0b5` · `#e5e7eb` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 104px · h2 48px · h3 24px · body 16px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-[0_30px_60px_rgba(0,0,0,0.4)]`
- **Content width:** `max-w-[90rem]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="bg-[#F4DABF] text-[#284239] text-base lg:text-lg font-normal rounded-full px-8 py-4 w-max hover:bg-[#ebd0b5] transition-transform hover:scale-[1.02] flex items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #284239;
  --color-surface: #fdfcf8;
  --color-text: #fdfcf8;
  --color-muted: #314f44;
  --color-border: #284239;
  --color-accent: #ef4444;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#284239',
    surface: '#fdfcf8',
    ink: '#fdfcf8',
    muted: '#314f44',
    line: '#284239',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display in cream (#fdfcf8) on the deep green ground
- **Do:** Keep the page on deep green (#284239) and use cream for all text
- **Do:** Use large rounded corners on cards and image frames, as in the hero
- **Don't:** Don't set display type in a sans-serif; the serif is what carries the warmth
- **Don't:** Don't add bright colour accents; the palette is green and cream
- **Don't:** Don't use a white page background; the green ground is the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
