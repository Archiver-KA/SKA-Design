# Design system — Studio Lumio Agency Landing Page Template

`SN-W01709` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A component demo on a black ground: a very large white caps headline spans the full width, and a lime (#dfff00) primary button sits in the nav. A small beige preview card and two clock widgets at the bottom right give the hero a studio-catalogue look. Lime is the only colour against black and white.

**Mood:** bold, high-contrast, studio, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dfff00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#525252` · `#a3a3a3` · `#000000` · `#050505` · `#dfff00` · `#737373` · `#e5e5e5` · `#262626` · `#ccee00`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** body 24px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-x-3`

**Primary button**

```html
<a class="px-5 py-2 rounded-full bg-[#dfff00] text-black text-sm font-semibold hover:bg-[#ccee00] transition-colors flex items-center gap-1 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #dfff00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#dfff00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#dfff00) on one primary button per view and nowhere in body text.
- **Do:** Set the headline in very large white caps that span the full width.
- **Do:** Use small rounded cards with a thin border for the preview and clock widgets.
- **Don't:** Don't use lime as a page ground; the ground is black.
- **Don't:** Don't put lime text on white; it has too little contrast.
- **Don't:** Don't add colour beyond lime, black and white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
