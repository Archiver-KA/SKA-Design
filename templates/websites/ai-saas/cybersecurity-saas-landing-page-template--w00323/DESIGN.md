# Design system — Cybersecurity SaaS Landing Page Template

`SN-W00323` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark maroon cybersecurity page where one red (#ef4444) carries every call to action, status label and highlighted headline word. Headlines are large system sans in white, with the key phrase set in red, and the hero is balanced by a glowing red shield illustration and faint circuit lines. Depth comes from the near-black ground and soft red glow rather than from cards.

**Mood:** alarming, technical, dark, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a0508` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#fee2e2` | Secondary copy, captions |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fee2e2` · `#ef4444` · `#1a0304` · `#450a0a` · `#dc2626` · `#7f1d1d` · `#f87171` · `#1a0508` · `#2a0508`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-red-900/50`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-900/50 transition hover:bg-red-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1a0508;
  --color-text: #ffffff;
  --color-muted: #fee2e2;
  --color-accent: #ef4444;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a0508',
    ink: '#ffffff',
    muted: '#fee2e2',
    accent: '#ef4444',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in the red accent (#ef4444)
- **Do:** Keep the primary button solid red and the secondary button outlined
- **Do:** Place one glowing illustration on the right side of the hero
- **Don't:** Don't add a second accent hue beside the red
- **Don't:** Don't use light section backgrounds; the page stays dark
- **Don't:** Don't set headlines in a serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
