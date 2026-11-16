# Design system — Architecture Studio Portfolio Website Template

`SN-W01807` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Stark and dark: a black ground with a large white sans headline set tight, a mid-grey second line, and small grey navigation at the top. Photography and blank space carry the first screen, with an image slot at the bottom edge. The design relies on contrast and restraint, and the hero text is the only visual element above the fold.

**Mood:** dark, stark, minimal, architectural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#171717` · `#525252` · `#262626` · `#737373` · `#000000` · `#404040` · `#050505` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 36px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1800px]`
- **Common gaps:** `gap-2`, `gap-6`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Services (`services`)
6. Case studies (`case-studies`)
7. Process / steps (`how-it-works`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the background to black and the headlines to white
- **Do:** Use the mid-grey (#a3a3a3) for the second line of the headline
- **Do:** Separate sections with thin borders instead of colour
- **Don't:** Don't add a light section above the fold
- **Don't:** Don't add a colour accent; the look is monochrome
- **Don't:** Don't set the whole headline in grey; only the second line is grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
