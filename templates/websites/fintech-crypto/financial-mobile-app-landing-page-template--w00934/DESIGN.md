# Design system — Financial Mobile App Landing Page Template

`SN-W00934` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Three dark phone screens sit side by side on a near-black [#030712] ground, each showing banking tiles rather than prose. Primary buttons are violet-to-magenta gradient pills with white text, and balances are large bold figures with small labels. Cards are rounded with a faint purple tint. The headline is only a short caption, so the product screens do the persuading.

**Mood:** app-like, dark, vivid, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d946ef` | Primary action and highlights |
| Second accent | `#6ee7b7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#cbd5e1` · `#030712` · `#000000` · `#6366f1` · `#d946ef` · `#6ee7b7` · `#111827` · `#4f46e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 30px · body 10px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`, `shadow-lg`, `shadow-indigo-500/30`
- **Common gaps:** `gap-2`, `gap-3`, `gap-10`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Newsletter signup (`newsletter`)
3. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030712;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #d946ef;
  --color-accent-2: #6ee7b7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#d946ef',
    accent2: '#6ee7b7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the magenta-to-violet gradient for primary buttons only
- **Do:** Set balances as large bold figures with small grey labels
- **Do:** Keep cards rounded with a faint purple tint on the dark ground
- **Don't:** Don't use a light page ground; the ground is near-black
- **Don't:** Don't add more than one gradient button per screen
- **Don't:** Don't use the mint accent for buttons; it appears only in small status marks

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
