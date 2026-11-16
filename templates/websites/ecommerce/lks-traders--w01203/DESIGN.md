# Design system — LKS TRADERS 

`SN-W01203` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark luxury retail stance: a black field with a soft gold glow at the centre, a white headline whose second line is gold, and a solid gold button with dark text. A small spaced uppercase eyebrow sits above the headline, and the hero is centred with one call to action. Gold is the only colour, used for the emphasis line and the button.

**Mood:** luxurious, dark, centred, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#171717` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#171717` · `#000000` · `#737373` · `#a3a3a3` · `#050505` · `#262626` · `#404040` · `#020202`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_50px_rgba(212,175,55,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="px-6 py-3 bg-[#D4AF37] text-black text-xs font-medium uppercase tracking-widest hover:bg-yellow-500 transition-colors rounded-sm flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)
6. Modal / overlay (`modal-overlay`)
7. Sidebar (`sidebar`)
8. Sign-in form (`auth-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #171717;
  --color-accent: #d4af37;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#737373',
    line: '#171717',
    accent: '#d4af37',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in gold (#d4af37) and keep the first line white.
- **Do:** Use gold for the primary button, with dark text on it.
- **Do:** Centre the hero text with one call to action and a small uppercase eyebrow above it.
- **Don't:** Don't add a second brand colour; the page is black, white and gold.
- **Don't:** Don't use the coral (#f87171) accent.
- **Don't:** Don't set body copy in light grey on a light background; the copy sits on black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
