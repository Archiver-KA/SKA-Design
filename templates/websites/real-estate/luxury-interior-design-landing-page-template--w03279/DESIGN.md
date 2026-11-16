# Design system — Luxury Interior Design Landing Page Template

`SN-W03279` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Warm and classical: a living-room photograph sits under a light grey wash, with a centred white serif headline in two lines and a regular-weight second line. A tan button (#b89856) is the primary call to action, beside a thin outline, and a bright green chat bubble sits in the corner. Apart from the tan, the palette is neutral and the photograph carries the warmth.

**Mood:** classical, warm, elegant, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#b89856` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#b89856` · `#f5f5f4` · `#78716c` · `#d6d3d1` · `#fafaf9` · `#e7e5e4` · `#292524` · `#0c0a09`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[#25D366]/30`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-5`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 text-sm font-medium text-white bg-[#B89856] hover:bg-[#9c8046] transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Logo cloud (`logo-cloud`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #b89856;
  --color-accent-2: #25d366;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#b89856',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Use the tan (#b89856) for the primary button only.
- **Do:** Set headlines in the serif display face, centred over the photograph.
- **Do:** Keep the chat bubble (#25d366) in the corner as the only green element.
- **Don't:** Don't remove the grey wash from the photograph; the white type needs it.
- **Don't:** Don't set body copy in tan.
- **Don't:** Don't use the green for headings or buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
