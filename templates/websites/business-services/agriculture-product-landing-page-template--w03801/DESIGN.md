# Design system — Agriculture Product Landing Page Template

`SN-W03801` · business-services · light mode · Sinera Atlas theme `route` · language `ru`

## Direction

A dark photographic hero of a crop field, with a large white sans-serif headline and one highlighted word in bright green (#22c55e). A green pill button leads the eye, and the subtitle is set in small, uppercase, letter-spaced text. Short product and feature cards sit along the right and bottom edges, so the layout reads as confident agricultural product marketing.

**Mood:** confident, organic, modern, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#525252` · `#737373` · `#15803d` · `#22c55e` · `#f5f5f5` · `#4ade80` · `#a3a3a3` · `#16a34a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-screen-2xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-5`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Comparison (`comparison`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #22c55e;
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
    surface: '#fafafa',
    ink: '#171717',
    muted: '#525252',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a heavy sans-serif at a large size, in white, with one highlighted word in green (#22c55e).
- **Do:** Use the bright green pill (#22c55e) for the main order action only.
- **Do:** Keep the subtitle small, uppercase and letter-spaced.
- **Don't:** Don't add a second bright colour to the hero.
- **Don't:** Don't place the headline over the crop photograph without the dark overlay.
- **Don't:** Don't use the green for body copy on the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
