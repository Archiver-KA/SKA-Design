# Design system — Italian Restaurant Landing Page Template

`SN-W02917` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A grey-washed hero with a large white serif headline, set centred over a darkened photograph. Crimson (#8b1e1e) is the one colour, used on the logo and the header booking button, while the hero buttons are white and outlined. The stance is classic and restrained, with crimson as a single signature rather than a hero accent.

**Mood:** classic, restrained, grey-washed, traditional, single-accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#8b1e1e` | Primary action and highlights |

Palette by frequency of use: `#8b1e1e` · `#1c1917` · `#ffffff` · `#78716c` · `#57534e` · `#f5f5f4` · `#e7e5e4` · `#a8a29e` · `#fafaf9` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-md` (6px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium tracking-wide uppercase text-white transition-all duration-200 bg-[#8B1E1E] rounded-md hover:bg-[#6d1717] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B1E1E]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Map / location (`map-location`)
4. About (`about`)
5. Menu list (`menu-list`)
6. Booking form (`booking`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #8b1e1e;
  --font-display: "Inter", sans-serif;
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
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#8b1e1e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large white serif, centred over a darkened photo.
- **Do:** Use crimson (#8b1e1e) for the logo and the header booking button only.
- **Do:** Keep the hero buttons white or outlined so the crimson stays in the header.
- **Don't:** Don't use crimson for hero buttons; they stay white or outlined.
- **Don't:** Don't brighten the hero photo; the grey overlay keeps white type readable.
- **Don't:** Don't set the headline in a sans; it is a serif display face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
