# Design system — SNG Digi Services Agency - Shahid Ali

`SN-W01696` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a white sans headline, a grey middle line for contrast, and a row of small stat chips under the copy. The primary action is a white button and the secondary is a dark outlined button, with a red slash mark and red tag text as the only colour. The look is direct and stat-led, with proof given as numbers rather than imagery above the fold.

**Mood:** direct, stark, dark, proof-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#e5e5e5` · `#525252` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#fafafa` · `#404040` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3.5 rounded font-medium text-sm shadow-sm hover:bg-[#20bd5a] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. About (`about`)
5. Services (`services`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Call to action (`cta`)
11. Contact form (`contact-form`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #dc2626;
  --color-accent-2: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#dc2626',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy white sans with the middle line in grey (#737373).
- **Do:** Show proof as small dark stat chips with a thin border under the copy.
- **Do:** Use the red (#dc2626) only for the tag line and the logo marker.
- **Don't:** Don't add the green (#25d366) to the hero.
- **Don't:** Don't add imagery to the hero; the design leads with numbers.
- **Don't:** Don't put a second solid button beside the white primary button.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
