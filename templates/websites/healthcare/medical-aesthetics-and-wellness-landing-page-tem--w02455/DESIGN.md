# Design system — Medical Aesthetics & Wellness Landing Page Template

`SN-W02455` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A white hero with a gold pill button, a dark charcoal serif headline and a grey italic second line. A soft blue-grey gradient runs down the right side behind a tall photo panel, and a dark strip sits above the navigation. Gold is the single warm accent and is limited to the booking button.

**Mood:** polished, clean, premium, warm, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#e3c15e` | Primary action and highlights |
| Second accent | `#d1dde8` | Supporting highlights |

Palette by frequency of use: `#e3c15e` · `#ffffff` · `#1c1917` · `#57534e` · `#78716c` · `#f5f5f4` · `#e7e5e4` · `#d1dde8` · `#fafaf9` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[320px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-[#E3C15E] text-white hover:bg-[#d4b04c] text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Modal / overlay (`modal-overlay`)
4. Hero (`hero`)
5. Awards / press (`awards-press`)
6. Team (`team`)
7. Services (`services`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #e3c15e;
  --color-accent-2: #d1dde8;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#e3c15e',
    accent2: '#d1dde8',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use gold (#e3c15e) for the booking button and nothing else in the hero
- **Do:** Set the headline in Playfair Display, with the second line in grey italic
- **Do:** Keep the photo panel in a tall rounded frame on the right
- **Don't:** Don't fill large areas with gold
- **Don't:** Don't set the grey italic line in a heavy weight
- **Don't:** Don't use the dark top strip as a brand colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
