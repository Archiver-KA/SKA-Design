# Design system — Luxury Automotive Dealership Landing Page Template

`SN-W04004` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A moody, photographic hero where a car drives into a misty autumn road under a grey-green wash. The headline is a large, uppercase, high-contrast serif in warm cream that spans the image, set against the darkest parts of the scene. Image and type carry equal weight, and the page is almost entirely tonal.

**Mood:** moody, tonal, elegant, photographic, austere

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2a382e` | Page ground |
| Surface | `#a3a3a3` | Cards, panels, raised areas |
| Text | `#f2f0eb` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#1c1c1c` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f2f0eb` · `#2a382e` · `#1c1c1c` · `#737373` · `#d4d4d4` · `#a3a3a3` · `#525252` · `#000000` · `#262626` · `#eae8e2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 14px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1600px]`, `max-w-[1800px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-3`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Listings (`listings`)
5. Product grid (`product-grid`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #2a382e;
  --color-surface: #a3a3a3;
  --color-text: #f2f0eb;
  --color-muted: #a3a3a3;
  --color-border: #1c1c1c;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2a382e',
    surface: '#a3a3a3',
    ink: '#f2f0eb',
    muted: '#a3a3a3',
    line: '#1c1c1c',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase serif in cream (#f2f0eb), spanning the photograph's width
- **Do:** Keep photography in muted green-grey tones under a wash
- **Do:** Use small, widely spaced capitals for the eyebrow and the button label
- **Don't:** Don't add bright colours to the photographs or buttons
- **Don't:** Don't set headlines in sans-serif
- **Don't:** Don't place the headline over the lightest parts of the image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
