# Design system — Basque Restaurant Landing Page Template

`SN-W02846` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `es`

## Direction

Quiet and dark green, close to a wine-cellar mood. The hero is a deep green field (#0f453c) with a large, high-contrast serif name in pale white, set over small uppercase tracked navigation. Pale sage (#dcedc8) is the only light accent, used for the eyebrow pill and the outlined buttons, so the page reads calm rather than loud.

**Mood:** quiet, deep green, serif, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f453c` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Border | `#f9f7f2` | Hairlines, dividers, outlines |
| Accent | `#dcedc8` | Primary action and highlights |
| Second accent | `#dcedc8` | Supporting highlights |

Palette by frequency of use: `#f9f7f2` · `#0a3d35` · `#ffffff` · `#dcedc8` · `#1a1a1a` · `#000000` · `#0f453c` · `#145248` · `#f2efe9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 30px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#0a3d35] text-white px-8 py-4 rounded-sm text-xs uppercase tracking-widest font-medium hover:bg-[#0f453c] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Booking form (`booking`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f453c;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-border: #f9f7f2;
  --color-accent: #dcedc8;
  --color-accent-2: #dcedc8;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f453c',
    surface: '#ffffff',
    ink: '#1a1a1a',
    line: '#f9f7f2',
    accent: '#dcedc8',
    accent2: '#dcedc8',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero name in a large high-contrast serif, not in the sans body face
- **Do:** Keep the ground in deep green (#0f453c) across the hero and sections
- **Do:** Use outlined pill buttons for secondary actions and a solid pale fill for the main one
- **Don't:** Don't use bright greens for buttons or large fills
- **Don't:** Don't replace the serif name with a sans-serif headline
- **Don't:** Don't stack more than one solid button in the same view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
