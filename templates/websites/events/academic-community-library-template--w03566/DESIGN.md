# Design system — Academic Community Library Template

`SN-W03566` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The library platform uses a warm off-white ground with a bold serif headline in near-black, and the closing phrase is italic with a pale yellow highlight behind it. Navy (#1a2e44) carries the primary button and the dark labels, while a white outlined button sits beside it. Content cards are set at slight tilts beside the hero copy, giving the page a loosely layered look.

**Mood:** academic, warm, layered, editorial, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff4d2` | Page ground |
| Surface | `#fafaf9` | Cards, panels, raised areas |
| Text | `#1c1b1a` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e8e6df` | Hairlines, dividers, outlines |
| Accent | `#1a2e44` | Primary action and highlights |
| Second accent | `#8b3a3a` | Supporting highlights |

Palette by frequency of use: `#57534e` · `#ffffff` · `#f5f5f4` · `#78716c` · `#1a2e44` · `#fafaf9` · `#e7e5e4` · `#1c1917` · `#e8e6df` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 36px · h2 20px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-paper`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#1A2E44] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#112031] transition-colors shadow-sm nav-link">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. FAQ (`faq`)
5. Call to action (`cta`)
6. Contact form (`contact-form`)
7. Feature grid (`features`)
8. Dashboard preview (`dashboard-preview`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fff4d2;
  --color-surface: #fafaf9;
  --color-text: #1c1b1a;
  --color-muted: #57534e;
  --color-border: #e8e6df;
  --color-accent: #1a2e44;
  --color-accent-2: #8b3a3a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff4d2',
    surface: '#fafaf9',
    ink: '#1c1b1a',
    muted: '#57534e',
    line: '#e8e6df',
    accent: '#1a2e44',
    accent2: '#8b3a3a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of the headline in italic with a pale yellow highlight
- **Do:** Use navy (#1a2e44) for the primary button and dark labels
- **Do:** Float slightly tilted content cards beside the hero copy
- **Don't:** Don't use saturated colours beside the navy
- **Don't:** Don't set headlines in a sans-serif
- **Don't:** Don't use cool grey backgrounds for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
