# Design system — Sci-Fi Game Landing Page Template

`SN-W03743` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A stark black page [#080808] with a grey photographic texture behind a heavy uppercase headline. The second line of the headline is outlined rather than solid, and lime [#ccff00] appears only in the active navigation link and a full-width band below the hero. The result is hard-edged, industrial and high in contrast.

**Mood:** stark, industrial, high-contrast, futuristic, aggressive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#000000` · `#080808` · `#ccff00` · `#0c0c0c` · `#a1a1aa` · `#52525b` · `#3f3f46` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Barlow Condensed, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 144px · h2 128px · h3 30px · body 14px
- **Weights in use:** bold, semibold, black
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-6 py-2 font-heading font-bold text-lg uppercase tracking-wide hover:bg-acid transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #080808;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ccff00;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ccff00',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans-serif, with outlined type for one line
- **Do:** Use lime (#ccff00) only for the active nav item and full-width bands
- **Do:** Keep the background black and let grey texture sit behind the type
- **Don't:** Don't use lime for body text or small links
- **Don't:** Don't round the corners of panels; edges stay square
- **Don't:** Don't set headlines in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
