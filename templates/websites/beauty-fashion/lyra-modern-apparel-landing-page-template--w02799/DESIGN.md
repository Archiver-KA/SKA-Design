# Design system — LYRA Modern Apparel Landing Page Template

`SN-W02799` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A minimal fashion split-screen on white. Two tall panels, for womenswear and menswear, fade from white to pale grey and carry a large light sans 'LYRA' wordmark centred over them. Small white pill buttons with arrows, 'For Her' and 'For Him', mark each panel. Grey gradients fill the image slots.

**Mood:** minimal, clean, airy, light, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#404040` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#404040` · `#f5f5f5` · `#171717` · `#525252` · `#e5e5e5` · `#fafafa` · `#262626` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="block px-3 py-2 rounded-md hover:bg-neutral-100 font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Product grid (`product-grid`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #404040;
  --color-border: #e5e5e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#404040',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page white and use soft grey gradients for image slots.
- **Do:** Set the wordmark in a light, widely spaced sans, centred over the split.
- **Do:** Use small pill buttons with arrows for category entry points.
- **Don't:** Don't add colour; the page is black, white and grey.
- **Don't:** Don't place text across the join between the two panels.
- **Don't:** Don't set the wordmark in a bold weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
