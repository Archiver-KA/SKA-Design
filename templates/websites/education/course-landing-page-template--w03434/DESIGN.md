# Design system — Course Landing Page Template

`SN-W03434` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A warm cream landing page with a dark brown [#4c211b] serif headline and a red [#c12a15] primary button, on a cream [#faecc6] ground. A tilted label tag sits above the headline, and soft green blurs sit in the corners. The look is editorial and warm, with the red kept for actions.

**Mood:** warm, editorial, inviting, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faecc6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4c211b` | Headings and primary copy |
| Accent | `#c12a15` | Primary action and highlights |
| Second accent | `#faecc6` | Supporting highlights |

Palette by frequency of use: `#4c211b` · `#faecc6` · `#c12a15` · `#b9dd9c` · `#ffffff` · `#b9d1d5` · `#1e3a8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[2px_2px_0px_#4C211B]`, `shadow-[6px_6px_0px_#4C211B]`, `shadow-[4px_4px_0px_#4C211B]`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-6 py-2 bg-[#C12A15] text-[#FAECC6] rounded-full border-2 border-[#4C211B] shadow-[4px_4px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#4C211B] transition-all text-lg font-medium inline-flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Process / steps (`how-it-works`)
5. Services (`services`)
6. About (`about`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #faecc6;
  --color-surface: #ffffff;
  --color-text: #4c211b;
  --color-accent: #c12a15;
  --color-accent-2: #faecc6;
  --font-display: "a serif face", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faecc6',
    surface: '#ffffff',
    ink: '#4c211b',
    accent: '#c12a15',
    accent2: '#faecc6',
  },
  fontFamily: { display: ['a serif face'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set headlines in dark brown (#4c211b) serif on the cream background
- **Do:** Use red (#c12a15) for the enrol button and other calls to action
- **Do:** Keep the tilted label tag above the headline as a small accent
- **Don't:** Don't use red for headline text
- **Don't:** Don't use cool blues as the main colour
- **Don't:** Don't use square buttons; keep them pill-shaped

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
