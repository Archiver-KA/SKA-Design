# Design system — CBM | intelligence

`SN-W02334` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A cinematic longevity page on a very dark green-black ground with white serif type. The headline is set large, and its second line, Meets Intelligence, is italic, which carries the contrast. Small monospaced all-caps nav and a status pill give a technical edge, and green (#22c55e) is kept to the indicator text.

**Mood:** cinematic, technical, quiet, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#292524` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#f5f5f4` · `#d6d3d1` · `#e7e5e4` · `#a8a29e` · `#292524` · `#57534e` · `#eab308` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Space Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 10px
- **Weights in use:** light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_8px_rgba(94,234,212,0.8)]`, `shadow-2xl`, `shadow-forest-950/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-6`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group relative flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full border border-white/5 bg-forest-950/40 backdrop-blur-xl transition-all duration-500 hover:border-copper-400/30 hover:bg-forest-900/60 cursor-none">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Services (`services`)
6. Footer (`footer`)
7. Sign-in form (`auth-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #292524;
  --color-surface: #f5f5f4;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #22c55e;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#292524',
    surface: '#f5f5f4',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the second line in italic white.
- **Do:** Use the green (#22c55e) only for the small status pill and indicator text.
- **Do:** Set nav labels and captions in small uppercase monospace with wide letter spacing.
- **Don't:** Don't add bright colour fills; the page stays dark with white type.
- **Don't:** Don't set the page on a light ground; it is dark.
- **Don't:** Don't set the headline in a sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
