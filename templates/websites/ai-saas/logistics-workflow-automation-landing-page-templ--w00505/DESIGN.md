# Design system — Logistics Workflow Automation Landing Page Template

`SN-W00505` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A stark, near-black logistics page with large white Inter headlines in a tight left-aligned column and small grey monospaced check marks as the only detail. The white nav button and white primary button are the sole contrast points, so there is no accent hue at all. The code-style footnote line makes the page read as operational and engineering-minded.

**Mood:** stark, operational, minimal, technical, high contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#a3a3a3` · `#d4d4d4` · `#e5e5e5` · `#525252` · `#737373` · `#0a0a0a` · `#171717` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-4 py-2 text-xs font-medium hover:bg-neutral-200 transition-colors rounded-sm tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Pricing (`pricing`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #f5f5f5;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#f5f5f5',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in large white Inter with tight leading.
- **Do:** Use white for the primary button and nav action.
- **Do:** Set small supporting lines in grey (#a3a3a3) with monospaced check marks.
- **Don't:** Don't add a green accent; the palette has no accent hue.
- **Don't:** Don't put the headline on a white ground; the page is dark.
- **Don't:** Don't use the gray (#737373) for body copy; it is too low in contrast on black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
