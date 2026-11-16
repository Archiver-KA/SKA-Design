# Design system — Reachbound.io

`SN-W04270` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black landing page where a large serif headline does most of the work, set in Instrument Serif at display size with the key phrase in rose (#fb7185) italic. A small uppercase kicker in the same rose sits above the title, and grey Inter subtext sits below it. The result is editorial and high contrast, with the rose kept for emphasis only.

**Mood:** editorial, dramatic, high contrast, serif

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#9ca3af` · `#0a0a0a` · `#fb7185` · `#881337` · `#6b7280` · `#000000` · `#d1d5db` · `#121212`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-md`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Schedule (`schedule-agenda`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Integrations (`integrations`)
7. Product grid (`product-grid`)
8. Booking form (`booking`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #fb7185;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#fb7185',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif at display size with one rose italic phrase
- **Do:** Use the rose (#fb7185) for the kicker, the emphasised phrase and the underline only
- **Do:** Keep body and subtext in Inter in a muted grey (#9ca3af)
- **Don't:** Don't set headlines in Inter or another sans-serif
- **Don't:** Don't use rose for large background areas
- **Don't:** Don't add a light background behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
