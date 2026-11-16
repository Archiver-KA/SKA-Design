# Design system — LUXE Premium Mobility Landing Page Template

`SN-W04001` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, product-led hero that uses phone-sized app screens as the main visual, set under a centred white headline. The word 'Extraordinary' in violet (#818cf8) is the one colour emphasis, and blue highlights appear only inside the app screens. Rounded cards and dark panels keep the mobile interface at the centre of the page.

**Mood:** sleek, dark, product-led, premium, digital

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#818cf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#facc15` · `#818cf8` · `#3b82f6` · `#93c5fd` · `#60a5fa` · `#6366f1` · `#0f172a` · `#06b6d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 42px · h3 24px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)]`, `shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-200">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Articles (`blog-articles`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #818cf8;
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
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use violet (#818cf8) only for the highlight word and key accents in the app screens
- **Do:** Set the headline in bold white sans-serif, centred
- **Do:** Show the app screens at full size, overlapping the bottom of the hero
- **Don't:** Don't place a light background behind the app screens
- **Don't:** Don't use the blue tones for body text; they belong to the screens
- **Don't:** Don't add more than one highlight word per headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
