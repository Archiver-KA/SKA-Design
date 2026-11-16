# Design system — Healthcare Marketing Proposal Template

`SN-W02405` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

This proposal cover is a dark navy slide (#1a1a2e) with a large bold white sans title stacked over three lines, and only two accent colours. A tracked uppercase kicker sits above the title, a rose-red line (#e94560) names the client, and an italic grey tagline sits below. The look is editorial and plain, with type doing all the work and no imagery.

**Mood:** editorial, bold, plain, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a2e` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#e94560` | Primary action and highlights |
| Second accent | `#0d9488` | Supporting highlights |

Palette by frequency of use: `#1a1a2e` · `#e94560` · `#6b7280` · `#f3f4f6` · `#f9fafb` · `#ffffff` · `#4b5563` · `#9ca3af` · `#d4a853` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 14px · h3 20px · body 16px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-6`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Logo cloud (`logo-cloud`)
3. Articles (`blog-articles`)
4. Process / steps (`how-it-works`)
5. Comparison (`comparison`)
6. Feature grid (`features`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a2e;
  --color-surface: #f9fafb;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #e94560;
  --color-accent-2: #0d9488;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a2e',
    surface: '#f9fafb',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#e94560',
    accent2: '#0d9488',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the title in heavy white sans, stacked on short lines
- **Do:** Use the rose-red (#e94560) only for the client name line
- **Do:** Keep the cover on the dark navy ground (#1a1a2e) with no imagery
- **Don't:** Don't use the rose-red for body text or large fills
- **Don't:** Don't add photography or illustration to the cover
- **Don't:** Don't switch the cover to a light ground; its contrast depends on the navy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
