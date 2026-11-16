# Design system — Dessert Takeaway Landing Page Template

`SN-W01138` · ecommerce · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, minimal takeaway layout sits on a pale grey-white top, with a pale lime ORDER NOW button and a lime band below it. Inter sets the type, with dark slate text on light grounds, and lime serves as the accent.

**Mood:** light, minimal, fresh, takeaway

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f9fa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dceeac` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#dceeac` · `#475569` · `#f97316` · `#f8f9fa` · `#1e293b` · `#fdfdfd` · `#e8f5c8` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow`, `shadow-sm`
- **Common gaps:** `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Menu list (`menu-list`)
3. Feature grid (`features`)
4. About (`about`)
5. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f9fa;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-border: #ffffff;
  --color-accent: #dceeac;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f9fa',
    surface: '#ffffff',
    ink: '#0f172a',
    line: '#ffffff',
    accent: '#dceeac',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the pale lime (#dceeac) for the ORDER NOW button and section bands
- **Do:** Keep dark text on lime buttons for contrast
- **Do:** Set headings in Inter in the dark slate text tone (#0f172a)
- **Don't:** Don't use the orange (#f97316) for buttons; the buttons are lime.
- **Don't:** Don't build the layout around a hero image.
- **Don't:** Don't set light text on the lime bands

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
