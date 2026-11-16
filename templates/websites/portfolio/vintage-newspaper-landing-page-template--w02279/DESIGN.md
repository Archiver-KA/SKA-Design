# Design system — Vintage Newspaper Landing Page Template

`SN-W02279` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A vintage broadsheet hero: a dark brown outer frame (#292524) surrounds a cream newspaper page, with a full-width heavy serif masthead in black capitals between rules. Headlines are bold serif with an italic deck beneath, and boxed sidebars such as Market Watch and Weather Forecast fill the columns. The masthead, the dateline strip and the boxed side panels are what make it recognisable, and the page stays in black and cream.

**Mood:** vintage, editorial, print, dense, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#292524` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#292524` · `#d6d3d1` · `#1c1917` · `#78716c` · `#57534e` · `#44403c` · `#e7e5e4` · `#a8a29e` · `#f4f1ea` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Old Standard TT
- **Body:** Old Standard TT
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 12px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Shadows:** `shadow-[0_2px_40px_rgba(0,0,0,0.4)]`, `shadow-sm`, `shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Sidebar (`sidebar`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #292524;
  --color-surface: #e7e5e4;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #292524;
  --font-display: "Old Standard TT", sans-serif;
  --font-body: "Old Standard TT", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#292524',
    surface: '#e7e5e4',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#292524',
  },
  fontFamily: { display: ['Old Standard TT'], sans: ['Old Standard TT'] },
} }
```

## Do and don't

- **Do:** Set the masthead in heavy serif capitals across the full width, with rules above and below.
- **Do:** Use a serif italic deck under each main headline.
- **Do:** Box sidebar items with thin borders, as in the market and weather panels.
- **Don't:** Don't add colour; the paper stays cream and black.
- **Don't:** Don't round the corners of the boxes; they are square.
- **Don't:** Don't set body copy in a bold weight; the columns stay regular.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
