# Design system — Nexus SaaS Landing Page Template

`SN-W00586` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black product page where the hero is pure type on a flat ground: a large white sans headline, with the second line fading into a silver gradient. A small pill badge sits above, and the actions are a solid white button and a dark pill holding an install command. Blue appears only as the badge dot, so the page reads as austere and engineered.

**Mood:** austere, engineered, monochrome, minimal, gradient-fading

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050507` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#94a3b8` · `#cbd5e1` · `#22c55e` · `#050507` · `#64748b` · `#000000` · `#0f0f11` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-glow`, `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-[0_0_8px_rgba(99,102,241,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-white text-black hover:bg-slate-200 transition-all text-xs font-medium px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Articles (`blog-articles`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050507;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050507',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white (#ffffff) on the near-black ground (#050507), with the second line in a silver gradient.
- **Do:** Put a solid white button first and a dark pill beside it that holds a command.
- **Do:** Keep the badge's blue dot as the only indigo on the first screen.
- **Don't:** Don't set the headline in the slate body tone (#94a3b8); the headline is white.
- **Don't:** Don't use indigo (#6366f1) as a fill; it appears only as the badge dot.
- **Don't:** Don't add a second gradient to the hero; the silver fade is the only one.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
