# Design system — Cinematic Film Society Landing Page Template

`SN-W03679` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A photograph-led dark page where a large night-time image of a building fills the hero, and a heavy white uppercase headline sits over its left side. Navigation is a thin row of small uppercase links across the top, and body copy sits in a narrow column at the lower right. The photograph carries the mood, and the typography stays plain.

**Mood:** cinematic, photographic, sober, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#737373` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#083344` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#0a0a0a` · `#404040` · `#083344` · `#737373` · `#d4d4d4` · `#262626` · `#e5e5e5` · `#020617`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist, Fredoka
- **Scale (largest breakpoint):** h1 20px · h2 60px · h3 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[230px]`, `max-w-7xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-12`, `gap-y-12`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Articles (`blog-articles`)
3. Team (`team`)
4. Contact form (`contact-form`)
5. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #737373;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #083344;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#737373',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#083344',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white uppercase over the left side of the photograph
- **Do:** Keep navigation as thin small uppercase links across the top
- **Do:** Use the photograph as the main visual and limit other graphics
- **Don't:** Don't add colour to the type; keep it white
- **Don't:** Don't place body copy over the busiest part of the image
- **Don't:** Don't add an accent colour to headings

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
