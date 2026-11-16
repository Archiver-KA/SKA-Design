# Design system — FlowForge SaaS Landing Page Template

`SN-W00391` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black technical page with a large bold sans headline, 'Automate' in white over 'Everything.' in grey, and a white pill as the main action. A dense point-cloud sphere occupies the right half with slider controls laid over it, so the product reads as a control interface. Orange (#f97316) is used sparingly, for the eyebrow dot and a warm glow, while the rest of the page stays in white and grey.

**Mood:** technical, industrial, dark, dense, controlled

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#d4d4d8` · `#000000` · `#f4f4f5` · `#050505` · `#f97316` · `#e4e4e7` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="text-sm px-4 py-1.5 bg-white text-black font-medium hover:bg-zinc-200 transition-colors rounded-full shadow-sm">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a bold sans at large size, the first word white and the second grey.
- **Do:** Use the orange (#f97316) only for the eyebrow dot and the warm glow behind the visual.
- **Do:** Show the product as a dot-matrix sphere with slider controls overlaid on it.
- **Don't:** Don't add orange to buttons; the primary button is white.
- **Don't:** Don't put the dot sphere behind the body copy; it sits on the right.
- **Don't:** Don't use a light background; the page is black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
