# Design system — Dark Agency Portfolio Landing Page Template

`SN-W01929` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a two-tone headline: white on the first line and an orange gradient (#f97316) on the second, set in Inter at about 96px. Buttons pair a white pill with a dark rust-brown pill, and a faint orange glow sits behind the hero. The palette stays warm and dark, so the orange does the work of pointing at the headline and the first action.

**Mood:** bold, warm, dark, agency, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#7c2d12` · `#9a3412` · `#f97316` · `#fb923c` · `#fdba74` · `#000000` · `#c2410c` · `#fed7aa` · `#ea580c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-1`, `gap-12`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-orange-200 transition-all flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
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
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line with the orange gradient (#f97316) and the first in white
- **Do:** Pair a white primary pill with a dark rust secondary pill (#7c2d12)
- **Do:** Keep the hero glow soft and behind the headline, not on the buttons
- **Don't:** Don't use a light page background; the template is dark throughout
- **Don't:** Don't put the orange on body text
- **Don't:** Don't add a third button colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
