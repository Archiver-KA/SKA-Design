# Design system — AI Fitness Coach Landing Page Template

`SN-W02571` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A plain, conversion-led page on a white ground with a very large, tightly set black Inter headline. The emphasis is made with grey, not colour: the second clause is set in a mid-grey, and the small step tracker under the hero reads as a process strip. The design is neutral and direct.

**Mood:** direct, neutral, bold, clean, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#737373` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#e5e5e5` · `#737373` · `#a3a3a3` · `#262626` · `#fafafa` · `#404040` · `#525252` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-[80%]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center h-9 px-4 text-xs font-medium text-white bg-neutral-900 rounded hover:bg-neutral-800 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Integrations (`integrations`)
6. About (`about`)
7. Pricing (`pricing`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #737373;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#737373',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy black Inter with tight tracking, and drop the second clause into grey
- **Do:** Keep the step strip under the hero as four small labelled steps with minimal decoration
- **Do:** Use black for the primary button and an outlined button for the secondary action
- **Don't:** Don't add blue or red accents.
- **Don't:** Don't use grey for the primary call to action; it is for emphasis in the headline only
- **Don't:** Don't decorate the step strip with icons or colour; it works through type alone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
