# Design system — OBLIQ Fashion Portfolio Template

`SN-W02144` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An experimental garment studio on a warm off-white ground (#f4f1ec) with near-black text and a serif wordmark. Red-orange (#ff3b0f) is used sparingly for live status: a small dot, a 'Drop 01 live' label and a large circular shape rising from the bottom edge. Tracked uppercase metadata runs along the top bar, and the hero is left open for a large product image, so the page reads as a fashion lookbook.

**Mood:** experimental, minimal, fashion, warm, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f1ec` | Page ground |
| Text | `#0a0a0a` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff3b0f` | Primary action and highlights |

Palette by frequency of use: `#ff3b0f` · `#ffffff` · `#000000` · `#0a0a0a` · `#f4f1ec` · `#1a0d07`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Inter Tight
- **Scale (largest breakpoint):** h1 176px · h2 160px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[110rem]`, `max-w-[16rem]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group flex items-center justify-between gap-4 border-b border-white/20 px-6 py-8 transition-colors hover:bg-[#0A0A0A] sm:border-b-0 sm:border-r">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Marquee (`marquee`)
6. Call to action (`cta`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f4f1ec;
  --color-text: #0a0a0a;
  --color-border: #ffffff;
  --color-accent: #ff3b0f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f1ec',
    ink: '#0a0a0a',
    line: '#ffffff',
    accent: '#ff3b0f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground warm off-white (#f4f1ec) with near-black type.
- **Do:** Use red-orange (#ff3b0f) only for live status labels and one shape per screen.
- **Do:** Set the top bar as tracked uppercase metadata separated by thin rules.
- **Don't:** Don't swap the warm ground for pure white; the cream tone is the base.
- **Don't:** Don't use the red-orange for body text or buttons.
- **Don't:** Don't add shadows to the circular shape; it is flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
