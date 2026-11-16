# Design system — Luxury Heritage Lighting Landing Page Template

`SN-W02086` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, cinematic lighting template where a photograph of a lit interior is darkened to near-black and carries the hero. The headline pairs a white serif with an italic pale gold [#fde68a] line, so the warm accent is limited to one phrase. Nav and copy stay small and light, letting the glow of the room do the work.

**Mood:** cinematic, warm, dark, intimate, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#fde68a` | Primary action and highlights |

Palette by frequency of use: `#fde68a` · `#78716c` · `#f59e0b` · `#e7e5e4` · `#1c1917` · `#292524` · `#a8a29e` · `#44403c` · `#fef3c7` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Cinzel, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 10px
- **Weights in use:** light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-4xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="hidden md:flex items-center gap-3 border border-stone-700/50 rounded-full px-5 py-2 hover:border-amber-700/50 hover:bg-amber-900/10 transition-all duration-500 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #1c1917;
  --color-text: #e7e5e4;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #fde68a;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#1c1917',
    ink: '#e7e5e4',
    muted: '#78716c',
    line: '#292524',
    accent: '#fde68a',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the hero photograph under a near-black overlay so headline type stays legible.
- **Do:** Set one phrase per headline in italic pale gold (#fde68a).
- **Do:** Use #e7e5e4 for body text on the #050505 and #1c1917 surfaces.
- **Don't:** Don't brighten the photography above the overlay; the page depends on shadow.
- **Don't:** Don't set more than one gold line in a single heading.
- **Don't:** Don't use pure white for body text; the body colour is warmer, #e7e5e4.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
