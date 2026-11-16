# Design system — Luxury Real Estate Portfolio Landing Page Template

`SN-W02100` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black, dramatic fireplace and garage-door page on a pure black ground [#000000]. The first word of the headline is set in gold italic [#bf953f] over a light grey display line, so the gold word is the only colour on the screen. Body copy runs in small light grey at a narrow measure beside a short rule, and the nav uses one outlined button on the right.

**Mood:** dramatic, dark, architectural, warm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#bf953f` | Primary action and highlights |

Palette by frequency of use: `#bf953f` · `#ffffff` · `#78716c` · `#000000` · `#1c1917` · `#d6d3d1` · `#57534e` · `#a8a29e` · `#0a0a0a` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 24px · h2 36px · h3 24px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-none` (0), `rounded-[1px]` (1px)
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-8`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full bg-[#BF953F] text-black font-medium py-4 uppercase tracking-widest text-xs hover:bg-[#AA771C] transition-colors mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Modal / overlay (`modal-overlay`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1c1917;
  --color-text: #d6d3d1;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #bf953f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1c1917',
    ink: '#d6d3d1',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#bf953f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first word of the headline in gold italic (#bf953f) and the rest in grey.
- **Do:** Keep body copy narrow and light grey, with a short vertical rule beside it.
- **Do:** Use an outlined nav button, not a filled one.
- **Don't:** Don't add a second accent colour; the gold is the only colour.
- **Don't:** Don't set the second headline line in white; it reads as secondary in grey.
- **Don't:** Don't add imagery to the hero; the first screen is type on black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
