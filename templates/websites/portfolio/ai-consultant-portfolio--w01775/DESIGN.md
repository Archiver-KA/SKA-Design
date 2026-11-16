# Design system — AI Consultant Portfolio

`SN-W01775` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep near-black page ([#05070a]) with a large white Inter headline, where the second line is set in bright blue (#4ba3f8) to mark the key phrase. A blue glow sits behind the hero, and the buttons pair a solid blue primary with an outlined secondary. Blue is confined to the glow, the highlight line and the buttons, which keeps the page controlled.

**Mood:** controlled, dark, clear, cool

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05070a` | Page ground |
| Surface | `#0a0d12` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a9b5c7` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ba3f8` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#4ba3f8` · `#ffffff` · `#1a76d2` · `#a9b5c7` · `#0a0d12` · `#0e5cbf` · `#05070a` · `#2a2d35` · `#374151` · `#0e1520`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(26,118,210,0.4)]`, `shadow-[0_0_25px_rgba(26,118,210,0.5)]`, `shadow-[0_0_15px_rgba(75,163,248,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-[80%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="text-sm font-medium text-white bg-gradient-to-r from-[#1A76D2] to-[#0E5CBF] px-4 py-2 rounded border border-white/10 hover:shadow-[0_0_20px_rgba(26,118,210,0.4)] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. About (`about`)
5. Services (`services`)
6. Feature grid (`features`)
7. Dashboard preview (`dashboard-preview`)
8. Marquee (`marquee`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify, Heroicons

## Tokens

```css
:root {
  --color-background: #05070a;
  --color-surface: #0a0d12;
  --color-text: #f5f5f5;
  --color-muted: #a9b5c7;
  --color-border: #ffffff;
  --color-accent: #4ba3f8;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05070a',
    surface: '#0a0d12',
    ink: '#f5f5f5',
    muted: '#a9b5c7',
    line: '#ffffff',
    accent: '#4ba3f8',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlight phrase in bright blue (#4ba3f8) on the second line.
- **Do:** Use the solid blue button as the primary action, and an outline for the secondary.
- **Do:** Keep the glow soft and behind the hero, not over the text.
- **Don't:** Don't add a second accent hue beside the blue.
- **Don't:** Don't set body copy in pure white; use the muted blue-grey (#a9b5c7).
- **Don't:** Don't use a light background; the page relies on the dark ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
