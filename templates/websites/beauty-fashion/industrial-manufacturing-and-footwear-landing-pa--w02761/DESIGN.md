# Design system — Industrial Manufacturing & Footwear Landing Page Template

`SN-W02761` · beauty-fashion · light mode · Sinera Atlas theme `route` · language `en`

## Direction

Industrial safety page with a full-width, darkened photograph of machine parts behind a heavy white sans headline set in tight lines. A single orange-red full stop (#ff5722) after the headline is the only colour, and the logo and navigation sit on a white bar at the top. The stance is blunt and factual, letting the machinery and the type carry the message.

**Mood:** industrial, blunt, factual, heavy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#ff5722` | Primary action and highlights |
| Second accent | `#2e66e5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#ff5722` · `#000000` · `#1a1a1a` · `#2e66e5` · `#374151` · `#f3f4f6` · `#e5e7eb` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 120px · h2 48px · h3 30px · body 18px
- **Weights in use:** semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-[12px]` (12px), `rounded` (4px), `rounded-md` (6px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-[90rem]`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-1`, `gap-x-1`, `gap-y-1`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #ff5722;
  --color-accent-2: #2e66e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#ff5722',
    accent2: '#2e66e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans in tight lines over a darkened photograph
- **Do:** Use the orange-red (#ff5722) for one accent mark, such as the full stop after the headline
- **Do:** Darken hero photography with a grey overlay so the white type holds
- **Don't:** Don't use the blue accent (#2e66e5) in the hero; orange-red is the only accent
- **Don't:** Don't put the headline on a light photograph; the overlay is needed
- **Don't:** Don't add decorative gradients to the hero; the hero uses only a grey overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
