# Design system — Stella Boost Media

`SN-W00737` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, editorial agency hero: a near-black panel with a serif italic headline in a coral-to-orange gradient, 'Qualified Appointments on Your Calendar', followed by a white serif line, 'or You Don't Pay.', over a thin coral rule. Coral is the single accent and carries the headline, while a tiny outlined tag and a small white pill button keep the chrome minimal. The serif gives the page an editorial voice.

**Mood:** editorial, warm, dark, serif-led, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#9ca3af` · `#881337` · `#000000` · `#fb7185` · `#0a0a0a` · `#d1d5db` · `#6b7280` · `#e11d48`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Logo cloud (`logo-cloud`)
5. Stats band (`stats`)
6. Listings (`listings`)
7. Process / steps (`how-it-works`)
8. Newsletter signup (`newsletter`)
9. FAQ (`faq`)
10. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #f43f5e;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#f43f5e',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the lead headline in a serif italic with a coral-to-orange gradient.
- **Do:** Follow it with a white serif line and a thin coral rule beneath.
- **Do:** Keep the nav button white and small on the dark panel.
- **Don't:** Don't use coral for body copy; body text is grey.
- **Don't:** Don't use a solid coral button in the hero; the headline carries the colour.
- **Don't:** Don't set the headline in a sans; the serif italic is the identity.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
