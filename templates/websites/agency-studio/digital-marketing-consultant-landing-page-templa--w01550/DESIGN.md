# Design system — Digital Marketing Consultant Landing Page Template

`SN-W01550` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-white page with a centred headline in two tones, the first phrase in black and the second in light grey, so emphasis comes from tone rather than colour. A black pill is the primary action and an outline pill the secondary, with a small green dot as the only colour.

**Mood:** clean, light, centred, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#f5f5f5` · `#e5e5e5` · `#a3a3a3` · `#fafafa` · `#262626` · `#525252` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 16px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-1`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-neutral-900 text-white text-xs font-medium px-4 py-1.5 rounded-full hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #262626;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #4ade80;
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
    surface: '#262626',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy black sans-serif, with the second phrase in light grey
- **Do:** Use a solid black pill (#171717) for the primary action and an outline pill for the secondary
- **Do:** Keep green (#4ade80) to the status dot
- **Don't:** Don't build this as a dark page
- **Don't:** Don't use green for buttons
- **Don't:** Don't add shadows under the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
