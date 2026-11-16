# Design system — Creative Agency Landing Page Template

`SN-W01482` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page (#000000) with a faint violet glow (#a855f7) rising from the top edge, so colour lives in the atmosphere rather than in the type. Headlines are heavy, tightly leaded sans in white, with the final line stepping down to a grey gradient. A small right-aligned paragraph and a thin nav keep the hero spare, and no photography appears on the first screen.

**Mood:** moody, spare, dark, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#1f2937` · `#000000` · `#d1d5db` · `#111827` · `#18181b` · `#6b7280` · `#374151` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 128px · h2 64px · h3 48px · body 18px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[inset_0_-40px_80px_rgba(255,255,255,0.05),0_20px_100px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-16`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #374151;
  --color-accent: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#374151',
    accent: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep headlines heavy and tightly leaded, and step the final line down to grey.
- **Do:** Put the violet glow at the top edge only, at low intensity, as ambient light.
- **Do:** Keep body copy short and small, set to the right of the headline.
- **Don't:** Don't flood the page with the violet; it is a glow, not a fill.
- **Don't:** Don't set the headline in a light weight; the design relies on heavy weight.
- **Don't:** Don't treat the page as light; the ground is black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
