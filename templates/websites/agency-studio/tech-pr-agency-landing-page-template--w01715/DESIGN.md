# Design system — Tech PR Agency Landing Page Template

`SN-W01715` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white page with a large near-black sans headline, a coral (#e05d3a) accent on the 'Book Strategy Call' link in the navbar, and a black pill button for the main action. Two mockup frames sit on the right. Small uppercase labels introduce the sections, giving the page a studio-document feel.

**Mood:** editorial, clean, warm, studio

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e05d3a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#e05d3a` · `#6b7280` · `#f3f4f6` · `#000000` · `#050505` · `#4b5563` · `#f9fafb` · `#f5f5f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="magnetic-btn bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:scale-[1.03] transition-transform">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Case studies (`case-studies`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #050505;
  --color-text: #000000;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #e05d3a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#050505',
    ink: '#000000',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#e05d3a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large near-black sans, tight and left-aligned.
- **Do:** Use coral (#e05d3a) only for the nav call to action and one accent per section.
- **Do:** Keep the main action as a solid black pill button.
- **Don't:** Don't use coral as the page background; it is the accent colour.
- **Don't:** Don't leave the mockup frames empty in the final template.
- **Don't:** Don't add a second accent colour beside the coral.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
