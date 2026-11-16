# Design system — Luxury Dental Spa Landing Page Template

`SN-W02443` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark plum-black page with warm gold accents and a serif display headline that mixes a roman line with an italic one. Feature cards are frosted, translucent panels floating over a soft amber glow, so colour lives in the background and the cards rather than in the type. Gold is kept for the active nav item and small labels, and white pill buttons carry the calls to action.

**Mood:** luxurious, glassy, warm, soft, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1f0b18` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#fdf2f8` | Headings and primary copy |
| Border | `#fffbeb` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#f59e0b` · `#ffffff` · `#fbbf24` · `#fde68a` · `#1f0b18` · `#fcd34d` · `#fef3c7` · `#d97706` · `#0f172a` · `#fffbeb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Outfit
- **Loaded families:** Outfit, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-amber-900/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2.5 text-xs font-medium hover:text-white rounded-full transition-colors hover:bg-white/5 text-amber-100/80">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Map / location (`map-location`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1f0b18;
  --color-surface: #0f172a;
  --color-text: #fdf2f8;
  --color-border: #fffbeb;
  --color-accent: #f59e0b;
  --color-accent-2: #ec4899;
  --font-display: "Playfair Display", serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1f0b18',
    surface: '#0f172a',
    ink: '#fdf2f8',
    line: '#fffbeb',
    accent: '#f59e0b',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display, with one italic phrase per headline
- **Do:** Use gold (#f59e0b) only for the active nav item and small labels
- **Do:** Build feature cards as blurred translucent panels with rounded-2xl corners
- **Don't:** Don't put gold on large fills; it works as an accent only
- **Don't:** Don't use hard-edged boxes; keep the corners rounded
- **Don't:** Don't make the calls to action gold; the primary buttons are white pills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
