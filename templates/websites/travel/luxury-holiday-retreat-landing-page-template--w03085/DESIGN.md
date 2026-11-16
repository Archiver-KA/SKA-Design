# Design system — Luxury Holiday Retreat Landing Page Template

`SN-W03085` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A refined retreat page with a pale grey gradient hero, a white serif headline in two lines and a second line in italic. White text on the light field gives the hero a soft, low-contrast feel, and a dark solid button in the navigation carries the only firm contrast. White pill buttons sit below the copy, so the layout is calm, light and airy.

**Mood:** soft, airy, refined, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e7e5e4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#292524` · `#f5f5f4` · `#57534e` · `#a8a29e` · `#e7e5e4` · `#d6d3d1` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-stone-200/50`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-x-1`, `gap-y-1`, `gap-4`

**Primary button**

```html
<a class="px-6 py-2.5 bg-stone-900 text-white text-xs uppercase tracking-widest font-medium rounded-full hover:bg-stone-800 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Timeline (`timeline`)
5. Product grid (`product-grid`)
6. Services (`services`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e7e5e4;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e7e5e4',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a white serif with the second line in italic
- **Do:** Use a dark solid pill for the navigation booking action
- **Do:** Keep the hero on a pale grey gradient with generous spacing
- **Don't:** Don't set white text on the lightest grey without a shade behind it
- **Don't:** Don't use bright accent colours for the buttons
- **Don't:** Don't add heavy shadows to the white pill buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
