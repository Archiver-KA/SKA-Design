# Design system — International Congress Event Landing Page Template

`SN-W03614` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The congress page is an editorial hero on warm cream (#f9f7f2). The headline is a large serif in near-black, and its second line is set in italic coral (#ee5d51). A dark pill and an outline pill sit beside a soft pale circle with map and info cards overlaid on it. White stat cards with small caps labels finish the first screen. The tone is calm and considered, with coral as the only accent.

**Mood:** warm, editorial, calm, considered, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f7f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#5a5a5a` | Secondary copy, captions |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#ee5d51` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#ee5d51` · `#ffffff` · `#5a5a5a` · `#f9f7f2` · `#000000` · `#e5e0d8` · `#2c2c2c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lora
- **Body:** Lora
- **Loaded families:** Lora, Playfair Display, Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · body 18px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl bg-[#1A1A1A] px-5 py-2.5 text-xs font-sans-ui uppercase tracking-widest text-white hover:bg-[#EE5D51] transition-colors shadow-lg shadow-[#1A1A1A]/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9f7f2;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #5a5a5a;
  --color-border: #1a1a1a;
  --color-accent: #ee5d51;
  --font-display: "Lora", serif;
  --font-body: "Lora", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f7f2',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#5a5a5a',
    line: '#1a1a1a',
    accent: '#ee5d51',
  },
  fontFamily: { display: ['Lora'], sans: ['Lora'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, with the second line in italic coral (#ee5d51)
- **Do:** Keep the page on warm cream (#f9f7f2) with white cards
- **Do:** Use the dark pill button for the main action and an outline for the secondary one
- **Don't:** Don't use coral for body text or small labels
- **Don't:** Don't add a second accent colour
- **Don't:** Don't set headlines in a sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
