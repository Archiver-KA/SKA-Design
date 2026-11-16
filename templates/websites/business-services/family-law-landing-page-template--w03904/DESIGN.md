# Design system — Family Law Landing Page Template

`SN-W03904` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A quiet, light editorial page where a classic serif headline in deep navy does the work without ornament. The hero is split: a pale field of type on the left and a grey photographic panel on the right. Inter sets the navigation, and a navy button in the top bar is the only solid colour on the page. Discretion comes from space and restraint rather than decoration.

**Mood:** editorial, quiet, discreet, elegant, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#94a3b8` | Cards, panels, raised areas |
| Text | `#0b1f3b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |

Palette by frequency of use: `#0b1f3b` · `#ffffff` · `#f8fafc` · `#475569` · `#e2e8f0` · `#f1f5f9` · `#64748b` · `#94a3b8` · `#1e293b` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex justify-center items-center bg-[#0B1F3B] px-8 py-3.5 text-sm font-medium tracking-wide rounded-sm hover:bg-[#1A365D] transition-all shadow-lg shadow-[#0B1F3B]/20 text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Team (`team`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #94a3b8;
  --color-text: #0b1f3b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #e2e8f0;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#94a3b8',
    ink: '#0b1f3b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#e2e8f0',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on a pale ground and set the headline in the serif face in deep navy (#0b1f3b).
- **Do:** Use the solid navy button for the single conversation action in the top bar.
- **Do:** Let the photographic panel carry the colour; keep the type layer to navy and grey.
- **Don't:** Don't switch the hero to a dark field; the pale ground is part of the look.
- **Don't:** Don't add decorative gradients or glow shapes over the hero copy.
- **Don't:** Don't place more than one solid button on the first screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
