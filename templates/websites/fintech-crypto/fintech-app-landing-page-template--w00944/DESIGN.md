# Design system — Fintech App Landing Page Template

`SN-W00944` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page (#010101) with a centred, sparse hero. The headline is set in very large Inter, and its last phrase carries a soft violet-to-pink gradient, which is the only colour on the screen. A light pill button and a small round logo mark keep the rest neutral, so the page reads as calm and minimal.

**Mood:** minimal, dark, centred, calm, gradient-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#010101` | Page ground |
| Surface | `#555555` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#010101` · `#000000` · `#cbd5e1` · `#333333` · `#555555` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · body 20px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_rgba(201,103,232,0.4)]`, `shadow-[0_0_30px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-12`, `gap-16`

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Video / media (`video-media`)
5. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #010101;
  --color-surface: #555555;
  --color-text: #cbd5e1;
  --color-muted: #555555;
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
    background: '#010101',
    surface: '#555555',
    ink: '#cbd5e1',
    muted: '#555555',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at #010101 and build sections from near-black tones only.
- **Do:** Use the violet-pink gradient on one headline phrase per screen.
- **Do:** Set headlines in Inter at display size with tall line spacing.
- **Don't:** Don't add a second accent colour to the hero.
- **Don't:** Don't put a solid colour fill behind the navigation bar.
- **Don't:** Don't use heavy drop shadows on the primary button.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
