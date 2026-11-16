# Design system — Celestia Vedic Astrology Landing Page Template

`SN-W03859` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A moody, cosmic dark theme built on deep navy (#0f172a) with violet glows drifting behind the content. Headlines use a refined serif with the second line in a lighter lilac tint, and a soft pink (#fda4af) fills the primary button and small accents. A circular panchang emblem sits in the right half, giving the page a ritual, astrological character.

**Mood:** cosmic, mystical, refined, dark, devotional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fda4af` | Primary action and highlights |
| Second accent | `#4c1d95` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fda4af` · `#94a3b8` · `#0f172a` · `#64748b` · `#fecdd3` · `#cbd5e1` · `#fb7185` · `#f43f5e` · `#e9d5ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Inter
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(253,164,175,0.3)]`, `shadow-[0_0_15px_rgba(253,164,175,0.2)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full py-3 bg-rose-300 text-midnight font-bold tracking-wide rounded hover:bg-rose-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Services (`services`)
5. Booking form (`booking`)
6. Articles (`blog-articles`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #e2e8f0;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #fda4af;
  --color-accent-2: #4c1d95;
  --font-display: "Cinzel", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#e2e8f0',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#fda4af',
    accent2: '#4c1d95',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set display headings in Cinzel and body text in Inter
- **Do:** Keep the pink (#fda4af) to the primary button and one accent per section
- **Do:** Use large blurred violet glows as background depth, not as panels
- **Don't:** Don't use light backgrounds; the page stays on deep navy
- **Don't:** Don't set body copy in the serif; Inter carries the text
- **Don't:** Don't add more than one emblem or ornament to a screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
