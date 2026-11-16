# Design system — Energy Healing Landing Page Template

`SN-W02375` · healthcare · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A calm, light wellness hero on an off-white ground, which contradicts the dark mode the template declares. The headline is large dark sans-serif, with the phrase l'equilibre set in a warm bronze (#b8895b), and the primary button is a muted sage green (#3a6b5b). The page is soft and reassuring, with the green and bronze carrying the wellness tone.

**Mood:** calm, soft, reassuring, natural, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#3a6b5b` | Primary action and highlights |
| Second accent | `#b8895b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3a6b5b` · `#4b5563` · `#9ca3af` · `#e5e7eb` · `#6b7280` · `#b8895b` · `#f3f4f6` · `#0b0b0b` · `#fbfbf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center rounded-full bg-[#3A6B5B] text-white text-sm font-medium py-2.5 px-6 transition hover:bg-[#2C5245]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. FAQ (`faq`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #e5e7eb;
  --color-accent: #3a6b5b;
  --color-accent-2: #b8895b;
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
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#e5e7eb',
    accent: '#3a6b5b',
    accent2: '#b8895b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large sans-serif, with the emphasis phrase in bronze (#b8895b).
- **Do:** Keep the primary button in sage green (#3a6b5b) with white text.
- **Do:** Keep the page on the white ground with light grey borders (#e5e7eb).
- **Don't:** Don't set the page on the sage green; it is a button colour here.
- **Don't:** Don't set the hero on black; the first screen is light.
- **Don't:** Don't use bronze for buttons; it is reserved for emphasis in the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
