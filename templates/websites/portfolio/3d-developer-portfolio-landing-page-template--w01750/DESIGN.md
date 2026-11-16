# Design system — 3D Developer Portfolio Landing Page Template

`SN-W01750` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark developer-portfolio hero on near-black with a large white three-line headline, the middle word set in grey to create a step in tone. A faint 3D wireframe sphere sits on the right as the only illustration, and key phrases in the paragraph are set in white against grey body text. Labels in small, tracked uppercase sit in the corners.

**Mood:** minimal, dark, technical, quiet, wireframe

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#18181b` · `#52525b` · `#3f3f46` · `#27272a` · `#000000` · `#09090b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h2 30px · h3 60px · body 16px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-8`, `gap-1`, `gap-16`

**Primary button**

```html
<a class="interactive px-12 py-4 bg-white text-black font-medium text-sm rounded-full hover:scale-105 transition-transform duration-300">…</a>
```

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans with the middle word in grey
- **Do:** Use a faint 3D wireframe as the only hero illustration
- **Do:** Mark key phrases in the paragraph in white against grey body text
- **Don't:** Don't add bright colour to the hero
- **Don't:** Don't set the page on a light background
- **Don't:** Don't put the wireframe behind the headline text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
