# Design system — Titan Recovery - Heavy Duty Towing and Recovery

`SN-W04310` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A hard-edged dark page on near-black [#121212] built around an orange [#ff3c00] key word in each headline and on the primary button, with lime [#ccff00] kept to small status text. Headlines are very large, uppercase and heavy, and a monospaced status strip runs along the top and bottom of the hero. The page reads as industrial and urgent, with no rounded softness in the layout.

**Mood:** industrial, urgent, bold, dark, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121212` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#ff3c00` | Primary action and highlights |
| Second accent | `#ccff00` | Supporting highlights |

Palette by frequency of use: `#ff3c00` · `#ffffff` · `#333333` · `#050505` · `#121212` · `#6b7280` · `#ccff00` · `#2a2a2a` · `#9ca3af` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Chivo
- **Body:** Chivo
- **Loaded families:** Chivo, JetBrains Mono, Oswald
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 10px · body 20px
- **Weights in use:** bold, light
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full bg-[#FF3C00] hover:bg-white text-[#050505] font-heading text-2xl uppercase tracking-widest py-5 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-8 clip-corner relative overflow-hidden group">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #121212;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #333333;
  --color-accent: #ff3c00;
  --color-accent-2: #ccff00;
  --font-display: "Chivo", sans-serif;
  --font-body: "Chivo", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121212',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#333333',
    accent: '#ff3c00',
    accent2: '#ccff00',
  },
  fontFamily: { display: ['Chivo'], sans: ['Chivo'] },
} }
```

## Do and don't

- **Do:** Use the orange (#ff3c00) for primary buttons and the key word in each headline
- **Do:** Keep headlines uppercase in heavy Chivo at large sizes
- **Do:** Use lime (#ccff00) only for small status labels and live indicators
- **Don't:** Don't use lime for buttons or headlines
- **Don't:** Don't use a light background anywhere on the page
- **Don't:** Don't soften headlines with a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
