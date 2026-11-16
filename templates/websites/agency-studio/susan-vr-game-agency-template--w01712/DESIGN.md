# Design system — Susan VR Game Agency Template

`SN-W01712` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a headline in grey and orange (#ff5a00) that resolves from blur during the scroll intro. Thin vertical lines divide the hero into columns, and small tracked counters sit at the bottom. Orange is the only colour, used as glow.

**Mood:** cinematic, dark, immersive, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff5a00` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff5a00` · `#22d3ee` · `#000000` · `#050505` · `#111111` · `#f0eee9` · `#333333` · `#0a0a0c` · `#0d0d10`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo Black
- **Body:** Archivo Black
- **Loaded families:** Archivo Black, DM Sans, DM Serif Display, Inter
- **Scale (largest breakpoint):** h2 60px · body 12px
- **Letter spacing:** `tracking-[0.2em]`, `tracking-[0.35em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[1500px]`, `max-w-6xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Video / media (`video-media`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff5a00;
  --color-accent-2: #22d3ee;
  --font-display: "Archivo Black", sans-serif;
  --font-body: "Archivo Black", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff5a00',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Archivo Black'], sans: ['Archivo Black'] },
} }
```

## Do and don't

- **Do:** Keep the ground black (#000000) and use orange (#ff5a00) only for glow or the highlight.
- **Do:** Use thin lines to divide the hero into columns.
- **Do:** Show scroll progress and step counters in small tracked caps at the bottom.
- **Don't:** Don't set orange body text on black; the colour works only as glow or highlight.
- **Don't:** Don't use orange as the page background; it is an accent here.
- **Don't:** Don't leave headlines blurred after the intro; they must resolve for reading.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
