# Design system — Personal Injury Law Firm Landing Page Template

`SN-W04040` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A restrained legal page on an off-white ground with a large near-black serif headline. The second line is set in italic and softened to grey, and small capitals carry the top bar and phone number. Buttons are charcoal rectangles with square edges, and the photograph sits in a plain frame, so the page feels sober and credible.

**Mood:** sober, credible, classic, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#a8a29e` · `#e7e5e4` · `#78716c` · `#fafaf9` · `#57534e` · `#f5f5f4` · `#292524` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-stone-950/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-stone-900 text-white text-xs font-medium uppercase tracking-wide px-5 py-3 hover:bg-stone-800 transition-all rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Contact form (`contact-form`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #16a34a;
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
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic serif, softened grey
- **Do:** Use charcoal (#1c1917) for buttons and headlines
- **Do:** Keep the top bar to one line of small capitals
- **Don't:** Don't use bright colours on buttons
- **Don't:** Don't round the corners of buttons
- **Don't:** Don't place stock imagery in the hero without a frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
