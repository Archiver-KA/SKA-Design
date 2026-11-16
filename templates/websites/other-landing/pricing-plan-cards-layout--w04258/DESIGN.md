# Design system — Pricing Plan Cards Layout

`SN-W04258` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet pricing table on a near-black ground (#101112), with three plain cards in a slightly lighter panel tone and a centred heading in white. The middle plan is marked with a small blue Popular badge and the only solid blue button, while the outer plans use dark outline buttons. Prices are large and white, with a grey unit suffix and check-mark feature lists below.

**Mood:** plain, clear, dark, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#101112` | Page ground |
| Surface | `#17181a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#36383c` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#9ca3af` · `#d1d5db` · `#26282c` · `#36383c` · `#17181a` · `#2563eb` · `#101112` · `#ffffff` · `#1d4ed8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 30px · h3 18px · body 14px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-5`

**Primary button**

```html
<a class="w-full py-2 bg-blue-600 rounded text-sm hover:bg-blue-700 transition-colors mt-auto">…</a>
```

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #101112;
  --color-surface: #17181a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #36383c;
  --color-accent: #2563eb;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#101112',
    surface: '#17181a',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#36383c',
    accent: '#2563eb',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use blue (#2563eb) for the highlighted plan's button and the Popular badge only
- **Do:** Keep the plan cards on the #17181a panel with dark outline buttons on the outer plans
- **Do:** Set prices large and white, with grey unit text beside them
- **Don't:** Don't add a second solid button colour to the plan row
- **Don't:** Don't use the blue for the outer plans' buttons
- **Don't:** Don't put the Popular badge on more than one plan

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
