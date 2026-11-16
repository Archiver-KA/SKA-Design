# Design system — Crescent Dental Harrogate

`SN-W02340` · healthcare · light mode · Sinera Atlas theme `calm` · language `en-GB`

## Direction

A clean, friendly dental page on white with black sans headlines, and a bright lime green (#97e45d) used for the logo, the primary button and a highlight under the key phrase. The layout is airy, with a rounded photo frame on the right and a floating service card. Lime is kept to small, saturated moments, so the page feels fresh rather than clinical.

**Mood:** fresh, friendly, clean, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#111827` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#97e45d` | Primary action and highlights |

Palette by frequency of use: `#97e45d` · `#ffffff` · `#111827` · `#4b5563` · `#e5e7eb` · `#000000` · `#f9fafb` · `#d1d5db` · `#9ca3af` · `#7ab848`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-gray-200/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-black transition-all duration-200 bg-[#97E45D] border border-transparent rounded-full hover:bg-[#86cf50] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#97E45D]">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Pricing (`pricing`)
6. Team (`team`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-muted: #111827;
  --color-border: #e5e7eb;
  --color-accent: #97e45d;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#000000',
    muted: '#111827',
    line: '#e5e7eb',
    accent: '#97e45d',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use lime (#97e45d) for the logo mark, primary button and one highlighted phrase per headline.
- **Do:** Set headlines in a bold sans at large size with tight spacing.
- **Do:** Place a small floating card over the hero image to show a service.
- **Don't:** Don't use lime for body text; it fails contrast on white.
- **Don't:** Don't use a serif for headlines.
- **Don't:** Don't add dark section backgrounds; the page stays white with light grey panels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
