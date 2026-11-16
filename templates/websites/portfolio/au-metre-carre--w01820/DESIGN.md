# Design system — Au_metre_carre

`SN-W01820` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Loud and playful: a saturated lime field with heavy black monospace headlines, a cyan highlight on one word, and a cyan top bar. Chips and buttons have hard black outlines, and a sticker-like photo frame sits in the hero. The contrast is extreme and the look is handmade rather than polished. Lime, cyan and black do all the work.

**Mood:** loud, playful, bold, handmade

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff200` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#6e786f` | Secondary copy, captions |
| Border | `#111111` | Hairlines, dividers, outlines |
| Second accent | `#ff312e` | Supporting highlights |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#111111` · `#26352a` · `#dce3da` · `#334239` · `#eff6ec` · `#315134` · `#465249` · `#6e786f` · `#657067`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a monospace face
- **Body:** system sans-serif
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.12em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-[#4b3827]/5`, `shadow-[4px_4px_0_#111111]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="district col-span-2 border-2 border-[#111111] bg-[#fff200] p-4 text-left font-bold uppercase text-[#111111] transition hover:translate-x-1 hover:translate-y-1 sm:p-6">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Contact form (`contact-form`)
6. Case studies (`case-studies`)
7. Testimonials (`testimonials`)
8. Feature grid (`features`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fff200;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #6e786f;
  --color-border: #111111;
  --color-accent-2: #ff312e;
  --font-display: "a monospace face", sans-serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff200',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#6e786f',
    line: '#111111',
    accent2: '#ff312e',
  },
  fontFamily: { display: ['a monospace face'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy black monospace on the lime field
- **Do:** Outline chips and buttons in solid black
- **Do:** Use the cyan highlight on one word per headline only
- **Don't:** Don't soften the palette with greys or pastels
- **Don't:** Don't set small body text in the monospace face
- **Don't:** Don't add gradients or soft shadows; the edges are hard

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
