# Design system — Smiles By Bergen Dental Website

`SN-W02524` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A monochrome, calm dental landing page: the hero is near-black (#171717) with white type and no colour in the first screen, so the practice reads as a quiet studio rather than a bright clinic. The signature is an italic serif phrase inside a sans headline, paired with plain white pill buttons. The teal accent (#0891b2) from the tokens does not appear above the fold.

**Mood:** monochrome, refined, calm, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#0891b2` | Primary action and highlights |

Palette by frequency of use: `#0891b2` · `#ffffff` · `#e5e5e5` · `#171717` · `#525252` · `#fafafa` · `#f5f5f5` · `#737373` · `#0a0a0a` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`, `shadow-neutral-200/20`, `shadow-neutral-200/40`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Map / location (`map-location`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #0891b2;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#0891b2',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero monochrome: white type on the near-black ground (#171717)
- **Do:** Set the emphasised phrase of each headline in the italic display serif
- **Do:** Use white pill buttons with dark text for primary actions
- **Don't:** Don't add colour to the hero; hold the teal for later sections
- **Don't:** Don't set body copy in the serif; it is for headlines only
- **Don't:** Don't turn the stat strip into coloured badges; it is plain small text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
