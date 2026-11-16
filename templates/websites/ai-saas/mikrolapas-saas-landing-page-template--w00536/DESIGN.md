# Design system — Mikrolapas SaaS Landing Page Template

`SN-W00536` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `lv`

## Direction

The hero is full-bleed, with a warm orange (#ff6a1a) image filling the page and a heavy black headline sitting on top. The orange is the loudest colour in the design, and the type is set in black Inter at very large size. The secondary action is a thin black outlined button.

**Mood:** loud, warm, bold, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111213` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6a1a` | Primary action and highlights |
| Second accent | `#143a45` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#ff6a1a` · `#111213` · `#191a1b` · `#fee2e2` · `#f4f2ed` · `#e9540d` · `#a5f3fc` · `#f0ede5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 16px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[90rem]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-5`, `gap-3`

**Primary button**

```html
<a class="hidden rounded-full bg-[#ff6a1a] px-4 py-2.5 text-xs font-medium text-black transition-all duration-200 hover:bg-[#f4f2ed] sm:block font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Services (`services`)
6. Feature grid (`features`)
7. Process / steps (`how-it-works`)
8. Case studies (`case-studies`)
9. Testimonials (`testimonials`)
10. FAQ (`faq`)
11. Contact form (`contact-form`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111213;
  --color-surface: #000000;
  --color-text: #000000;
  --color-border: #ffffff;
  --color-accent: #ff6a1a;
  --color-accent-2: #143a45;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111213',
    surface: '#000000',
    ink: '#000000',
    line: '#ffffff',
    accent: '#ff6a1a',
    accent2: '#143a45',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the orange (#ff6a1a) as a full-bleed hero image, not a flat fill
- **Do:** Set hero headlines in black Inter at display size
- **Do:** Use the orange only for the hero and the primary action
- **Don't:** Don't put white text on the orange hero; the contrast is black on orange
- **Don't:** Don't use the orange for body copy or long passages
- **Don't:** Don't pad the hero with extra colour; the image carries the impact

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
