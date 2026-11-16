# Design system — Madge Restaurant Landing Page Template

`SN-W02940` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A restaurant hero with a white top bar, a dark pill-shaped Order Now button and a large white serif headline over a grey, softly lit photo. A navy band below the hero is the strongest colour on the page, and the top bar is white.

**Mood:** upscale, sleek, airy, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#0c0a09` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b8932e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#b8932e` · `#2d1b14` · `#f5f5f4` · `#a8a29e` · `#78716c` · `#57534e` · `#fafaf9` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 30px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-screen-2xl`, `max-w-screen-xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform text-white bg-stone-900">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #0c0a09;
  --color-text: #ffffff;
  --color-muted: #a8a29e;
  --color-border: #ffffff;
  --color-accent: #b8932e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#0c0a09',
    ink: '#ffffff',
    muted: '#a8a29e',
    line: '#ffffff',
    accent: '#b8932e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large white serif over a darkened photo
- **Do:** Use a dark pill button for the nav call to action
- **Do:** Keep the top bar white and separate it from the hero with a clear edge
- **Don't:** Don't use a dark top bar; it is white.
- **Don't:** Don't use gold for buttons; keep the navigation call to action dark.
- **Don't:** Don't put headlines over bright parts of the photo

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
