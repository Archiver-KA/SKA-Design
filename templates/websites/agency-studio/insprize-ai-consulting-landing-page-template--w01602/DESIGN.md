# Design system — INSPRIZE AI Consulting Landing Page Template

`SN-W01602` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A stark black page with a condensed, all-caps display face (Bebas Neue) set very large in white. A single hot magenta (#ff00aa) marks the key word in the headline and the top-right CTA, and a faint square grid sits behind the hero for texture. A photo card with a small floating label adds a product-demo feel. The look is loud and high-contrast, and the magenta does all the emphasis work.

**Mood:** loud, high-contrast, tech, condensed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ff00aa` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#000000` · `#27272a` · `#a1a1aa` · `#18181b` · `#3f3f46` · `#52525b` · `#d4d4d8` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Bebas Neue
- **Loaded families:** Bebas Neue, Lato, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 14px · body 12px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,0,0,0.5)]`, `shadow-2xl`, `shadow-brand-magenta/5`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 px-6 py-2 bg-brand-magenta hover:bg-white hover:text-black text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 clip-path-slant">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Logo cloud (`logo-cloud`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Case studies (`case-studies`)
8. About (`about`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #ff00aa;
  --color-accent-2: #22c55e;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Bebas Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#ff00aa',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Bebas Neue'] },
} }
```

## Do and don't

- **Do:** Set headlines in Bebas Neue at large size, white, with one magenta word
- **Do:** Use magenta (#ff00aa) for one highlight word and the primary CTA only
- **Do:** Keep the background black (#000000) with the faint grid as the only texture
- **Don't:** Don't set long paragraphs in the condensed display face; body copy needs a readable sans
- **Don't:** Don't use more than one magenta highlight per screen
- **Don't:** Don't add gradients to the headline; the fill is flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
