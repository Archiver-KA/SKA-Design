# Design system — Manufacturing and Industrial Corporate Template

`SN-W04022` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A corporate page led by a full-width factory photograph. The hero headline is set in heavy white sans-serif on the lower left, directly over the image, and the navigation sits in a plain dark row on white above it. The orange-red accent appears only in the logo and key highlights, so the photograph carries most of the visual weight.

**Mood:** corporate, industrial, sober, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#374151` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#ff5722` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f3f4f6` · `#f5f5f5` · `#374151` · `#ff5722` · `#030712` · `#6b7280` · `#000000` · `#4b5563` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[0_8px_24px_-10px_rgba(0,0,0,0.28)]`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-[90rem]`, `max-w-[65rem]`
- **Common gaps:** `gap-6`, `gap-x-8`, `gap-y-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #1f2937;
  --color-muted: #374151;
  --color-border: #f3f4f6;
  --color-accent: #ff5722;
  --color-accent-2: #2563eb;
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
    surface: '#f5f5f5',
    ink: '#1f2937',
    muted: '#374151',
    line: '#f3f4f6',
    accent: '#ff5722',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place the hero headline in white over a full-bleed photograph
- **Do:** Keep navigation in dark grey on white with no fill
- **Do:** Use the orange-red (#ff5722) for the logo and key highlights only
- **Don't:** Don't place headline text over bright parts of a photograph
- **Don't:** Don't add decorative gradients on top of the hero image
- **Don't:** Don't use the orange for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
