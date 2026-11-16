# Design system — Interior Design Studio Landing Page Template

`SN-W03258` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Photographic and airy: a bright interior photograph fills the first screen and fades into a white wash beneath a serif headline in near-black. The page relies on the photograph rather than colour, with the ground staying near-white and the buttons black with white text. The overall stance is calm and gallery-like, with copy kept short and set over the lighter areas of the image.

**Mood:** photographic, airy, neutral, gallery-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#ffffff` · `#fafaf9` · `#292524` · `#e7e5e4` · `#a8a29e` · `#000000` · `#78716c` · `#d6d3d1` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="px-6 py-2.5 bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors duration-300 text-xs uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Case studies (`case-studies`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --font-display: "Playfair Display", serif;
  --font-body: "Manrope", sans-serif;
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
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Place a light interior photograph behind the hero and fade it into white under the headline.
- **Do:** Set the headline in the serif display face, with the closing phrase in italic.
- **Do:** Keep primary buttons black with white text.
- **Don't:** Don't put a dark overlay on the hero photograph; the fade is white.
- **Don't:** Don't add accent colours; the page stays neutral.
- **Don't:** Don't place headline text over busy areas of the photograph without the white wash.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
