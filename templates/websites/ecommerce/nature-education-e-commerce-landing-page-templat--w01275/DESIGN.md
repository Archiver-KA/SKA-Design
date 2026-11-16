# Design system — Nature Education E-commerce Landing Page Template

`SN-W01275` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A soft, storybook landing page on cream (#fff8f0) with forest-green (#2d5016) headlines and buttons. The key phrase in the headline is set in italic gold-brown (#8b6914), a single typographic accent that adds warmth without a second colour block. Rounded pill buttons and a wide framed calendar image make the page friendly for families.

**Mood:** warm, playful, nature-led, gentle, family-friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff8f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d5016` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2d5016` | Primary action and highlights |
| Second accent | `#8b6914` | Supporting highlights |

Palette by frequency of use: `#2d5016` · `#8b6914` · `#fff8f0` · `#ffffff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 30px · body 18px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#2D5016] text-[#FFF8F0] text-sm font-medium hover:opacity-90 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Video / media (`video-media`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fff8f0;
  --color-surface: #ffffff;
  --color-text: #2d5016;
  --color-border: #ffffff;
  --color-accent: #2d5016;
  --color-accent-2: #8b6914;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff8f0',
    surface: '#ffffff',
    ink: '#2d5016',
    line: '#ffffff',
    accent: '#2d5016',
    accent2: '#8b6914',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlighted headline phrase in italic gold-brown (#8b6914)
- **Do:** Use forest green (#2d5016) for headlines and the primary pill button
- **Do:** Keep the page on the cream ground (#fff8f0), with white for cards
- **Don't:** Don't use cool greys; all neutrals are warm
- **Don't:** Don't put more than one gold phrase in a headline
- **Don't:** Don't use square buttons; CTAs are rounded pills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
