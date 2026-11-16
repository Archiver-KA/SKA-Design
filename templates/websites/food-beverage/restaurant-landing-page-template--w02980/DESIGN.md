# Design system — Restaurant Landing Page Template

`SN-W02980` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm, homely hero: a greyed photograph of a dining room fades into a near-white base, with a white headline whose second line is set in pale orange. A solid orange (#ea580c) button marks the main action, with a text-only secondary beside it. The overall tone is soft and family-friendly, and orange is kept to the call to action and the highlight line.

**Mood:** warm, homely, soft, family-friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#e7e5e4` · `#ea580c` · `#fafaf9` · `#78716c` · `#57534e` · `#a8a29e` · `#f97316` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 16px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-stone-200/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-8 text-sm font-medium text-white transition-all hover:bg-orange-700 sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in pale orange, and keep the first line in white.
- **Do:** Use solid orange (#ea580c) for the View Full Menu button only.
- **Do:** Fade the hero photograph to a light tone so the headline and copy stay legible.
- **Don't:** Don't put the pale orange highlight over the light fade; it disappears.
- **Don't:** Don't use orange for body text.
- **Don't:** Don't switch the navigation to a dark bar; it stays light.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
