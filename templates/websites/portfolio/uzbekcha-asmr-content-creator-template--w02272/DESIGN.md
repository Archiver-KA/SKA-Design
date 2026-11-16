# Design system — Uzbekcha ASMR Content Creator Template

`SN-W02272` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark cinematic creator page on a near-black green-tinged ground (#101310), with a soft purple (#a855f7) glow behind a tilted portrait card and a purple pill button for the main action. Large white sans copy sits on the left, and a small green-accented feature card floats in the lower right. The purple glow and the tilted, layered cards are the recognisable device, and purple is the only saturated accent.

**Mood:** cinematic, dark, calm, moody, layered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#101310` | Page ground |
| Surface | `#201714` | Cards, panels, raised areas |
| Text | `#f3f0e8` | Headings and primary copy |
| Border | `#f3f0e8` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#d8cbb5` | Supporting highlights |

Palette by frequency of use: `#f3f0e8` · `#a855f7` · `#060706` · `#101310` · `#000000` · `#ffffff` · `#151713` · `#d8cbb5` · `#080808` · `#201714`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-[-0.08em]`, `tracking-[-0.06em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[28px]` (28px), `rounded-[20px]` (20px)
- **Shadows:** `shadow-[0_0_80px_rgba(168,85,247,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-12`, `gap-4`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #101310;
  --color-surface: #201714;
  --color-text: #f3f0e8;
  --color-border: #f3f0e8;
  --color-accent: #a855f7;
  --color-accent-2: #d8cbb5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#101310',
    surface: '#201714',
    ink: '#f3f0e8',
    line: '#f3f0e8',
    accent: '#a855f7',
    accent2: '#d8cbb5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the purple (#a855f7) for the primary button and the glow behind the hero card.
- **Do:** Stack the hero images as tilted, overlapping cards with rounded corners.
- **Do:** Set the hero copy in white sans, left-aligned, with generous line spacing.
- **Don't:** Don't use the purple for body text or links; it is the action colour.
- **Don't:** Don't add a second saturated colour to the cards; the green is an icon only.
- **Don't:** Don't flatten the cards; the tilt and overlap are the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
