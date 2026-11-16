# Design system — Vehicle Marketplace Landing Page Template

`SN-W01338` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en-GB`

## Direction

A dark, high-energy classifieds hero on near-black (#171717). The first headline line is white heavy sans-serif, and the second line 'Everything You Need' runs a red-to-orange gradient, which is the page's main colour move. A white search bar with a solid red button is the one clear action, so red does both the emphasis and the call to action.

**Mood:** urgent, energetic, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#dc2626` · `#171717` · `#ffffff` · `#525252` · `#f5f5f5` · `#fafafa` · `#737373` · `#000000` · `#e5e5e5` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-all btn-press">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Modal / overlay (`modal-overlay`)
4. Hero (`hero`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Feature grid (`features`)
7. Listings (`listings`)
8. Articles (`blog-articles`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero near-black (#171717) with white heavy headline type
- **Do:** Use red (#dc2626) for the search button and the highlighted headline phrase
- **Do:** Set the search bar as one white block with three fields and a red action
- **Don't:** Don't set dark red text on dark grounds; it loses contrast
- **Don't:** Don't add more gradient phrases beyond the second headline line
- **Don't:** Don't put red text on the light search fields; red is for the button and the eyebrow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
