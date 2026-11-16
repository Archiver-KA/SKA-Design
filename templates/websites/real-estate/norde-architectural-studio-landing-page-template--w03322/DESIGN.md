# Design system — NORDE Architectural Studio Landing Page Template

`SN-W03322` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm off-white page where a large uppercase serif headline is set in near-black, with the middle word 'measured' in orange italic (#ff5a1f) and the lines stepped across the page. The eyebrow line is a small tracked monospace label, and the primary button is a black block with a notched lower corner. Orange appears only in the italic word, so the layout relies on scale and offset rather than colour.

**Mood:** editorial, architectural, bold, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f4f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#8a8680` | Secondary copy, captions |
| Border | `#111111` | Hairlines, dividers, outlines |
| Accent | `#ff5a1f` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#111111` · `#8a8680` · `#f6f4f0` · `#ff5a1f` · `#4a4a48` · `#ffffff` · `#b8b4ac` · `#000000` · `#f1eee8` · `#edeae3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter Tight
- **Loaded families:** Cormorant Garamond, Inter Tight, JetBrains Mono
- **Scale (largest breakpoint):** h3 36px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-[0.15em]`, `tracking-[0.1em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-[100rem]`, `max-w-[25rem]`
- **Section padding:** `py-[6rem]`
- **Common gaps:** `gap-6`, `gap-3`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. About (`about`)
5. Gallery / portfolio (`gallery-portfolio`)
6. 3D / canvas scene (`3d-canvas`)
7. Stats band (`stats`)
8. Marquee (`marquee`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f6f4f0;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #8a8680;
  --color-border: #111111;
  --color-accent: #ff5a1f;
  --color-accent-2: #4ade80;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter Tight", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f4f0',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#8a8680',
    line: '#111111',
    accent: '#ff5a1f',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter Tight'], sans: ['Inter Tight'] },
} }
```

## Do and don't

- **Do:** Set the headline in large uppercase serif in near-black, with the lines stepped across the page.
- **Do:** Use orange (#ff5a1f) only for the italic word in the headline.
- **Do:** Set the eyebrow line in small tracked monospace capitals.
- **Don't:** Don't centre the headline; the lines step across the page.
- **Don't:** Don't add a second accent colour; the palette is off-white, black and orange.
- **Don't:** Don't round the button corners; the primary action has a notched corner.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
