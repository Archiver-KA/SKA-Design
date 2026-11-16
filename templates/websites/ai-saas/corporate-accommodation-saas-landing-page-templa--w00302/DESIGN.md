# Design system — Corporate Accommodation SaaS Landing Page Template

`SN-W00302` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A dark, technical landing page on blue-black [#05080a], with a bright green [#4ade80] accent used for the eyebrow label, the logo ring and small status dots. The large Inter headline is set in two parts, with the second part in muted grey. A faint isometric map panel on the right suggests location tracking, so the page reads as a monitoring console.

**Mood:** technical, dark, precise, corporate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05080a` | Page ground |
| Surface | `#0e1216` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4ade80` · `#05080a` · `#000000` · `#64748b` · `#475569` · `#334155` · `#22c55e` · `#1e293b` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_#4ade80]`, `shadow-[0_0_100px_rgba(74,222,128,0.15)]`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full py-4 mb-10 rounded-lg border border-white/10 bg-transparent text-white group-hover:bg-[#4ade80] group-hover:text-black group-hover:border-[#4ade80] transition-all duration-300 text-sm font-medium font-geist reveal-on-scroll">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)
4. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #05080a;
  --color-surface: #0e1216;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #4ade80;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05080a',
    surface: '#0e1216',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#4ade80',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#4ade80) for the eyebrow label, the logo ring and status dots
- **Do:** Set the second half of the headline in muted grey
- **Do:** Keep the map or location panel low in contrast, as a background detail
- **Don't:** Don't set body text in the green; it is for labels and status only
- **Don't:** Don't use a light background for this dark layout
- **Don't:** Don't reflow the 72px Portuguese headline into English without checking the wrap

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
