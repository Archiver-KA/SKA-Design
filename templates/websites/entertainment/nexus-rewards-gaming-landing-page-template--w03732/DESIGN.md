# Design system — Nexus Rewards Gaming Landing Page Template

`SN-W03732` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Deep navy page with a large sans headline in white that moves through a pale cyan line and a lilac line, so the title itself carries the palette. A dark translucent gift-card panel sits on the right with a glowing lilac edge and small cyan labels, and a solid cyan pill holds the main action. The cyan and lilac pair reads as neon, while the rest of the page stays in dark navy and white.

**Mood:** futuristic, neon, gamified, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#67e8f9` | Primary action and highlights |
| Second accent | `#d8b4fe` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#67e8f9` · `#64748b` · `#94a3b8` · `#a5f3fc` · `#0f172a` · `#d8b4fe` · `#e2e8f0` · `#06b6d4` · `#020617`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_24px_rgba(251,191,36,0.35)]`, `shadow-[0_0_20px_rgba(6,182,212,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Bento grid (`bento-grid`)
5. About (`about`)
6. Feature grid (`features`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #334155;
  --color-text: #e2e8f0;
  --color-border: #ffffff;
  --color-accent: #67e8f9;
  --color-accent-2: #d8b4fe;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#334155',
    ink: '#e2e8f0',
    line: '#ffffff',
    accent: '#67e8f9',
    accent2: '#d8b4fe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline with the key phrase in pale cyan (#67e8f9) and lilac (#d8b4fe)
- **Do:** Use a solid cyan pill for the main action
- **Do:** Show the product as a dark translucent card with a soft glowing edge
- **Don't:** Don't set body copy in cyan or lilac
- **Don't:** Don't put a light background behind the hero
- **Don't:** Don't use more than two highlight colours in one headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
