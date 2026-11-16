# Design system — Corporate Wellness & Events Landing Page Template

`SN-W02339` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A plain corporate wellness page on white with near-black serif headlines and grey supporting text. The primary button is a deep red pill with white text, the only colour on the first screen, and the secondary is a pale outline. Headlines are large and centred, and the page relies on type and one red call to action rather than imagery.

**Mood:** plain, corporate, direct, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#ffedd5` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f5f5f5` · `#171717` · `#262626` · `#e5e5e5` · `#525252` · `#404040` · `#737373` · `#fafafa` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, 0.75rem, 0.875rem, 1rem, 1.125rem
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white border border-neutral-200 text-neutral-800 px-5 py-2.5 rounded-full text-sm font-medium hover:border-neutral-300 transition-all flex items-center gap-2 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Team (`team`)
5. About (`about`)
6. Stats band (`stats`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #262626;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #ffedd5;
  --color-accent-2: #c084fc;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#262626',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#ffedd5',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the deep red primary button as the single colour point on each screen.
- **Do:** Centre headlines in a large serif with a short grey sub-line beneath.
- **Do:** Keep the secondary action as a pale outlined pill beside the primary.
- **Don't:** Don't add a second strong colour; the page relies on one red action.
- **Don't:** Don't add purple or pale orange; the page uses one red action.
- **Don't:** Don't set headlines in a sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
