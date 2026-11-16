# Design system — DJ & Event Curator Landing Page Template

`SN-W03588` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The DJ page is nightlife-led, with a near-black ground (#050505) and a large headline that alternates italic and upright serif lines. The second line is filled with a magenta-to-violet gradient, which is the only colour in the hero beside a purple primary button. Small pill tags sit above the copy and a dark photo frame sits to the right. The type carries the expressive tone, with italics used for emphasis.

**Mood:** nightlife, moody, expressive, luminous, italic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d946ef` | Primary action and highlights |
| Second accent | `#06b6d4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d946ef` · `#737373` · `#e879f9` · `#000000` · `#171717` · `#050505` · `#a3a3a3` · `#c026d3` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_20px_rgba(217,70,239,0.5)]`, `shadow-[0_0_15px_rgba(217,70,239,0.2)]`, `shadow-[0_0_10px_#e879f9]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="block w-full py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-center text-xs font-semibold uppercase tracking-widest text-white hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:from-fuchsia-500 hover:to-purple-500 transition-all rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. About (`about`)
5. Feature grid (`features`)
6. Logo cloud (`logo-cloud`)
7. Pricing (`pricing`)
8. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #d946ef;
  --color-accent-2: #06b6d4;
  --font-display: "Playfair Display", serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#d946ef',
    accent2: '#06b6d4',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set display headings in Playfair Display, alternating italic and upright lines
- **Do:** Fill one emphasis line per headline with the magenta-to-violet gradient
- **Do:** Use the purple (#d946ef) only for the primary button and the gradient line
- **Don't:** Don't set body copy in the display serif
- **Don't:** Don't use the gradient on more than one line per section
- **Don't:** Don't add a second bright hue to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
