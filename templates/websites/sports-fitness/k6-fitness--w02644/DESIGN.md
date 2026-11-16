# Design system — k6 fitness

`SN-W02644` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bold, dark sports-club page built on near-black (#0a0a0a) and white type set in heavy uppercase Inter. Red (#d90700) is the single accent: it marks one line of the headline and the pill-shaped primary button. Headlines are stacked and very large, so the hero reads as a poster. Depth comes from dark surfaces rather than colour.

**Mood:** bold, high-contrast, blunt, athletic, poster-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d90700` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d90700` · `#171717` · `#0a0a0a` · `#000000` · `#262626` · `#b00600` · `#333333` · `#444444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex gap-2 transition hover:bg-[#b00600] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-xs font-medium text-white font-geist bg-[#D90700] border-[#D90700] border rounded-full py-2 px-4 items-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. About (`about`)
5. Services (`services`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #d90700;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#d90700',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase Inter, with one line in #d90700.
- **Do:** Use #d90700 only for the primary button and one headline line per section.
- **Do:** Keep the hero split: headline on the left, copy and two buttons on the right.
- **Don't:** Don't use red for body text or large fills; it is for emphasis only.
- **Don't:** Don't add light backgrounds; the page stays on #0a0a0a and #171717.
- **Don't:** Don't set headlines in a light weight or in mixed case.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
