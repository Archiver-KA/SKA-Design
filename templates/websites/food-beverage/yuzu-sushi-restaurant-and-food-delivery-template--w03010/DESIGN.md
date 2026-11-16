# Design system — Yūzu Sushi Restaurant & Food Delivery Template

`SN-W03010` · food-beverage · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A warm cream page (#f5eed8) with dark olive-brown type (#302c21). A very heavy sans-serif headline sits above an italic serif line, and terracotta (#a64b2a) marks the full stop in the headline, the pill button and the round floating actions. A soft sage-tinted glass backdrop frames a large food photograph, for a calm, editorial tone.

**Mood:** warm, editorial, calm, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5eed8` | Page ground |
| Surface | `#c7d7bb` | Cards, panels, raised areas |
| Text | `#302c21` | Headings and primary copy |
| Muted text | `#79705d` | Secondary copy, captions |
| Border | `#302c21` | Hairlines, dividers, outlines |
| Accent | `#a64b2a` | Primary action and highlights |
| Second accent | `#284f43` | Supporting highlights |

Palette by frequency of use: `#a64b2a` · `#f5eed8` · `#79705d` · `#302c21` · `#c7d7bb` · `#284f43` · `#fff5df` · `#ffffff` · `#76623d` · `#ded9bf`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, DM Sans, Noto Serif JP
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 18px · body 16px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_20px_35px_-20px_rgba(45,45,25,0.5)]`
- **Content width:** `max-w-6xl`, `max-w-[100rem]`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="mt-7 inline-flex items-center gap-5 rounded-full bg-[#a64b2a] px-7 py-3.5 text-sm font-medium text-[#fff8e8] transition hover:-translate-y-1 hover:bg-[#873c22]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)
6. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5eed8;
  --color-surface: #c7d7bb;
  --color-text: #302c21;
  --color-muted: #79705d;
  --color-border: #302c21;
  --color-accent: #a64b2a;
  --color-accent-2: #284f43;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5eed8',
    surface: '#c7d7bb',
    ink: '#302c21',
    muted: '#79705d',
    line: '#302c21',
    accent: '#a64b2a',
    accent2: '#284f43',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the largest headline in heavy sans-serif, with an italic serif line beneath
- **Do:** Use terracotta (#a64b2a) for the primary button and one accent mark per screen
- **Do:** Frame food photography in rounded shapes over soft sage glass
- **Don't:** Don't use a pure white ground; the page sits on cream
- **Don't:** Don't use a bright red; the accent is a muted terracotta
- **Don't:** Don't drop the italic serif subline, which carries the tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
