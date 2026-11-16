# Design system — AI Systems Studio Landing Page Template

`SN-W00164` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Editorial page on a warm off-white ground (#fdfcf8) with Cormorant Garamond for the display type and Inter for labels and body copy. The headline sets a roman line over an italic second line, and the only strong colour is the near-black button. A dark calibration panel with sliders adds a technical note to an otherwise paper-like page.

**Mood:** editorial, quiet, warm, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#737373` · `#fdfcf8` · `#262626` · `#78350f` · `#d4d4d4` · `#a3a3a3` · `#e5e5e5` · `#9a3412` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · body 16px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_8px_rgba(34,197,94,0.4)]`
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="group flex items-center gap-3 bg-ink text-paper pl-6 pr-5 py-3 rounded-sm hover:bg-sepia transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. 3D / canvas scene (`3d-canvas`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #e7e5e4;
  --color-text: #1c1917;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #1c1917;
  --color-accent-2: #22c55e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#e7e5e4',
    ink: '#1c1917',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#1c1917',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large size, with the second line in italic
- **Do:** Use the near-black ink (#1c1917) for the primary button and the control panel
- **Do:** Keep the page ground at warm off-white (#fdfcf8) and set body copy in Inter
- **Don't:** Don't add bright accent colours; the page works in ink and warm grey only
- **Don't:** Don't use drop shadows; the control panel is separated by its border and tone
- **Don't:** Don't set headlines in a sans-serif; the serif display is what defines the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
