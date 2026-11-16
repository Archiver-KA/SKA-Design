# Design system — Hemesh Editor Portfolio Template

`SN-W02043` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black, faintly green page (#050807) where a single lime accent (#b6ff3c) carries the buttons, the eyebrow dot and a glowing subtitle. Inter is set heavy and large for the name, then a glowing lime line for the role, so the typography itself is the effect. Glow and a blurred backdrop give it the feel of an edit suite.

**Mood:** cinematic, neon, dark, energetic, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050807` | Page ground |
| Surface | `#0b1410` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a0b3a8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b6ff3c` | Primary action and highlights |
| Second accent | `#00ffc6` | Supporting highlights |

Palette by frequency of use: `#b6ff3c` · `#ffffff` · `#a0b3a8` · `#00ffc6` · `#000000` · `#050807` · `#0b1410` · `#6b7f75` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-black`, `shadow-[0_0_15px_rgba(37,211,102,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative px-6 py-3 rounded-full bg-[#B6FF3C] text-black text-sm font-medium hover:scale-105 transition-all glow-btn overflow-hidden flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Pricing (`pricing`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050807;
  --color-surface: #0b1410;
  --color-text: #ffffff;
  --color-muted: #a0b3a8;
  --color-border: #ffffff;
  --color-accent: #b6ff3c;
  --color-accent-2: #00ffc6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050807',
    surface: '#0b1410',
    ink: '#ffffff',
    muted: '#a0b3a8',
    line: '#ffffff',
    accent: '#b6ff3c',
    accent2: '#00ffc6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#b6ff3c) for the primary button and the glowing subtitle only.
- **Do:** Set the name in Inter at display size, bold, in white.
- **Do:** Keep the background near-black with a green tint (#050807).
- **Don't:** Don't use lime for body text; it is reserved for accents.
- **Don't:** Don't remove the glow from the subtitle; it is the template's signature.
- **Don't:** Don't add light section backgrounds.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
