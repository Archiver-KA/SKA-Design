# Design system — WhatsApp AI Assistant Landing Page Template

`SN-W00831` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A near-black hero with a three-line Inter headline where the middle line is set in yellow (#ffd60a) and the rest is white and grey. The yellow is the single accent, used for the highlight phrase and the primary button, and a small pill badge sits above the headline. The page is bold and high-contrast on a dark ground.

**Mood:** bold, high-contrast, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#3f3f46` | Secondary copy, captions |
| Border | `#3f3f46` | Hairlines, dividers, outlines |
| Accent | `#ffd60a` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ffd60a` · `#000000` · `#9ca3af` · `#27272a` · `#3f3f46` · `#71717a` · `#d4d4d8` · `#18181b` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-5xl`, `max-w-6xl`
- **Section padding:** `py-16`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-[#FFD60A] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#EAB308] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Gallery / portfolio (`gallery-portfolio`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #3f3f46;
  --color-border: #3f3f46;
  --color-accent: #ffd60a;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#3f3f46',
    line: '#3f3f46',
    accent: '#ffd60a',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#ffd60a) for one highlight phrase and the primary button only
- **Do:** Keep the headline at 72px in Inter, with a white and grey two-tone split
- **Do:** Place a small pill badge above the headline for the status message
- **Don't:** Don't set body copy in yellow
- **Don't:** Don't use a light background for this layout
- **Don't:** Don't put the yellow on more than one button per screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
