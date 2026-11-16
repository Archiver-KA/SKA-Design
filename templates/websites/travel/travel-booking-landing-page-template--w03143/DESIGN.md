# Design system — Travel Booking Landing Page Template

`SN-W03143` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A neutral, monochrome hero: a mid-grey ground with a large white sans headline, centred, and a single white search bar below it. Solid black carries all the emphasis, with a black Sign Up button in the nav and a black search button, and the page has no accent colour. The design is spare and functional, with the search bar as the focal point.

**Mood:** monochrome, neutral, spare, functional, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e5e7eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#f3f4f6` · `#6b7280` · `#f9fafb` · `#e5e7eb` · `#9ca3af` · `#4b5563` · `#d1d5db` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 20px · h3 16px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors hidden sm:block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Logo cloud (`logo-cloud`)
5. FAQ (`faq`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e5e7eb;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e5e7eb',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#f3f4f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white on the grey ground, centred and large
- **Do:** Use solid black for the primary buttons and the search action
- **Do:** Keep the search as one white field group with labelled inputs
- **Don't:** Don't introduce an accent colour; the page is monochrome
- **Don't:** Don't set the hero headline in dark text on the mid-grey ground
- **Don't:** Don't add decorative imagery behind the search bar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
