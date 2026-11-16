# Design system — FreightPoint Logistics Operations Landing Page Template

`SN-W03917` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A near-black page where a large white sans headline sits beside a floating operations panel. The closing phrase is set in a blue gradient (#3b82f6), and small labelled cards with icons surround the panel to show the workflow. The panel uses monospace text for a log feed, which reinforces the automated, technical character. Blurred glow and glass cards add depth without heavy effects.

**Mood:** technical, automated, precise, dark, systematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0f` | Page ground |
| Surface | `#0a0a0f` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#22c55e` · `#a1a1aa` · `#d4d4d8` · `#52525b` · `#3b82f6` · `#eab308` · `#0a0a0f` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 16px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Code / terminal (`code-terminal`)
5. Process / steps (`how-it-works`)
6. Integrations (`integrations`)
7. Stats band (`stats`)
8. Pricing (`pricing`)
9. Testimonials (`testimonials`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0f;
  --color-surface: #0a0a0f;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0f',
    surface: '#0a0a0f',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of the headline in the blue gradient (#3b82f6) and keep the rest in white.
- **Do:** Use monospace type only inside the operations log panel.
- **Do:** Keep the floating integration cards in glass style, with small icons and short labels.
- **Don't:** Don't use green or yellow beyond the status dot and panel labels.
- **Don't:** Don't place light panels on the dark ground.
- **Don't:** Don't set body copy in the monospace face; it is for the log only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
