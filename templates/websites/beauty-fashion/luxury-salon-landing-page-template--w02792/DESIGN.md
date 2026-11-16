# Design system — Luxury Salon Landing Page Template

`SN-W02792` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A calm contact-page hero on warm off-white (#f9f8f6). A large deep-green sans headline, 'Get in touch.', has its last word in italic green, centred above a grey intro paragraph. A small pale label sits above, and a dark green pill button in the nav is the one strong accent. The palette is green and cream, quiet and organic.

**Mood:** calm, organic, quiet, natural, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f8f6` | Page ground |
| Surface | `#1b2a22` | Cards, panels, raised areas |
| Text | `#1b2a22` | Headings and primary copy |
| Border | `#1b2a22` | Hairlines, dividers, outlines |
| Accent | `#2d4a3a` | Primary action and highlights |

Palette by frequency of use: `#1b2a22` · `#2d4a3a` · `#f9f8f6` · `#c5a880` · `#ffffff` · `#e6ece8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 60px · body 36px
- **Weights in use:** light, extralight
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-[2rem_0.25rem_2rem_0.25rem]` (2rem_0.25rem_2rem_0.25rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-[#1B2A22]/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-10`, `gap-5`, `gap-8`

**Primary button**

```html
<a class="group relative overflow-hidden px-6 py-3 rounded-[2rem_0.25rem_2rem_0.25rem] text-xl font-light transition-all duration-300 font-outfit bg-[#1B2A22] text-[#F9F8F6] hover:bg-[#2D4A3A] hover:-translate-y-0.5 shadow-lg shadow-[#1B2A22]/10 flex items-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9f8f6;
  --color-surface: #1b2a22;
  --color-text: #1b2a22;
  --color-border: #1b2a22;
  --color-accent: #2d4a3a;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f8f6',
    surface: '#1b2a22',
    ink: '#1b2a22',
    line: '#1b2a22',
    accent: '#2d4a3a',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set the headline in deep green (#1b2a22) and colour the italic last word in #2d4a3a.
- **Do:** Use the cream ground (#f9f8f6) for the page and dark green (#2d4a3a) for the nav button.
- **Do:** Keep the intro paragraph grey and centred under the headline.
- **Don't:** Don't use the dark green as a page background in this light style.
- **Don't:** Don't add warm accents such as the tan (#c5a880) to the headline.
- **Don't:** Don't set the headline in a heavy weight; the style is light and airy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
