# Design system — B2B Growth Agency Landing Page Template

`SN-W01447` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white ground ([#ffffff]) with near-black headline text ([#171717]) and an indigo ([#4f46e5]) gradient on the highlighted phrase. The headline is a large serif with tight tracking, set over three centred lines under a small pill eyebrow. A dark video panel below frames the offer, so the hero works as a high-contrast trust block.

**Mood:** confident, serif-led, high-contrast, light, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#4f46e5` · `#e5e5e5` · `#737373` · `#6366f1` · `#262626` · `#eef2ff` · `#a3a3a3` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, Geist, Roboto, Poppins
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="md:py-4 hover:bg-indigo-500 transition-colors shadow-indigo-900/50 font-bold text-white bg-indigo-600 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Team (`team`)
6. Process / steps (`how-it-works`)
7. Video / media (`video-media`)
8. Integrations (`integrations`)
9. About (`about`)
10. Newsletter signup (`newsletter`)
11. FAQ (`faq`)
12. Booking form (`booking`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #4f46e5;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#4f46e5',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Instrument Serif at large size with tight tracking
- **Do:** Keep the hero ground white and the eyebrow pill small and tinted
- **Do:** Use the indigo gradient only on the highlighted phrase
- **Don't:** Don't set the headline in a bold sans
- **Don't:** Don't use the gradient on body copy
- **Don't:** Don't place the dark video panel above the offer headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
