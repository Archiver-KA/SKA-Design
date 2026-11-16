# Design system — Builder Energy Systems Landing Page Template

`SN-W03846` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark photographic hero in which a desaturated image of a worker sits behind a heavy white sans-serif headline. The final phrase is set in light italic grey, which contrasts with the bold roman lines above it. Orange (#e8491c) appears only in the small section label, the contact button and a thin vertical rule, so the colour works as a precise signal rather than a fill.

**Mood:** industrial, bold, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0c0c` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e8491c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e8491c` · `#0c0c0c` · `#111111` · `#666666` · `#161616` · `#888888` · `#f0ede7` · `#a8a49c` · `#d1ccc2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 16px · body 16px
- **Weights in use:** semibold, extralight, normal
- **Letter spacing:** `tracking-[0.2em]`, `tracking-[-0.045em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2px]` (2px)
- **Shadows:** `shadow-[0_0_12px_rgba(232,73,28,0.6)]`, `shadow-[0_0_40px_rgba(232,73,28,0.2)]`
- **Content width:** `max-w-[90rem]`, `max-w-[160px]`
- **Section padding:** `py-[120px]`, `py-[160px]`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-[#E8491C] hover:bg-[#FF5C2A] text-white text-xs font-semibold rounded-full px-6 py-2.5 transition-all transform hover:-translate-y-[1px]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. Case studies (`case-studies`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0c0c;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #666666;
  --color-border: #ffffff;
  --color-accent: #e8491c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0c0c',
    surface: '#111111',
    ink: '#ffffff',
    muted: '#666666',
    line: '#ffffff',
    accent: '#e8491c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing headline phrase in light italic grey beneath bold white lines.
- **Do:** Use the orange (#e8491c) only for the label, the contact button and rules.
- **Do:** Keep the hero photograph desaturated and darkened.
- **Don't:** Don't fill large areas with orange.
- **Don't:** Don't set the headlines in a light weight; keep them bold.
- **Don't:** Don't place body copy over bright parts of the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
