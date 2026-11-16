# Design system — Creative AI Studio Landing Page Template

`SN-W00303` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, art-led landing page on a warm grey ground [#cfcfcf], with an orange announcement bar and a black navigation bar above the hero. The hero is a centred white-on-teal image card with a large sans headline, surrounded by a loose collage of photographs in white frames. Orange [#ea580c] is the accent for the main button, and the swatches in the collage are the only other colour.

**Mood:** art-led, light, collage, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#cfcfcf` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#166534` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#ea580c` · `#cfcfcf` · `#9ca3af` · `#f3f4f6` · `#f97316` · `#7c2d12` · `#e5e7eb` · `#f0f0f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-inner`
- **Content width:** `max-w-[340px]`, `max-w-[400px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-1`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="mt-8 bg-orange-600 hover:bg-orange-500 text-white text-base px-8 py-3.5 rounded-full font-medium transition-all transform hover:-translate-y-0.5 shadow-xl shadow-orange-900/20 cursor-pointer">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #cfcfcf;
  --color-surface: #f3f4f6;
  --color-text: #000000;
  --color-border: #ffffff;
  --color-accent: #ea580c;
  --color-accent-2: #166534;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#cfcfcf',
    surface: '#f3f4f6',
    ink: '#000000',
    line: '#ffffff',
    accent: '#ea580c',
    accent2: '#166534',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#ea580c) for the primary button only
- **Do:** Frame photographs in white borders, slightly tilted, over the warm grey ground
- **Do:** Set the hero headline in a large sans-serif, white on the image panel
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't put the collage on white; the grey ground is part of the look
- **Don't:** Don't remove the black navigation bar; it anchors the light page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
