# Design system — Agritech Telegram Bot Landing Page Template

`SN-W00024` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `uk`

## Direction

A calm, product-led light page where the Telegram bot's own chat screens do the explaining. Green (#047857) is the single brand colour, used on the primary button and the highlighted words in the Ukrainian headline, and gold (#fbbf24) appears only as the Telegram Stars marker. Inter at 60px sets the headline, and two overlapping phone mockups fill the right column to show the chat flow.

**Mood:** calm, product-led, clear, trustworthy, green

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#047857` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#047857` · `#1c1917` · `#78716c` · `#f5f5f4` · `#e7e5e4` · `#064e3b` · `#fbbf24` · `#000000` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="px-6 py-3 rounded-xl bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #047857;
  --color-accent-2: #fbbf24;
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
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#047857',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use #047857 for the primary button and the highlight words in the headline
- **Do:** Show the bot as two overlapping phone mockups on the right with real chat content visible
- **Do:** Reserve the gold (#fbbf24) for Telegram Stars prices and icons
- **Don't:** Don't use gold as a button fill; it is an icon and price colour only
- **Don't:** Don't set the headline in a second typeface; Inter covers display and body
- **Don't:** Don't use a dark hero; the ground stays near white (#fafaf9)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
