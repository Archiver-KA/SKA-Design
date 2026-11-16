# Design system — ApexSignal Decision Intelligence Landing Page Template

`SN-W00208` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, cinematic hero: a grey gradient ground with a tall, heavy white headline set in a tight three-line stack. Thin red rules and a red logo block are the only colour, and the red (#d92f24) marks the primary button and a few hairline signals that show live data. Small uppercase status labels run along the bottom edge, giving an instrument-panel feel.

**Mood:** cinematic, technical, urgent, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f7f6f3` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#111111` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d92f24` | Primary action and highlights |
| Second accent | `#e8d45a` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#d92f24` · `#111111` · `#e8d45a` · `#4ade80` · `#16a34a` · `#f7f6f3` · `#050505` · `#b5261d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter Tight
- **Loaded families:** Inter Tight, IBM Plex Mono
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 36px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-[1440px]`, `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-[#D92F24] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#b5261d] transition-colors">…</a>
```

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f7f6f3;
  --color-text: #ffffff;
  --color-muted: #111111;
  --color-border: #000000;
  --color-accent: #d92f24;
  --color-accent-2: #e8d45a;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter Tight", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f7f6f3',
    ink: '#ffffff',
    muted: '#111111',
    line: '#000000',
    accent: '#d92f24',
    accent2: '#e8d45a',
  },
  fontFamily: { display: ['Inter Tight'], sans: ['Inter Tight'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy, tightly spaced sans, white on the dark ground
- **Do:** Use the red (#d92f24) for the primary button and thin signal lines only
- **Do:** Keep status labels small, uppercase and along the bottom edge
- **Don't:** Don't put the hero on a light background; the hero is dark
- **Don't:** Don't add gradients to the red; it is a flat colour
- **Don't:** Don't set body copy in red

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
