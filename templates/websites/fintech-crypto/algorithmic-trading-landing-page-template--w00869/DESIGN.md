# Design system — Algorithmic Trading Landing Page Template

`SN-W00869` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cinematic dark page: a warm near-black ground (#050505) with a soft light-beam glow behind the centred headline. The headline is a high-contrast serif in cream (#f8f5f0), with the second line in italic, and the stats along the bottom are small and quiet. Colour is almost absent; warmth comes from the cream type and the light source, so it reads like an editorial film title card.

**Mood:** cinematic, warm, editorial, moody, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0c0c0c` | Cards, panels, raised areas |
| Text | `#f8f5f0` | Headings and primary copy |
| Muted text | `#c2bcb0` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4c3a3` | Primary action and highlights |
| Second accent | `#7a9bb8` | Supporting highlights |

Palette by frequency of use: `#c2bcb0` · `#ffffff` · `#fdf3db` · `#f8f5f0` · `#a3c9aa` · `#050505` · `#8e8a80` · `#d4c3a3` · `#a69576` · `#0c0c0c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** JetBrains Mono, Playfair Display
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_10px_#FDF3DB]`, `shadow-[0_40px_100px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(212,195,163,0.05)]`, `shadow-[0_0_12px_#A3C9AA]`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-48`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0c0c0c;
  --color-text: #f8f5f0;
  --color-muted: #c2bcb0;
  --color-border: #ffffff;
  --color-accent: #d4c3a3;
  --color-accent-2: #7a9bb8;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0c0c0c',
    ink: '#f8f5f0',
    muted: '#c2bcb0',
    line: '#ffffff',
    accent: '#d4c3a3',
    accent2: '#7a9bb8',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif face in cream (#f8f5f0), with the second line in italic
- **Do:** Keep the background near-black (#050505) and use light only as a soft glow
- **Do:** Keep the stats small and spaced along the bottom edge
- **Don't:** Don't add saturated accent colours; the palette stays cream and black
- **Don't:** Don't set the headline in sans-serif
- **Don't:** Don't place a hard-edged box behind the glow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
