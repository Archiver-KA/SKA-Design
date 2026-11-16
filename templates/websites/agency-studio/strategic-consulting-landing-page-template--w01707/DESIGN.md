# Design system — Strategic Consulting Landing Page Template

`SN-W01707` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `nl`

## Direction

A white page with a black sans headline stacked over four lines, and the middle phrase 'Top 1% bedrijven' in pale grey. The hero shows floating metric cards with small lime icons on the right, so the data is the visual. Lime and red appear only in small chips, and the typography is tight and assertive.

**Mood:** assertive, clean, data-led, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#c1ff72` · `#e7e5e4` · `#a8a29e` · `#57534e` · `#44403c` · `#d6d3d1` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Montserrat, Geist, Google Sans Flex, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-stone-900 text-[#c1ff72] hover:bg-stone-800 transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #a8a29e;
  --color-border: #e7e5e4;
  --color-accent: #ef4444;
  --color-accent-2: #ef4444;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#a8a29e',
    line: '#e7e5e4',
    accent: '#ef4444',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in tight heavy sans in near-black, with the contrast phrase in pale grey (#a8a29e).
- **Do:** Use floating metric cards with small lime icons as the hero visual.
- **Do:** Keep the page on white with near-black text.
- **Don't:** Don't use the lime (#c1ff72) as a page background; it is an icon colour here.
- **Don't:** Don't use red for headlines; the accent is kept for small chips.
- **Don't:** Don't add a photo to the hero; the cards carry the visual.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
