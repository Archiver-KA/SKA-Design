# Design system — All purpose carpet & tile cleaning

`SN-W03803` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, airy page on a warm off-white ground, with a large serif headline in dark navy (#1a2332) whose final phrase is set in italic blue (#21a0d3). A quote form sits in a white card on the right, with a dark navy submit button, while the hero's primary button is solid blue. Serif display type paired with clean form fields keeps the page warm and practical.

**Mood:** warm, practical, airy, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f6f3` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a2332` | Headings and primary copy |
| Muted text | `#6c7a8c` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#21a0d3` | Primary action and highlights |

Palette by frequency of use: `#21a0d3` · `#ffffff` · `#1a2332` · `#6c7a8c` · `#f8f6f3` · `#9ca3af` · `#e5e7eb` · `#f3f4f6` · `#2c3e50` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Montserrat
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 30px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#21A0D3] text-white rounded-md hover:bg-[#1C86B0] transition-all shadow-sm hover:shadow">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Stats band (`stats`)
7. Testimonials (`testimonials`)
8. Schedule (`schedule-agenda`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f6f3;
  --color-surface: #ffffff;
  --color-text: #1a2332;
  --color-muted: #6c7a8c;
  --color-border: #f3f4f6;
  --color-accent: #21a0d3;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f6f3',
    surface: '#ffffff',
    ink: '#1a2332',
    muted: '#6c7a8c',
    line: '#f3f4f6',
    accent: '#21a0d3',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the headline in Cormorant Garamond at a large size, in navy (#1a2332), with the final phrase in italic blue (#21a0d3).
- **Do:** Use blue (#21a0d3) for the primary button and the italic phrase only.
- **Do:** Keep the quote form in a white card with a dark navy submit button.
- **Don't:** Don't place the quote form on a blue background.
- **Don't:** Don't add a second accent colour to the hero.
- **Don't:** Don't set form labels in italic.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
