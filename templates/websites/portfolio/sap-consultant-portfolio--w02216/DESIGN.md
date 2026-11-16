# Design system — SAP Consultant Portfolio

`SN-W02216` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black technical page: a bold sans headline in white stacks over four lines, with small tracked caps for the kicker. The right side holds a thin-line orbital diagram with serif italic labels, the one decorative element. Buttons are outlined rather than filled, so the page reads as precise and engineering-led.

**Mood:** technical, precise, sober, engineered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#facc15` · `#a3a3a3` · `#737373` · `#000000` · `#050505` · `#0a0a0a` · `#525252` · `#e5e5e5` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_8px_#FACC15]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="btn-hover-effect group inline-flex items-center gap-4 px-8 py-4 border border-white/20 rounded-sm text-white bg-transparent uppercase text-sm font-medium tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Timeline (`timeline`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on near-black (#050505) with white headline text
- **Do:** Use thin-line diagrams as the only decoration beside the headline
- **Do:** Make secondary buttons outlined rather than filled
- **Don't:** Don't use yellow as a page background; the ground is near-black
- **Don't:** Don't fill buttons; outlines keep the page technical
- **Don't:** Don't add photos to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
