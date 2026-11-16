# Design system — Dental Clinic Landing Page Template

`SN-W02348` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bright dental page on white with a heavy sans headline in which the key phrase carries an indigo-to-cyan gradient and the rest is near-black. Buttons are indigo (#4f46e5) pills and the logo is a blue-violet mark, so the palette is cool and digital.

**Mood:** cool, digital, bright, crisp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#064e3b` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#059669` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4f46e5` · `#171717` · `#6366f1` · `#f5f5f5` · `#737373` · `#e5e5e5` · `#312e81` · `#e0e7ff` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 rounded-xl transition-all shadow-lg shadow-indigo-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Services (`services`)
6. Team (`team`)
7. Booking form (`booking`)
8. Footer (`footer`)
9. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #064e3b;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #4f46e5;
  --color-accent-2: #059669;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#064e3b',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#4f46e5',
    accent2: '#059669',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in an indigo-to-cyan gradient and keep the rest near-black.
- **Do:** Use indigo (#4f46e5) for the primary button and links, with a white outline secondary.
- **Do:** Keep backgrounds white and let the photo card carry the colour.
- **Don't:** Don't add green; the hero uses only indigo and cyan.
- **Don't:** Don't set headlines in a serif.
- **Don't:** Don't set hero body copy at low contrast.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
