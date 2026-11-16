# Design system — LinkSpace Bio Link Landing Page Template

`SN-W01621` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A bright, product-led landing page on warm white (#fffdf9). The headline is a bold black Space Grotesk, and mint green (#2ee6a6) is the signature colour: it underlines one word and fills the primary pill button. A tall phone mockup on the right carries the product, with light grey cards and small stat chips floating beside it, which keeps the page airy and friendly.

**Mood:** bright, friendly, product-led, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffdf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#2ee6a6` | Primary action and highlights |
| Second accent | `#ffd84d` | Supporting highlights |

Palette by frequency of use: `#2ee6a6` · `#111111` · `#6b7280` · `#ffffff` · `#f3f4f6` · `#e5e7eb` · `#fffdf9` · `#f9fafb` · `#d1d5db` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-dark/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Call to action (`cta`)
5. Articles (`blog-articles`)
6. Feature grid (`features`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fffdf9;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #2ee6a6;
  --color-accent-2: #ffd84d;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffdf9',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#2ee6a6',
    accent2: '#ffd84d',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use mint (#2ee6a6) for one underlined keyword and the primary button
- **Do:** Set headlines in Space Grotesk, black (#111111), tight and large
- **Do:** Show the product in a phone frame on the right with small floating stat cards
- **Don't:** Don't set mint body text; it has weak contrast on white
- **Don't:** Don't add shadows to the stat chips; keep them flat
- **Don't:** Don't use the yellow (#ffd84d) for buttons; it is a secondary accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
