# Design system — PerformX | Digital Advertising 

`SN-W01665` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep indigo-navy hero with a centred white headline whose second clause fades to grey gradient, and a mint (#2bffb1) primary button beside a dark outlined secondary. Soft glow sits behind the type, and a dashboard-style panel starts below the fold. The headline is set in a bold serif-like face.

**Mood:** confident, nocturnal, gradient-led, premium, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0b33` | Page ground |
| Surface | `#475569` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2bffb1` | Primary action and highlights |
| Second accent | `#0d0b33` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2bffb1` · `#94a3b8` · `#64748b` · `#0d0b33` · `#cbd5e1` · `#ec4899` · `#475569` · `#334155` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, League Spartan
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(43,255,177,0.2)]`, `shadow-[0_0_15px_rgba(43,255,177,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center rounded-lg bg-[#2BFFB1] text-[#0D0B33] font-medium text-sm hover:bg-[#2BFFB1]/90 transition-all shadow-[0_0_20px_rgba(43,255,177,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Stats band (`stats`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d0b33;
  --color-surface: #475569;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #2bffb1;
  --color-accent-2: #0d0b33;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0b33',
    surface: '#475569',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#2bffb1',
    accent2: '#0d0b33',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the mint (#2bffb1) for the primary button and one highlight per section
- **Do:** Set the headline large in white, with the second clause in grey gradient text
- **Do:** Keep the glow soft behind the hero type
- **Don't:** Don't use the navy (#0d0b33) as a button colour; it is the ground
- **Don't:** Don't use the pink (#ec4899) accent in the hero
- **Don't:** Don't set mint body text on the navy background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
