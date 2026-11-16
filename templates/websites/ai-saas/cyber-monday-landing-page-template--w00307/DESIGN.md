# Design system — Cyber Monday Landing Page Template

`SN-W00307` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, retro terminal scene on black, built around a beige-grey CRT monitor with a red-orange monospace display. The title 'CYBER MONDAY' is set in glitched orange-red [#ff5500], and sticky notes and a smiley sit on the monitor frame. Share Tech Mono covers all text, so the whole page reads as one hacker-themed prop rather than a product page.

**Mood:** retro, hacker, playful, glitched

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050100` | Page ground |
| Surface | `#050100` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#000000` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff5500` | Primary action and highlights |

Palette by frequency of use: `#ff5500` · `#c24100` · `#000000` · `#ffdfd1` · `#050100` · `#ffffff` · `#ef4444` · `#080301` · `#b4b1a6` · `#8a887d`.

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

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050100;
  --color-surface: #050100;
  --color-text: #111111;
  --color-muted: #000000;
  --color-border: #ffffff;
  --color-accent: #ff5500;
  --font-display: "Share Tech Mono", sans-serif;
  --font-body: "Share Tech Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050100',
    surface: '#050100',
    ink: '#111111',
    muted: '#000000',
    line: '#ffffff',
    accent: '#ff5500',
  },
  fontFamily: { display: ['Share Tech Mono'], sans: ['Share Tech Mono'] },
} }
```

## Do and don't

- **Do:** Use Share Tech Mono for all text, headings and labels
- **Do:** Keep the orange (#ff5500) for the title and the monitor glow only
- **Do:** Treat the sticky notes and the monitor frame as decoration, not content areas
- **Don't:** Don't use a light page ground; the scene is black
- **Don't:** Don't add a second typeface beside Share Tech Mono
- **Don't:** Don't set body copy over the glitched title

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
