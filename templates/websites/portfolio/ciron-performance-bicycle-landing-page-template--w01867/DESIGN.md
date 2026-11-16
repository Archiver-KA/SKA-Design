# Design system — CIRON Performance Bicycle Landing Page Template

`SN-W01867` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black product page for a performance bicycle, with a large centred white sans headline over a small letter-spaced caption. Numbered uppercase index items run down the left edge in tiny type, and a bicycle wheel fills the lower right as the image. The first screen is black and white.

**Mood:** technical, precise, dark, engineered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0d1110` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9a9f9a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff4f18` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#303833` · `#000000` · `#111827` · `#f7f7f3` · `#ff4f18` · `#9a9f9a` · `#0d1110` · `#dcded9` · `#b9bbb7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Inter, JetBrains Mono, Geist
- **Scale (largest breakpoint):** h1 72px · h2 72px · h3 36px · body 10px
- **Weights in use:** extrabold, bold
- **Letter spacing:** `tracking-[-.045em]`, `tracking-[.22em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_20px_60px_rgba(0,0,0,0.12)]`
- **Content width:** `max-w-3xl`, `max-w-[96rem]`
- **Section padding:** `py-24`, `py-28`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="engineering-cta mt-8 inline-flex rounded-full border border-[#303833]/18 bg-[#303833] px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-black hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Schedule (`schedule-agenda`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Product grid (`product-grid`)
8. Process / steps (`how-it-works`)
9. Timeline (`timeline`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0d1110;
  --color-text: #ffffff;
  --color-muted: #9a9f9a;
  --color-border: #ffffff;
  --color-accent: #ff4f18;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0d1110',
    ink: '#ffffff',
    muted: '#9a9f9a',
    line: '#ffffff',
    accent: '#ff4f18',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in white sans, large and centred, with tight line spacing
- **Do:** Use numbered uppercase index items on a side edge as section markers
- **Do:** Keep the product image as the lower-right anchor on the dark ground
- **Don't:** Don't use the orange (#ff4f18) as a background
- **Don't:** Don't set the numbered index in a bold weight
- **Don't:** Don't set the page on a white ground; the first screen is black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
