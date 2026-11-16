# Design system — CZAPELLA Physical Therapy & Massage Template

`SN-W02341` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A dark, quiet physiotherapy page on charcoal (#171717) with white sans headlines and grey supporting text. The hero is centred with a small pill label above, and the buttons are a solid white pill and a thin outline. The design is minimal and the type does the work, with the photo fading into the dark ground.

**Mood:** dark, minimal, calm, clinical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a2b5b1` · `#171717` · `#000000` · `#a3a3a3` · `#404040` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 16px
- **Weights in use:** light, medium, extralight
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto bg-white text-black font-medium rounded-full py-4 px-8 text-base transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Comparison (`comparison`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero and set the headline in a large white sans, with a short grey subtitle.
- **Do:** Make the primary button a solid white pill and the secondary a thin outlined pill.
- **Do:** Use a small pill label above the headline in muted grey.
- **Don't:** Don't use light section backgrounds; the page stays dark.
- **Don't:** Don't add accent colour; the palette is white and grey.
- **Don't:** Don't use large hero photos without a dark overlay; the copy sits on the dark ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
