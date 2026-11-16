# Design system — Digital Agency Landing Page

`SN-W01523` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark slate hero carries a centred white bold sans-serif headline and a single purple gradient primary button. Stats sit in a translucent glass strip below the hero, which is the one panel style on the first screen. The background is a soft grey-slate gradient rather than a strong image, so the mood is calm and corporate.

**Mood:** calm, corporate, glassy, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#9333ea` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#d1d5db` · `#f9fafb` · `#9333ea` · `#9ca3af` · `#4b5563` · `#e5e7eb` · `#3b82f6` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 20px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-6`, `gap-8`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg text-lg font-medium transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Services (`services`)
5. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #e5e7eb;
  --color-accent: #9333ea;
  --color-accent-2: #2563eb;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#e5e7eb',
    accent: '#9333ea',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the purple (#9333ea) gradient on primary buttons only
- **Do:** Put stats in a translucent glass strip with white figures
- **Do:** Set the headline in bold white sans-serif, centred
- **Don't:** Don't build this as a light page; the hero is dark slate
- **Don't:** Don't put a second strong colour in the hero
- **Don't:** Don't use the glass effect on text-heavy blocks

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
