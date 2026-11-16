# Design system — Web3 & AI Agency Landing Page Template

`SN-W01731` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white tech agency page with a Playfair Display headline in near-black, the second word set in italic grey. The product mock-up on the right is a white card with a soft purple-blue area chart and a green status pill, which is where the colour lives. Everything else is neutral, and the primary button is solid black, so the page feels editorial with a technical proof panel.

**Mood:** editorial, warm, technical, neutral, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f1eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0d0d0d` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0d0d0d` · `#9ca3af` · `#e5e7eb` · `#374151` · `#4b5563` · `#000000` · `#6b7280` · `#f3f1eb` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-gray-200/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="flex items-center gap-2 bg-[#0D0D0D] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:pr-8 duration-300 group shadow-lg shadow-black/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Services (`services`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f3f1eb;
  --color-surface: #ffffff;
  --color-text: #0d0d0d;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #6366f1;
  --color-accent-2: #4ade80;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f1eb',
    surface: '#ffffff',
    ink: '#0d0d0d',
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#6366f1',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display with the second word in italic
- **Do:** Keep the page on warm off-white (#f3f1eb) with white cards
- **Do:** Use colour only inside product mock-ups, such as the status pill and chart
- **Don't:** Don't add colour to the headline or buttons
- **Don't:** Don't use a cold grey background
- **Don't:** Don't set the primary button in a colour; keep it black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
