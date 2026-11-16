# Design system — Kompozith | Tech & Digital Agency Landing Page Template

`SN-W01612` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A dark, warm-glow agency page on black. The headline is bold sans in white, and its second clause is set in orange (#f97316) italic. Orange is the single accent, filling the primary button and marking the eyebrow dot, while a soft orange haze behind the hero warms the black ground. A small monospace tag and a ghost secondary button complete the system.

**Mood:** warm, dark, energetic, tech

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#737373` · `#a3a3a3` · `#d4d4d4` · `#f97316` · `#525252` · `#ff4400` · `#171717` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-orange-500/20`, `shadow-primary/25`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="btn-hover-effect group inline-flex transition-all duration-200 hover:bg-primaryDim text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded px-8 py-3.5 relative items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Schedule (`schedule-agenda`)
5. Process / steps (`how-it-works`)
6. Contact form (`contact-form`)
7. Stats band (`stats`)
8. Footer (`footer`)
9. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline clause in orange (#f97316) italic, with the first clause white
- **Do:** Use orange only for the primary button, the eyebrow dot and the italic phrase
- **Do:** Keep the orange glow behind the hero rather than across sections
- **Don't:** Don't set body copy in orange
- **Don't:** Don't place the lighter red-orange (#ff4400) next to the orange (#f97316)
- **Don't:** Don't stack two orange buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
