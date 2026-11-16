# Design system — Real Estate Agent Landing Page Template

`SN-W03340` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, understated template. The hero is a gradient from charcoal on the left to pale grey on the right, with white serif headlines and a warm tan highlight on the one emphasised word. Buttons pair a solid tan fill with a thin outline, and the rest of the page is neutral, with white and grey type on charcoal (#171717).

**Mood:** neutral, refined, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#e5e5e5` · `#a3a3a3` · `#d4d4d4` · `#262626` · `#000000` · `#fafafa` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-5xl`
- **Section padding:** `py-28`, `py-24`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-6 py-3 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Sidebar (`sidebar`)
3. Hero (`hero`)
4. Listings (`listings`)
5. About (`about`)
6. Services (`services`)
7. Pricing (`pricing`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in white Playfair Display with one tan highlighted word
- **Do:** Keep surfaces neutral: charcoal (#171717) and grey type with no added colour
- **Do:** Pair the solid tan primary button with an outlined secondary button
- **Don't:** Don't use bright colours in the interface; tan is the only warm note
- **Don't:** Don't place hero text over the pale right side of the gradient
- **Don't:** Don't set body copy in serif; body copy is DM Sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
