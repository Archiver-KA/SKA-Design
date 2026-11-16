# Design system — Design Features Layout with Cards

`SN-W04182` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark bento grid of feature cards on a near-black ground (#0f0f0f), each card a slightly lighter panel (#212121) with a hairline border (#2a2a2a). Violet (#6e56cf) is the only accent, used for tags and small icons. Inter is set at small sizes throughout, and each card pairs a short title with a miniature interface preview that does the explaining.

**Mood:** dark, modular, tidy, product-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Surface | `#212121` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |
| Accent | `#6e56cf` | Primary action and highlights |

Palette by frequency of use: `#6e56cf` · `#9e8cfc` · `#212121` · `#1a1a1a` · `#2a2a2a` · `#9ca3af` · `#0f0f0f` · `#c4b5fd` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h3 16px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_2px_10px_rgba(0,0,0,0.2)]`
- **Content width:** `max-w-[820px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-1`, `gap-6`, `gap-2`

## Page structure

Blocks in page order:

1. Feature grid (`features`)
2. Bento grid (`bento-grid`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0f0f0f;
  --color-surface: #212121;
  --color-text: #e5e7eb;
  --color-muted: #9ca3af;
  --color-border: #2a2a2a;
  --color-accent: #6e56cf;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f0f',
    surface: '#212121',
    ink: '#e5e7eb',
    muted: '#9ca3af',
    line: '#2a2a2a',
    accent: '#6e56cf',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the grid in bento proportions with mixed card widths and rounded corners
- **Do:** Use violet (#6e56cf) only for tags, icons and one highlight per card
- **Do:** Show a small interface preview in each card rather than a stock image
- **Don't:** Don't use light card backgrounds or bright fills on this dark ground
- **Don't:** Don't add drop shadows; separate cards with hairline borders (#2a2a2a)
- **Don't:** Don't introduce a second accent colour anywhere in the grid

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
