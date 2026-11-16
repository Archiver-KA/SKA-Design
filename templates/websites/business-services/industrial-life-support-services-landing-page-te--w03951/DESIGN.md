# Design system — Industrial Life Support Services Landing Page Template

`SN-W03951` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, cinematic hero with a near-black ground (#050505) over a dimmed photograph, and a large uppercase headline in white with the middle word in mid grey. Small tracked labels above the headline and a thin deep-red (#9d1a10) rule beside the intro panel add structure. The mood is serious and remote, with generous dark space around the type.

**Mood:** cinematic, serious, austere, dark, expansive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#9d1a10` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9d1a10` · `#000000` · `#737373` · `#a3a3a3` · `#050505` · `#171717` · `#0a0a0a` · `#d4d4d4` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Oswald
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 30px · body 14px
- **Weights in use:** bold, normal, medium
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-[0_-10px_40px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-4`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="group flex items-center gap-2 uppercase text-xs tracking-widest border border-white/20 px-5 py-2 hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Call to action (`cta`)
5. Case studies (`case-studies`)
6. Marquee (`marquee`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #9d1a10;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#9d1a10',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the hero ground near-black (#050505) with dimmed photography behind it
- **Do:** Set headlines in uppercase white, with one middle word in mid grey
- **Do:** Use the deep red (#9d1a10) only for thin rules and panel edges
- **Don't:** Don't brighten the hero photography; keep it dimmed
- **Don't:** Don't use red for text or large fills
- **Don't:** Don't set body copy in all capitals

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
