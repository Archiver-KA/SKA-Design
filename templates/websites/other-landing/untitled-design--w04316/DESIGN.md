# Design system — Untitled Design

`SN-W04316` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, two-column registration page on white, with a large black headline on the left and a bordered form card on the right. Role choices are stacked as selectable cards with thin borders, and the selected card takes an indigo [#6366f1] outline. Small pill tags mark partner, free and needed options, and the form fields are plain and evenly spaced.

**Mood:** plain, community, light, clear, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#000000` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#e5e5e5` · `#737373` · `#525252` · `#6366f1` · `#404040` · `#fafafa` · `#4f46e5` · `#f5f5f5` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 36px · h2 14px · h3 16px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-[1000px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full font-medium text-sm py-2.5 px-4 rounded-lg active:scale-[0.99] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 focus:ring-black flex items-center justify-center gap-2 bg-black text-white hover:bg-neutral-800 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #262626;
  --color-text: #000000;
  --color-muted: #000000;
  --color-border: #e5e5e5;
  --color-accent: #4f46e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#262626',
    ink: '#000000',
    muted: '#000000',
    line: '#e5e5e5',
    accent: '#4f46e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Show the selected role card with a thin indigo (#6366f1) outline
- **Do:** Use small pill tags for status labels such as Partner, Free and Needed
- **Do:** Keep the headline large and black on white, with the form in a bordered card
- **Don't:** Don't use a dark background behind the form card
- **Don't:** Don't fill the role cards with colour
- **Don't:** Don't add more than one accent colour to the form

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
