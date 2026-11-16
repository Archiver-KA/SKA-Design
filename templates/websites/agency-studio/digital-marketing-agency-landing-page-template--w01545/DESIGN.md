# Design system — Digital Marketing Agency Landing Page Template

`SN-W01545` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a bold white headline where the second line is set in bright green (#75c634), which is the accent. The primary button is solid white with black text and the secondary is a dark outline, while a dark dashboard mock on the right uses grey bars with one green highlight.

**Mood:** dark, data-led, bold, green-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#f0fdf4` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#75c634` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#475569` · `#64748b` · `#75c634` · `#334155` · `#000000` · `#050505` · `#3b82f6` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-mack-green/10`, `shadow-[0_0_20px_rgba(117,198,52,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center text-xs font-semibold bg-[#75c634] hover:bg-[#65b02a] text-black py-2.5 px-5 rounded-full shadow-[0_0_20px_rgba(117,198,52,0.3)] transition-all duration-300 hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Stats band (`stats`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #f0fdf4;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #75c634;
  --color-accent-2: #f97316;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#f0fdf4',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#75c634',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in green (#75c634) and nothing else in the hero
- **Do:** Use white for the primary button and a dark outline for the secondary
- **Do:** Draw dashboard charts in grey bars with one green highlight bar
- **Don't:** Don't build this on a white ground
- **Don't:** Don't set body copy in green
- **Don't:** Don't add an orange accent beside the green in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
