# Design system — Mobile iOS Simulator Landing Page Template

`SN-W00541` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark stage with a phone frame centred on it, showing an iOS lock screen. The screen itself carries a violet gradient, which is the only strong colour, while the page around it stays near-black. Notification cards are translucent grey panels with small bold titles, and a single caption line under the device explains the interaction in plain text.

**Mood:** cinematic, dark, product-focused, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#18181b` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#e4e4e7` · `#a1a1aa` · `#d4d4d8` · `#27272a` · `#18181b` · `#f4f4f5` · `#3b82f6` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 18px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[20rem]`
- **Common gaps:** `gap-1`, `gap-2`, `gap-3`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #000000;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #18181b;
  --color-accent: #3b82f6;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#000000',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#18181b',
    accent: '#3b82f6',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the phone frame on a near-black page and let the device be the focus
- **Do:** Keep notification cards translucent, with small bold titles and muted body text
- **Do:** Set the caption under the device in small muted text as a short hint
- **Don't:** Don't add colour to the page around the phone; the screen supplies it
- **Don't:** Don't replace the device frame with a flat image
- **Don't:** Don't enlarge the caption into a paragraph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
