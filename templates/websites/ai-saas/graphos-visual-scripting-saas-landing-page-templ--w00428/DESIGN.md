# Design system — GraphOS Visual Scripting SaaS Landing Page Template

`SN-W00428` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark page with a magenta-violet accent (#d946ef) used for the second headline phrase and for the connector wires of the product diagram. The hero splits into a text column and a node-graph editor on the right, with pale node cards and curved purple wires that explain the product visually. A white solid pill button leads, with an outlined button beside it.

**Mood:** technical, playful, dark, glowing, developer-facing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d946ef` | Primary action and highlights |
| Second accent | `#f0abfc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#d946ef` · `#6b7280` · `#f0abfc` · `#e879f9` · `#d1d5db` · `#0a0a0a` · `#c084fc` · `#0a0514`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-[0_0_15px_rgba(255,255,255,0.02)]`, `shadow-[0_0_20px_rgba(217,70,239,0.2)]`
- **Content width:** `max-w-2xl`, `max-w-[1440px]`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Code / terminal (`code-terminal`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #f3f4f6;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #d946ef;
  --color-accent-2: #f0abfc;
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
    surface: '#0a0a0a',
    ink: '#f3f4f6',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#d946ef',
    accent2: '#f0abfc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use magenta (#d946ef) for the second headline phrase and the connector wires only
- **Do:** Show the product as a node graph in the hero, with curved wires between cards
- **Do:** Lead with a white solid pill button and set an outlined button beside it
- **Don't:** Don't set the whole headline in magenta
- **Don't:** Don't use a light page background; the page is near-black
- **Don't:** Don't draw the node wires in straight lines; the curves are part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
