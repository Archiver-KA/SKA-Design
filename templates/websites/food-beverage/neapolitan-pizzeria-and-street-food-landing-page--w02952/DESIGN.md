# Design system — Neapolitan Pizzeria & Street Food Landing Page Template

`SN-W02952` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A cinematic pizzeria hero on near-black (#050505) with a dark photograph of pulled cheese and pizza behind it. A large white serif wordmark sits in the centre, with tracked caps beneath and a thin outline button. Colour is nearly absent, so the photo and the white type carry the mood. The display face is a serif.

**Mood:** cinematic, dark, street, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#fecaca` | Primary action and highlights |

Palette by frequency of use: `#292524` · `#a8a29e` · `#d6d3d1` · `#e7e5e4` · `#78716c` · `#ef4444` · `#fecaca` · `#7f1d1d` · `#000000` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Cinzel, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 14px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(220,38,38,0.2)]`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-4`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-3 border border-stone-700/50 rounded-full px-5 py-2 hover:border-red-900/50 hover:bg-red-900/10 transition-all duration-500 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Menu list (`menu-list`)
6. Services (`services`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #d6d3d1;
  --color-muted: #a8a29e;
  --color-border: #292524;
  --color-accent: #fecaca;
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
    surface: '#000000',
    ink: '#d6d3d1',
    muted: '#a8a29e',
    line: '#292524',
    accent: '#fecaca',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the hero name in a large white serif, centred over a darkened photo
- **Do:** Use tracked uppercase for the tagline under the name
- **Do:** Keep the call to action as a thin outline button
- **Don't:** Don't place the hero text over a bright part of the photo
- **Don't:** Don't add a filled button; the outline style is part of the look
- **Don't:** Don't use a light page ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
