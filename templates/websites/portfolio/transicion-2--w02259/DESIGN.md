# Design system — transicion 2

`SN-W02259` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A near-black cinematic intro: a single centred word set very large in a white-to-silver gradient sans, with only a tiny nav row and a wide-tracked cue at the bottom competing with it. A faint radial lightening sits behind the word, giving it a stage. Colour is absent entirely, so the style depends on scale, gradient and empty space, and the large gradient word is what makes it recognisable.

**Mood:** cinematic, stark, minimal, monochrome, dramatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#3f3f46` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#a1a1aa` · `#09090b` · `#3f3f46` · `#e4e4e7` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 140px · h2 60px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-white text-black px-8 py-3 text-xs font-medium uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center gap-2">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Framer Motion, React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #3f3f46;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#3f3f46',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero to one large word or line, centred, in a white-to-silver gradient.
- **Do:** Use wide-tracked tiny uppercase for the nav and the scroll cue.
- **Do:** Keep the ground black with the radial glow no brighter than the surface.
- **Don't:** Don't add an accent colour; the design is black, white and grey.
- **Don't:** Don't place body copy over the hero word; the space around it is the design.
- **Don't:** Don't enlarge the nav; it stays a small row.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
