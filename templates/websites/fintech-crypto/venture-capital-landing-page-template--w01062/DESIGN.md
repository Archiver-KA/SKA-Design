# Design system — Venture Capital Landing Page Template

`SN-W01062` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black investor page has a bold white sans hero headline set over four lines, and the brand name ARDENT in gold (#c8a96e) is the only emphasis. A bordered outline button sits beside a quiet text link, so the calls to action stay restrained. On the right, a dark portfolio table lists companies with small green gains, which makes the performance data the second focal point.

**Mood:** restrained, bold, investor-grade, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#141414` | Page ground |
| Surface | `#555555` | Cards, panels, raised areas |
| Text | `#ededeb` | Headings and primary copy |
| Muted text | `#444444` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8a96e` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ededeb` · `#c8a96e` · `#666666` · `#444444` · `#ffffff` · `#888888` · `#555555` · `#141414` · `#0a0a0a` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist Sans
- **Body:** Geist Sans
- **Loaded families:** Instrument Serif, Cabinet Grotesk, Geist Sans, Geist Mono
- **Scale (largest breakpoint):** h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_0_8px_rgba(16,185,129,0.4)]`
- **Content width:** `max-w-[1320px]`, `max-w-2xl`
- **Section padding:** `py-[clamp(5rem,10vw,8.75rem)]`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Team (`team`)
5. Stats band (`stats`)
6. Process / steps (`how-it-works`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #141414;
  --color-surface: #555555;
  --color-text: #ededeb;
  --color-muted: #444444;
  --color-border: #ffffff;
  --color-accent: #c8a96e;
  --color-accent-2: #10b981;
  --font-display: "Geist Sans", sans-serif;
  --font-body: "Geist Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#141414',
    surface: '#555555',
    ink: '#ededeb',
    muted: '#444444',
    line: '#ffffff',
    accent: '#c8a96e',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Geist Sans'], sans: ['Geist Sans'] },
} }
```

## Do and don't

- **Do:** Set the brand name in gold (#c8a96e) as the only emphasis in the headline
- **Do:** Use an outlined button for the primary action and a text link with a pipe separator for the secondary
- **Do:** Show gains in small green numbers in the portfolio table
- **Don't:** Don't fill the primary button in gold; it is outlined
- **Don't:** Don't set the headline in a light weight; the bold sans is the voice
- **Don't:** Don't use a light mode; the page is dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
