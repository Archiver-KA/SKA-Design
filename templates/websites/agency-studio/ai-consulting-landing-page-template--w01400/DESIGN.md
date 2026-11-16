# Design system — AI Consulting Landing Page Template

`SN-W01400` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A quiet white editorial page where the headline is a large, high-contrast serif in near-black, set at a low leading and kept to two lines. Sans is used only for the small uppercase eyebrow, the paragraph and the stats row, so the serif carries the voice. The dark solid button and the outlined pill are the only interactive elements in view.

**Mood:** quiet, editorial, monochrome, serious, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfdfd` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fdfdfd` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-8`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="bg-sovereign-900 text-white px-6 py-3 text-sm font-medium hover:bg-sovereign-800 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Schedule (`schedule-agenda`)
6. Call to action (`cta`)
7. Team (`team`)
8. About (`about`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfdfd;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #000000;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfdfd',
    surface: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#000000',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in the serif at large size in near-black, two lines at most.
- **Do:** Use sans only for eyebrows, body and stats, in small type.
- **Do:** Keep buttons black solid and outlined, with no colour.
- **Don't:** Don't add a colour accent; the page is black, white and grey.
- **Don't:** Don't set body copy in the serif.
- **Don't:** Don't put the stats in boxes; the template uses thin rules.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
