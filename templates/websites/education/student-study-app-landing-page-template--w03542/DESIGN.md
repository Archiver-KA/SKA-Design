# Design system — Student Study App Landing Page Template

`SN-W03542` · education · light mode · Sinera Atlas theme `calm` · language `fr`

## Direction

Allège is a light, calm landing page with heavy sans-serif headlines, where the second line drops to a soft warm grey for contrast. The primary action is a deep, muted green button, with a quieter outlined button beside it. The hero is airy, with a faint gradient wash and a single centred column of text. The tone is soft and reassuring, suited to a study app that aims to reduce stress.

**Mood:** calm, airy, reassuring, soft, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fef2f2` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#a8a29e` · `#57534e` · `#f5f5f4` · `#312e81` · `#fafaf9` · `#fef2f2` · `#0f172a` · `#1e1b4b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-5 py-2 rounded-full bg-sage-800 text-white text-sm font-medium hover:bg-sage-900 transition-all hover:shadow-lg hover:shadow-sage-200 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. About (`about`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fef2f2;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fef2f2',
    ink: '#57534e',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#fb923c',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a soft warm grey to create contrast
- **Do:** Use the deep green for the primary button only
- **Do:** Keep the hero to one centred column with generous spacing
- **Don't:** Don't use saturated colours in the hero
- **Don't:** Don't add heavy shadows to cards
- **Don't:** Don't set headlines in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
