# Design system — Portfolio - E.J.R.B

`SN-W02166` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Soft and airy: a warm grey ground (#efece9) with deep green-black type (#192524) and one mint (#d1ebdb) pill for the secondary action. Plus Jakarta Sans is set large and tight at the top, under a floating pill navigation bar with a faint green glow in the corner. Colour stays muted; the mint pill is the only place the palette lifts.

**Mood:** soft, airy, modern, warm, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#efece9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#192524` | Headings and primary copy |
| Muted text | `#3c5759` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d1ebdb` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#d1ebdb` · `#3c5759` · `#efece9` · `#192524` · `#15201f` · `#d0d5ce` · `#959d90` · `#111918`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-black/5`, `shadow-white/5`
- **Content width:** `max-w-[1200px]`, `max-w-[1000px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="interactive px-8 py-3.5 bg-[#D1EBDB] dark:bg-[#3C5759]/30 dark:hover:bg-[#3C5759]/50 text-[#192524] dark:text-[#EFECE9] rounded-full font-medium hover:bg-[#192524] hover:text-[#D1EBDB] transition-all text-sm text-center w-full sm:w-auto flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Marquee (`marquee`)
8. Feature grid (`features`)
9. Contact form (`contact-form`)
10. Footer (`footer`)
11. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #efece9;
  --color-surface: #ffffff;
  --color-text: #192524;
  --color-muted: #3c5759;
  --color-border: #ffffff;
  --color-accent: #d1ebdb;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#efece9',
    surface: '#ffffff',
    ink: '#192524',
    muted: '#3c5759',
    line: '#ffffff',
    accent: '#d1ebdb',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set all text in Plus Jakarta Sans, with large headlines at tight tracking
- **Do:** Reserve the mint (#d1ebdb) for one secondary button per view
- **Do:** Keep buttons and navigation as fully rounded pills
- **Don't:** Don't use pure black for text; keep it at deep green-black (#192524)
- **Don't:** Don't add saturated colour beyond the mint
- **Don't:** Don't use square corners on buttons or cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
