# Design system — Electrogalactic Space Infrastructure Template

`SN-W00356` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A sci-fi page on black where the headline is set in Orbitron, a wide geometric display face. A white first line sits over a grey second line, and a very large uppercase wordmark follows. Small tracked uppercase labels and telemetry-style status text frame the hero, and the one saturated colour is a blue primary button with square corners.

**Mood:** sci-fi, technical, dark, wide

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#1e1e1e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Orbitron
- **Body:** Orbitron
- **Loaded families:** Orbitron, Sarpanch
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 16px · body 12px
- **Weights in use:** normal, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-[10px]` (10px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_18px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.06)]`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1320px]`, `max-w-[980px]`
- **Section padding:** `py-16`, `py-[88px]`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="text-xs uppercase tracking-widest border border-[var(--border)] bg-transparent px-6 py-2.5 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors font-normal rounded-none focus:outline-none text-[var(--fg)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Dashboard preview (`dashboard-preview`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "Orbitron", sans-serif;
  --font-body: "Orbitron", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Orbitron'], sans: ['Orbitron'] },
} }
```

## Do and don't

- **Do:** Set headlines in Orbitron with wide letter spacing in uppercase
- **Do:** Use small uppercase tracked labels and status text at the corners of the hero
- **Do:** Keep the primary button solid blue with square corners
- **Don't:** Don't add rounded corners to panels or buttons
- **Don't:** Don't add a second saturated colour beside the blue
- **Don't:** Don't set long body copy in Orbitron; it is for display lines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
