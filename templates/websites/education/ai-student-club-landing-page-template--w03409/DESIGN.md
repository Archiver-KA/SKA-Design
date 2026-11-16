# Design system — AI Student Club Landing Page Template

`SN-W03409` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Dark, technical club page on black with a single soft blue glow at the centre, where the logo sits above a row of small monospaced text. Two dark panels frame the centre: a code block with a syntax-highlighted configuration and a training progress card. Blue is kept to the glow and the progress bar, so the page reads as a lab rather than a poster.

**Mood:** technical, dark, focused, lab-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#171717` · `#000000` · `#525252` · `#6366f1` · `#3b82f6` · `#10b981` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 160px · h2 60px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-[1200px]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer header-link">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Marquee (`marquee`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
  --font-display: "Space Grotesk", sans-serif;
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
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground black (#000000) with one soft blue glow (#3b82f6) at the centre.
- **Do:** Show code in dark panels with monospaced type, using the blue only for progress and highlights.
- **Do:** Keep the navigation as a floating outlined pill across the top.
- **Don't:** Don't place the glow behind body copy.
- **Don't:** Don't use light panels; the page stays dark.
- **Don't:** Don't add a second accent colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
