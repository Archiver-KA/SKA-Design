# Design system — Maximalist City Zoo Landing Page Template

`SN-W03116` · travel · dark mode · Sinera Atlas theme `dwell` · language `ru`

## Direction

A near-black hero (#000000) in loud, poster-like type: a heavy uppercase sans-serif headline in white, with the middle word in solid lime (#ccff00) and the last word in outlined letters. Two rotated square frames sit at the corners, one lime and one violet, and the buttons are lime and outline. The layout is maximalist and energetic, and the lime is the one loud accent across the hero.

**Mood:** loud, energetic, maximalist, playful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |
| Second accent | `#ff4d00` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#ccff00` · `#18181b` · `#3f3f46` · `#f4f4f5` · `#a1a1aa` · `#ff4d00` · `#9333ea` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 20px · body 20px
- **Weights in use:** bold, black, medium
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[4px_4px_0px_0px_#ccff00]`, `shadow-[4px_4px_0px_0px_white]`, `shadow-none`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-[#ccff00] text-black px-6 py-3 text-sm font-semibold uppercase tracking-tight border-2 border-transparent hover:border-white hover:scale-105 transition-all shadow-[4px_4px_0px_0px_white] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #000000;
  --color-accent: #ccff00;
  --color-accent-2: #ff4d00;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#000000',
    accent: '#ccff00',
    accent2: '#ff4d00',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the headline heavy and uppercase, with the middle word in lime (#ccff00)
- **Do:** Use lime for the primary button and one highlight per section only
- **Do:** Let rotated square frames sit at the corners as the decorative motif
- **Don't:** Don't use lime as text on white; it fails contrast
- **Don't:** Don't use a light lime ground; the hero is black
- **Don't:** Don't add more than one loud colour beyond lime and the orange (#ff4d00)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
