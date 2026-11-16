# Design system — International School Landing Page Template

`SN-W03483` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bright, warm school homepage with a large photograph covering the hero and a white headline in a heavy sans set over the image. Green (#02ae40) marks the primary buttons and the logo, and the lower sections use white cards on a pale grey ground. Rounded corners and generous spacing keep the page friendly and calm for families.

**Mood:** friendly, bright, warm, reassuring, open

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#02ae40` | Primary action and highlights |
| Second accent | `#ccdc0a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#02ae40` · `#f4f4f5` · `#71717a` · `#fafafa` · `#ccdc0a` · `#a1a1aa` · `#3f3f46` · `#52525b` · `#029a38`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Fjalla One, Fredoka, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-20`

**Primary button**

```html
<a class="bg-[#02AE40] hover:bg-[#029a38] text-white px-6 py-3 rounded-xl font-fredoka font-semibold transition-all shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Contact form (`contact-form`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #02ae40;
  --color-accent-2: #ccdc0a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#02ae40',
    accent2: '#ccdc0a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white over a darkened photograph
- **Do:** Use green (#02ae40) for primary buttons and the logo mark
- **Do:** Round cards and buttons to keep the friendly tone
- **Don't:** Don't put green text on the photograph
- **Don't:** Don't use more than one bright accent per section
- **Don't:** Don't crop the photograph so that the children's faces are lost

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
