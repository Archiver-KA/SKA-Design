# Design system — Social Events Landing Page Template

`SN-W03648` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, warm landing page on a cream ground, with a bold sans-serif headline in near-black set in tight, stacked lines. A small pale-yellow pill label sits above it, and a coral filled button leads the actions beside a dark outlined one. The layout splits into copy on the left and a tall, rounded image card on the right with a small floating testimonial over its corner.

**Mood:** warm, friendly, casual, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#ff7a66` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#111827` · `#4b5563` · `#ffffff` · `#1f2937` · `#faf9f6` · `#9ca3af` · `#000000` · `#374151` · `#d1d5db` · `#ff7a66`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-gray-900 text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Booking form (`booking`)
5. Call to action (`cta`)
6. Team (`team`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #ff7a66;
  --color-accent-2: #2563eb;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#ff7a66',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Set the headline in a bold sans-serif in near-black (#111827), tightly stacked
- **Do:** Use the coral (#ff7a66) for the primary button only
- **Do:** Place a small floating testimonial card over the corner of the hero image
- **Don't:** Don't use the coral for headlines or body text
- **Don't:** Don't stack more than one floating card over the hero
- **Don't:** Don't use cool grey backgrounds for sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
