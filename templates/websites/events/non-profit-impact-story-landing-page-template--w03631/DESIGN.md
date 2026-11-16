# Design system — Non-profit Impact Story Landing Page Template

`SN-W03631` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cinematic, sober one-page hero on a near-black ground, with a large serif headline in light grey whose final word is italic and set in sky blue (#0ea5e9). A photograph of Earth at night, cropped into a circle, sits on the right and is the only strong image. Small labels and a filled blue button keep the tone editorial and restrained.

**Mood:** cinematic, sober, editorial, serious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#0ea5e9` · `#d6d3d1` · `#38bdf8` · `#020202` · `#0a0a0a` · `#000000` · `#78716c` · `#0c4a6e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Newsreader, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(2,132,199,0.3)]`, `shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8),inset_10px_10px_30px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="hidden sm:block rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-medium uppercase tracking-widest text-white hover:bg-white/10 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Process / steps (`how-it-works`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020202;
  --color-surface: #0a0a0a;
  --color-text: #d6d3d1;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #0ea5e9;
  --color-accent-2: #f59e0b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    surface: '#0a0a0a',
    ink: '#d6d3d1',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#0ea5e9',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif, with the final italic word in sky blue (#0ea5e9)
- **Do:** Use the blue for the single highlighted word and the primary button only
- **Do:** Pair the text column on the left with one large image on the right
- **Don't:** Don't add amber highlights to the hero
- **Don't:** Don't place imagery behind body text
- **Don't:** Don't use more than one italic line in a headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
