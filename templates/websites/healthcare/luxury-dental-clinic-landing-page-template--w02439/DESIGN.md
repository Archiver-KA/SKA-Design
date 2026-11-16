# Design system — Luxury Dental Clinic Landing Page Template

`SN-W02439` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pt-br`

## Direction

The dental concierge hero is black (#020202) with a large white serif headline and one italic gold phrase (#d4af37) for emphasis. The primary button is solid white, with a plain text link beside it, so gold stays in the headline and labels. A portrait in orange-tinted glasses sits in a rounded panel on the right, with a floating dark concierge card below. The result is exclusive and editorial.

**Mood:** exclusive, editorial, dark, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e5e5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4af37` · `#000000` · `#020202` · `#050505` · `#080808` · `#e5e5e5` · `#333333` · `#9ca3af` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel Decorative
- **Body:** Manrope
- **Loaded families:** Cinzel Decorative, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 10px
- **Weights in use:** light, bold, semibold
- **Letter spacing:** `tracking-[0.2em]`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)]`, `shadow-[#D4AF37]/5`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex h-9 items-center justify-center border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] transition-all duration-500 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Timeline (`timeline`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020202;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #22c55e;
  --font-display: "Cinzel Decorative", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#e5e5e5',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Cinzel Decorative'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in white serif with one italic gold phrase (#d4af37)
- **Do:** Use a solid white pill for the primary action and a plain text link for the secondary
- **Do:** Place a portrait in a rounded panel beside the headline, with a floating dark card below
- **Don't:** Don't colour the primary button gold here; it is white
- **Don't:** Don't use green for the live status.
- **Don't:** Don't set body copy in gold; keep it in grey-white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
