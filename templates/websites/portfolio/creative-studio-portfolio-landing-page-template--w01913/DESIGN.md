# Design system — Creative Studio Portfolio Landing Page Template

`SN-W01913` · portfolio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A near-white page with a faint blue haze, where a large pink-red (#ff1a56) headline carries the design, set as two centred lines of sans. The primary button is solid black and the secondary is a thin pink outline, so the red marks the message and the black marks the action. The layout is centred and calm, and the colour does the emotional work.

**Mood:** bright, bold, centred, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#000000` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ff1a56` | Primary action and highlights |
| Second accent | `#4f46e5` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ff1a56` · `#71717a` · `#f4f4f5` · `#4f46e5` · `#fafafa` · `#52525b` · `#6366f1` · `#3f3f46` · `#a5b4fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex w-full items-center justify-center rounded-lg bg-[#ff1a56] py-3 text-sm font-medium transition-colors hover:bg-[#d90d43] text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Integrations (`integrations`)
5. Process / steps (`how-it-works`)
6. Pricing (`pricing`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #000000;
  --color-border: #000000;
  --color-accent: #ff1a56;
  --color-accent-2: #4f46e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#000000',
    line: '#000000',
    accent: '#ff1a56',
    accent2: '#4f46e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in the pink-red (#ff1a56), centred, in two lines.
- **Do:** Use black for the primary button and a thin pink outline for the secondary.
- **Do:** Keep body copy in dark grey below the headline, at a comfortable measure.
- **Don't:** Don't set body copy in the red; it is for the headline only.
- **Don't:** Don't fill the secondary button with pink; it stays an outline.
- **Don't:** Don't add a second bright colour beside the pink-red.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
