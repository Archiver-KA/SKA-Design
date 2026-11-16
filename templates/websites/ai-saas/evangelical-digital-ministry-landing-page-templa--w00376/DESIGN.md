# Design system — Evangelical Digital Ministry Landing Page Template

`SN-W00376` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, near-black page where the hero headline is white on its first line and a cyan-to-violet gradient (#22d3ee to purple) on its second. The gradient is the page's signature and is kept for display text only. Copy is light grey and centred under the headline, and a dark rounded frame for a featured video sits below with a circular play control in its centre.

**Mood:** dark, cinematic, devotional, gradient-led, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#06b6d4` · `#94a3b8` · `#020617` · `#cbd5e1` · `#000000` · `#0f172a` · `#9333ea` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Outfit
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 14px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_100px_rgba(6,182,212,0.15)]`, `shadow-cyan-900/50`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="glass-button px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-300 transition-all">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #000000;
  --color-text: #f8fafc;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#000000',
    ink: '#f8fafc',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the cyan-to-violet gradient (#22d3ee to #a855f7) only on the second headline line.
- **Do:** Centre the hero, with a white first line and the gradient second line above grey supporting copy.
- **Do:** Frame the featured video in a dark rounded panel with a circular play button in its centre.
- **Don't:** Don't put the gradient on body copy or buttons; it is for display text.
- **Don't:** Don't switch to a light background; the page is dark throughout.
- **Don't:** Don't add extra glow beyond the hero; the video frame stays dark and flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
