# Design system — VijuIT Digital Agency Landing Page Template

`SN-W01723` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, very bold agency page on an off-white ground [#fafafa] with oversized black uppercase headlines set tight across the full width. A soft orange-red glow [#eb3a14] sits behind the hero copy, and the only solid colour is the black primary pill. The type does the work; colour appears only as the glow and small status markers.

**Mood:** bold, loud, light, uppercase, raw

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#555555` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#eb3a14` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eb3a14` · `#000000` · `#f9fafb` · `#555555` · `#9ca3af` · `#d1d5db` · `#6b7280` · `#0f0f0f` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 60px · h3 30px · body 18px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-[1800px]`, `max-w-[1400px]`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-200 magnetic-btn shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. About (`about`)
6. Process / steps (`how-it-works`)
7. FAQ (`faq`)
8. Case studies (`case-studies`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #555555;
  --color-muted: #6b7280;
  --color-border: #000000;
  --color-accent: #eb3a14;
  --color-accent-2: #3b82f6;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#555555',
    muted: '#6b7280',
    line: '#000000',
    accent: '#eb3a14',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in heavy uppercase black sans, tight and full width
- **Do:** Use the orange-red (#eb3a14) only for the soft glow and status dots
- **Do:** Make primary buttons solid black pills with white text
- **Don't:** Don't use lowercase or title case for hero headlines
- **Don't:** Don't add orange to large fills or backgrounds
- **Don't:** Don't set headlines in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
