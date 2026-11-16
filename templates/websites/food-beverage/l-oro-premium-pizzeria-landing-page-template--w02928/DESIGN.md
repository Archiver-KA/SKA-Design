# Design system — L'ORO Premium Pizzeria Landing Page Template

`SN-W02928` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Full-bleed food photography sits under a dark overlay, and a large Cormorant Garamond headline in white carries the page. One italic word per headline is set in gold (#d4af37), which is the only colour in the frame. The page reads as a dark, gold-accented restaurant hero.

**Mood:** premium, editorial, warm, dramatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#090c0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#2a332d` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#a8b0aa` · `#090c0a` · `#2a332d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-screen-2xl`, `max-w-screen-xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-block text-xs uppercase tracking-widest border border-[#D4AF37]/30 px-6 py-2.5 rounded-full hover:bg-[#D4AF37] hover:text-[#090c0a] transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Timeline (`timeline`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #090c0a;
  --color-text: #ffffff;
  --color-muted: #2a332d;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#090c0a',
    ink: '#ffffff',
    muted: '#2a332d',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at very large size with one gold (#d4af37) italic word
- **Do:** Place food photography full-bleed and darken it with a gradient before any text
- **Do:** Keep the nav in small uppercase sans with a single outlined booking button
- **Don't:** Don't use gold for body text or large areas; it is a single highlight
- **Don't:** Don't put the headline over a bright part of the photo without the overlay
- **Don't:** Don't mix in other accent colours

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
