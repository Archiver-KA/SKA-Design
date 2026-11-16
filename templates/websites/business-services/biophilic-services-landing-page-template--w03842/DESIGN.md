# Design system — Biophilic Services Landing Page Template

`SN-W03842` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A pale, airy page with a centred serif headline in near-black, and its second line set in italic deep green (#166534). A dark green primary button and a white outline button sit under a short grey paragraph, and a segmented toggle switches between residential and business. Soft green glows in the corners and generous margins make the page feel calm and natural.

**Mood:** calm, natural, airy, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#166534` | Primary action and highlights |

Palette by frequency of use: `#166534` · `#1c1917` · `#e7e5e4` · `#57534e` · `#ffffff` · `#fafaf9` · `#14532d` · `#f5f5f4` · `#78716c` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-green-900/5`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-stone-50 bg-stone-900 rounded-full hover:bg-green-900 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Logo cloud (`logo-cloud`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Alpine.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #166534;
  --font-display: "Playfair Display", serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#166534',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic deep green (#166534).
- **Do:** Use the dark green for the primary button and the selected toggle only.
- **Do:** Keep headlines centred, with generous space above and below.
- **Don't:** Don't use bright greens for buttons or text.
- **Don't:** Don't set the headlines in sans-serif; they use the serif face.
- **Don't:** Don't place the hero on a dark background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
