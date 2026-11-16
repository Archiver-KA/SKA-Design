# Design system — Wellness Booking Landing Page Template

`SN-W02561` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A light, booking-led salon page: a warm cream ground (#fdfbf7) with a heavy dark headline and a deep forest-green (#2d5a27) button for the navigation and the search action. The hero is one search pill with service, location and date fields, so the page is a utility first. The stance is clean and efficient.

**Mood:** clean, efficient, utilitarian, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#2a241e` | Cards, panels, raised areas |
| Text | `#2a241e` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#f2efe9` | Hairlines, dividers, outlines |
| Accent | `#2d5a27` | Primary action and highlights |
| Second accent | `#ebe5da` | Supporting highlights |

Palette by frequency of use: `#2d5a27` · `#5d554a` · `#2a241e` · `#ebe5da` · `#ffffff` · `#c5a059` · `#f2efe9` · `#fdfbf7` · `#9ca3af` · `#23461f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium bg-[#2D5A27] hover:bg-[#23461F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D5A27] transition-all text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Booking form (`booking`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #2a241e;
  --color-text: #2a241e;
  --color-muted: #9ca3af;
  --color-border: #f2efe9;
  --color-accent: #2d5a27;
  --color-accent-2: #ebe5da;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#2a241e',
    ink: '#2a241e',
    muted: '#9ca3af',
    line: '#f2efe9',
    accent: '#2d5a27',
    accent2: '#ebe5da',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use deep green (#2d5a27) for the search button and the navigation call to action only
- **Do:** Set headlines in a heavy dark sans, centred
- **Do:** Keep the search fields inside one rounded pill with small uppercase labels
- **Don't:** Don't use the gold (#c5a059) for buttons.
- **Don't:** Don't add a second action colour to the search bar
- **Don't:** Don't set field labels in bright colours; they are small and muted

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
