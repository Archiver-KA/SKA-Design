# Design system — Mtee Studios Recording Studio Landing Page Template

`SN-W03726` · entertainment · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

Pale cream ground with an almost empty hero, where large, faint service words run across the screen at angles in a light sans. Navigation is a thin row of small uppercase links beneath a plain wordmark, and a rounded portrait video sits in the corner. The palette is warm and light, with brown reserved for type and the green kept to the chat button.

**Mood:** light, airy, warm, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5ebe1` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#8c7563` | Secondary copy, captions |
| Border | `#f5ebe1` | Hairlines, dividers, outlines |
| Accent | `#3b2818` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#3b2818` · `#685141` · `#f5ebe1` · `#8c7563` · `#eae0d5` · `#25d366` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 18px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2rem]` (2rem), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-md`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-3 px-8 py-4 border text-xs uppercase tracking-widest transition-all duration-300 group backdrop-blur-sm border-[#3B2818] bg-[#3B2818] text-[#F5EBE1] hover:bg-[#685141] hover:border-[#685141] rounded-full hover:scale-105 active:scale-95 shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Team (`team`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5ebe1;
  --color-text: #111111;
  --color-muted: #8c7563;
  --color-border: #f5ebe1;
  --color-accent: #3b2818;
  --color-accent-2: #25d366;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 2rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5ebe1',
    ink: '#111111',
    muted: '#8c7563',
    line: '#f5ebe1',
    accent: '#3b2818',
    accent2: '#25d366',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the ground in pale cream (#f5ebe1) with dark brown type
- **Do:** Set navigation as small uppercase links beneath a thin wordmark
- **Do:** Use large, faint service words as a background texture behind the hero
- **Don't:** Don't add dark panels to the hero
- **Don't:** Don't set body copy in bright colours
- **Don't:** Don't use the green (#25d366) for anything but the chat button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
