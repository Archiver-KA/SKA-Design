# Design system — Housing Risk Intelligence SaaS Landing Page Template

`SN-W03251` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, analytical SaaS hero on near-black (#0a0a0a) with a two-line sans headline: the first phrase in white, the second in sky blue (#1da1f2) that carries the accent. A dark nav pill floats at the top, a white solid button sits beside a text link, and a dim dashboard window is cropped at the bottom with a small green live-feed indicator. The look is precise and data-led.

**Mood:** analytical, precise, dark, data-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1da1f2` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1da1f2` · `#a3a3a3` · `#737373` · `#525252` · `#d4d4d4` · `#262626` · `#0a0a0a` · `#030303` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_-10px_rgba(29,161,242,0.6)]`, `shadow-[0_0_20px_-5px_rgba(29,161,242,0.15)]`
- **Content width:** `max-w-[240px]`, `max-w-[120px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="ml-2 bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Team (`team`)
7. About (`about`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #1da1f2;
  --color-accent-2: #22c55e;
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
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#1da1f2',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans, with the second phrase in sky blue (#1da1f2).
- **Do:** Use the sky blue only for the highlighted headline phrase and the small tag above it.
- **Do:** Keep the green (#22c55e) to the live-status indicator on the dashboard preview.
- **Don't:** Don't use a light background; the hero sits on near-black (#0a0a0a).
- **Don't:** Don't use the green as a button fill; it is for live status only.
- **Don't:** Don't set the dashboard preview at full brightness; it is cropped and dimmed.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
