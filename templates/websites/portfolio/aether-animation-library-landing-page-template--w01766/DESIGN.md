# Design system — AETHER Animation Library Landing Page Template

`SN-W01766` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The loading screen is black, with a centred white percentage counter (0%) in a bold sans and a thin hairline progress track beneath it. The page opens on a stark, empty black stage.

**Mood:** stark, minimal, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#050505` · `#737373` · `#a3a3a3` · `#171717` · `#555555` · `#333333` · `#404040` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 20px · body 12px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-8`, `gap-12`, `gap-24`

**Primary button**

```html
<a class="pointer-events-auto bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-110 transition-transform duration-300 hoverable">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Dashboard preview (`dashboard-preview`)
7. Case studies (`case-studies`)
8. Marquee (`marquee`)
9. Video / media (`video-media`)
10. Feature grid (`features`)
11. 3D / canvas scene (`3d-canvas`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the loading screen black, with a centred white counter and a hairline track.
- **Do:** Set the counter and labels in Geist.
- **Do:** Keep the page empty until the content has loaded.
- **Don't:** Don't use a light background for the loader; the design opens on black.
- **Don't:** Don't add accent colour to the progress track.
- **Don't:** Don't set the counter in a serif face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
