# Design system — NextShine Entrepreneurial Ecosystem Landing Page Template

`SN-W00571` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero (#020617) with a centred headline in white, where the second line, 'Ecosystem Engineers.', is set in a cyan (#06b6d4) gradient. Small icon-led labels sit in one row under the copy. Cyan is used on the logo, the headline and the nav partner button, while the hero's main action is a white solid button beside a dark outline.

**Mood:** modern, dark, clean, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#94a3b8` · `#22d3ee` · `#64748b` · `#020617` · `#0ea5e9` · `#0f172a` · `#67e8f9` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_15px_rgba(6,182,212,0.4)]`, `shadow-[0_0_25px_rgba(6,182,212,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded text-sm font-semibold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] font-jakarta">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Integrations (`integrations`)
7. Feature grid (`features`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #f59e0b;
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
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in cyan (#06b6d4) under the white first line
- **Do:** Use the cyan button for the nav partner action and the white button for the hero action
- **Do:** Set the icon-led labels in one row, small, under the body copy
- **Don't:** Don't use cyan for body text
- **Don't:** Don't use amber (#f59e0b) as a button colour; it does not appear on the hero
- **Don't:** Don't add a light background to the hero; it is dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
