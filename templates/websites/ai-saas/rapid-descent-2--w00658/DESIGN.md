# Design system — rapid-descent-2-

`SN-W00658` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bold, sporty workshop page built on a full-bleed, blue-tinted photograph under a dark blue overlay. The hero uses a heavy, condensed uppercase sans in white, with the key word set in lime (#d4ff33) as the single high-contrast accent. Lime also marks the primary button and the logo's second word, so the colour reads as a signal for action rather than decoration.

**Mood:** bold, sporty, industrial, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#eff6ff` | Cards, panels, raised areas |
| Text | `#244a70` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#d4ff33` | Primary action and highlights |
| Second accent | `#d4ff33` | Supporting highlights |

Palette by frequency of use: `#305f8e` · `#ffffff` · `#d4ff33` · `#1e3a5c` · `#dbeafe` · `#e5e5e5` · `#244a70` · `#eff6ff` · `#fafafa` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Bebas Neue, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-0.5`

**Primary button**

```html
<a class="w-full py-4 bg-[#305F8E] text-white font-semibold rounded-lg hover:bg-[#244a70] transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 text-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Pricing (`pricing`)
5. About (`about`)
6. Testimonials (`testimonials`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #eff6ff;
  --color-text: #244a70;
  --color-muted: #6b7280;
  --color-border: #e5e5e5;
  --color-accent: #d4ff33;
  --color-accent-2: #d4ff33;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#eff6ff',
    ink: '#244a70',
    muted: '#6b7280',
    line: '#e5e5e5',
    accent: '#d4ff33',
    accent2: '#d4ff33',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#d4ff33) only for the primary button and one highlight word per section
- **Do:** Set headlines in a heavy uppercase sans, stacked on separate lines
- **Do:** Place white type over the blue-tinted photograph and keep the overlay dark enough to read
- **Don't:** Don't use lime for body text or large fills; on white it loses contrast
- **Don't:** Don't drop the blue overlay on hero photos; the raw photo loses the palette
- **Don't:** Don't introduce a second display face; the hero uses one heavy sans throughout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
