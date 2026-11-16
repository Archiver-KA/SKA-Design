# Design system — NEXAVA AI Startup Landing Page Template

`SN-W00566` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A futuristic AI hero on a dark navy ground (#020617) with a soft indigo glow behind the centre. The headline is white on the first line and lavender (#818cf8) on the second, so the colour change marks the key phrase. A white primary button sits beside a dark outline button, and a small outlined pill tag sits above the headline. The glow keeps the page looking glassy.

**Mood:** futuristic, glassy, dark, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#6366f1` · `#818cf8` · `#020617` · `#475569` · `#64748b` · `#1e293b` · `#cbd5e1` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-indigo-500/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all focus:ring-2 focus:ring-indigo-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Feature grid (`features`)
6. Timeline (`timeline`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #020617;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
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
    background: '#020617',
    surface: '#020617',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in lavender (#818cf8) under the white first line
- **Do:** Use a solid white pill for the primary action and a dark outline for the secondary
- **Do:** Keep the indigo glow behind the hero, centred and soft
- **Don't:** Don't use the lavender for body copy or small labels
- **Don't:** Don't switch the hero to an indigo fill; the ground stays dark navy
- **Don't:** Don't add a second bright accent beside the lavender in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
