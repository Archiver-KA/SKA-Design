# Design system — Ableton Masterclass Landing Page Template

`SN-W03395` · education · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

Dark studio-style masterclass page on near-black, with a bold uppercase sans headline in white. The second line is set in cyan (#22d3ee) and fades toward grey at its end. A solid cyan button leads the actions, with an outlined button beside it, and a dark mixer-style panel with coloured meters on the right stands in for the course tool.

**Mood:** technical, dark, energetic, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#ffffff` · `#22d3ee` · `#a1a1aa` · `#71717a` · `#18181b` · `#06b6d4` · `#3f3f46` · `#09090b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_#22d3ee]`, `shadow-[0_0_20px_rgba(34,211,238,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-black transition-all duration-200 bg-white font-base hover:bg-cyan-400 hover:scale-105 focus:outline-none rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Dashboard preview (`dashboard-preview`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #22d3ee;
  --color-accent-2: #8b5cf6;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#27272a',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#22d3ee',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold uppercase, with the second line in cyan (#22d3ee) fading to grey.
- **Do:** Use the cyan button for the primary action and an outlined button for the secondary.
- **Do:** Show the course as a dark mixer-style panel with coloured meters rather than a photograph.
- **Don't:** Don't use the purple (#8b5cf6) on headlines; it belongs to the meters.
- **Don't:** Don't set body copy in cyan.
- **Don't:** Don't place bright fills behind the text blocks.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
