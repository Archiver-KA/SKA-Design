# Design system — AI Awards Landing Page Template

`SN-W00060` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page carries a very large, heavy uppercase sans headline set in three lines, where the middle word is grey for contrast. A small pill tag sits above and a circular play button sits under the copy. The look is blunt and typographic, and the hero uses only white and grey. Indigo (#6366f1) is an accent used further down the page.

**Mood:** blunt, typographic, monochrome, heavy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030304` | Page ground |
| Surface | `#030304` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#52525b` · `#27272a` · `#18181b` · `#030304` · `#6366f1` · `#818cf8` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 96px · h3 16px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_rgba(99,102,241,0.2)]`, `shadow-[0_0_50px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Awards / press (`awards-press`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030304;
  --color-surface: #030304;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #27272a;
  --color-accent: #818cf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030304',
    surface: '#030304',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#27272a',
    accent: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans at very large size
- **Do:** Use grey for the middle word of the headline
- **Do:** Keep the page to white and greys in the hero
- **Don't:** Don't add colour to the headline
- **Don't:** Don't use a light background
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
