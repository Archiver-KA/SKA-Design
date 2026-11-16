# Design system — Venture Capital Landing Page Template

`SN-W00801` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A sober, dark finance page with a white-to-grey gradient headline and a lime primary button (#ccff00) as the one bright accent. A dark monitor panel to the right lists allocations with small tags, and small uppercase section labels sit above the headline. The page is dark overall.

**Mood:** sober, dark, data-led, exclusive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#040608` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#64748b` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ccff00` · `#1e293b` · `#f1f5f9` · `#040608` · `#64748b` · `#0a0e14` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Syne
- **Scale (largest breakpoint):** h3 20px · body 14px
- **Weights in use:** bold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_10px_#CCFF00]`, `shadow-[0_0_40px_rgba(204,255,0,0.03)]`, `shadow-[0_0_20px_rgba(204,255,0,0.2)]`
- **Content width:** `max-w-[80rem]`, `max-w-[100px]`
- **Section padding:** `py-[clamp(5rem,10vw,8.75rem)]`, `py-[clamp(6rem,12vw,10rem)]`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-[#CCFF00] text-[#040608] px-5 py-2 font-mono text-xs uppercase tracking-widest transition-transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Stats band (`stats`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Team (`team`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #040608;
  --color-surface: #f1f5f9;
  --color-text: #f1f5f9;
  --color-muted: #64748b;
  --color-border: #64748b;
  --color-accent: #ccff00;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#040608',
    surface: '#f1f5f9',
    ink: '#f1f5f9',
    muted: '#64748b',
    line: '#64748b',
    accent: '#ccff00',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#ccff00) only for the primary button
- **Do:** Set the last headline lines in a white-to-grey gradient
- **Do:** Show allocation data in a dark monitor panel with small tags
- **Don't:** Don't use lime for backgrounds or large fills
- **Don't:** Don't add light sections between dark ones
- **Don't:** Don't use decorative shapes; the panels are flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
