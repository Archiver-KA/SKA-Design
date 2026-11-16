# Design system — Soluna Yoga Studio Landing Page Template

`SN-W02677` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A calm, minimal yoga studio page on warm off-white (#f5f4f0) with large dark sans-serif headlines in short, full-stop lines. Olive (#5d674f) is the only colour and fills the main button and a circular text badge. Pale circles float behind the hero, and the type is plain and generous. It is a near-identical sibling of the other Soluna yoga template, with the same type and colour roles.

**Mood:** calm, minimal, spacious, natural, unhurried

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f4f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#5c5c5a` | Secondary copy, captions |
| Border | `#dcdacd` | Hairlines, dividers, outlines |
| Accent | `#5d674f` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#5c5c5a` · `#ffffff` · `#5d674f` · `#dcdacd` · `#f5f4f0` · `#e8eae4` · `#000000` · `#333333` · `#f2ece5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-screen-2xl`, `max-w-screen-xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="border border-[#1a1a1a] text-[#1a1a1a] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Schedule (`schedule-agenda`)
5. Team (`team`)
6. Pricing (`pricing`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f4f0;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #5c5c5a;
  --color-border: #dcdacd;
  --color-accent: #5d674f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f4f0',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#5c5c5a',
    line: '#dcdacd',
    accent: '#5d674f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in large dark sans-serif with a full stop after each short line.
- **Do:** Use olive (#5d674f) for the main button and the circular badge only.
- **Do:** Use large pale circles behind the hero as the only ornament.
- **Don't:** Don't add bright colours; the palette is off-white, dark grey and olive.
- **Don't:** Don't use the olive as a page background.
- **Don't:** Don't crowd the hero with more than one button.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
