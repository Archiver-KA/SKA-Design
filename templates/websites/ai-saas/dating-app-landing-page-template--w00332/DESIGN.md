# Design system — Dating App Landing Page Template

`SN-W00332` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A clean white dating-app page where the product is shown in dark phone mockups, so the interface carries the colour. The ground is pure white and type is plain Inter in near-black, with pink (#db2777) reserved for avatars, unread badges and the primary action. Circular avatars and soft grey list rows keep the layout friendly rather than glossy.

**Mood:** friendly, clean, playful, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#db2777` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#fafafa` · `#171717` · `#ec4899` · `#d946ef` · `#db2777` · `#0a0a0a` · `#4ade80` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 26px · h3 26px · body 13px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)]`, `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-1`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="p-2 rounded-full transition-colors hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-border: #ffffff;
  --color-accent: #db2777;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    line: '#ffffff',
    accent: '#db2777',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Show the product in phone mockups rather than abstract art
- **Do:** Use pink (#db2777) only for badges, active states and the primary action
- **Do:** Keep avatars circular and separate list rows with light grey lines
- **Don't:** Don't put the pink on large backgrounds
- **Don't:** Don't add a dark hero; the page ground stays white
- **Don't:** Don't use heavy shadows on the mockups; keep them flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
