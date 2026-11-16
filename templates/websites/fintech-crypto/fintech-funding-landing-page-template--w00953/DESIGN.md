# Design system — Fintech Funding Landing Page Template

`SN-W00953` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

The hero is a large saturated blue panel with white bold Inter type, and the rest of the page is white. Primary and secondary buttons are pale or outlined against the blue, and a short trust line with avatars sits under the CTA. The blue panel is the dominant colour.

**Mood:** bold, blue, trustworthy, saturated, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#d1d5db` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f3f4f6` · `#e5e7eb` · `#6b7280` · `#d1d5db` · `#dbeafe` · `#f5f7fa` · `#cbd5e0` · `#f0fdf4` · `#15803d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-[1280px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-7 py-3.5 rounded-full font-medium text-base transition-all backdrop-blur-sm flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #d1d5db;
  --color-text: #111111;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#d1d5db',
    ink: '#111111',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue hero panel for the first screen only.
- **Do:** Set white headlines in bold Inter on the blue panel.
- **Do:** Place a trust line with avatars under the primary CTA.
- **Don't:** Don't use green for buttons.
- **Don't:** Don't put body text on the blue panel in small sizes.
- **Don't:** Don't use blue for large areas further down the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
