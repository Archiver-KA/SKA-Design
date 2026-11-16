# Design system — Educational Foundation Landing Page Template

`SN-W03454` · education · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A dark, cinematic foundation page on deep navy [#0d1b2a], with a full-bleed night-sky photograph behind a large white serif wordmark. The subtitle is set in italic gold [#d9b871], and a solid gold button leads the main action beside an outlined dark button. The composition is centred, solemn and spacious.

**Mood:** cinematic, solemn, elegant, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d1b2a` | Page ground |
| Text | `#f9f5ec` | Headings and primary copy |
| Border | `#f9f5ec` | Hairlines, dividers, outlines |
| Accent | `#d9b871` | Primary action and highlights |

Palette by frequency of use: `#f9f5ec` · `#d9b871` · `#c6a878` · `#0d1b2a` · `#111111` · `#000000` · `#1a2d42`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Cormorant Garamond, Inter, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 bg-[#D9B871] text-[#0D1B2A] font-medium tracking-wide text-sm hover:bg-[#C6A878] transition-colors duration-500 w-full md:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. About (`about`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0d1b2a;
  --color-text: #f9f5ec;
  --color-border: #f9f5ec;
  --color-accent: #d9b871;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d1b2a',
    ink: '#f9f5ec',
    line: '#f9f5ec',
    accent: '#d9b871',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark large in white serif over the night-sky photograph
- **Do:** Use gold (#d9b871) for the subtitle and the primary button
- **Do:** Keep a dark navy (#0d1b2a) overlay on photographs so the text stays legible
- **Don't:** Don't use gold for body text on dark navy
- **Don't:** Don't place bright photographs behind the body copy
- **Don't:** Don't add more than one solid button colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
