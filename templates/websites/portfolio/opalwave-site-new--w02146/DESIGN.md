# Design system — OPALWAVE SITE - New

`SN-W02146` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark studio page on a near-black ground, with a headline in two tones: 'Design that sells.' in white and 'Tech that scales.' in dim grey. Mint green (#10b981) marks the status pill, a progress bar and the growth figure in a terminal-style panel on the right, while the primary button is solid white.

**Mood:** sleek, technical, dark, confident, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#a855f7` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#a855f7` · `#71717a` · `#27272a` · `#10b981` · `#c084fc` · `#3f3f46` · `#52525b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 10px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_-3px_rgba(168,85,247,0.2)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="group relative text-[11px] font-mono font-medium overflow-hidden border border-white/10 bg-white/5 px-5 py-2 text-zinc-300 rounded-full flex items-center gap-2 transition-all hover:border-purple-500/50 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Bento grid (`bento-grid`)
4. Services (`services`)
5. Newsletter signup (`newsletter`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #a855f7;
  --color-surface: #27272a;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#a855f7',
    surface: '#27272a',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter, with the second clause in dim grey for a two-tone line.
- **Do:** Use mint green (#10b981) for status markers, progress bars and growth figures only.
- **Do:** Keep the terminal-style panel beside the hero copy, with monospace lines and one green highlight.
- **Don't:** Don't use the purple (#a855f7) as the page ground; the ground is near-black.
- **Don't:** Don't turn the solid white primary button into a coloured one.
- **Don't:** Don't add a gradient fill to the headline text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
