# Design system — Ductly AI Medical Clinic Landing Page Template

`SN-W02372` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A dark, high-contrast clinic landing page on a pure black ground, with a cobalt blue (#0047ab) used for the primary button and the highlighted phrase in the headline. The headline is heavy white sans-serif with tight leading, and a faint blue glow sits behind a flow diagram of connected cards. The blue is the single accent, and the diagram gives the page a technical, system-driven character.

**Mood:** high-contrast, technical, systematic, dark, decisive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#c0c0c0` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0047ab` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0047ab` · `#c0c0c0` · `#000000` · `#0a0a1a` · `#ef4444` · `#f59e0b` · `#333333` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 16px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(0,71,171,0.2)]`, `shadow-[0_0_10px_rgba(0,71,171,0.5)]`, `shadow-[0_0_15px_rgba(0,71,171,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="bg-[#0047AB] hover:bg-[#0047AB]/90 text-[#FFFFFF] text-sm font-medium px-5 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(0,71,171,0.4)] hover:shadow-[0_0_25px_rgba(0,71,171,0.6)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Call to action (`cta`)
6. Footer (`footer`)
7. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a1a;
  --color-text: #ffffff;
  --color-muted: #c0c0c0;
  --color-border: #ffffff;
  --color-accent: #0047ab;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a1a',
    ink: '#ffffff',
    muted: '#c0c0c0',
    line: '#ffffff',
    accent: '#0047ab',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter with tight leading, and highlight one phrase in cobalt (#0047ab).
- **Do:** Keep the page on the black ground (#000000) with the dark navy card surface (#0a0a1a).
- **Do:** Use the blue for the primary button and the connector lines in the flow diagram.
- **Don't:** Don't use the red (#ef4444) anywhere in the hero.
- **Don't:** Don't round the flow-diagram cards beyond the existing radius.
- **Don't:** Don't set body copy in blue; it stays light grey (#c0c0c0).

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
