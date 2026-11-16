# Design system — Yoga Membership Landing Page Template

`SN-W02695` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Wellness membership page with a near-white hero ground. The headline is set in a classical serif, with the first line in olive-sage (#a3b18a) and the second line in a gold-to-sage gradient, and the gold (#c9a96e) also appears on the gradient CTA. The design is soft and natural, with colour carried by the headline and button gradients rather than by fills or photography.

**Mood:** soft, natural, premium, tranquil

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a96e` | Primary action and highlights |
| Second accent | `#a3b18a` | Supporting highlights |

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
5. Video / media (`video-media`)
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
  --color-accent-2: #a3b18a;
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
    accent2: '#a3b18a',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in a classical serif with the first line in olive-sage (#a3b18a) and the second in gold (#c9a96e).
- **Do:** Use the gold-to-sage gradient only on the primary button and the second headline line.
- **Do:** Keep the hero ground near-white (#ffffff) so the headline colours stay readable.
- **Don't:** Don't set the hero ground in sage green; it is near-white.
- **Don't:** Don't set headlines in Geist sans; they are a serif.
- **Don't:** Don't add a blue accent; the palette here is sage, gold and white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
