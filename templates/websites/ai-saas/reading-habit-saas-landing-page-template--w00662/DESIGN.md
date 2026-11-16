# Design system — Reading Habit SaaS Landing Page Template

`SN-W00662` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

The visual system matches the ReadFlow template: a warm off-white page, large Playfair Display headlines, and small orange tags floating around a row of book covers. The hero is centred, with a single short serif line and a supporting sans-serif paragraph beneath it. The look is literary and quiet, and it stays light throughout.

**Mood:** warm, literary, quiet, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#f97316` · `#57534e` · `#f5f5f4` · `#e7e5e4` · `#78716c` · `#000000` · `#ea580c` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-beautiful`, `shadow-book`
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group relative px-5 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. FAQ (`faq`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #f97316;
  --color-accent-2: #60a5fa;
  --font-display: "Playfair Display", serif;
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
    accent: '#f97316',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display at large size, in near-black on the off-white ground
- **Do:** Use the orange (#f97316) only for the logo mark and the floating category tags
- **Do:** Keep the hero centred, with one serif headline line and a short sans-serif paragraph
- **Don't:** Don't use orange on large buttons; the primary action stays near-black
- **Don't:** Don't move the page to a dark ground; it is light throughout
- **Don't:** Don't add gradients to the ground; the page is flat off-white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
