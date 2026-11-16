# Design system — Truhlářství Veta

`SN-W02260` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `cs`

## Direction

A warm, craft-focused one-page site with a full-bleed photograph of wood, washed under a mid-grey overlay so the white serif headline stays readable. The headline is centred in white, with a small uppercase label above it and a pair of pill buttons below, one solid white and one translucent outline. The photograph and overlay together form the page's identity, and the type stays light and centred over the image.

**Mood:** craft, warm, grounded, quiet, traditional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#78716c` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#ffffff` · `#e7e5e4` · `#78716c` · `#57534e` · `#f5f5f4` · `#fafaf9` · `#292524` · `#a8a29e` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2.5 bg-stone-900 text-stone-50 text-xs font-medium rounded-full hover:bg-stone-800 transition-all duration-300 shadow-lg shadow-stone-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #78716c;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#78716c',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the photograph under a grey overlay so the white type stays readable.
- **Do:** Set headlines in white serif, centred, with a small uppercase label above.
- **Do:** Use a solid white pill for the primary action and a translucent outline for the secondary.
- **Don't:** Don't put dark text on the photograph; the overlay is designed for white type.
- **Don't:** Don't add bright accent colours; the page is grey, white and wood.
- **Don't:** Don't set the headline in sans; the serif carries the craft tone.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
