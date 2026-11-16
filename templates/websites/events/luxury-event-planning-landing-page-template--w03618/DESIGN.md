# Design system — Luxury Event Planning Landing Page Template

`SN-W03618` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, cinematic hero built on a dimmed photograph of a set banquet space, with white sans-serif type set large and centred over it. The headline pairs upright type with an italic line in pale grey, giving the phrase a soft, luminous quality. Colour is nearly absent: black, white and grey carry the whole design, and the only interface element is a solid white button.

**Mood:** luxurious, cinematic, monochrome, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#000000` · `#18181b` · `#09090b` · `#6366f1` · `#3f3f46` · `#d4d4d8` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-5 py-2 text-xs font-medium tracking-wide text-black bg-white rounded-full hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. About (`about`)
6. Services (`services`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Booking form (`booking`)
9. FAQ (`faq`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #000000;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#000000',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter, with the second line in italic
- **Do:** Keep the main buttons solid white on the dark ground
- **Do:** Dim any photography behind text so headlines stay legible
- **Don't:** Don't introduce an indigo or other chromatic accent
- **Don't:** Don't set body copy in full white; keep it in grey
- **Don't:** Don't place photography at full brightness behind text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
