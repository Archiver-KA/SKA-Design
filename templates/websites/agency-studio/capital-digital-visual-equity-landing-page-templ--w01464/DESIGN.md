# Design system — Capital Digital Visual Equity Landing Page Template

`SN-W01464` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground ([#0b0d10]) with hot pink ([#f60261]) on the logo mark and the primary button, and a large white headline in a sans. The second and third lines are greyed, so the sentence reads in steps. A black-and-white photograph sits on the right, which keeps the colour to the pink accent alone.

**Mood:** premium, stark, dark, bold, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0d10` | Page ground |
| Surface | `#0b0d10` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f60261` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f60261` · `#737373` · `#0b0d10` · `#000000` · `#a3a3a3` · `#e5e5e5` · `#171717` · `#d4d4d4` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_40px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black text-xs font-bold uppercase tracking-wider px-5 py-2 hover:bg-neutral-200 transition-colors btn-hover">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Process / steps (`how-it-works`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0d10;
  --color-surface: #0b0d10;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f60261;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0d10',
    surface: '#0b0d10',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f60261',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use hot pink (#f60261) for the primary button and the logo mark only
- **Do:** Set the headline in a large sans with the last two lines in grey
- **Do:** Pair the hero copy with a black-and-white photo on the right
- **Don't:** Don't put the pink behind body copy
- **Don't:** Don't use the pink on light backgrounds
- **Don't:** Don't set the headline in a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
