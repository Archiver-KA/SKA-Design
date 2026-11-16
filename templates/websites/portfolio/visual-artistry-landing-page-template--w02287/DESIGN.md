# Design system — Visual Artistry Landing Page Template

`SN-W02287` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a soft violet glow behind the hero. The headline pairs an upright white serif word with an italic word filled by a pink-to-violet gradient, and the body copy is light grey sans. The gradient on a single word is the recognisable move, and the primary button is solid white with a dark outlined secondary.

**Mood:** cinematic, moody, editorial, luminous, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e879f9` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d946ef` · `#737373` · `#000000` · `#e879f9` · `#262626` · `#a3a3a3` · `#525252` · `#171717` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(162,28,175,0.3)]`, `shadow-[0_0_30px_rgba(162,28,175,0.5)]`
- **Content width:** `max-w-screen-2xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="px-8 py-3 bg-white text-black rounded-sm text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Gallery / portfolio (`gallery-portfolio`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #e879f9;
  --color-accent-2: #1e3a8a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#e879f9',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline word in italic serif with the pink gradient (#e879f9)
- **Do:** Keep the violet glow behind the hero, not behind body text
- **Do:** Use solid white for the primary button and a dark outline for the secondary
- **Don't:** Don't put the gradient on more than one headline word
- **Don't:** Don't use the magenta (#d946ef) as the page background
- **Don't:** Don't mix sans display type into the hero headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
