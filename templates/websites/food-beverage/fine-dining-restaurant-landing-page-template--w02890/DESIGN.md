# Design system — Fine Dining Restaurant Landing Page Template

`SN-W02890` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A large serif headline in a light, grey-washed hero, with the second line set in italic to create contrast within the same face. The page is near-white and neutral, the logo is a plain bold serif wordmark, and buttons are solid pills: near-black for the navigation order action and white for the main hero action. The result is quiet and high-contrast, leaning on type scale rather than colour.

**Mood:** quiet, high-contrast, neutral, serif, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#f3efe0` · `#a8a29e` · `#292524` · `#78716c` · `#f5f5f4` · `#fdfcf8` · `#e7e5e4` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 30px · body 14px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-wide`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-[0_0_40px_rgba(0,0,0,0.2)]`
- **Content width:** `max-w-screen-2xl`, `max-w-screen-xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Awards / press (`awards-press`)
6. Call to action (`cta`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #1c1917;
  --color-accent-2: #ef4444;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#1c1917',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif display face with the second line in italic.
- **Do:** Use near-black (#1c1917) for the order button and white for the main hero action.
- **Do:** Keep the page neutral; let the photography, not the palette, carry the mood.
- **Don't:** Don't set headlines in Inter; the headlines are a serif display face.
- **Don't:** Don't add a second accent colour; the hero uses only white and near-black.
- **Don't:** Don't use bright fills on buttons; the hero stays in white and near-black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
