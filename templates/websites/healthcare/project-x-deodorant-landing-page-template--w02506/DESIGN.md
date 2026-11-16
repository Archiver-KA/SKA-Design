# Design system — Project X Deodorant Landing Page Template

`SN-W02506` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, photographic hero where a black product stands on a blue-grey studio backdrop, with the headline stepping from white to grey down the page. Gold is the only accent, used as thin outlines on the pill label and as text on the outlined buttons, and the product name is set vertically in gold capitals. The copy is short and the photograph does most of the persuading.

**Mood:** dark, premium, bold, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121212` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#121212` · `#525252` · `#737373` · `#f9fafb` · `#a3a3a3` · `#f5f5f5` · `#000000` · `#262626` · `#f1f1f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_0_15px_rgba(212,175,55,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="bg-gold-400 text-charcoal px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded hover:bg-white transition-all duration-300 hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Logo cloud (`logo-cloud`)
6. Listings (`listings`)
7. FAQ (`faq`)
8. Product grid (`product-grid`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #121212;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Oswald", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121212',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Oswald'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white, with each following line in a lighter grey
- **Do:** Use gold only for outlined labels and outlined buttons; keep solid buttons out of the hero
- **Do:** Let the product photograph fill the right half of the hero
- **Don't:** Don't set body copy in grey on the blue-grey backdrop; it disappears
- **Don't:** Don't use gold as a solid fill over large areas
- **Don't:** Don't place light section backgrounds directly under the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
