# Design system — Digitally, Template for Digital Marketing Services

`SN-W01558` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm beige ground (#e9e5dc) with white cards and one orange (#f97316) accent for the key headline word and the primary button. Inter is set large and tight in the hero, and a near-black dashboard-style card with a soft glow sits beside the copy to show the product. The warm neutral and one hot accent make the page feel friendly and data-led.

**Mood:** warm, friendly, data-led, clean, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e9e5dc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#151515` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#e5e7eb` · `#6b7280` · `#111827` · `#030712` · `#9ca3af` · `#111111` · `#fff7ed` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Sora
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`
- **Content width:** `max-w-[78rem]`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-sans text-sm font-normal text-white shadow-[0_12px_30px_rgba(249,115,22,0.24)] transition hover:-translate-y-0.5 hover:bg-orange-600 ds-btn icon-nudge">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Video / media (`video-media`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e9e5dc;
  --color-surface: #ffffff;
  --color-text: #151515;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e9e5dc',
    surface: '#ffffff',
    ink: '#151515',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#f97316) only on the key headline word and the primary button
- **Do:** Set the page ground in warm beige (#e9e5dc) with white cards on top
- **Do:** Show product UI as dark rounded cards with a soft glow
- **Don't:** Don't place the green (#10b981) beside the orange; it is a secondary tone
- **Don't:** Don't put the orange behind body text
- **Don't:** Don't flatten the dark product cards into light panels, since the contrast is the point

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
