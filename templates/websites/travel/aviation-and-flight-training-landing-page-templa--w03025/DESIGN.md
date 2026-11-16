# Design system — Aviation & Flight Training Landing Page Template

`SN-W03025` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A pale sky-blue hero that fades to white at the bottom, carrying a very heavy uppercase sans headline in deep navy (#0f172a), stacked across three lines. A coral (#e8573a) pill is the main action, set beside a monospace text link, and small monospace labels frame the top. Blue sky against coral gives a clear, aspirational contrast.

**Mood:** aspirational, bold, clean, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#e8573a` | Primary action and highlights |
| Second accent | `#1a5dab` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e8573a` · `#f06b4e` · `#64748b` · `#94a3b8` · `#2b7cd4` · `#1a5dab` · `#e2e8f0` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Syne, Inter, Geist, Geist Mono
- **Scale (largest breakpoint):** body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)]`, `shadow-sm`, `shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-[90rem]`, `max-w-[40ch]`
- **Section padding:** `py-[6rem]`, `py-[10rem]`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="text-xs font-mono font-light text-slate-500 hover:text-slate-900 hover:bg-slate-900/5 px-4 py-2 rounded-full transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Video / media (`video-media`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #e8573a;
  --color-accent-2: #1a5dab;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#e8573a',
    accent2: '#1a5dab',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans in deep navy (#0f172a), stacked on three lines
- **Do:** Use coral (#e8573a) for the primary button only
- **Do:** Set small labels and secondary links in monospace caps
- **Don't:** Don't use coral for headlines; it is reserved for the action
- **Don't:** Don't replace the sky-blue gradient with a flat white hero
- **Don't:** Don't set the navigation in heavy weight; the nav is light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
