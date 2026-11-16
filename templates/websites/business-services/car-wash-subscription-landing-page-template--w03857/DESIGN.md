# Design system — Car Wash Subscription Landing Page Template

`SN-W03857` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bright, product-led layout on a near-white ground with a large bold sans headline set in black, then a single line highlighted in electric blue (#00a3ff). Blue is used only for the emphasised headline phrase, the primary CTA and status accents, while cards and panels sit on white with hairline grey borders. Floating mockup cards and an app-style sidebar do most of the explaining.

**Mood:** bright, confident, product-led, clean, app-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#00a3ff` | Primary action and highlights |
| Second accent | `#9333ea` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#a3a3a3` · `#737373` · `#e5e5e5` · `#fafafa` · `#f5f5f5` · `#525252` · `#d4d4d4` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Mulish
- **Body:** Mulish
- **Loaded families:** Mulish
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-electric-500/30`, `shadow-sm`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-white/30 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #00a3ff;
  --color-accent-2: #9333ea;
  --font-display: "Mulish", sans-serif;
  --font-body: "Mulish", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#00a3ff',
    accent2: '#9333ea',
  },
  fontFamily: { display: ['Mulish'], sans: ['Mulish'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy black sans-serif and colour one phrase in #00a3ff
- **Do:** Keep the primary button in #00a3ff and use no other saturated colour in the hero
- **Do:** Use rounded-full pills for tags and rounded-lg corners for cards
- **Don't:** Don't set headlines in a light weight; the display type is heavy
- **Don't:** Don't use the blue as a large background area; it works as an accent only
- **Don't:** Don't drop the sidebar overview pattern from app-style pages

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
