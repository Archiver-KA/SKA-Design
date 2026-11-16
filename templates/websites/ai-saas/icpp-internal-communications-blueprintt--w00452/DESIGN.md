# Design system — ICPP Internal Communications - Blueprintt

`SN-W00452` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A dark navy corporate page with a bright cyan strip across the top and a cyan-tinted second headline line. The primary action is a solid royal-blue button, and the background is a faint, flowing dark texture rather than a flat colour. Figtree at large size gives a friendly, professional voice. The effect is serious and modern without being cold.

**Mood:** corporate, serious, modern, dark, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08111f` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e2e8f0` · `#64748b` · `#0f172a` · `#475569` · `#f8fafc` · `#cbd5e1` · `#94a3b8` · `#f1f5f9` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Figtree
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 12px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[16px]` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-[0_0_12px_rgba(34,211,238,0.6)]`
- **Content width:** `max-w-[1200px]`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Marquee (`marquee`)
3. Bento grid (`bento-grid`)
4. Team (`team`)
5. Footer (`footer`)
6. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #08111f;
  --color-surface: #111827;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #10b981;
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08111f',
    surface: '#111827',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a light cyan tint for emphasis
- **Do:** Use the solid blue button only for the main call to action
- **Do:** Keep the top announcement bar as a single full-width strip
- **Don't:** Don't place decorative images on the navy ground at full opacity
- **Don't:** Don't mix in saturated hues beyond cyan and blue
- **Don't:** Don't set the headline in a heavy weight; keep it regular or medium

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
