# Design system — SynAppLink AI Notepad Landing Page Template

`SN-W00755` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm near-black hero (#141311) with a bold white Inter headline stacked over three lines on the left and a large, dimmed app screenshot behind it. Orange (#f97316) fills the primary button and the logo mark, with a dark outline button beside it. Floating stat cards and a soft glow layer over the screenshot, so the image reads as depth rather than content.

**Mood:** warm, bold, product-led, layered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#141311` | Page ground |
| Surface | `#181614` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#c9c5be` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#181614` · `#e5e7eb` · `#1c1a18` · `#22c55e` · `#ef4444` · `#f97316` · `#3b82f6` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.1em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(217,119,54,0.4)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black text-base font-normal hover:bg-gray-200 transition-colors font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Pricing (`pricing`)
5. Feature grid (`features`)
6. About (`about`)
7. Integrations (`integrations`)
8. FAQ (`faq`)
9. Testimonials (`testimonials`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #141311;
  --color-surface: #181614;
  --color-text: #ffffff;
  --color-muted: #c9c5be;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#141311',
    surface: '#181614',
    ink: '#ffffff',
    muted: '#c9c5be',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter bold at large size, left-aligned, in white
- **Do:** Use the orange (#f97316) only for the primary button and logo mark
- **Do:** Place dimmed product screenshots behind the hero text with floating stat cards on top
- **Don't:** Don't set body copy at full white on the warm ground; use the muted tone (#c9c5be)
- **Don't:** Don't make the screenshot brighter than the headline
- **Don't:** Don't add a second filled button colour in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
