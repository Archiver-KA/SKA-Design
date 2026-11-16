# Design system — Wine & Spirits Expo Landing Page Template

`SN-W03009` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A luxury event page on near-black (#0a0a0a) with a deep wine-red glow behind the hero. The headline is a high-contrast serif in white, with its second line set in italic gold, and the main action is a thin gold-outlined button. Large type and restraint carry the luxury tone more than imagery does.

**Mood:** luxurious, dark, editorial, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#0a0a0a` · `#737373` · `#000000` · `#d4d4d4` · `#525252` · `#171717` · `#333333` · `#555555`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-gold-900/10`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-6 py-2 border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-neutral-950 transition-all duration-300 rounded-sm uppercase text-xs tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Timeline (`timeline`)
5. Schedule (`schedule-agenda`)
6. Product grid (`product-grid`)
7. Feature grid (`features`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in the high-contrast display serif at very large size
- **Do:** Use gold only for the italic highlight and the primary button
- **Do:** Keep the background near-black with one soft red glow behind the hero
- **Don't:** Don't use bright colours beyond the wine and gold palette
- **Don't:** Don't set body text in the serif; body text uses Inter
- **Don't:** Don't fill the primary button solid; it is an outline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
