# Design system — Afrilingo Music-Powered Landing Page Template

`SN-W03668` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A bold, playful page set on a saturated green field, with a heavy white headline and a yellow (#ffea28) primary button. Small rotated tags with black outlines and bright labels float around the hero, which gives it a sticker-like energy. Black outlines and flat fills do the work that shadows or gradients would do elsewhere.

**Mood:** playful, bold, energetic, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#00a651` | Page ground |
| Surface | `#222222` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ffea28` | Primary action and highlights |
| Second accent | `#00a651` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#ffea28` · `#00a651` · `#222222` · `#262626` · `#1a1a1a` · `#a3a3a3` · `#333333` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]`, `shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`, `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-6 py-3 bg-[#FFEA28] text-black rounded-full font-bold hover:bg-white transition border-2 border-transparent hover:border-[#FFEA28]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Services (`services`)
6. Bento grid (`bento-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #00a651;
  --color-surface: #222222;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #000000;
  --color-accent: #ffea28;
  --color-accent-2: #00a651;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#00a651',
    surface: '#222222',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#000000',
    accent: '#ffea28',
    accent2: '#00a651',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#ffea28) for the primary button only
- **Do:** Set headlines in heavy white sans-serif on the green field
- **Do:** Outline the sticker-style tags in black and keep them flat
- **Don't:** Don't set yellow text on the green field; contrast is weak
- **Don't:** Don't add gradients to the hero
- **Don't:** Don't add more than one highlight colour per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
