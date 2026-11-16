# Design system — Medispa & Wellness Landing Page Template

`SN-W02476` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, photograph-led hero where a warm near-black ground sits behind large white serif type, and the second line is set in cream italic. A tan pill button is the primary action beside an outline phone button, and the intro sits beside a thin vertical rule. The page reads as dark and luxurious.

**Mood:** dark, luxurious, calm, editorial, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#faf9f6` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#c4a484` | Primary action and highlights |

Palette by frequency of use: `#c4a484` · `#ffffff` · `#1c1917` · `#faf9f6` · `#78716c` · `#e7e5e4` · `#57534e` · `#f5f5f4` · `#a8a29e` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 18px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-[#C4A484] text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#b09070] transition-all shadow-md active:scale-95 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #faf9f6;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #c4a484;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#faf9f6',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#c4a484',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the tan (#c4a484) for the primary button and the thin intro rule
- **Do:** Set the headline in Playfair Display, with the second line in cream italic
- **Do:** Keep the intro on the dark ground beside a thin vertical rule
- **Don't:** Don't set the page on a light background; the hero is dark
- **Don't:** Don't use the tan for body text on the dark ground
- **Don't:** Don't add bright accent colours

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
