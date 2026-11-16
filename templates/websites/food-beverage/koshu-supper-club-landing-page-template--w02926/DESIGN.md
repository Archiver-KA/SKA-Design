# Design system — Koshu Supper Club Landing Page Template

`SN-W02926` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, cinematic supper-club page built on near-black charcoal (#121212) with a gold accent (#c5a059) that picks out one italic phrase in each headline. Playfair Display carries large centred headlines at about 72px, set against Inter for body copy. The oxblood primary button (#9a3b3b) is the only saturated colour, so gold and red read as a deliberate pair.

**Mood:** moody, nostalgic, restrained, theatrical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121212` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |
| Second accent | `#9a3b3b` | Supporting highlights |

Palette by frequency of use: `#c5a059` · `#a3a3a3` · `#ffffff` · `#f5f5f0` · `#121212` · `#9a3b3b` · `#737373` · `#d4d4d4` · `#525252` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#C5A059] text-[#121212] px-10 py-4 rounded-sm text-sm font-semibold uppercase tracking-widest hover:bg-[#b08d4e] transition-colors w-full md:w-auto min-w-[200px] opacity-70 cursor-not-allowed">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Timeline (`timeline`)
6. Booking form (`booking`)
7. Team (`team`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #121212;
  --color-surface: #121212;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #c5a059;
  --color-accent-2: #9a3b3b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121212',
    surface: '#121212',
    ink: '#f5f5f5',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#c5a059',
    accent2: '#9a3b3b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display with one italic phrase in gold (#c5a059)
- **Do:** Use the oxblood (#9a3b3b) only for the primary booking button
- **Do:** Keep the page ground near-black (#121212) and sit photography behind a dark gradient
- **Don't:** Don't use a light background for content sections
- **Don't:** Don't add bright accent colours beyond gold and oxblood
- **Don't:** Don't set body copy in the serif; Inter is the text face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
