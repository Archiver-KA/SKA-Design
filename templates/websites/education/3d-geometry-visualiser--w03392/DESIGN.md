# Design system — 3D Geometry Visualiser

`SN-W03392` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Dark, cinematic hero on near-black with soft blue and violet glows in the corners and a large white sans headline. The word Reimagined fades from white to grey across its letters, giving the headline a sheen without adding colour. The one primary action is a white pill, and the small label above the headline is muted.

**Mood:** cinematic, futuristic, clean, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#9333ea` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#000000` · `#a1a1aa` · `#e4e4e7` · `#52525b` · `#d4d4d8` · `#3b82f6` · `#050505` · `#f5f5f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 14px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tightest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.05)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group relative px-10 py-4 bg-white text-black rounded-full font-medium text-base overflow-hidden transition-all hover:scale-105 duration-300 ease-expo-out">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. 3D / canvas scene (`3d-canvas`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #9333ea;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#9333ea',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#050505) and set the headline in white (#ffffff).
- **Do:** Use the white pill as the only solid call to action in the hero.
- **Do:** Fade the headline's last word from white to grey rather than colouring it.
- **Don't:** Don't add more than two soft glows; the blue and violet stay in the corners.
- **Don't:** Don't place glows behind body copy.
- **Don't:** Don't use a coloured button in the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
