# Design system — AI Solutions Business Landing Page Template

`SN-W00158` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `es`

## Direction

Light, plain Spanish-language services page on warm off-white (#fdfdfc) with a heavy Manrope headline in near-black (#171717), its last phrase broken onto its own line. The primary action is a solid near-black pill beside a plain outline button, and a full-width blue-violet line-art image sits beneath the hero. Colour comes only from that image, so the page reads as measured and professional.

**Mood:** measured, professional, plain, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfdfc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#a3a3a3` · `#171717` · `#ffffff` · `#000000` · `#e5e5e5` · `#525252` · `#737373` · `#262626` · `#f5f5f5` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Space Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[1800px]`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-xs font-semibold hover:bg-neutral-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-neutral-200/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfdfc;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --color-accent-2: #10b981;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfdfc',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#171717',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in Manrope in near-black (#171717), with the subhead in muted grey
- **Do:** Use the near-black pill as the primary button and an outline for the secondary
- **Do:** Place the full-width line-art image beneath the hero as the only colour
- **Don't:** Don't add more colours to the hero; the image carries them
- **Don't:** Don't use drop shadows on the pill buttons
- **Don't:** Don't stack a second image above the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
