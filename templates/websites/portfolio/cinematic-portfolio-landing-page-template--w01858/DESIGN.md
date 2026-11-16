# Design system — Cinematic Portfolio Landing Page Template

`SN-W01858` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black archive-style portfolio where a very large bold white sans headline sits centred over a near-black field. Tiny letter-spaced labels mark the details around it, such as archive series and feed numbers, and a grey image panel sits at the bottom. The headline is a wide bold sans, and monospace is used for labels only.

**Mood:** archival, monochrome, stark, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#18181b` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#52525b` · `#18181b` · `#71717a` · `#080808` · `#a1a1aa` · `#6d6d6d` · `#e5e5e5` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 96px · body 12px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Case studies (`case-studies`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #52525b;
  --color-border: #18181b;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#52525b',
    line: '#18181b',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a wide, bold white sans at very large size
- **Do:** Use monospace only for small tracked labels and captions
- **Do:** Keep the first screen black, with greys for secondary labels
- **Don't:** Don't set the headline in monospace
- **Don't:** Don't add accent colours; the page is white and grey on black
- **Don't:** Don't round the corners of the image panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
