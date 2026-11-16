# Design system — Instagram Carousel Funnel Template

`SN-W01603` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Three tall carousel slides on near-black, each a rounded dark card that carries one line of a story. A heavy Inter headline is paired with an Instrument Serif italic in lime (#c5f848) for the key phrase, and a soft red (#ef4444) marks the problem being called out. A small uppercase tag sits at the top of each slide, and a simple falling line chart shows the lesson without decoration.

**Mood:** punchy, editorial, dark, social

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#404040` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5f848` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c5f848` · `#000000` · `#737373` · `#ef4444` · `#f87171` · `#525252` · `#404040` · `#d4d4d4` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Instrument Serif
- **Loaded families:** Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[40px]` (40px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_20px_50px_-20px_rgba(197,248,72,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-[280px]`
- **Common gaps:** `gap-4`, `gap-2`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Logo cloud (`logo-cloud`)
3. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #404040;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #c5f848;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Instrument Serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#404040',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#c5f848',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each slide in Instrument Serif italic in lime (#c5f848)
- **Do:** Use the red (#ef4444) only for the problem or the negative example
- **Do:** Keep each slide on near-black with one headline and a small uppercase tag
- **Don't:** Don't put more than one lime phrase on a slide
- **Don't:** Don't use lime as a background fill
- **Don't:** Don't add stock photos; the slides rely on type and simple diagrams

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
