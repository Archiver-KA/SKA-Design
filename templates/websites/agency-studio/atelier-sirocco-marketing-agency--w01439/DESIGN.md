# Design system — Atelier Sirocco Marketing Agency 

`SN-W01439` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `nl`

## Direction

A warm cream ground ([#f5efe6]) with dark espresso text ([#2c2218]) and a terracotta ([#b85c38]) primary button. The headline is a large, airy sans in sentence case, set left with generous margin and a soft warmth behind the copy. The palette is earthy and calm, and the type carries the premium tone.

**Mood:** warm, calm, editorial, earthy, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5efe6` | Page ground |
| Text | `#2c2218` | Headings and primary copy |
| Muted text | `#f5efe6` | Secondary copy, captions |
| Border | `#f5efe6` | Hairlines, dividers, outlines |
| Accent | `#b85c38` | Primary action and highlights |

Palette by frequency of use: `#2c2218` · `#b85c38` · `#f5efe6` · `#d4916b` · `#e8ddd0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-12`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="text-xs uppercase tracking-widest font-medium bg-[#2C2218] text-[#F5EFE6] px-6 py-3 hover:bg-[#B85C38] transition-colors duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5efe6;
  --color-text: #2c2218;
  --color-muted: #f5efe6;
  --color-border: #f5efe6;
  --color-accent: #b85c38;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5efe6',
    ink: '#2c2218',
    muted: '#f5efe6',
    line: '#f5efe6',
    accent: '#b85c38',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use terracotta (#b85c38) for the primary button only
- **Do:** Keep the ground at #f5efe6 with espresso (#2c2218) text
- **Do:** Set headlines in DM Sans at large size with a generous left margin
- **Don't:** Don't use a dark page background, the hero is light cream
- **Don't:** Don't use pure black for text, the warm brown is the text colour
- **Don't:** Don't put more than one terracotta button in a view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
