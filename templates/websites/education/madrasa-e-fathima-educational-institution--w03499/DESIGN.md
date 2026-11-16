# Design system — Madrasa E Fathima Educational Institution 

`SN-W03499` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, photo-led hero where a group photograph sits behind a blur and a light wash, with a centred headline on top. Inter is set very large, and the key words take a pink gradient (#fb7185). White rounded cards and pill-shaped badges keep the text legible over the image, so the page feels warm and institutional with the photograph carrying most of the emotion.

**Mood:** warm, institutional, soft, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbfb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#292524` · `#fb7185` · `#78716c` · `#fff1f2` · `#f43f5e` · `#fecdd3` · `#e5e5e5` · `#ffe4e6` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Amiri, Noto Sans Kannada, Noto Nastaliq Urdu, Geist, Roboto
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 30px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[0_4px_20px_rgb(0,0,0,0.02)]`
- **Content width:** `max-w-6xl`, `max-w-[100rem]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-5`, `gap-3`

**Primary button**

```html
<a class="text-xs font-medium text-stone-500 hover:text-stone-800 transition-colors uppercase tracking-widest bg-white/50 px-4 py-2.5 rounded-full border border-white hover:shadow-sm flex items-center gap-2 group-hover/lang:bg-white/80">…</a>
```

## Page structure

Blocks in page order:

1. Booking form (`booking`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. About (`about`)
6. Call to action (`cta`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfbfb;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #fb7185;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbfb',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#fb7185',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place hero photographs behind a soft blur and white wash so the headline stays legible
- **Do:** Set the highlighted headline words in pink (#fb7185)
- **Do:** Put calls to action in white rounded cards with pill-shaped badges above them
- **Don't:** Don't place headline text directly over an unblurred photograph
- **Don't:** Don't use pink for body copy or secondary links
- **Don't:** Don't use sharp corners on cards or buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
