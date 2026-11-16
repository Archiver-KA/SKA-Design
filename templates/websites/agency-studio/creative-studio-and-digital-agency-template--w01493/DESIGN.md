# Design system — Creative Studio & Digital Agency Template

`SN-W01493` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page (#111111) with a soft, blurred red glow (#ff1a1a) behind a large cream word, so the colour arrives as light rather than as a block. The headline is set in large display type in cream (#e2e1d3), uppercase. The wordmark sits top-left in small caps and a plain menu icon sits top-right, so the page is nearly empty until the content appears.

**Mood:** cinematic, moody, minimal, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#ebebeb` | Cards, panels, raised areas |
| Text | `#e2e1d3` | Headings and primary copy |
| Border | `#e2e1d3` | Hairlines, dividers, outlines |
| Accent | `#ff1a1a` | Primary action and highlights |

Palette by frequency of use: `#e2e1d3` · `#ffffff` · `#121212` · `#111111` · `#c4c4c4` · `#0a0a0a` · `#ff1a1a` · `#ff0a2f` · `#0d1210` · `#ebebeb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Anton
- **Body:** Anton
- **Loaded families:** Anton, Inter, Caveat
- **Scale (largest breakpoint):** body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_20px_50px_rgba(0,0,0,0.3)]`
- **Content width:** `max-w-[350px]`, `max-w-[94vw]`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-x-6`, `gap-y-6`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #ebebeb;
  --color-text: #e2e1d3;
  --color-border: #e2e1d3;
  --color-accent: #ff1a1a;
  --font-display: "Anton", sans-serif;
  --font-body: "Anton", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#ebebeb',
    ink: '#e2e1d3',
    line: '#e2e1d3',
    accent: '#ff1a1a',
  },
  fontFamily: { display: ['Anton'], sans: ['Anton'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#111111) and let the red glow sit behind the headline.
- **Do:** Set headlines in large uppercase display type in cream (#e2e1d3).
- **Do:** Use the red (#ff1a1a) only for glows and highlights, never for solid blocks.
- **Don't:** Don't use the light beige (#e2e1d3) as a page background; the page is black.
- **Don't:** Don't add a second accent colour.
- **Don't:** Don't add a visible border around the glow; it should blur into the ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
