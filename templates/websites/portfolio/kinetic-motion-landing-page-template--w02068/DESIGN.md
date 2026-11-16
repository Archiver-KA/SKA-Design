# Design system — Kinetic Motion Landing Page Template

`SN-W02068` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark black page where the main headline is a heavy sans set in a silver-to-grey gradient with a bevelled, chrome-like edge. Navigation is small, uppercase and numbered, and a monospace hint sits above the title, so the type carries the whole effect. Colour is absent; the metal gradient and the motion are the design.

**Mood:** stark, kinetic, monochrome, bold, experimental

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#050505` · `#111111` · `#737373` · `#a3a3a3` · `#666666` · `#525252` · `#888888` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 14px
- **Weights in use:** bold, black
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-black`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-6`, `gap-20`

**Primary button**

```html
<a class="text-xs font-bold border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Map / location (`map-location`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy sans with a silver-to-grey gradient and a bevelled edge.
- **Do:** Keep the page pure black with white and grey only.
- **Do:** Use numbered uppercase navigation labels and a small monospace hint line.
- **Don't:** Don't add colour; the metal gradient is the only effect on the type.
- **Don't:** Don't set the headline in a light weight.
- **Don't:** Don't add decorative images behind the title; the hero is type on black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
