# Design system — Micro-Site & Lead Gen Landing Page Template

`SN-W00535` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `lv`

## Direction

A bold, dark hero on near-black (#111111) with an oversized white headline in heavy Inter. The number range '3–5' is the one highlight, set in violet (#865dff), and the text is left-aligned under a small outlined pill label.

**Mood:** bold, dark, direct, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#865dff` | Primary action and highlights |
| Second accent | `#ff5f57` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#865dff` · `#000000` · `#111111` · `#f5f5f5` · `#a990ff` · `#d8d8d8` · `#9c7aff` · `#b8a5ff` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[-0.08em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_28px_rgba(134,93,255,0.8)]`, `shadow-2xl`, `shadow-[#865DFF]/20`
- **Content width:** `max-w-[90rem]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="magnetic-btn inline-flex items-center justify-center rounded-full bg-[#865DFF] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#9c7aff] font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Process / steps (`how-it-works`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #865dff;
  --color-accent-2: #ff5f57;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#865dff',
    accent2: '#ff5f57',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy white Inter, left-aligned, at display size
- **Do:** Use violet (#865dff) on one phrase per headline only
- **Do:** Keep the pill label above the headline small and outlined
- **Don't:** Don't put violet on body copy
- **Don't:** Don't centre the hero text; the layout is left-aligned
- **Don't:** Don't switch the hero to a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
