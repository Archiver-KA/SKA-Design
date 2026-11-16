# Design system — Legal Services Portfolio Template

`SN-W02072` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, formal law-firm hero on near-black (#0b0b0c) with a serif white headline set in two centred lines and a light grey subtitle. Gold (#d4af37) marks the eyebrow, the primary button and the consult button in the navigation, so one metallic accent carries every call to action. Faint specks in the background add texture without adding colour.

**Mood:** formal, authoritative, dark, restrained, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0c` | Page ground |
| Surface | `#1a1a1d` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a0a0a0` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#a0a0a0` · `#ffffff` · `#f5f5f5` · `#0b0b0c` · `#1a1a1d` · `#050505` · `#d4af37`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-heading)
- **Body:** var(--font-body)
- **Loaded families:** Cairo, Cinzel, Inter, Tajawal, var(--font-heading), var(--font-body)
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_8px_rgba(212,175,55,0.6)]`, `shadow-[0_0_8px_rgba(212,175,55,0.8)]`, `shadow-[0_0_20px_rgba(212,175,55,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex px-6 py-2.5 bg-gradient-to-r from-gold-dark to-gold-light text-bgMain text-sm font-medium rounded-sm hover:opacity-90 hover:scale-[1.02] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Logo cloud (`logo-cloud`)
5. Services (`services`)
6. Stats band (`stats`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b0c;
  --color-surface: #1a1a1d;
  --color-text: #f5f5f5;
  --color-muted: #a0a0a0;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "var(--font-heading)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0c',
    surface: '#1a1a1d',
    ink: '#f5f5f5',
    muted: '#a0a0a0',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['var(--font-heading)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif at display size, white, centred.
- **Do:** Use gold (#d4af37) for the eyebrow, the primary button and the consult button only.
- **Do:** Keep the page near-black (#0b0b0c) with a faint texture rather than imagery.
- **Don't:** Don't use gold for body text; it is reserved for action and the eyebrow.
- **Don't:** Don't set headlines in a sans-serif face.
- **Don't:** Don't add bright colours; the palette is black, white and gold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
