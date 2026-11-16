# Design system — Luxury Home Remodeling Landing Page Template

`SN-W02088` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A remodeling page whose first screen is a pale grey-blue photo wash under a black navigation bar, with a black serif headline and the word 'Remodeling' picked out in gold [#fde047]. The gold also drives the primary call to action, with an outlined secondary button beside it. Type is large and centred, and the subline lists the services in plain words.

**Mood:** bold, trustworthy, direct, contrasting, commercial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#fde047` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#f3f4f6` · `#111827` · `#9ca3af` · `#6b7280` · `#1f2937` · `#030712` · `#d1d5db` · `#f8fafc` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Great Vibes, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-sm font-medium px-6 py-3 rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 animate-cta-attention hover:animate-none border bg-gray-100 hover:bg-white text-black border-gray-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Stats band (`stats`)
6. Process / steps (`how-it-works`)
7. Feature grid (`features`)
8. Call to action (`cta`)
9. Footer (`footer`)
10. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #111827;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #1f2937;
  --color-accent: #fde047;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#111827',
    ink: '#000000',
    muted: '#6b7280',
    line: '#1f2937',
    accent: '#fde047',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of each headline in the gold accent (#fde047).
- **Do:** Pair the gold primary button with an outlined secondary button of the same height.
- **Do:** Keep the nav as a black bar with white links and one filled call to action on the right.
- **Don't:** Don't put the gold accent on body copy; it marks headline words and buttons only.
- **Don't:** Don't add a glow to body copy; the soft glow belongs to the accent word.
- **Don't:** Don't build the first screen on a dark background; the hero reads light under the nav.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
