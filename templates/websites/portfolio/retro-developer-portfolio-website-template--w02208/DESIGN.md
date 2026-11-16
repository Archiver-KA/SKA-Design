# Design system — Retro Developer Portfolio Website Template

`SN-W02208` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A neo-brutalist layout on white with a fine grey dot grid, heavy black rules and hard-edged blocks. Cyan (#03dffc) and magenta (#ff03fc) act as flat offset shadows and button fills, with a yellow (#fcff03) bar as a third accent, so colour carries the structure. Headlines are bold, uppercase and large in a grotesque face, which makes the page loud but ordered.

**Mood:** neo-brutalist, bold, playful, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#03dffc` | Primary action and highlights |
| Second accent | `#ff03fc` | Supporting highlights |

Palette by frequency of use: `#03dffc` · `#000000` · `#ff03fc` · `#ffffff` · `#fcff03`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Press Start 2P, Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="inline-block px-8 py-4 bg-[#03dffc] text-black font-bold border-4 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-border: #000000;
  --color-accent: #03dffc;
  --color-accent-2: #ff03fc;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#000000',
    line: '#000000',
    accent: '#03dffc',
    accent2: '#ff03fc',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Use hard black borders and solid offset blocks instead of blurred shadows
- **Do:** Keep cyan (#03dffc) for the primary button and one block per section
- **Do:** Set display headings bold, uppercase and large (96px on desktop)
- **Don't:** Don't use blurs or soft drop shadows
- **Don't:** Don't use more than the three accents on one screen
- **Don't:** Don't round the corners; the blocks stay square

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
