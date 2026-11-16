# Design system — Physiotherapy Clinic Landing Page Template

`SN-W02502` · healthcare · light mode · Sinera Atlas theme `calm` · language `de`

## Direction

A clinical physiotherapy hero on warm off-white (#fafaf9), with a bold Inter headline whose second line is set in deep teal (#0d9488). A near-black button carries the main request and a teal button sits in the header for booking. A tall rounded photograph with a small white caption card over its lower edge gives the page a practical, human tone.

**Mood:** clinical, warm, clear, grounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#0d9488` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#0d9488` · `#1c1917` · `#14b8a6` · `#57534e` · `#e7e5e4` · `#fafaf9` · `#0f766e` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-soft`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-medium py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #0d9488;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#0d9488',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in deep teal (#0d9488) for emphasis
- **Do:** Use the near-black button for the hero request and the teal button for booking
- **Do:** Place a small white caption card over the lower edge of rounded photos
- **Don't:** Don't use the lighter teal (#14b8a6) for text; contrast is too low on white
- **Don't:** Don't use teal as a background for large sections
- **Don't:** Don't square off the photo frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
