# Design system — Luxury Qipao E-commerce Landing Page Template

`SN-W01237` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

An editorial fashion page on warm off-white, with near-black serif headlines, the last word in italic, and a large pale-grey panel on the right for the photograph. Body text is small grey sans, and links are small uppercase with a thin underline. Colour is almost absent; the type and the empty panel do the work.

**Mood:** editorial, quiet, fashion, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfdfc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#f5f5f4` · `#a8a29e` · `#d6d3d1` · `#292524` · `#000000` · `#fdfdfc` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-screen-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="w-full bg-white/90 backdrop-blur text-stone-900 text-xs uppercase tracking-widest py-3 hover:bg-stone-900 hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. About (`about`)
6. Feature grid (`features`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfdfc;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #1c1917;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfdfc',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set display headlines in a serif with the last word in italic
- **Do:** Keep links as small uppercase text with a thin underline
- **Do:** Let photography fill the grey panel with no coloured overlays
- **Don't:** Don't add a colour accent; the page is near-black on off-white
- **Don't:** Don't set body copy in serif
- **Don't:** Don't use filled buttons; the call to action is an underlined link

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
