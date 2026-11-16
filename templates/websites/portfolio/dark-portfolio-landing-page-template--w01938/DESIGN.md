# Design system — Dark Portfolio Landing Page Template

`SN-W01938` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page tinted with wine, with a large light serif headline in cream and a small outlined button in deep plum. Colour appears only in the faint rose-toned glow and a row of vertical bars along the lower edge, which resemble an audio waveform. The serif, set large and light, gives the page a hushed and intimate tone.

**Mood:** hushed, intimate, dark, elegant, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#04000a` | Page ground |
| Surface | `#2a0812` | Cards, panels, raised areas |
| Text | `#f5ece8` | Headings and primary copy |
| Border | `#2a0812` | Hairlines, dividers, outlines |
| Accent | `#5c2035` | Primary action and highlights |

Palette by frequency of use: `#2a0812` · `#5c2035` · `#d4547a` · `#f5ece8` · `#04000a` · `#e8a0b4` · `#ef4444` · `#c4003a` · `#110008` · `#6b001a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Tenor Sans, Raleway
- **Scale (largest breakpoint):** h1 72px · h2 72px · body 36px
- **Weights in use:** light, extralight, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_8px_#c4003a]`
- **Content width:** `max-w-[200px]`, `max-w-[1400px]`
- **Section padding:** `py-36`, `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-x-3`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. 3D / canvas scene (`3d-canvas`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #04000a;
  --color-surface: #2a0812;
  --color-text: #f5ece8;
  --color-border: #2a0812;
  --color-accent: #5c2035;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#04000a',
    surface: '#2a0812',
    ink: '#f5ece8',
    line: '#2a0812',
    accent: '#5c2035',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large size, cream (#f5ece8)
- **Do:** Use plum (#5c2035) for outlined buttons and borders
- **Do:** Keep the waveform bars low-contrast along the lower edge
- **Don't:** Don't fill buttons with solid colour; the outline is the style
- **Don't:** Don't add a light background; the page stays dark wine-black
- **Don't:** Don't use bright red for body text; the rose tone is for small labels only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
