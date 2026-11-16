# Design system — Emerald Lawn Sprinklers Irrigation Services Template

`SN-W03892` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, photographic hero where a full-bleed photo of workers in green shirts sits under a dark overlay. A large white sans-serif headline sits low on the left, with a pale green primary button and a small row of trust labels beneath. The green is kept to buttons and small labels, so the page feels natural and grounded.

**Mood:** natural, grounded, dark, photographic, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c1208` | Page ground |
| Surface | `#131f0e` | Cards, panels, raised areas |
| Text | `#f4faf0` | Headings and primary copy |
| Muted text | `#6a7d5e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6db33f` | Primary action and highlights |

Palette by frequency of use: `#4a8c2a` · `#ffffff` · `#111a0c` · `#f4faf0` · `#000000` · `#6a7d5e` · `#6db33f` · `#9fd96a` · `#1a2e14` · `#2e4a24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Sora
- **Scale (largest breakpoint):** h2 60px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_12px_40px_rgba(17,26,12,0.07)]`, `shadow-[0_0_12px_rgba(74,140,42,0.6)]`, `shadow-[0_24px_70px_rgba(17,26,12,0.07)]`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111A0C] text-[#F0F4EC] text-sm font-semibold hover:bg-[#1E2D14] transition-all hover:-translate-y-px">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Schedule (`schedule-agenda`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Services (`services`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c1208;
  --color-surface: #131f0e;
  --color-text: #f4faf0;
  --color-muted: #6a7d5e;
  --color-border: #ffffff;
  --color-accent: #6db33f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c1208',
    surface: '#131f0e',
    ink: '#f4faf0',
    muted: '#6a7d5e',
    line: '#ffffff',
    accent: '#6db33f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero photo under a dark overlay so white text stays legible
- **Do:** Use the pale green (#6db33f) for the primary button and small labels
- **Do:** Set the headline in large white sans-serif, left aligned and low in the frame
- **Don't:** Don't place the headline over bright parts of the photo without the overlay
- **Don't:** Don't use green for large backgrounds; it stays on buttons and labels
- **Don't:** Don't put a solid dark bar over the photo; the navigation sits on a translucent bar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
