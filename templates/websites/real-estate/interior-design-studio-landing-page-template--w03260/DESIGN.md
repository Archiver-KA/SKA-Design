# Design system — Interior Design Studio Landing Page Template

`SN-W03260` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Warm and editorial, on a near-white ground with a full-height interior photograph on the right and a white wash over the left. The headline is a serif in near-black, its final phrase in italic and a lighter tone. A small amber label (#d97706) marks each eyebrow, and the buttons are dark rectangles, so the amber stays a quiet signal rather than a fill.

**Mood:** editorial, warm, photographic, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#d97706` · `#f5f5f4` · `#57534e` · `#292524` · `#44403c` · `#d6d3d1` · `#78350f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-md`, `shadow-stone-900/10`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="px-8 py-4 bg-stone-900 text-white text-sm font-medium rounded-sm hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)
9. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #d97706;
  --color-accent-2: #25d366;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#d97706',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use amber (#d97706) only for the small eyebrow label above headings.
- **Do:** Set headlines in the serif display face, with the final phrase in italic.
- **Do:** Place a full-height interior photograph on one side of the hero and fade it into white on the other.
- **Don't:** Don't put amber on buttons; buttons stay dark.
- **Don't:** Don't cover the hero photograph with coloured overlays.
- **Don't:** Don't set whole headlines in capitals; only the eyebrow is capitalised.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
