# Design system — Lunar Rhythm Yoga & Meditation Template

`SN-W02648` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, light wellness page on an off-white ground, with a serif headline set in olive and fading into gold. Gold (#c9a96e) and sage tones are used for buttons and the headline gradient, which gives a calm, ritual-like feel. The large serif type does most of the work, with a thin sans-serif nav and small pill buttons. Motion and blur are present but kept subtle.

**Mood:** calm, earthy, soft, ritual, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a96e` | Primary action and highlights |
| Second accent | `#8ba7c7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c9a96e` · `#18181b` · `#a3b18a` · `#a1a1aa` · `#000000` · `#8ba7c7` · `#71717a` · `#f4f4f5` · `#1c1c22`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Newsreader
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-1.5`, `gap-2`

**Primary button**

```html
<a class="w-full bg-zinc-50 hover:bg-zinc-100 text-zinc-900 border border-zinc-200 uppercase tracking-widest text-xs py-4 rounded-full transition-colors mt-auto font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Services (`services`)
7. Marquee (`marquee`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #18181b;
  --color-muted: #52525b;
  --color-border: #ffffff;
  --color-accent: #c9a96e;
  --color-accent-2: #8ba7c7;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#18181b',
    muted: '#52525b',
    line: '#ffffff',
    accent: '#c9a96e',
    accent2: '#8ba7c7',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large serif with a gold-to-olive gradient on the second line.
- **Do:** Use gold (#c9a96e) for primary buttons and the headline gradient only.
- **Do:** Keep the page ground light and let the sage tone appear only in buttons.
- **Don't:** Don't set body copy in serif; the sans-serif is used for text.
- **Don't:** Don't use a dark background for sections.
- **Don't:** Don't add more than two accent tones beside the gold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
