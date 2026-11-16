# Design system — Wellness Booking Platform Landing Page Template

`SN-W02562` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A dark, booking-led salon page: a near-black olive ground (#1a1c19) with white serif headlines, and a search pill sitting directly on the dark field. The search button is deep green (#2d5a27), the only saturated colour on screen, and the fields are labelled in small uppercase grey-green. The stance is quiet and utilitarian, a booking tool that reads as a premium concierge rather than a marketplace.

**Mood:** dark, utilitarian, quiet, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1c19` | Page ground |
| Surface | `#242722` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#b0b0aa` | Secondary copy, captions |
| Border | `#2e332c` | Hairlines, dividers, outlines |
| Accent | `#2d5a27` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#2d5a27` · `#b0b0aa` · `#fdfbf7` · `#2e332c` · `#242722` · `#d4af37` · `#1a1c19` · `#6e726b` · `#000000` · `#3a3f36`.

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
  --color-background: #1a1c19;
  --color-surface: #242722;
  --color-text: #ffffff;
  --color-muted: #b0b0aa;
  --color-border: #2e332c;
  --color-accent: #2d5a27;
  --color-accent-2: #d4af37;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1c19',
    surface: '#242722',
    ink: '#ffffff',
    muted: '#b0b0aa',
    line: '#2e332c',
    accent: '#2d5a27',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use deep green (#2d5a27) for the search button and the navigation call to action only
- **Do:** Set headlines in the white serif, centred
- **Do:** Keep the search fields as small uppercase labels inside one rounded pill
- **Don't:** Don't use the gold (#d4af37) for hero buttons.
- **Don't:** Don't lighten the ground; the look is dark.
- **Don't:** Don't set field labels in bright colours; they are small and muted

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
