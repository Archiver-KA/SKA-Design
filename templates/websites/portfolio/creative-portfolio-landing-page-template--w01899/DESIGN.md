# Design system — Creative Portfolio Landing Page Template

`SN-W01899` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A split page: a black left column with a thin gold dial graphic and a small logotype, and a warm cream panel on the right holding a serif greeting and one outlined button. A saturated marbled image is the only strong colour, framed in a hairline box with a monospace caption. The serif and monospace pairing gives it a gallery-catalogue stance.

**Mood:** refined, gallery-like, archival, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e5e0d8` | Page ground |
| Surface | `#d6d1c7` | Cards, panels, raised areas |
| Text | `#0d0d0d` | Headings and primary copy |
| Border | `#0d0d0d` | Hairlines, dividers, outlines |
| Accent | `#c4a47c` | Primary action and highlights |

Palette by frequency of use: `#0d0d0d` · `#c4a47c` · `#e5e0d8` · `#ffffff` · `#d6d1c7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lexend Deca
- **Body:** Lexend Deca
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 48px · h2 60px · h3 20px · body 14px
- **Weights in use:** bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-[#c4a47c]/20`, `shadow-[0_0_15px_#c4a47c]`
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group flex items-center gap-3 text-sm font-bold tracking-widest border border-[#0d0d0d] px-6 py-3 hover:bg-[#0d0d0d] hover:text-[#e5e0d8] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Awards / press (`awards-press`)
3. Bento grid (`bento-grid`)
4. Timeline (`timeline`)
5. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e5e0d8;
  --color-surface: #d6d1c7;
  --color-text: #0d0d0d;
  --color-border: #0d0d0d;
  --color-accent: #c4a47c;
  --font-display: "Lexend Deca", sans-serif;
  --font-body: "Lexend Deca", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e5e0d8',
    surface: '#d6d1c7',
    ink: '#0d0d0d',
    line: '#0d0d0d',
    accent: '#c4a47c',
  },
  fontFamily: { display: ['Lexend Deca'], sans: ['Lexend Deca'] },
} }
```

## Do and don't

- **Do:** Set the greeting and logotype in a serif, and captions in monospace.
- **Do:** Use the warm gold (#c4a47c) only for the dial ring and thin rules.
- **Do:** Keep the image in a hairline frame with a small monospace caption.
- **Don't:** Don't add a second saturated colour; the marbled image carries all the colour.
- **Don't:** Don't fill the outline button; it stays a thin outline.
- **Don't:** Don't set the captions in serif; they stay monospace.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
