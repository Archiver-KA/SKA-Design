# Design system — Dark Developer Portfolio Landing Page Template

`SN-W01930` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `ru`

## Direction

A near-black page with a monochrome gradient headline in large Inter: white on the lead phrase and grey on the rest of the line. The hero uses a small badge, a floating nav bar and two pills, a solid white primary and an outlined grey secondary. Red appears only as a small dot in the logo and the status marker, so the page stays neutral with a single cue.

**Mood:** monochrome, minimal, dark, futuristic, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#030303` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#4c1d95` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#78716c` · `#d6d3d1` · `#000000` · `#f8fafc` · `#fdba74` · `#ef4444` · `#1a1a1a` · `#030303`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 30px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-black/20`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-stone-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Case studies (`case-studies`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #030303;
  --color-text: #ffffff;
  --color-muted: #a8a29e;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #4c1d95;
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
    surface: '#030303',
    ink: '#ffffff',
    muted: '#a8a29e',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#4c1d95',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter with a white-to-grey gradient on the lead phrase
- **Do:** Use a solid white pill for the primary action and an outlined grey pill for the second
- **Do:** Keep red (#ef4444) to the logo dot and status marker only
- **Don't:** Don't use red for buttons or headings; it is a marker, not a fill
- **Don't:** Don't set the headline in a second typeface
- **Don't:** Don't put the floating nav on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
