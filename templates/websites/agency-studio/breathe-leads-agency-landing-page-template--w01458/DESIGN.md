# Design system — Breathe Leads Agency Landing Page Template

`SN-W01458` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground ([#0a0a0a]) with a coral-pink italic ([#fb7185]) on the bracketed key-result phrase and a serif headline set in white. A framed video block sits below the headline, above a plain nav bar. Colour is limited to the one highlight phrase, and the layout is centred.

**Mood:** direct, dark, serif-led, template-like, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#9ca3af` · `#000000` · `#fb7185` · `#0a0a0a` · `#881337` · `#6b7280` · `#d1d5db` · `#e11d48`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Integrations (`integrations`)
7. Testimonials (`testimonials`)
8. Team (`team`)
9. Newsletter signup (`newsletter`)
10. FAQ (`faq`)
11. Booking form (`booking`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
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
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb7185',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use coral (#fb7185) for the italic highlight phrase only
- **Do:** Set headlines in a serif at large size, centred
- **Do:** Frame the process video in a rounded dark block below the headline
- **Don't:** Don't leave placeholder brackets in production copy
- **Don't:** Don't use coral for buttons
- **Don't:** Don't use a light ground for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
