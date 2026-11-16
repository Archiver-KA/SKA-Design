# Design system — AI Coding Agents Landing Page Template

`SN-W00071` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm cream-white page with a large black sans headline set in two lines, a short grey subline and two buttons: a solid amber primary and a light outlined secondary. Beneath the hero, a row of grey logo placeholders sits on a thin rule. The palette is near-monochrome, with amber as the single accent.

**Mood:** warm, plain, light, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffef2` | Page ground |
| Surface | `#f3f2e7` | Cards, panels, raised areas |
| Text | `#191918` | Headings and primary copy |
| Border | `#191918` | Hairlines, dividers, outlines |
| Accent | `#fcaa2d` | Primary action and highlights |

Palette by frequency of use: `#191918` · `#ffffff` · `#fcaa2d` · `#fffef2` · `#f3f2e7` · `#e8e7dc` · `#e5e4db` · `#151515`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Parabole Trial, Inter, Decima Mono Pro
- **Scale (largest breakpoint):** h1 64px · h2 64px · body 20px
- **Weights in use:** bold, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-[340px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="bg-[#FCAA2D] text-[#191918] px-4 py-2.5 rounded-sm hover:opacity-90 transition-opacity">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fffef2;
  --color-surface: #f3f2e7;
  --color-text: #191918;
  --color-border: #191918;
  --color-accent: #fcaa2d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffef2',
    surface: '#f3f2e7',
    ink: '#191918',
    line: '#191918',
    accent: '#fcaa2d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use amber (#fcaa2d) for the primary button only
- **Do:** Set headlines in near-black (#191918) on cream
- **Do:** Keep the grey logo row muted
- **Don't:** Don't fill the page with amber
- **Don't:** Don't use amber as a text colour on cream
- **Don't:** Don't use cool greys in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
