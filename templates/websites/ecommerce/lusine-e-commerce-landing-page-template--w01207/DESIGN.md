# Design system — Lusine E-commerce Landing Page Template

`SN-W01207` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A restrained retail stance: a dark green announcement bar over a warm beige header, with a letter-spaced uppercase navigation and a boxed wordmark. The hero is a full-width photograph under a grey wash, with a white serif headline. The sale is signalled by a red-brown menu item and small type rather than a large colour block, so the palette stays close to neutrals.

**Mood:** restrained, premium, neutral, seasonal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#dfdbd1` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#e7e5e4` · `#f5f5f4` · `#1c1917` · `#dfdbd1` · `#292524` · `#57534e` · `#f8fafc` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 16px · body 16px
- **Weights in use:** bold, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[1920px]`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full bg-lusine-dark text-white text-[10px] font-bold py-2.5 rounded-lg hover:bg-stone-800 transition-colors uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #dfdbd1;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #f5f5f4;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#dfdbd1',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#f5f5f4',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Use the dark green (#1a3c34) only for the announcement bar at the top.
- **Do:** Keep navigation in small, letter-spaced uppercase, with the promotional item in red-brown.
- **Do:** Set the hero headline in white serif over a darkened photograph.
- **Don't:** Don't put the white headline over a light photograph without a grey or dark wash.
- **Don't:** Don't let the red-brown promotion colour spread beyond the menu item and small labels.
- **Don't:** Don't drop the boxed wordmark's outline on the beige band.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
