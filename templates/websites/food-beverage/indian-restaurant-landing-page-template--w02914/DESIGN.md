# Design system — Indian Restaurant Landing Page Template

`SN-W02914` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A saturated red ground carries the whole hero: a black floating nav bar, a huge white condensed sans title 'DELHI 76' and a white uppercase subhead, with a photo of curry dishes in a rounded frame below. Red appears as the page ground and the order button, so the palette is two-tone, red and black, with white type. The stance is bold and confident, close to street-food signage.

**Mood:** bold, confident, two-tone, loud-but-clean, signage

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f4eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d01b1b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f7f4eb` · `#f3f4f6` · `#e5e7eb` · `#6b7280` · `#9ca3af` · `#4b5563` · `#111827` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** DM Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 176px · h2 48px · h3 30px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-0.5`

**Primary button**

```html
<a class="hidden sm:block rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white uppercase tracking-wide hover:bg-white/20 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Menu list (`menu-list`)
5. Booking form (`booking`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f7f4eb;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #000000;
  --color-accent: #d01b1b;
  --font-display: "Oswald", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f4eb',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#000000',
    accent: '#d01b1b',
  },
  fontFamily: { display: ['Oswald'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the red (#d01b1b) for the order button and the hero ground.
- **Do:** Set the title in a heavy condensed white sans, centred.
- **Do:** Keep the nav as a black floating bar with white labels.
- **Don't:** Don't use a light background under the hero; the page is red and black.
- **Don't:** Don't add a second accent colour; the page is red, black and white.
- **Don't:** Don't set the title in a serif; it is a heavy sans.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
