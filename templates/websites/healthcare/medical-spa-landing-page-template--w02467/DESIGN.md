# Design system — Medical Spa Landing Page Template

`SN-W02467` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A near-white hero with a dark charcoal serif headline, an italic grey second line, and a gold pill booking button. The patient-results photo sits in a soft grey panel, and a dark strip runs across the top. Gold appears only on the booking button and a small outline pill, so it is the single warm note on an otherwise calm page.

**Mood:** polished, calm, premium, clean, warm

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

- **Do:** Use gold (#e3c15e) for the booking button only
- **Do:** Set the headline in Playfair Display, with a grey italic second line
- **Do:** Frame the patient-results photo as a tall rounded panel
- **Don't:** Don't fill the hero with gold
- **Don't:** Don't colour the links in the dark top strip
- **Don't:** Don't set the italic line in a bold weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
