# Design system — Creative Engineering Studio Landing Page Template

`SN-W01892` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale warm-grey page split by a tall monospace data sidebar on the left and a large black sans headline on the right. The headline is set tight, with the middle line in grey to step it back, and the body copy sits beside a single orange rule. Hairline frames and small monospace labels give it a precise, engineered stance.

**Mood:** precise, engineered, austere, brutalist-leaning

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f4f1` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#1a1a1a` | Secondary copy, captions |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#ff4d00` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#ff4d00` · `#ffffff` · `#f4f4f1` · `#e5e5e5` · `#000000` · `#eaeaea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-12`, `gap-4`

**Primary button**

```html
<a class="text-xs font-mono uppercase border border-[#1A1A1A] px-4 py-2 hover:bg-[#1A1A1A] hover:text-[#F4F4F1] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Case studies (`case-studies`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f4f4f1;
  --color-surface: #e5e5e5;
  --color-text: #111111;
  --color-muted: #1a1a1a;
  --color-border: #1a1a1a;
  --color-accent: #ff4d00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f4f1',
    surface: '#e5e5e5',
    ink: '#111111',
    muted: '#1a1a1a',
    line: '#1a1a1a',
    accent: '#ff4d00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#ff4d00) only for the rule beside body copy and the live status.
- **Do:** Set sidebar labels in a monospace face, small and uppercase.
- **Do:** Keep the headline tight and black, with the middle line in grey.
- **Don't:** Don't fill large areas with orange; it marks, it does not decorate.
- **Don't:** Don't round the sidebar or buttons; the edges stay square.
- **Don't:** Don't add shadows; hairline borders divide the panels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
