# Design system — Package Tracking App Landing Page Template

`SN-W00622` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A close relative of the parcel app page: one violet (#7847cb) hero panel, a white headline and phone screens bleeding off the right edge. The phone screens show a map with a dashed route rather than a list, so the illustration is about movement. Plus Jakarta Sans and black store buttons keep the page plain.

**Mood:** bold, map-led, violet-block, friendly, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#7847cb` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#7847cb` · `#ffffff` · `#171717` · `#737373` · `#a3a3a3` · `#e5e5e5` · `#f5f5f5` · `#fafafa` · `#000000` · `#f8f8fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-[#111111] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Map / location (`map-location`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #7847cb;
  --color-accent-2: #ffedd5;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#7847cb',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Keep violet (#7847cb) to the hero panel with white headline type
- **Do:** Use a map with a dashed route as the main phone screen
- **Do:** Set headlines in Plus Jakarta Sans and place black store buttons under the copy
- **Don't:** Don't add a second violet block further down the page
- **Don't:** Don't use violet type on the white sections
- **Don't:** Don't crop the phone screens so the route is hidden

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
