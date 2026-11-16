# Design system — Plumbing Services Landing Page Template

`SN-W04050` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark slate hero with a photograph under the overlay, carrying a white sans-serif headline and a short grey subhead. Blue (#0767eb) marks the quote and callback actions, and a white pill button sits beside a plain call-now button. The request form on the right is a light card, so the page reads as clear and straightforward.

**Mood:** straightforward, clear, dark, local

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2c313b` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#838483` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0767eb` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0767eb` · `#838483` · `#0a4bbc` · `#6db0e8` · `#2c313b` · `#f1f5f9` · `#e2e8f0` · `#f8fafc` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-[#6DB0E8]/10`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-[#0767EB] hover:bg-[#0A4BBC] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 shadow-lg shadow-[#0767EB]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #2c313b;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #838483;
  --color-border: #ffffff;
  --color-accent: #0767eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2c313b',
    surface: '#f8fafc',
    ink: '#ffffff',
    muted: '#838483',
    line: '#ffffff',
    accent: '#0767eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero overlay dark slate (#2c313b) so white headlines read
- **Do:** Use blue (#0767eb) for the callback and quote buttons
- **Do:** Place the request form on the right in a light card
- **Don't:** Don't use blue for headlines on the dark hero
- **Don't:** Don't remove the star rating line under the buttons
- **Don't:** Don't put the form on a dark card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
