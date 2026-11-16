# Design system — Dental Practice Landing Page Template

`SN-W02365` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, minimal hero on a near-black ground. The headline is a large white serif with the closing phrase set in italic, giving a quiet, gallery-like tone. The page relies on white type and restraint rather than colour.

**Mood:** minimal, dark, editorial, quiet, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#0891b2` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#0891b2` · `#525252` · `#fafafa` · `#e5e5e5` · `#a3a3a3` · `#d4d4d4` · `#f5f5f5` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 12px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-neutral-200/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Team (`team`)
6. Stats band (`stats`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #fafafa;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #f5f5f5;
  --color-accent: #0891b2;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#fafafa',
    ink: '#ffffff',
    muted: '#525252',
    line: '#f5f5f5',
    accent: '#0891b2',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a white serif, with the closing phrase in italic.
- **Do:** Keep the hero on the near-black ground (#171717) with white type.
- **Do:** Use the outlined dark button for secondary actions beside the primary.
- **Don't:** Don't set the hero on a white ground; the first screen is dark.
- **Don't:** Don't add colour accents to the hero beyond the single button.
- **Don't:** Don't mix sans-serif headlines into the hero; the serif carries the voice.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
