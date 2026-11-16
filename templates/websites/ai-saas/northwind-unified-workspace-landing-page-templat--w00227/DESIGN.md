# Design system — Northwind Unified Workspace Landing Page Template

`SN-W00227` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, workspace-style hero on near-black (#050505) with a large white sans headline in two lines. The second line sets 'digital' in a grey italic serif, a deliberate break in typeface that gives the headline its character. Below it, a command-palette panel with a search field and a list of results shows the product, and the page depends on that product window.

**Mood:** dark, editorial, focused, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#050505` · `#525252` · `#a3a3a3` · `#d4d4d4` · `#262626` · `#eab308` · `#10b981` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_white]`, `shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[90rem]`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group relative px-4 py-1.5 rounded-full bg-white text-black text-[13px] font-medium hover:bg-neutral-200 transition-all overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Marquee (`marquee`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #262626;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #eab308;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#262626',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#eab308',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line with one italic grey serif word for contrast
- **Do:** Show the command palette UI in a dark panel below the CTAs
- **Do:** Keep the accent colours out of the headline; it stays white and grey
- **Don't:** Don't use italic serif for the whole headline
- **Don't:** Don't add light panels to the hero
- **Don't:** Don't use green for buttons in the hero; the fills are neutral

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
