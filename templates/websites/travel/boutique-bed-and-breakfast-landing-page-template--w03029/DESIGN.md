# Design system — Boutique Bed & Breakfast Landing Page Template

`SN-W03029` · travel · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A dark, quiet hotel hero on near-black zinc (#18181b), with a large white serif headline on two lines and the second line in italic. A slim booking bar sits low in the hero, with four fields and a white search button. The hero stays dark, and the serif carries the style.

**Mood:** dark, refined, warm-hotel, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#18181b` · `#71717a` · `#000000` · `#d4d4d8` · `#27272a` · `#52525b` · `#e4e4e7` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Playfair Display, Roboto, Montserrat, Poppins, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 16px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="md:hidden uppercase hover:bg-zinc-200 transition-all duration-300 cursor-pointer text-xs font-medium text-black tracking-widest bg-white rounded-full px-5 py-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Listings (`listings`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)
8. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Swiper
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in white serif, with the second line in italic
- **Do:** Keep the booking bar as one rounded strip with thin dividers between fields
- **Do:** Use small uppercase tracked labels for navigation and eyebrows
- **Don't:** Don't put a light ground behind the hero; it is dark.
- **Don't:** Don't add a coloured accent to the booking button; it is white
- **Don't:** Don't set the headline in a heavy sans; the serif carries the style

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
