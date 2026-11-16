# Design system — Insurance Agency Operating System Template

`SN-W00981` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black dashboard hero with a large bright lime (#c6f91f) panel on the right that frames a dark product interface with lime sparkline and metric cards. The headline is white Inter with its final word in grey. Lime is the only accent and is used for the panel and the logo mark, so the page reads as bold and software-led.

**Mood:** bold, software-led, dark, high-energy, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05080a` | Page ground |
| Surface | `#0b0f13` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c6f91f` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c6f91f` · `#000000` · `#05080a` · `#64748b` · `#94a3b8` · `#d4ff45` · `#0b0f13` · `#0f172a` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Geist, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[0_20px_50px_rgba(0,0,0,0.6)]`, `shadow-[0_45.8px_36.6px_rgba(0,0,0,0.147),_0_85.8px_68.5px_rgba(0,0,0,0.176)]`, `shadow-[0_0_25px_rgba(198,249,31,0.25)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#c6f91f] hover:bg-[#d4ff45] text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 transition-colors font-geist mb-4">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Three.js, React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #05080a;
  --color-surface: #0b0f13;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #c6f91f;
  --color-accent-2: #ef4444;
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
    surface: '#0b0f13',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#c6f91f',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#c6f91f) for the hero panel, the logo mark and the sparkline only.
- **Do:** Set headlines in white Inter with the final word in grey.
- **Do:** Frame the product as a dark dashboard inside the lime panel.
- **Don't:** Don't use the red (#ef4444) next to lime.
- **Don't:** Don't set body copy in lime.
- **Don't:** Don't add more lime surfaces below the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
