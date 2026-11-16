# Design system — Prisma Creative Studio Portfolio Template

`SN-W02182` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Stark monochrome studio page: a pure black ground (#000000) with a large cream (#dedbc8) headline, the trailing asterisk set in the same tone. Small grey body copy sits right of the headline, and one cream pill button closes the hero. The headline is set in a neo-grotesque sans.

**Mood:** stark, editorial, monochrome, minimal, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#212121` | Cards, panels, raised areas |
| Text | `#dedbc8` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#dedbc8` · `#e1e0cc` · `#212121` · `#6b7280` · `#9ca3af` · `#101010`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Almarai
- **Body:** Almarai
- **Loaded families:** Almarai, Instrument Serif
- **Scale (largest breakpoint):** h3 20px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Framer Motion, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #212121;
  --color-text: #dedbc8;
  --color-muted: #6b7280;
  --font-display: "Almarai", sans-serif;
  --font-body: "Almarai", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#212121',
    ink: '#dedbc8',
    muted: '#6b7280',
  },
  fontFamily: { display: ['Almarai'], sans: ['Almarai'] },
} }
```

## Do and don't

- **Do:** Set the hero word in a large neo-grotesque sans in cream (#dedbc8)
- **Do:** Keep body copy small and grey (#9ca3af), placed to the right of the headline
- **Do:** Use the cream pill button as the only solid element
- **Don't:** Don't add colour; the palette is black, cream and grey
- **Don't:** Don't introduce a serif for headings
- **Don't:** Don't fill sections with light backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
