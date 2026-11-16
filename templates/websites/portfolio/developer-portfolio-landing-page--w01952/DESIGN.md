# Design system — Developer Portfolio Landing page

`SN-W01952` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a centred percentage counter in white bold sans over a thin progress line, working as a preloader before the portfolio opens. No other content is visible in this frame, so the look rests on the black ground and one white figure. The hairline progress bar is the only graphic element.

**Mood:** stark, minimal, cinematic, dark, austere

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#a3a3a3` · `#050505` · `#fafafa` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-8`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="inline-block pointer-events-auto bg-[var(--text-main)] text-[var(--bg-color)] px-8 py-4 rounded-full font-semibold hover:scale-110 transition-transform duration-300 hoverable">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. About (`about`)
6. Marquee (`marquee`)
7. Feature grid (`features`)
8. 3D / canvas scene (`3d-canvas`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use a centred white numeral and a hairline progress bar for the loader
- **Do:** Keep the loader on black with no other elements
- **Do:** Hand over to the hero once the counter completes
- **Don't:** Don't add colour to the loader; it is white on black
- **Don't:** Don't use a thick progress bar; the line is hairline
- **Don't:** Don't add text beyond the counter while loading

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
