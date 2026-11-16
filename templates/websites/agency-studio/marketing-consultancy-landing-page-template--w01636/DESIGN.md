# Design system — Marketing Consultancy Landing Page Template

`SN-W01636` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A split hero with a white text panel on the left and a full-bleed, blue-lit photograph on the right, so the image does the emotional work and the copy stays calm. Blue (#2563eb) is the only accent and is used for the primary button and small badges. Headlines are heavy Inter at large size, tightly set, with generous whitespace around them.

**Mood:** confident, high-contrast, modern, clean, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e3a8a` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#262626` · `#737373` · `#a3a3a3` · `#d4d4d4` · `#1e3a8a` · `#dbeafe` · `#2563eb` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 48px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-2.5`, `gap-4`

**Primary button**

```html
<a class="group shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300 overflow-hidden font-medium text-white bg-white/10 rounded-lg py-2.5 px-4 relative shadow-none w-full text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Logo cloud (`logo-cloud`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #1e3a8a;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #2563eb;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#1e3a8a',
    muted: '#737373',
    line: '#ffffff',
    accent: '#2563eb',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use #2563eb only for the primary button and small status badges
- **Do:** Pair a large bold headline with a short grey paragraph on the white panel
- **Do:** Place a full-height photograph with a blue cast on one half of the hero
- **Don't:** Don't tint the white text panel blue; the blue belongs to the photo and the button
- **Don't:** Don't add more than one accent colour to a section
- **Don't:** Don't set body copy lighter than the muted grey (#737373)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
