# Design system — Mirelle Fashion & Motion Edit Template

`SN-W02802` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A framed editorial page: a rounded, deep green border encloses a pale lime-to-white gradient field, so it reads as a window rather than a full-bleed dark site. Oversized sans type runs across the centre, with 'CREATIVE' in black above an italic 'STUDIO' in a grey-to-black gradient. Thin tracked labels sit at the field's corners.

**Mood:** editorial, bold, fresh, framed, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#102818` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#edf7df` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#173f22` | Primary action and highlights |
| Second accent | `#dcefc8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#173f22` · `#161b12` · `#132516` · `#f4f8e9` · `#151a11` · `#102315` · `#000000` · `#071009` · `#dcefc8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Plus_Jakarta_Sans
- **Scale (largest breakpoint):** h1 256px · h2 30px · h3 12px · body 12px
- **Weights in use:** semibold, light, extralight
- **Letter spacing:** `tracking-tight`, `tracking-[0.18rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1.5rem]` (1.5rem), `rounded-[1.15rem]` (1.15rem)
- **Shadows:** `shadow-2xl`, `shadow-[#173f22]/10`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-[94rem]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-[#173f22] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#22552e]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #102818;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #edf7df;
  --color-border: #ffffff;
  --color-accent: #173f22;
  --color-accent-2: #dcefc8;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#102818',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#edf7df',
    line: '#ffffff',
    accent: '#173f22',
    accent2: '#dcefc8',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Keep the deep green frame around the pale gradient field.
- **Do:** Set the headline oversized in sans, with the second word in italic and a grey gradient.
- **Do:** Use small tracked labels at the corners of the field.
- **Don't:** Don't fill the whole page with dark green; the light field is the content.
- **Don't:** Don't set the headline in a serif.
- **Don't:** Don't add a second accent beside the pale green (#dcefc8).

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
