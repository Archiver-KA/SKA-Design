# Design system — Retro Cyberpunk Hardware Template

`SN-W00667` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A retro, terminal-inspired hardware page built around a CRT monitor illustration on a light ground. The black screen shows red monospace text, and taped sticky notes sit around the bezel. Share Tech Mono is used for all type, with the headline in red on the black screen rather than on the page, so the effect comes from the scene and the surrounding page stays plain and light.

**Mood:** retro, terminal, playful, tense

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#050100` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#000000` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ff5500` · `#c24100` · `#000000` · `#ffdfd1` · `#050100` · `#ffffff` · `#ef4444` · `#b4b1a6` · `#8a887d` · `#fef08a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Share Tech Mono
- **Body:** Share Tech Mono
- **Loaded families:** Share Tech Mono, Silkscreen
- **Scale (largest breakpoint):** h2 36px · h3 20px · body 14px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-2xl` (16px)
- **Shadows:** `shadow-inner`, `shadow-[4px_4px_10px_rgba(0,0,0,0.5)]`, `shadow-[0_0_5px_#ff5500]`
- **Content width:** `max-w-[1200px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="border-2 border-[#ff5500] text-[#ff5500] bg-transparent px-8 py-4 text-base font-bold tracking-tight hover:bg-[#ff5500] hover:text-black transition-colors duration-200 uppercase flex items-center gap-3 group text-glow hover:box-glow">…</a>
```

## Page structure

Blocks in page order:

1. Marquee (`marquee`)
2. Bento grid (`bento-grid`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #050100;
  --color-text: #111111;
  --color-muted: #000000;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --font-display: "Share Tech Mono", sans-serif;
  --font-body: "Share Tech Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#050100',
    ink: '#111111',
    muted: '#000000',
    line: '#ffffff',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Share Tech Mono'], sans: ['Share Tech Mono'] },
} }
```

## Do and don't

- **Do:** Set all type in Share Tech Mono, including headlines and labels
- **Do:** Use red (#ef4444) on black for screen text and keep it off the light page
- **Do:** Keep the monitor and sticky notes as the only illustrations in the hero
- **Don't:** Don't use the orange (#ff5500) as a page ground
- **Don't:** Don't mix a sans-serif display face into the terminal headlines
- **Don't:** Don't add blur to the screen text; it must stay crisp monospace

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
