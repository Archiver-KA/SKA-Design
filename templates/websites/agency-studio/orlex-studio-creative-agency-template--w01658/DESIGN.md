# Design system — Orlex Studio Creative Agency Template

`SN-W01658` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a huge sans headline set in white, where the words are split and partly masked, so the type slides into view. Small uppercase labels sit in the corners and a tracked eyebrow line runs above the headline. The look is high-contrast and editorial, and the motion and masking are the recognisable part.

**Mood:** high-contrast, editorial, kinetic, stark, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#0a0a0a` · `#6b7280` · `#374151` · `#fafafa` · `#000000` · `#d1d5db` · `#18181b` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h2 48px · h3 12px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

## Page structure

Blocks in page order:

1. Timeline (`timeline`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Case studies (`case-studies`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #fafafa;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #374151;
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
    surface: '#fafafa',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#374151',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline oversized in Inter with words split across lines
- **Do:** Use small uppercase tracked labels for corner and eyebrow text
- **Do:** Let the headline reveal with a mask effect rather than a plain fade
- **Don't:** Don't use a white ground; the page is black (#000000)
- **Don't:** Don't set the masked headline in grey; it stays white for contrast
- **Don't:** Don't add colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
