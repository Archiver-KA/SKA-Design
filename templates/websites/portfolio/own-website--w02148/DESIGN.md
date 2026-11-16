# Design system — Own Website

`SN-W02148` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark funnel-systems page on near-black (#050505) where the headline is a large white serif, and three key words are set in pink italic (#ec4899) to mark the stages of a funnel. A soft pink glow sits behind the hero, and the nav is a dark rounded bar with a pill call to action. Muted grey sans body copy keeps the text calm against the serif display.

**Mood:** elegant, dark, editorial, warm glow, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#9ca3af` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec4899` · `#9ca3af` · `#6b7280` · `#f472b6` · `#d1d5db` · `#000000` · `#f9a8d4` · `#050505` · `#fbcfe8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Manrope
- **Loaded families:** Instrument Serif, Manrope, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_0_8px_rgba(236,72,153,0.6)]`
- **Content width:** `max-w-4xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-pink-50 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Process / steps (`how-it-works`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Feature grid (`features`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Newsletter signup (`newsletter`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #111111;
  --color-text: #9ca3af;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #ec4899;
  --color-accent-2: #eab308;
  --font-display: "Instrument Serif", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#111111',
    ink: '#9ca3af',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#ec4899',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in a white serif, with key words in pink italic (#ec4899).
- **Do:** Use the soft pink glow behind the hero headline only.
- **Do:** Keep body copy in muted grey sans (#9ca3af) for calm contrast with the serif.
- **Don't:** Don't set whole headlines in pink; only the keywords take the colour.
- **Don't:** Don't put a light background behind the hero; the first screen is dark.
- **Don't:** Don't place the glow behind body copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
