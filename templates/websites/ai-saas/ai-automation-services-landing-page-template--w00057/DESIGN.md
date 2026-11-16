# Design system — AI Automation Services Landing Page Template

`SN-W00057` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a large white sans headline whose middle line is set in lime green (#a3e635), a grey subline and a status pill above the headline. The layout is centred, and blue appears only as the outline of the primary button. The green carries the emphasis; the page does not use blue as a fill.

**Mood:** bold, dark, energetic, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#a3e635` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4ade80` · `#a3e635` · `#000000` · `#3b82f6` · `#60a5fa` · `#d4d4d4` · `#737373` · `#262626` · `#d9f99d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-x-3`

**Primary button**

```html
<a class="px-6 py-3 rounded-full border border-white/10 text-neutral-300 font-medium hover:bg-white/5 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Pricing (`pricing`)
5. Testimonials (`testimonials`)
6. About (`about`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #4ade80;
  --color-accent-2: #a3e635;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 8px;
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
    accent: '#4ade80',
    accent2: '#a3e635',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the key phrase in lime green (#a3e635)
- **Do:** Keep the page ground black with white headlines
- **Do:** Use the blue outline (#3b82f6) on the primary button only
- **Don't:** Don't use green for body copy
- **Don't:** Don't fill the primary button in blue
- **Don't:** Don't add a light section into the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
