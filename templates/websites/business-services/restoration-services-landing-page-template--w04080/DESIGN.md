# Design system — Restoration Services Landing Page Template

`SN-W04080` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A split hero with a dark left panel carrying a heavy white headline and a red primary button, beside a pale grey photographic area on the right. Red is the sole accent, used for the brand's second word, the eyebrow label and the main quote button. The white navigation bar stays light across the top, so the page reads as direct and reassuring.

**Mood:** direct, sturdy, reassuring, clear, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#525252` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#b91c1c` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#b91c1c` · `#f5f5f5` · `#737373` · `#525252` · `#e5e5e5` · `#fafafa` · `#fee2e2` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-red-900/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-red-700 hover:bg-red-800 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Team (`team`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #525252;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #b91c1c;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#525252',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#b91c1c',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline heavy and white on the dark panel
- **Do:** Use the red (#b91c1c) for the brand's second word, the eyebrow label and the main button
- **Do:** Set the phone number in bold dark type beside the navigation button
- **Don't:** Don't set red text on the dark panel
- **Don't:** Don't add extra accent colours to the navigation
- **Don't:** Don't remove the split layout; the contrast between the dark panel and the light side sets the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
