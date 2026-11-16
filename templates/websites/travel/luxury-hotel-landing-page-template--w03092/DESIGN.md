# Design system — Luxury Hotel Landing Page Template

`SN-W03092` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The opening screen sets the name WALIA large in a white serif over a flat grey-green field, with SUITES in a pale sans-serif offset to the right. The page uses a lavender ground (#e6e6fa), dark text (#333333), a gold accent (#a4863d) and a deep green secondary (#0e300e).

**Mood:** staged, understated, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e6e6fa` | Page ground |
| Text | `#333333` | Headings and primary copy |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#a4863d` | Primary action and highlights |
| Second accent | `#0e300e` | Supporting highlights |

Palette by frequency of use: `#a4863d` · `#e6e6fa` · `#333333` · `#0e300e` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Playfair Display, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 24px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="p-2 border border-[#E6E6FA]/20 rounded-full hover:bg-[#A4863D] hover:text-[#0E300E] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Services (`services`)
3. Listings (`listings`)
4. Pricing (`pricing`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e6e6fa;
  --color-text: #333333;
  --color-border: #333333;
  --color-accent: #a4863d;
  --color-accent-2: #0e300e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e6e6fa',
    ink: '#333333',
    line: '#333333',
    accent: '#a4863d',
    accent2: '#0e300e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a white serif over a flat field
- **Do:** Use the gold (#a4863d) as the accent, not for large areas
- **Do:** Keep the deep green (#0e300e) as the secondary accent
- **Don't:** Don't mix the lavender ground with the grey-green field
- **Don't:** Don't set the wordmark in sans-serif; use a serif
- **Don't:** Don't add decoration beyond the gradient fills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
