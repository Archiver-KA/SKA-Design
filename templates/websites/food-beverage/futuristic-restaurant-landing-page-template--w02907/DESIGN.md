# Design system — Futuristic Restaurant Landing Page Template

`SN-W02907` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A black, technical hero with a very large white grotesque wordmark centred over a green wireframe orbit and rotating cube. Lime (#a3e635) is the only colour: it marks the status readout in the bottom-left, the thin wedge along the bottom edge, and the wireframe lines. The stance is cyberpunk and product-like, with the 3D graphic doing the work and the type kept plain.

**Mood:** technical, cyberpunk, stark, product-like, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#a3e635` · `#000000` · `#ffffff` · `#27272a` · `#71717a` · `#18181b` · `#09090b` · `#52525b` · `#a1a1aa` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** h1 208px · h2 96px · h3 60px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lime-900/20`, `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full py-2 border border-zinc-600 rounded-lg hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-colors text-xs font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #000000;
  --color-text: #fafafa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #a3e635;
  --color-accent-2: #ef4444;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#000000',
    ink: '#fafafa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#a3e635',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a large white grotesque, centred, with the wireframe graphic behind it.
- **Do:** Use lime (#a3e635) for status text, the edge wedge and wireframe lines only.
- **Do:** Keep the status readout small and uppercase in the bottom-left.
- **Don't:** Don't use lime for buttons or large fills; it marks status and decoration.
- **Don't:** Don't add a light section; the page is black with lime details only.
- **Don't:** Don't add red (#ef4444) as a second accent.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
