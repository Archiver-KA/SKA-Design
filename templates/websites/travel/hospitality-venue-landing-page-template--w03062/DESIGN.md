# Design system — Hospitality Venue Landing Page Template

`SN-W03062` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A split venue page: a dark charcoal panel (#282828) on the left holds a large italic serif headline in pale cream, and a white right half holds the image and menu. The menu is a list of large serif items with small arrow markers, which makes navigation feel like a restaurant card. The contrast between the dark panel and the white field gives the page its structure.

**Mood:** editorial, hospitable, bold-contrast, tactile

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#282828` | Cards, panels, raised areas |
| Text | `#282828` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#282828` | Hairlines, dividers, outlines |
| Accent | `#ee643a` | Primary action and highlights |
| Second accent | `#cbe1c8` | Supporting highlights |

Palette by frequency of use: `#282828` · `#f0ede6` · `#6b7280` · `#ee643a` · `#ffffff` · `#cbe1c8` · `#e5e7eb` · `#f4f2ee` · `#a3ac2f` · `#322d29`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Space Mono, Inter
- **Scale (largest breakpoint):** h1 112px · h2 72px · h3 36px · body 18px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-[100%]` (100%)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-4xl`, `max-w-5xl`
- **Section padding:** `py-12`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="w-full bg-[#282828] text-[#F0EDE6] py-4 mt-8 font-['Space_Mono'] text-xs uppercase tracking-widest hover:bg-[#EE643A] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Listings (`listings`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #282828;
  --color-text: #282828;
  --color-muted: #6b7280;
  --color-border: #282828;
  --color-accent: #ee643a;
  --color-accent-2: #cbe1c8;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#282828',
    ink: '#282828',
    muted: '#6b7280',
    line: '#282828',
    accent: '#ee643a',
    accent2: '#cbe1c8',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Use the charcoal panel (#282828) for the hero headline and menu column
- **Do:** Set the menu items in the serif at large size with small arrow markers
- **Do:** Keep the right half white so images and content read clearly
- **Don't:** Don't set the panel in a lighter tone than the charcoal
- **Don't:** Don't use the orange (#ee643a) for large areas; it is an accent
- **Don't:** Don't stack more than one heading size in the menu column

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
