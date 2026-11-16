# Design system — Finance & AI Portfolio Landing Page Template

`SN-W02014` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground with a centred stack: a small tracked label between thin rules, a huge metallic silver serif headline in capitals, and an italic serif line set over it. The italic phrase collides with the capitals and is hard to read, so the effect is closer to ornament than message. Body copy is light grey sans, and one outlined button with an underline leads to the portfolio.

**Mood:** cinematic, metallic, dark, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020204` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e5e5e5` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#020204` · `#171717` · `#000000` · `#e5e5e5` · `#262626` · `#d4d4d4` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Inter
- **Loaded families:** Cinzel, Inter, Playfair Display
- **Scale (largest breakpoint):** h2 72px · h3 24px · body 14px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]`, `shadow-2xl`, `shadow-[0_0_40px_-10px_rgba(125,211,252,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-[1920px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="w-full bg-white text-black font-medium py-4 mt-4 hover:bg-accent-100 transition-colors uppercase tracking-editorial text-xs rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(125,211,252,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Timeline (`timeline`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020204;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #e5e5e5;
  --color-accent-2: #22c55e;
  --font-display: "Cinzel", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020204',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#e5e5e5',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif in silver or white gradient capitals
- **Do:** Center the stack and use small tracked labels with thin rules above the headline
- **Do:** Keep body copy in light grey Inter at small size, centred
- **Don't:** Don't place italic subheadings over the capitals; they collide with them
- **Don't:** Don't use bright colour on the black ground; the palette is grey and white
- **Don't:** Don't add more than one outlined button to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
