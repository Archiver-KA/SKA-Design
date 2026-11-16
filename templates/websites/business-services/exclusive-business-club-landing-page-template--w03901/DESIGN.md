# Design system — Exclusive Business Club Landing Page Template

`SN-W03901` · business-services · dark mode · Sinera Atlas theme `route` · language `fr`

## Direction

A photographic hero sets the tone for this members-only club: a warm, dimly lit dinner scene under a dark wash. A serif face in white carries a short centred statement set in sentence case. The only call to action is a thin white-outlined button in italic serif, so the page reads as discreet rather than promotional.

**Mood:** discreet, exclusive, warm, restrained, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f9f9f9` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#f3f4f6` · `#f9f9f9` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** ui-sans-serif
- **Scale (largest breakpoint):** h1 48px · h2 48px · h3 30px · body 18px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="bg-white text-black px-10 py-3 hover:bg-gray-100 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f9f9f9;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --font-display: "a serif face", serif;
  --font-body: "ui-sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f9f9f9',
    ink: '#ffffff',
    muted: '#4b5563',
  },
  fontFamily: { display: ['a serif face'], sans: ['ui-sans-serif'] },
} }
```

## Do and don't

- **Do:** Use a dark photographic overlay behind the hero so white type stays legible.
- **Do:** Set the headline in the serif display face at regular weight, in sentence case.
- **Do:** Keep the call to action as a thin outlined button with no solid fill.
- **Don't:** Don't introduce bright accent colours; the palette stays black, white and grey.
- **Don't:** Don't crowd the hero with extra text; keep one statement and one action.
- **Don't:** Don't use heavy drop shadows on the buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
