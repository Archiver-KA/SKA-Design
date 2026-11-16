# Design system — PitchBot AI SaaS Landing Page Template

`SN-W00628` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light AI sales page that uses colour only as soft light: a pale blue and peach glow over a near-white ground (#fcfcfd). The headline is large, dark and tightly set in Inter, centred above one solid near-black pill button. The product is a white card below the hero, so the pastel glow is the only colour in the composition.

**Mood:** soft, airy, premium, neutral, glassy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfcfd` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#6b7280` · `#e5e7eb` · `#9ca3af` · `#f3f4f6` · `#4b5563` · `#1f2937` · `#93c5fd` · `#f8f9fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 16px · body 16px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Common gaps:** `gap-6`, `gap-5`, `gap-4`

**Primary button**

```html
<a class="bg-gray-900 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-gray-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Case studies (`case-studies`)
5. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fcfcfd;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #111827;
  --color-accent-2: #ffedd5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfcfd',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#111827',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the pastel glow as a wash behind the hero and never behind body text
- **Do:** Use a solid near-black (#111827) pill for the primary button
- **Do:** Set headlines in Inter at display size, centred on the page
- **Don't:** Don't add saturated colour blocks; the page stays near-white
- **Don't:** Don't put the pastel glow behind body copy
- **Don't:** Don't make outlined buttons the main call to action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
