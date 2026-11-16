# Design system — Developer Portfolio Website Template

`SN-W01968` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Glassy dark portfolio: a near-black ground (#0a0a0a) with a teal-to-cyan gradient on the one highlighted headline word and matching teal call-to-action buttons. Inline keywords in the intro copy pick up the same teal. Blurred glow and glass effects sit behind the hero.

**Mood:** glassy, luminous, teal-led, modern, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#404040` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#a78bfa` | Supporting highlights |

Palette by frequency of use: `#34d399` · `#a3a3a3` · `#10b981` · `#22d3ee` · `#262626` · `#f5f5f5` · `#06b6d4` · `#a78bfa` · `#737373` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="magnetic-btn hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-neutral-950 text-sm font-medium rounded-full transition-all duration-200 animate-pulse-glow">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Articles (`blog-articles`)
3. Navigation bar (`navbar`)
4. Modal / overlay (`modal-overlay`)
5. About (`about`)
6. Case studies (`case-studies`)
7. Services (`services`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #404040;
  --color-accent: #34d399;
  --color-accent-2: #a78bfa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#f5f5f5',
    muted: '#a3a3a3',
    line: '#404040',
    accent: '#34d399',
    accent2: '#a78bfa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the emerald (#34d399) for the highlighted headline word and the primary button only
- **Do:** Set keywords in intro copy in the same teal so the accent carries through the text
- **Do:** Stack the hero headline on three lines and centre it
- **Don't:** Don't add a new accent beside the emerald and violet (#a78bfa)
- **Don't:** Don't ship without the Inter font loaded.
- **Don't:** Don't place glow shapes behind body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
