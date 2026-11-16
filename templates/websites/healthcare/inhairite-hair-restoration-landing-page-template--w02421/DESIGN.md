# Design system — INHAIRITE Hair Restoration Landing Page Template

`SN-W02421` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The hair restoration page is a warm, paper-toned layout: an off-white ground (#f5f3ef), a stacked sans headline in deep navy (#001f3f), and the last line in italic copper (#b47b51). A navy pill is the main action, and a floating analysis card with navy and copper bars shows the service's data. Navy reads as science and copper as the personal side.

**Mood:** scientific, warm, personal, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f3ef` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#001f3f` | Headings and primary copy |
| Muted text | `#36454f` | Secondary copy, captions |
| Border | `#d1d1d1` | Hairlines, dividers, outlines |
| Accent | `#001f3f` | Primary action and highlights |
| Second accent | `#b47b51` | Supporting highlights |

Palette by frequency of use: `#001f3f` · `#b47b51` · `#ffffff` · `#36454f` · `#f5f3ef` · `#b8b8b8` · `#d1d1d1` · `#e0dcd5` · `#f0f0f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#001F3F] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#36454F] transition-all duration-300 shadow-lg shadow-[#001F3F]/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Call to action (`cta`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f3ef;
  --color-surface: #ffffff;
  --color-text: #001f3f;
  --color-muted: #36454f;
  --color-border: #d1d1d1;
  --color-accent: #001f3f;
  --color-accent-2: #b47b51;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f3ef',
    surface: '#ffffff',
    ink: '#001f3f',
    muted: '#36454f',
    line: '#d1d1d1',
    accent: '#001f3f',
    accent2: '#b47b51',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in deep navy (#001f3f) and the closing line in italic copper (#b47b51)
- **Do:** Use a solid navy pill for the primary action and an outlined pill for the secondary
- **Do:** Show the service's data in a clean white card with navy and copper bars
- **Don't:** Don't use copper for buttons; it marks the italic line and the data bars
- **Don't:** Don't put the hero on a dark ground; the warm paper tone is the design
- **Don't:** Don't round the analysis card into a soft blob; keep it a crisp panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
