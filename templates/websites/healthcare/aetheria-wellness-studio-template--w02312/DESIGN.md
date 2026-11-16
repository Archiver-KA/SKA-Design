# Design system — Aetheria Wellness Studio Template

`SN-W02312` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A muted sage page with a serif headline in deep green-black, set in three short lines above a pill button in dark green. The hero ground is a soft grey-green wash, and the navigation is small and light. The palette is one green family plus cream, so the mood is calm and natural.

**Mood:** calm, natural, soft, meditative, muted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f5f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2f3e35` | Headings and primary copy |
| Muted text | `#8a9a8b` | Secondary copy, captions |
| Border | `#2f3e35` | Hairlines, dividers, outlines |
| Accent | `#caa24c` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#2f3e35` · `#ffffff` · `#f7f5f0` · `#8a9a8b` · `#caa24c` · `#7f8f80` · `#ef4444` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Montserrat, Geist, Roboto, Poppins, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 36px · body 16px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-[#2F3E35]/5`, `shadow-[#2F3E35]/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 rounded-full bg-[#8A9A8B] px-6 py-3 text-sm font-medium text-[#F7F5F0] shadow-sm shadow-[#2F3E35]/20 hover:bg-[#7f8f80] focus:outline-none focus:ring-2 focus:ring-[#8A9A8B]/50 focus:ring-offset-2 focus:ring-offset-[#2F3E35]/0 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f7f5f0;
  --color-surface: #ffffff;
  --color-text: #2f3e35;
  --color-muted: #8a9a8b;
  --color-border: #2f3e35;
  --color-accent: #caa24c;
  --color-accent-2: #ef4444;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f5f0',
    surface: '#ffffff',
    ink: '#2f3e35',
    muted: '#8a9a8b',
    line: '#2f3e35',
    accent: '#caa24c',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif in dark green (#2f3e35)
- **Do:** Keep the palette to one green family plus cream
- **Do:** Use rounded pill buttons, one filled and one outlined
- **Don't:** Don't add bright red or saturated gold to the hero.
- **Don't:** Don't set the headline in sans
- **Don't:** Don't place text over a busy photograph without a wash

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
