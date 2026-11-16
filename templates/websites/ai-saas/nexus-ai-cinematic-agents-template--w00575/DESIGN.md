# Design system — Nexus AI Cinematic Agents Template

`SN-W00575` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Near-monochrome cinematic page on a black ground (#0a0a0c). The hero is almost all grey type: a large, dimmed Inter headline over a faint radial glow. Colour is held back until a scroll-driven moment, and the only marker on the first screen is a row of frame-counter dots along the bottom edge. Structure comes from opacity steps and empty space rather than shape or colour.

**Mood:** cinematic, monochrome, hushed, scroll-driven, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0c` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#f4f2ef` | Headings and primary copy |
| Muted text | `#9c988f` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5b8d0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#050505` · `#f5b8d0` · `#9c988f` · `#e8e6e3` · `#c9c4bd` · `#b8b4ae` · `#171717` · `#f4efe7` · `#f43f5e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h3 16px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_2px_4px_rgba(0,0,0,0.1)]`
- **Content width:** `max-w-[77.5rem]`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="text-sm font-normal px-4 py-1.5 rounded-full bg-[#ededed] text-[#1a1a1a] hover:bg-white transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_2px_4px_rgba(0,0,0,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Call to action (`cta`)
5. Integrations (`integrations`)
6. Feature grid (`features`)
7. Process / steps (`how-it-works`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0c;
  --color-surface: #050505;
  --color-text: #f4f2ef;
  --color-muted: #9c988f;
  --color-border: #ffffff;
  --color-accent: #f5b8d0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0c',
    surface: '#050505',
    ink: '#f4f2ef',
    muted: '#9c988f',
    line: '#ffffff',
    accent: '#f5b8d0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero headline in Inter at large size, dimmed until the scroll reveal.
- **Do:** Keep the page ground at #0a0a0c and use #050505 only for panels behind content.
- **Do:** Use the dot timeline along the bottom as the progress marker, in the warm off-white (#e8e6e3).
- **Don't:** Don't brighten the hero headline to full white at first paint; the dimmed state is the design.
- **Don't:** Don't place a solid button in the hero; the first screen has only the nav CTA.
- **Don't:** Don't put bright colour on the first screen; colour is held back for the scroll.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
