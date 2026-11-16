# Design system — Runlyx Automation SaaS Landing Page Template

`SN-W00677` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, forest-green automation page on a near-black ground (#02120e), where a warm tan accent (#d4a574) sets the primary button and the highlighted word 'Ship' apart from the cream headline. Deep green panels hold the product window and tags, so the palette stays within greens, cream and tan. The headline is a heavy sans at a generous size, and the page reads calm and premium.

**Mood:** premium, dark, warm, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#02120e` | Page ground |
| Surface | `#051d16` | Cards, panels, raised areas |
| Text | `#e5e0d8` | Headings and primary copy |
| Muted text | `#a8b3af` | Secondary copy, captions |
| Border | `#02120e` | Hairlines, dividers, outlines |
| Accent | `#d4a574` | Primary action and highlights |
| Second accent | `#1b4d3e` | Supporting highlights |

Palette by frequency of use: `#d4a574` · `#1b4d3e` · `#02120e` · `#a8b3af` · `#6e7d78` · `#ffffff` · `#e5e7eb` · `#c85a3a` · `#051d16` · `#010b09`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_4px_20px_rgba(0,0,0,0.4)]`, `shadow-2xl`, `shadow-[0_4px_30px_rgba(0,0,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="flex-1 rounded bg-[#D4A574] px-3 py-2 text-xs font-bold text-[#02120e] hover:bg-[#C85A3A] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Code / terminal (`code-terminal`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #02120e;
  --color-surface: #051d16;
  --color-text: #e5e0d8;
  --color-muted: #a8b3af;
  --color-border: #02120e;
  --color-accent: #d4a574;
  --color-accent-2: #1b4d3e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#02120e',
    surface: '#051d16',
    ink: '#e5e0d8',
    muted: '#a8b3af',
    line: '#02120e',
    accent: '#d4a574',
    accent2: '#1b4d3e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the primary button and the highlight word in tan (#d4a574) on the green-black ground
- **Do:** Keep the ground near-black green (#02120e) and use deep green (#1b4d3e) for panels
- **Do:** Set the headline in cream (#e5e0d8), not pure white
- **Don't:** Don't use the rust tone (#c85a3a) for buttons
- **Don't:** Don't put tan text on the green panels for body copy
- **Don't:** Don't add blue or violet tags; the palette is green, cream and tan only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
