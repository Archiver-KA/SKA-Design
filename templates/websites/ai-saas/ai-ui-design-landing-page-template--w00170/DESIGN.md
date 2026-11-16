# Design system — AI UI Design Landing Page Template

`SN-W00170` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Editorial design on a warm off-white ground (#fdfcf8) with a serif throughout, Cormorant Garamond, where a large roman headline is paired with an italic second line. Near-black ink (#1c1917) does the work a brand colour would do: the primary button and the dark control panel are the only strong shapes. The rest is grey hairlines and spaced small-caps labels, so the page feels calm and paper-like rather than glossy.

**Mood:** editorial, calm, paper-like, serious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#e5e5e5` · `#fdfcf8` · `#737373` · `#a3a3a3` · `#ffffff` · `#9a3412` · `#525252` · `#262626` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 36px · body 14px
- **Weights in use:** light, normal, extralight
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[0_20px_40px_-4px_rgba(28,25,23,0.05)]`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="block px-6 py-3 font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest text-neutral-500 hover:text-[#1C1917] hover:bg-neutral-100/50 uppercase transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. 3D / canvas scene (`3d-canvas`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Testimonials (`testimonials`)
6. Comparison (`comparison`)
7. Product grid (`product-grid`)
8. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #1c1917;
  --color-accent-2: #22c55e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#1c1917',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large size, with the second line in italic
- **Do:** Use the near-black ink (#1c1917) for the primary button and the dark control panel only
- **Do:** Keep the page on warm off-white (#fdfcf8) with grey hairlines for structure
- **Don't:** Don't add bright accent colours; the page is ink and warm grey only
- **Don't:** Don't set body copy in a sans-serif; the serif runs through the page text
- **Don't:** Don't place the control panel on a coloured background; it sits on the cream ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
