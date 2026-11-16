# Design system — YesBoba All-Natural Bubble Tea Landing Page Template

`SN-W03660` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A bright, friendly landing page on a pale mint wash, with a near-black navigation bar and bold sans-serif headlines in black and grey. The primary buttons are pill-shaped and filled with saturated gradients, one violet and one green, which sets an energetic tone. A product card with an empty image area sits to the right, so the layout is built around the drink and the order action.

**Mood:** playful, fresh, bold, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#d1fae5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#a3a3a3` · `#404040` · `#059669` · `#d1fae5` · `#a7f3d0` · `#000000` · `#047857` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full flex items-center justify-between bg-transparent hover:bg-white/20 transition-all duration-300 p-6 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Bento grid (`bento-grid`)
5. Awards / press (`awards-press`)
6. Map / location (`map-location`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #d1fae5;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-border: #ffffff;
  --color-accent: #059669;
  --color-accent-2: #fef3c7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#d1fae5',
    surface: '#ffffff',
    ink: '#171717',
    line: '#ffffff',
    accent: '#059669',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a heavy sans-serif, with the second phrase in grey
- **Do:** Use pill-shaped buttons with gradient fills for primary actions
- **Do:** Keep the mint background (#d1fae5) as a soft wash behind the hero
- **Don't:** Don't use the gradient buttons on text-heavy sections
- **Don't:** Don't add more than two button colours to one screen
- **Don't:** Don't set the navigation bar in a light surface colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
