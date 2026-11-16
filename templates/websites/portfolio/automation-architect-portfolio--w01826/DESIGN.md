# Design system — Automation Architect Portfolio

`SN-W01826` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Clean and tech-forward on an off-white ground (#fcfbf9): a large grotesque headline in black, its second phrase dropped to light grey, and a short grey intro with a small uppercase label above it. Green (#10b981) appears only as a status dot and a soft glow at the top left. The overall look is minimal, precise and calm.

**Mood:** clean, precise, tech-forward, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#10b981` · `#e5e5e5` · `#525252` · `#ffffff` · `#737373` · `#a3a3a3` · `#fcfbf9` · `#171717` · `#262626` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h2 48px · h3 36px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-emerald-500/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="magnetic inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest bg-neutral-900 text-cream px-6 py-3 rounded-full hover:bg-emerald-500 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Bento grid (`bento-grid`)
5. Code / terminal (`code-terminal`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fcfbf9;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #10b981;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf9',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#10b981',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in black sans with the second phrase in light grey
- **Do:** Use the green (#10b981) only for the status dot
- **Do:** Keep the intro short, grey and left-aligned
- **Don't:** Don't add more than one accent colour to the hero
- **Don't:** Don't use a dark ground for the hero
- **Don't:** Don't centre the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
