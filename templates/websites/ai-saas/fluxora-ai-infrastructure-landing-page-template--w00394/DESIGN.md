# Design system — Fluxora AI Infrastructure Landing Page Template

`SN-W00394` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A centred black hero with a large white Inter headline in two lines, a white pill as the primary button and a grey outline button beside it. A small status pill with a green dot sits above the headline. Below the fold a white stat card showing '140+' hints at the bento-grid system, and the page stays monochrome, leaving colour to the product imagery.

**Mood:** monochrome, technical, centred, crisp, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#60a5fa` · `#a3a3a3` · `#34d399` · `#d4d4d4` · `#93c5fd` · `#fb7185` · `#000000` · `#171717` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 16px · body 16px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgba(59,130,246,0.25)]`, `shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_1px_2px_rgba(0,0,0,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-[52ch]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full border-gradient bg-white/5 backdrop-blur-xl px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-all hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #34d399;
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
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline in Inter at display size, in white, with a white pill as the primary button.
- **Do:** Use white stat cards on the black ground to show key numbers, such as '140+'.
- **Do:** Keep the status pill small, with the green dot as its only colour.
- **Don't:** Don't add a coloured accent to the hero; the page is monochrome.
- **Don't:** Don't use a light background for the sections; the page is black.
- **Don't:** Don't leave the team image unloaded or show its alt text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
