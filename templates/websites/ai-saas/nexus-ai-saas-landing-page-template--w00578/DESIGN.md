# Design system — Nexus AI SaaS Landing Page Template

`SN-W00578` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark cinematic hero on a near-black ground, with a dimmed, centred headline and a frame-counter timeline along the bottom. Type is set in pale warm greys, and the page relies on opacity and empty space. Colour is held back until the scroll-driven sections.

**Mood:** cinematic, monochrome, hushed, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0c` | Page ground |
| Surface | `#ededed` | Cards, panels, raised areas |
| Text | `#e8e6e3` | Headings and primary copy |
| Muted text | `#9c988f` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5b8d0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f5b8d0` · `#9c988f` · `#e8e6e3` · `#c9c4bd` · `#b8b4ae` · `#171717` · `#0a0a0c` · `#f4f2ef` · `#ededed`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
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

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0c;
  --color-surface: #ededed;
  --color-text: #e8e6e3;
  --color-muted: #9c988f;
  --color-border: #ffffff;
  --color-accent: #f5b8d0;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0c',
    surface: '#ededed',
    ink: '#e8e6e3',
    muted: '#9c988f',
    line: '#ffffff',
    accent: '#f5b8d0',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the page ground to #0a0a0c and the headline in warm grey (#e8e6e3), dimmed on load.
- **Do:** Use the dot timeline along the bottom as the only progress marker.
- **Do:** Keep the first screen free of buttons other than the nav CTA.
- **Don't:** Don't ship this as a light page; the design is dark.
- **Don't:** Don't brighten the hero headline to pure white at first paint.
- **Don't:** Don't introduce the pink accent (#f5b8d0) into the hero; it belongs to later sections.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
