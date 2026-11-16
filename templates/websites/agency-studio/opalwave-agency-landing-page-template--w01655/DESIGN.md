# Design system — OpalWave Agency Landing Page Template

`SN-W01655` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A very dark page with a soft grey-blue glow behind the hero. Headings are set in Geist at 96px with a yellow accent (#ffd60a) and a mint secondary (#6ee7b7), in a dark, high-contrast agency layout.

**Mood:** dark, modest, high-contrast, engineered, unconfirmed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0c` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9b9ba3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffd60a` | Primary action and highlights |
| Second accent | `#6ee7b7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#9b9ba3` · `#6ee7b7` · `#ffd60a` · `#0b0b0c` · `#8b8b94` · `#82828b` · `#7f7f88` · `#6f6f78`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Geist Mono
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 36px · body 12px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.16rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`
- **Content width:** `max-w-[112rem]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.07] px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:bg-white/[0.1] sm:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b0c;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #9b9ba3;
  --color-border: #ffffff;
  --color-accent: #ffd60a;
  --color-accent-2: #6ee7b7;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0c',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#9b9ba3',
    line: '#ffffff',
    accent: '#ffd60a',
    accent2: '#6ee7b7',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Geist at display size in white
- **Do:** Use the yellow (#ffd60a) only for the primary button and one highlight
- **Do:** Keep the glow soft and behind the hero type
- **Don't:** Don't set body copy in yellow
- **Don't:** Don't use the mint (#6ee7b7) for buttons; it is a secondary tint
- **Don't:** Don't add gradients beyond the existing glow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
