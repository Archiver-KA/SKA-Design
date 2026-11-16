# Design system — FORGEE Fitness & Performance Landing Page Template

`SN-W02622` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A dark, orange-accented gym hero in Portuguese. Three uppercase display lines run over a near-black ground with a warm orange glow at the right, and the last line is set in orange (#e8400a). A solid orange button sits in the header and the copy under the headline is small and grey.

**Mood:** warm, dark, uppercase, glowing, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b6b6b` | Secondary copy, captions |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |
| Accent | `#e8400a` | Primary action and highlights |
| Second accent | `#ccff00` | Supporting highlights |

Palette by frequency of use: `#e8400a` · `#ffffff` · `#6b6b6b` · `#2a2a2a` · `#111111` · `#b0b0b0` · `#1e1e1e` · `#b22a00` · `#0a0a0a` · `#4a4a4a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 14px
- **Weights in use:** bold, black, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_40px_rgba(232,64,10,0.3)]`, `shadow-[0_0_40px_rgba(232,64,10,0.1)]`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="relative z-10 bg-[#111111] text-white font-display uppercase tracking-widest px-8 py-4 text-sm hover:bg-white hover:text-[#111111] transition-colors duration-300 w-full lg:w-auto whitespace-nowrap flex-shrink-0">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b6b6b;
  --color-border: #2a2a2a;
  --color-accent: #e8400a;
  --color-accent-2: #ccff00;
  --font-display: "Oswald", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b6b6b',
    line: '#2a2a2a',
    accent: '#e8400a',
    accent2: '#ccff00',
  },
  fontFamily: { display: ['Oswald'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase display type, with the last line in orange (#e8400a).
- **Do:** Use orange (#e8400a) for the header button and the final headline line only.
- **Do:** Keep the warm glow to the right of the hero and away from body text.
- **Don't:** Don't use the lime (#ccff00) as the page ground.
- **Don't:** Don't set white headline lines over a light background.
- **Don't:** Don't set body copy in orange.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
