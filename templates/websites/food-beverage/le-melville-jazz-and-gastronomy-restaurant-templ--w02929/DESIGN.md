# Design system — Le Melville Jazz & Gastronomy Restaurant Template

`SN-W02929` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A dark, jazz-club page on near-black (#050505) with a deep green (#061208) header band. The hero is a full-width cocktail photograph with a white serif quotation floating over it in italics. The red letter in the wordmark (#dc2626) is the only saturated colour, so the page relies on photography and a serif voice rather than a palette.

**Mood:** nocturnal, sophisticated, moody, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#061208` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#d4d4d4` · `#061208` · `#000000` · `#050505` · `#0f2e14` · `#eab308` · `#dc2626` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 48px · body 18px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-[1200px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-normal text-white border border-white/20 rounded hover:bg-white/5 hover:border-white/40 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Feature grid (`features`)
5. Services (`services`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #061208;
  --color-text: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #dc2626;
  --font-display: "a serif face", serif;
  --font-body: "system sans-serif", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#061208',
    ink: '#d4d4d4',
    line: '#ffffff',
    accent: '#dc2626',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['a serif face'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the hero quotation in an italic serif in off-white over a dark photo
- **Do:** Keep the header in deep green (#061208) with small tracked uppercase links
- **Do:** Use the red (#dc2626) only for the wordmark accent and alerts
- **Don't:** Don't add bright yellow or other accents.
- **Don't:** Don't place body text over the photo without a dark overlay
- **Don't:** Don't use a light page background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
