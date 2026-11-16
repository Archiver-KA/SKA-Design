# Design system — Freelancer Portfolio Landing Page Template

`SN-W02020` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `pt-br`

## Direction

A dark-mode freelancer hero on near-black (#0a0a0a) with a centred stack: a small green-tinted status pill, a large white sans headline over three lines with its last phrase fading to grey, and a short grey paragraph. Two buttons follow, a white filled one for the main action and a dark outlined one for the secondary. Green is kept to the status dot, so the page stays neutral.

**Mood:** dark, clean, direct, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#171717` · `#000000` · `#262626` · `#404040` · `#0a0a0a` · `#a3a3a3` · `#525252` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Services (`services`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #22c55e;
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
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Fade the last phrase of the headline to grey for emphasis
- **Do:** Use green (#22c55e) only for the availability status
- **Do:** Make the primary button white and filled, and the secondary dark and outlined
- **Don't:** Don't use green for buttons; it marks status only
- **Don't:** Don't set the headline in a light weight; it is bold
- **Don't:** Don't add a second emphasis colour beyond the grey fade

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
