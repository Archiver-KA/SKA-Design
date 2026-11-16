# Design system — Environmental Services Landing Page Template

`SN-W03898` · business-services · light mode · Sinera Atlas theme `route` · language `ru`

## Direction

A calm, airy consulting page on a near-white ground with deep forest-green type. Raleway carries a large centred headline, and the second line is set in italic green (#2e5c31) for emphasis. Solid green pill buttons mark the main action, paired with light outlined pills, and soft glow shapes sit behind the hero without competing with the copy.

**Mood:** calm, airy, eco, professional, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f9f7` | Page ground |
| Surface | `#0f2113` | Cards, panels, raised areas |
| Text | `#1a2e1a` | Headings and primary copy |
| Muted text | `#e8f5e9` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2e5c31` | Primary action and highlights |
| Second accent | `#fef9c3` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2e5c31` · `#1a2e1a` · `#526652` · `#4a7a4a` · `#405240` · `#f7f9f7` · `#e8f5e9` · `#244a27` · `#aeccae`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Raleway
- **Body:** Raleway
- **Loaded families:** Inter, Raleway
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[#2E5C31]/20`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#2E5C31] hover:bg-[#244a27] text-white text-xs font-medium py-2 px-4 rounded-full transition-all shadow-lg shadow-[#2E5C31]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f7f9f7;
  --color-surface: #0f2113;
  --color-text: #1a2e1a;
  --color-muted: #e8f5e9;
  --color-border: #ffffff;
  --color-accent: #2e5c31;
  --color-accent-2: #fef9c3;
  --font-display: "Raleway", sans-serif;
  --font-body: "Raleway", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f9f7',
    surface: '#0f2113',
    ink: '#1a2e1a',
    muted: '#e8f5e9',
    line: '#ffffff',
    accent: '#2e5c31',
    accent2: '#fef9c3',
  },
  fontFamily: { display: ['Raleway'], sans: ['Raleway'] },
} }
```

## Do and don't

- **Do:** Set headlines in Raleway at large size, with the key phrase in italic green (#2e5c31).
- **Do:** Use the solid green pill for the primary action and light outlined pills for secondary actions.
- **Do:** Keep the hero on the pale ground; use green for type emphasis and buttons only.
- **Don't:** Don't fill whole sections with dark green; the page stays light.
- **Don't:** Don't add saturated accents beyond the green and the pale yellow highlight.
- **Don't:** Don't use heavy drop shadows; keep the pill buttons flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
