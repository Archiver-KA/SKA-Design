# Design system — Agriculture FMCG Landing Page Template

`SN-W03799` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A grey-toned hero with centred white sans-serif headlines, where the second line is set in cream italic (#e8d9b5). A cream button and an outlined button sit beneath the copy, and a deep green (#2f5d50) marks the top-right call to action. Two small stat cards overlap the bottom of the hero, giving the page a sober, trustworthy finish.

**Mood:** sober, trustworthy, warm, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f6f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#2f5d50` | Primary action and highlights |
| Second accent | `#e8d9b5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2f5d50` · `#1f2937` · `#e8d9b5` · `#6b7280` · `#000000` · `#f3f4f6` · `#4b5563` · `#f8f6f2` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 14px
- **Weights in use:** semibold, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#2F5D50] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#23473d] transition-all duration-200 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Product grid (`product-grid`)
6. Call to action (`cta`)
7. Logo cloud (`logo-cloud`)
8. Stats band (`stats`)
9. Comparison (`comparison`)
10. Video / media (`video-media`)
11. Articles (`blog-articles`)
12. Contact form (`contact-form`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f6f2;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #2f5d50;
  --color-accent-2: #e8d9b5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f6f2',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#2f5d50',
    accent2: '#e8d9b5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline in white, with the second line in cream italic (#e8d9b5).
- **Do:** Use the cream fill (#e8d9b5) for the primary button and deep green (#2f5d50) for the top navigation action.
- **Do:** Keep stat cards translucent and overlapping the bottom edge of the hero.
- **Don't:** Don't place the cream italic on a light background.
- **Don't:** Don't use bright blue or bright green beyond the deep green.
- **Don't:** Don't left-align the centred hero block.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
