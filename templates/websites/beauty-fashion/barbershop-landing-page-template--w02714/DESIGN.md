# Design system — Barbershop Landing Page Template

`SN-W02714` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Barbershop page on near-black with a black-and-white photograph of a barber shop interior behind the hero. The headline pairs a heavy white uppercase sans, SHARP, with an italic grey serif word, PRECISION, which gives the page a stark, workshop tone. The nav is plain and small, and the layout uses black, white and grey only.

**Mood:** stark, workshop, monochrome, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#050505` · `#9ca3af` · `#000000` · `#6b7280` · `#e5e7eb` · `#171717` · `#1f2937` · `#4b5563` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 36px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-8`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="inline-block border border-white/50 text-white px-8 py-3 rounded-sm text-[10px] font-semibold uppercase tracking-widest hover:bg-white hover:text-dark transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Services (`services`)
6. Product grid (`product-grid`)
7. Pricing (`pricing`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Team (`team`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#6b7280',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline word in heavy uppercase sans and the second in italic serif grey.
- **Do:** Keep the hero photograph in black and white with a dark overlay under the copy.
- **Do:** Keep the nav small, uppercase and in light grey.
- **Don't:** Don't add colour to the photograph; the look is monochrome.
- **Don't:** Don't set the whole headline in one face; the sans and italic serif pairing is the look.
- **Don't:** Don't add a bright accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
