# Design system — Event Ticket Layout with Seat Info

`SN-W03601` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The ticket component is a single white card on a pale peach ground (#ffedd5). The layout is split: a tall peach stub with rotated entry-pass lettering and a serial number on the left, and the event details on white to the right. Seat and price cells use peach blocks (#fdba74), and a dark orange (#c2410c) date band sits across the details. The look is warm and collectible.

**Mood:** warm, collectible, tactile, bold, retro

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffedd5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#fdba74` | Primary action and highlights |

Palette by frequency of use: `#e5e7eb` · `#c2410c` · `#fdba74` · `#ffffff` · `#f5f5f5` · `#ffedd5` · `#1f2937` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Manrope, Inter
- **Scale (largest breakpoint):** h3 30px · body 14px
- **Weights in use:** bold, semibold, extrabold
- **Letter spacing:** `tracking-wider`, `tracking-[8px]`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px)
- **Content width:** `max-w-[600px]`

## Page structure

Blocks in page order:

1. Feature grid (`features`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffedd5;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #fdba74;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffedd5',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#fdba74',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ticket as a white card on the pale peach ground (#ffedd5)
- **Do:** Use peach (#fdba74) for the stub and seat blocks, and dark orange (#c2410c) for the date band
- **Do:** Set codes and seat labels in small tracked uppercase
- **Don't:** Don't remove the dotted divider between the stub and the details
- **Don't:** Don't add dark panels to the ticket
- **Don't:** Don't use the dark orange for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
