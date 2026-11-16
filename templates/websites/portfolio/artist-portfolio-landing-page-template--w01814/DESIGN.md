# Design system — Artist Portfolio Landing Page Template

`SN-W01814` · portfolio · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

Playful gallery on a warm off-white ground (#fcfbf9), with a three-column grid of large, colourful collage artworks and small uppercase captions below each piece. The interface is near-black and grey, with a sparse top nav and a cart icon. The artwork supplies all the colour, so the page stays neutral and grid-led.

**Mood:** playful, gallery, neutral, grid-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#a8a29e` · `#ffffff` · `#57534e` · `#e7e5e4` · `#f5f5f4` · `#292524` · `#fcfbf9` · `#78716c` · `#f43f5e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 18px · h2 30px · h3 12px · body 11px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2px]` (2px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-stone-200/50`, `shadow-sm`
- **Content width:** `max-w-[1800px]`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="w-full bg-stone-900 hover:bg-stone-800 text-white py-4 rounded-[2px] transition-colors flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Cart / checkout (`cart-checkout`)
3. Sidebar (`sidebar`)
4. About (`about`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Contact form (`contact-form`)
8. Footer (`footer`)
9. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fcfbf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a three-column grid of large artworks with small uppercase captions
- **Do:** Keep the interface black, grey and white and leave colour to the artwork
- **Do:** Set captions in small uppercase with wide tracking
- **Don't:** Don't add a coloured accent to the navigation or buttons
- **Don't:** Don't place text over the artwork tiles
- **Don't:** Don't set the page on a dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
