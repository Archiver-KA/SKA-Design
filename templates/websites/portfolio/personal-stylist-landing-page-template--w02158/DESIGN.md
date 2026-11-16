# Design system — Personal Stylist Landing Page Template

`SN-W02158` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm, editorial stylist page on an off-white ground (#fafaf9), with near-black headlines in Inter and a grey italic serif for the second line. A small orange (#ea580c) eyebrow label is the single accent, and the hero pairs copy on the left with a tall, rounded photograph on the right that supplies the colour. Buttons are a dark filled button and an outlined button, so the hero stays calm.

**Mood:** warm, editorial, fashion, calm, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#e7e5e4` · `#fafaf9` · `#78716c` · `#57534e` · `#a8a29e` · `#ea580c` · `#44403c` · `#fff7ed`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-orange-500/5`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center rounded-md bg-stone-900 px-4 py-2 text-sm font-medium text-stone-50 transition-all hover:bg-stone-700 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in near-black Inter, with the second line in grey italic serif.
- **Do:** Use orange (#ea580c) only for the eyebrow label and small markers.
- **Do:** Pair the hero copy on the left with a tall photograph on the right in a rounded frame.
- **Don't:** Don't add orange to buttons; the buttons are dark and outlined.
- **Don't:** Don't set the page on pure white; the warm off-white ground is part of the look.
- **Don't:** Don't crop the hero photograph square; the tall frame is the layout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
