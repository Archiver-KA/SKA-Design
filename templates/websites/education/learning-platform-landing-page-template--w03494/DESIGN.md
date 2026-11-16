# Design system — Learning Platform Landing Page Template

`SN-W03494` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, warm learning page on a cream ground (#fffbf2), with a large heavy Inter headline in near-black and an orange (#fb923c) highlight on the key word, underlined with a peach stripe. White cards and a dark primary button keep the page clear, and a faint curved line drawing sits behind the hero. The overall tone is friendly and uncluttered.

**Mood:** friendly, warm, uncluttered, encouraging, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffbf2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#d1d5db` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4b5563` · `#fffbf2` · `#ffedd5` · `#f3f4f6` · `#d1d5db` · `#9ca3af` · `#fb923c` · `#6b7280` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 36px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="bg-brand-dark text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-brand-dark/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-dark/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Services (`services`)
5. Newsletter signup (`newsletter`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fffbf2;
  --color-surface: #ffffff;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #d1d5db;
  --color-accent: #fb923c;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffbf2',
    surface: '#ffffff',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#d1d5db',
    accent: '#fb923c',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Highlight one headline word in orange (#fb923c) with a peach underline
- **Do:** Keep the ground cream (#fffbf2) and the cards white
- **Do:** Use the dark primary button for the main action only
- **Don't:** Don't use the orange highlight for body text
- **Don't:** Don't add heavy shadows to the cards
- **Don't:** Don't use more than one peach stripe per headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
