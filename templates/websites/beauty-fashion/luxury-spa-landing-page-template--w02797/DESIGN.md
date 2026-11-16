# Design system — Luxury Spa Landing Page Template

`SN-W02797` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photographic wellness hero: a darkened, softly blurred spa photograph of stacked stones over water fills the frame. White italic serif copy sits at upper left, a large faded wordmark runs across the lower third, and a right-hand column carries address and hours. Colour is the muted green and grey of the photo, and the type stays white.

**Mood:** serene, natural, misty, quiet, layered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#292524` · `#e7e5e4` · `#1c1917` · `#d6d3d1` · `#8e9f92` · `#78716c` · `#44403c` · `#4a5d4f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lato
- **Body:** Lato
- **Loaded families:** Cinzel, Cormorant Garamond, Lato, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-2 px-5 py-2.5 border border-stone-700 rounded-sm hover:bg-[#4A5D4F] hover:border-[#4A5D4F] hover:text-white transition-all duration-300 text-stone-300 text-sm tracking-wide group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Product grid (`product-grid`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #292524;
  --color-text: #f5f5f4;
  --color-muted: #a8a29e;
  --color-border: #292524;
  --font-display: "Lato", sans-serif;
  --font-body: "Lato", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#292524',
    ink: '#f5f5f4',
    muted: '#a8a29e',
    line: '#292524',
  },
  fontFamily: { display: ['Lato'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Keep the photograph darkened so white italic copy reads on the left.
- **Do:** Place the wordmark as a large, low-contrast layer behind the hero text.
- **Do:** Set the address and hours in a small right-hand column in regular weight.
- **Don't:** Don't add saturated colours over the photograph.
- **Don't:** Don't set the wordmark at full contrast; it should recede.
- **Don't:** Don't place the hours over the bright water reflection.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
