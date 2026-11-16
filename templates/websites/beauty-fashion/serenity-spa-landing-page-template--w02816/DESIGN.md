# Design system — Serenity Spa Landing Page Template

`SN-W02816` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A premium day-spa hero on a warm near-black ground (#1c1917), with a large white Playfair Display headline whose second line is set in italic copper (#b07c4c). The copper also draws the thin rule beside the testimonial quote, so the accent is used for emphasis and small structure only. Primary actions are a white pill and a thin outline pill, with small tracked uppercase trust labels along the bottom.

**Mood:** warm, premium, soothing, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#b07c4c` | Primary action and highlights |

Palette by frequency of use: `#b07c4c` · `#ffffff` · `#1c1917` · `#78716c` · `#fafaf9` · `#a8a29e` · `#f5f5f4` · `#e7e5e4` · `#57534e` · `#fdfcfb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#B07C4C] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Modal / overlay (`modal-overlay`)
4. Hero (`hero`)
5. About (`about`)
6. Services (`services`)
7. Contact form (`contact-form`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #b07c4c;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#b07c4c',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display with the second line in italic copper (#b07c4c)
- **Do:** Use copper (#b07c4c) for the italic line and thin rules, not for large fills
- **Do:** Make the primary button a white pill and the secondary a thin outline pill
- **Don't:** Don't set the hero on a light ground; the hero is dark brown-black
- **Don't:** Don't add a second accent beside the copper
- **Don't:** Don't set long passages of white body copy; keep the quote and copy short

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
