# Design system — Web Marketing Agency

`SN-W01730` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A dark French-language agency hero on warm near-black [#1c1917] with a soft orange glow behind the copy. Headlines are heavy white sans, and the key phrase is set in orange [#f97316] to carry the emphasis. Buttons follow the same pattern: a solid orange primary and a dark outlined secondary, so the orange marks what to do next.

**Mood:** warm, dark, energetic, bold, promotional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#292524` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#292524` · `#f5f5f4` · `#000000` · `#7c2d12` · `#78716c` · `#a8a29e` · `#1c1917` · `#f97316` · `#0c0a09` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_0_20px_rgba(251,146,60,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full border border-stone-800 bg-stone-900/50 hover:bg-stone-800 hover:text-brand-orange transition-colors text-stone-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #292524;
  --color-text: #000000;
  --color-muted: #292524;
  --color-border: #292524;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#292524',
    ink: '#000000',
    muted: '#292524',
    line: '#292524',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy white sans and colour one key phrase in orange (#f97316)
- **Do:** Use solid orange for the primary button and dark outlined buttons for secondary actions
- **Do:** Keep a soft orange glow behind the hero copy and nowhere else
- **Don't:** Don't set the page on a light background
- **Don't:** Don't use orange for paragraphs of body text
- **Don't:** Don't add a second accent hue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
