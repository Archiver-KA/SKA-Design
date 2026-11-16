# Design system — Barbearia Clássica

`SN-W01454` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A pure black ground ([#000000]) with white display type set very large in two lines, the second word in an italic serif in light grey. The nav and call-to-action buttons are white with black labels, and the hero carries no accent colour. The contrast is stark, and scale does the work.

**Mood:** stark, premium, monochrome, bold, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#737373` · `#6b7280` · `#262626` · `#9ca3af` · `#d4d4d4` · `#404040` · `#525252` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 14px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-white text-black px-6 py-2 rounded-sm hover:bg-gray-200 transition-colors font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Booking form (`booking`)
5. Services (`services`)
6. Marquee (`marquee`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e7eb;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e7eb',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on #000000 with white display type
- **Do:** Set the second headline word in an italic serif in light grey
- **Do:** Use white buttons with black labels for the primary action
- **Don't:** Don't add an accent colour to the hero
- **Don't:** Don't use a light background for the hero
- **Don't:** Don't set the headline at small sizes, it runs very large

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
