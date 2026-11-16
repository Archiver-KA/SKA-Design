# Design system — Hua Hum Real Estate Landing Page Template

`SN-W03252` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `es`

## Direction

The first screen sits on a deep green ground (#153b33) with large cream serif headlines, the second line set in italic for contrast. Orange (#f58a22) is kept for the primary button and small labels, while the secondary button is a thin outline. Hairline circles drawn behind the headline add a quiet architectural note, and the layout stays airy with generous spacing.

**Mood:** calm, elegant, airy, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#153b33` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f1eee9` | Headings and primary copy |
| Muted text | `#4a6958` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f58a22` | Primary action and highlights |
| Second accent | `#153b33` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f58a22` · `#000000` · `#153b33` · `#f1eee9` · `#4a6958` · `#ff9d3e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Montserrat
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[90rem]`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-2`, `gap-7`

**Primary button**

```html
<a class="hidden bg-[#F58A22] px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-black transition-colors hover:bg-[#ff9d3e] sm:block">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Articles (`blog-articles`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #153b33;
  --color-surface: #ffffff;
  --color-text: #f1eee9;
  --color-muted: #4a6958;
  --color-border: #ffffff;
  --color-accent: #f58a22;
  --color-accent-2: #153b33;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#153b33',
    surface: '#ffffff',
    ink: '#f1eee9',
    muted: '#4a6958',
    line: '#ffffff',
    accent: '#f58a22',
    accent2: '#153b33',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large sizes, with the second line in italic.
- **Do:** Use the orange (#f58a22) only for the primary button and one small highlight per section.
- **Do:** Keep the hero on the deep green ground (#153b33) rather than switching to the cream background.
- **Don't:** Don't fill large areas with orange; it is an accent only.
- **Don't:** Don't use solid heavy borders; keep outlines thin and light.
- **Don't:** Don't set body copy in pure black on the green ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
