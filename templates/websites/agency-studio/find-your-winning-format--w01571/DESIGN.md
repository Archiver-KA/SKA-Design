# Design system — Find your Winning Format

`SN-W01571` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black ground with a bold uppercase sans headline in two tones, white for the claim and mid-grey for the outcome line, centred over the page. A monospace, widely tracked subline sits beneath in grey, and a framed, empty video slot fills the rest of the first screen. The look is a stark, performance-led layout where green appears only as a status dot.

**Mood:** stark, performance-led, two-tone, terse, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#0a0a0a` · `#050505` · `#a3a3a3` · `#525252` · `#030303` · `#000000` · `#080808` · `#444444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Space Grotesk, Geist Mono
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_8px_rgba(34,197,94,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-8`, `gap-12`, `gap-2`

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Marquee (`marquee`)
6. 3D / canvas scene (`3d-canvas`)
7. Feature grid (`features`)
8. Stats band (`stats`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Spline 3D
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold uppercase sans with a two-tone split
- **Do:** Use the monospace, tracked subline for supporting detail
- **Do:** Keep green (#22c55e) to small status dots and the logo mark
- **Don't:** Don't use a light ground; the page is black throughout
- **Don't:** Don't set the second headline line in white, since it steps down to grey
- **Don't:** Don't add colour to headlines; the contrast is white and grey only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
