# Design system — Jomar Portfolio

`SN-W02064` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, cinematic hero on pure black with a large bold Inter name centred under a slim navigation bar. Small floating label pills in blue and orange sit around it, suggesting a set of work cards, and the copy is short and grey with one outlined pill as the portfolio link. Depth comes from blurred dark card shapes behind the name rather than from colour.

**Mood:** cinematic, bold, dark, playful, tech-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a78bfa` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#8b5cf6` · `#a78bfa` · `#000000` · `#f5f5f5` · `#d4d4d4` · `#e5e5e5` · `#a3a3a3` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-violet-500/20`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-8`, `gap-1`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-border: #ffffff;
  --color-accent: #a78bfa;
  --color-accent-2: #fbbf24;
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
    surface: '#171717',
    ink: '#f5f5f5',
    line: '#ffffff',
    accent: '#a78bfa',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in Inter bold at display size, centred under a slim navigation bar.
- **Do:** Use the blue and orange label pills only as floating tags over the work cards.
- **Do:** Keep the hero on pure black with blurred dark card shapes behind the name.
- **Don't:** Don't use the tag pill colours for body text or buttons.
- **Don't:** Don't add light section backgrounds to the hero.
- **Don't:** Don't fill the portfolio link; it is an outline pill.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
