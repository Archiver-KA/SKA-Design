# Design system — Auden FX Trading & Mentorship Template

`SN-W00877` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `id`

## Direction

A dark charcoal page (#1a1a1a) with thin hairline frames at the sides and small grey uppercase monospaced navigation. The page ground is charcoal, and the layout reads as dark, framed and technical, with the hairlines defining the page edges and panels.

**Mood:** dark, technical, framed, quiet, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#c8c4bc` | Secondary copy, captions |
| Border | `#c8c4bc` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#c8c4bc` · `#8b3a2a` · `#1a1a1a` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 12px
- **Weights in use:** light, extralight, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/80`
- **Content width:** `max-w-2xl`, `max-w-[1200px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-5`, `gap-4`

**Primary button**

```html
<a class="font-mono-custom text-xs uppercase tracking-widest bg-[#8b3a2a] text-[#c8c4bc] px-7 py-3.5 rounded-lg hover:bg-[#8b3a2a]/80 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #1a1a1a;
  --color-text: #f5f5f5;
  --color-muted: #c8c4bc;
  --color-border: #c8c4bc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#1a1a1a',
    ink: '#f5f5f5',
    muted: '#c8c4bc',
    line: '#c8c4bc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep nav labels small, grey and uppercase
- **Do:** Use thin hairline frames for page edges and panels
- **Do:** Use terracotta (#8b3a2a) for section accents rather than the page ground
- **Don't:** Don't use the terracotta (#8b3a2a) as the page ground; the ground is charcoal
- **Don't:** Don't set nav labels in bold
- **Don't:** Don't add light backgrounds to the page ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
