# Design system — Cybersecurity SaaS Landing Page Template

`SN-W00321` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, terminal-style zero-trust page on black, with a very heavy white headline in a wide sans, and underscores kept in the wording. Cyan [#22d3ee] marks the brand word in the nav and the small status labels, and the buttons are uppercase, one solid white and one dark outlined. The underscores and uppercase setting make the page read as a command console.

**Mood:** console-like, stark, technical, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#1f2937` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#22d3ee` · `#6b7280` · `#1f2937` · `#eab308` · `#9ca3af` · `#22c55e` · `#000000` · `#ec4899`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Share Tech Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-cyan-900/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest overflow-hidden hover:bg-cyan-400 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Code / terminal (`code-terminal`)
6. Bento grid (`bento-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #1f2937;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #eab308;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#333333',
    ink: '#ffffff',
    muted: '#1f2937',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Use the cyan (#22d3ee) for the brand word and small status labels only
- **Do:** Set headlines in uppercase, keeping the underscores in the copy
- **Do:** Make buttons uppercase, with a solid white variant and a dark outlined variant
- **Don't:** Don't use cyan for large fills
- **Don't:** Don't set body copy in uppercase
- **Don't:** Don't use the cyan (#06b6d4) as the page ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
