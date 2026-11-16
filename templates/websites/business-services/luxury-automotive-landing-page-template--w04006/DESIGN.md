# Design system — Luxury Automotive Landing Page Template

`SN-W04006` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A black, monochrome hero for a sports-car model, with the title in very large, heavy uppercase sans-serif that shifts from white to silver. The title stacks over two lines and the body copy is grey and centred beneath it. A single white pill button in the top-right corner is the only interactive accent on the page.

**Mood:** austere, monochrome, precise, premium, automotive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#9ca3af` · `#121212` · `#d1d5db` · `#6b7280` · `#0a0a0a` · `#e5e7eb` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-6`, `gap-12`, `gap-24`

**Primary button**

```html
<a class="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #e5e7eb;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#e5e7eb',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the title in heavy uppercase sans-serif with a silver gradient
- **Do:** Keep the page black and monochrome, with no accent colour
- **Do:** Centre the body copy and keep it in mid grey
- **Don't:** Don't add colour to the headline
- **Don't:** Don't use a light background for the hero
- **Don't:** Don't use small headlines; the title sets the scale of the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
