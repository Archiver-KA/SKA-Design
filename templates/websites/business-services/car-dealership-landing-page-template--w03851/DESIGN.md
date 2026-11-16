# Design system — Car Dealership Landing Page Template

`SN-W03851` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark hero on charcoal (#171717) with a large bold sans-serif headline in white, where the middle word DREAM is set in red-to-pink and the lines stack tightly. Body copy and button labels are set in a monospaced face, which gives a technical, spec-sheet tone to a car sales brand. A solid red button and a white-outlined button sit side by side, and the light navigation bar is the only bright surface.

**Mood:** bold, technical, dark, automotive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ef4444` · `#ffffff` · `#dc2626` · `#737373` · `#e5e5e5` · `#a3a3a3` · `#525252` · `#262626` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Source Code Pro
- **Body:** Source Code Pro
- **Loaded families:** Nunito, Source Code Pro
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-[1792px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg text-xs tracking-widest uppercase hover:bg-red-500 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Listings (`listings`)
6. Articles (`blog-articles`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #ef4444;
  --font-display: "Source Code Pro", sans-serif;
  --font-body: "Source Code Pro", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Source Code Pro'], sans: ['Source Code Pro'] },
} }
```

## Do and don't

- **Do:** Set the middle headline word in red (#ef4444) with the red-to-pink fill only.
- **Do:** Set body copy and button labels in the monospaced face.
- **Do:** Use the solid red for the primary button and the white outline for the secondary.
- **Don't:** Don't use the red gradient on body copy.
- **Don't:** Don't place a light panel in the hero beyond the navigation.
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
