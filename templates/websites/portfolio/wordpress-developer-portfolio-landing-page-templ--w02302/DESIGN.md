# Design system — WordPress Developer Portfolio Landing Page Template

`SN-W02302` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

A black page with a tall display headline that breaks mid-word across lines, the last word dimmed to dark grey as a second tone. A dark side panel shows telemetry-style stats, with lime (#cdff00) values, a lime progress bar and a cyan status line. Lime and cyan read as instrument readouts, so the page feels like a monitoring console.

**Mood:** bold, console, stark, technical, loud

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#cdff00` | Primary action and highlights |
| Second accent | `#00ffff` | Supporting highlights |

Palette by frequency of use: `#cdff00` · `#333333` · `#ffffff` · `#000000` · `#666666` · `#999999` · `#00ffff` · `#ff0033` · `#1a1a1a` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Bebas Neue
- **Loaded families:** Bebas Neue, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h2 96px · h3 12px · body 14px
- **Weights in use:** bold, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_30px_rgba(205,255,0,0.5)]`
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full bg-[#CDFF00] text-black font-bold uppercase py-6 hover:bg-white transition-colors duration-300 tracking-widest flex items-center justify-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Process / steps (`how-it-works`)
5. FAQ (`faq`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #fafafa;
  --color-muted: #666666;
  --color-border: #333333;
  --color-accent: #cdff00;
  --color-accent-2: #00ffff;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Bebas Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#fafafa',
    muted: '#666666',
    line: '#333333',
    accent: '#cdff00',
    accent2: '#00ffff',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Bebas Neue'] },
} }
```

## Do and don't

- **Do:** Break the headline across lines in tall uppercase display type, with the last word dimmed
- **Do:** Use #cdff00 for stat values and progress bars only
- **Do:** Keep status lines in cyan (#00ffff) with a small dot
- **Don't:** Don't use lime for headline text
- **Don't:** Don't round the corners of the stat panels; the layout is square
- **Don't:** Don't set body copy in lime; it is reserved for values

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
