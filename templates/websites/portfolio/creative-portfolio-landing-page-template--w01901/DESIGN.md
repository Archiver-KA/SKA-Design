# Design system — Creative Portfolio Landing Page Template

`SN-W01901` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with a centred bold sans headline, where the final phrase falls to a grey gradient. Small pill chips in saturated blue and orange label the project slots below, and the slots are blank frames with thin edges. Colour appears only in these chips, so the page reads as a bold, centred showcase on a dark field.

**Mood:** bold, centred, dark, showcase

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#d4d4d4` · `#171717` · `#34d399` · `#c084fc` · `#e5e5e5` · `#000000` · `#f5f5f5` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 14px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-neutral-800/60 px-5 py-3 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-800 border-gradient before:rounded-full font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. 3D / canvas scene (`3d-canvas`)
5. Marquee (`marquee`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Case studies (`case-studies`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #c084fc;
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
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#d4d4d4',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in bold white sans, with the final phrase in grey gradient.
- **Do:** Keep category chips as small pills, one colour each.
- **Do:** Frame project cards with thin edges on the dark ground.
- **Don't:** Don't use the chip colours for large fills.
- **Don't:** Don't set the headline in a light weight; the bold weight carries the page.
- **Don't:** Don't place the chips on the card faces; they sit above the cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
