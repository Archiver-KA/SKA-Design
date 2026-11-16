# Design system — Password Manager Landing Page

`SN-W04248` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark security product page on near-black (#0a0c10) with a bold white headline set left and a dark vault preview card on the right. The primary action is a solid royal blue (#2563eb) button, paired with a grey outline button, and yellow stars mark the review rating. Small blue tags and coloured icon tiles in the vault card add colour without competing with the headline.

**Mood:** secure, dark, crisp, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0c10` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d1d5db` · `#9ca3af` · `#374151` · `#facc15` · `#2563eb` · `#3b82f6` · `#1d4ed8` · `#1f2937` · `#0a0c10`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-12`, `gap-4`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0a0c10;
  --color-surface: #374151;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #374151;
  --color-accent: #2563eb;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0c10',
    surface: '#374151',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#374151',
    accent: '#2563eb',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use royal blue (#2563eb) for the primary buttons only
- **Do:** Set the headline bold and white on the near-black ground (#0a0c10)
- **Do:** Keep the yellow (#facc15) for rating stars and nothing else
- **Don't:** Don't use yellow for buttons or tags
- **Don't:** Don't use the coloured icon tiles outside the vault card
- **Don't:** Don't add a light panel to the dark page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
