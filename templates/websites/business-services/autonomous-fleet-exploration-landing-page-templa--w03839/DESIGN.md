# Design system — Autonomous Fleet Exploration Landing Page Template

`SN-W03839` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A nearly black hero (#050505) with a large white sans-serif headline whose second word carries a gradient running from orange (#f97316) to magenta. The body copy is grey and short, and a dark input field with a white launch button sits beside it, so the statement is paired with one action. A small monospaced tag above the headline adds a technical note.

**Mood:** futuristic, bold, technical, adventurous

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#9ca3af` · `#000000` · `#6b7280` · `#050505` · `#fb923c` · `#d1d5db` · `#a855f7` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Space Mono
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-orange-500/20`
- **Content width:** `max-w-5xl`, `max-w-[200px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="glass-card px-5 py-2.5 rounded-full text-xs font-semibold text-white hover:bg-white/10 transition-all interactable border border-white/10 hover:border-orange-500/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline word with the orange-to-magenta gradient only.
- **Do:** Keep the hero on near-black (#050505) with one input and one launch button.
- **Do:** Use the small monospaced tag above the headline for status text.
- **Don't:** Don't apply the gradient to body copy or buttons.
- **Don't:** Don't use a light background for the hero.
- **Don't:** Don't add a second gradient to the same headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
