# Design system — Flowbook AI Virtual Receptionist 

`SN-W00389` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a centred white headline in Inter, where the phrase 'client call' is set in italic with a silver gradient, the one typographic contrast on the page. Cyan (#22d3ee) appears only in the logo mark and the top-right demo button, while the hero buttons are white and dark. The tone is clinical and calm, with navy shading behind the hero rather than imagery.

**Mood:** clinical, calm, dark, precise, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#a3a3a3` · `#06b6d4` · `#000000` · `#737373` · `#164e63` · `#1e3a8a` · `#d4d4d4` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(6,182,212,0.15)]`, `shadow-[0_0_8px_rgba(34,211,238,0.8)]`, `shadow-[0_0_20px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-x-2`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-white text-black rounded-full font-semibold tracking-tight overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Case studies (`case-studies`)
7. FAQ (`faq`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #1e3a8a;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#333333',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the highlighted phrase of the headline in italic with a silver gradient, and keep the rest upright white.
- **Do:** Use the cyan (#22d3ee) for the nav demo button and the logo mark only.
- **Do:** Keep the hero buttons as one white pill and one dark outline pill.
- **Don't:** Don't use cyan in the hero buttons; they are white and dark.
- **Don't:** Don't set the whole headline in italic; only one phrase.
- **Don't:** Don't use a light background; the page is black with navy shading.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
