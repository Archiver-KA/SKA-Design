# Design system — Futuristic Agency Landing Page Template

`SN-W01577` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black ground with a very large heavy uppercase headline in white, and neon lime (#ccff00) used for the primary button, a status pill and figure callouts. Small monospace labels and corner text frame the composition, giving the page a command-console feel. Lime is the only colour, so each use reads as a system signal rather than decoration.

**Mood:** command-console, electric, stark, technical, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ccff00` · `#ffffff` · `#000000` · `#71717a` · `#a1a1aa` · `#27272a` · `#050505` · `#52525b` · `#080808` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 128px · h3 30px · body 14px
- **Weights in use:** bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_10px_#CCFF00]`, `shadow-[0_0_15px_rgba(255,255,255,0.3)]`, `shadow-[0_0_30px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-[1800px]`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="btn-magnetic group relative overflow-hidden bg-white text-black px-6 py-2 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-signal transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #080808;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ccff00;
  --color-accent-2: #ef4444;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#080808',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ccff00',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the lime (#ccff00) for the primary button, status pill and key figures only
- **Do:** Set the headline in a heavy uppercase sans at very large size
- **Do:** Frame the layout with small monospace labels in the corners
- **Don't:** Don't use lime for body copy or large backgrounds
- **Don't:** Don't add a second neon colour beside the lime
- **Don't:** Don't soften the headline with light weights; it sits heavy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
