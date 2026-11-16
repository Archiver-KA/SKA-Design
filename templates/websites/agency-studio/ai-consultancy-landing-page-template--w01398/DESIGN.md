# Design system — AI Consultancy Landing Page Template

`SN-W01398` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white, airy hero with a centred sans headline in dark navy (#1e3a8a) and the second line in a brighter blue (#3b82f6), the only two-tone move on the screen. The page is pale and calm: a faint blue halo sits behind the hero, a navy solid button sits beside a white outlined one, and a green status dot adds one small note of colour.

**Mood:** airy, calm, professional, blue, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e3a8a` | Headings and primary copy |
| Border | `#dbeafe` | Hairlines, dividers, outlines |
| Accent | `#1e3a8a` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#1e3a8a` · `#ffffff` · `#bfdbfe` · `#1e40af` · `#3b82f6` · `#06b6d4` · `#0891b2` · `#1d4ed8` · `#dbeafe` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 text-white bg-blue-900 hover:bg-blue-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. About (`about`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #1e3a8a;
  --color-border: #dbeafe;
  --color-accent: #1e3a8a;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#1e3a8a',
    line: '#dbeafe',
    accent: '#1e3a8a',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in navy (#1e3a8a) with the second line in blue (#3b82f6).
- **Do:** Use navy for the primary button and a white outline for the secondary.
- **Do:** Keep the ground white with at most one soft blue halo behind the hero.
- **Don't:** Don't add teal or cyan fills to the hero; the first screen uses blue only.
- **Don't:** Don't use a dark hero; the template stays on a white ground.
- **Don't:** Don't add a second accent colour to a screen; blue carries it alone.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
