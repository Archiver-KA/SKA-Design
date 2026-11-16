# Design system — Premium Agency Landing Page Template

`SN-W01669` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A black French-language hero with a large white headline in Inter over two lines, a short grey paragraph, and a purple pill as the primary button beside a dark outlined secondary. The navigation has a purple call-to-action at the far right. Purple is the single accent and the page is otherwise greyscale and minimal.

**Mood:** minimal, dark, purposeful, restrained, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#64748b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#000000` · `#34d399` · `#c084fc` · `#94a3b8` · `#ef4444` · `#e2e8f0` · `#701a75` · `#e879f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`, `shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 text-sm font-medium rounded-lg px-4 py-2 transition font-geist text-black bg-white hover:bg-fuchsia-200">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Comparison (`comparison`)
3. Integrations (`integrations`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #64748b;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #c084fc;
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
    background: '#000000',
    surface: '#64748b',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use purple for the primary button and the navigation call-to-action only
- **Do:** Set the headline large in white Inter, over two lines
- **Do:** Keep the secondary button dark with a thin outline
- **Don't:** Don't use the mint (#34d399) or red (#ef4444) accents in the hero
- **Don't:** Don't put purple text on black for body copy
- **Don't:** Don't add more than one accent colour per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
