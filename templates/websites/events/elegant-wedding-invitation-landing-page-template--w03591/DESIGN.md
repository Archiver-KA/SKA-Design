# Design system — Elegant Wedding Invitation Landing Page Template

`SN-W03591` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The wedding invitation pairs a full-height photograph with a cream side panel. The couple's names are set large in a classic serif in white over the image, with a small spaced uppercase kicker above and a grey location line below. The cream panel holds the date in a light serif, a short italic quote and a section title. The palette is near-neutral, and the photograph supplies the colour.

**Mood:** romantic, classic, photographic, quiet, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4a4a4a` | Headings and primary copy |
| Muted text | `#6b7c62` | Secondary copy, captions |
| Border | `#6b7c62` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#6b7c62` · `#ffffff` · `#2c2c2c` · `#a8a29e` · `#d4cbb3` · `#78716c` · `#e5e0d6` · `#f9f7f2` · `#44403c` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Cormorant Garamond, Great Vibes, Montserrat, Geist, Roboto, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 30px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-0.5`

**Primary button**

```html
<a class="w-full bg-[#2c2c2c] text-white py-3 rounded text-xs font-bold tracking-widest uppercase hover:bg-[#6b7c62] transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fcfbf9;
  --color-surface: #ffffff;
  --color-text: #4a4a4a;
  --color-muted: #6b7c62;
  --color-border: #6b7c62;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf9',
    surface: '#ffffff',
    ink: '#4a4a4a',
    muted: '#6b7c62',
    line: '#6b7c62',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the couple's names large in a classic serif over the photograph
- **Do:** Keep the side panel cream, with the date and quote in grey serif
- **Do:** Use small uppercase tracked kickers above headings
- **Don't:** Don't add bright accent colours; the photograph carries the colour
- **Don't:** Don't set the names in a sans-serif
- **Don't:** Don't cover the photograph with a solid panel in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
