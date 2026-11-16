# Design system —  FlowerPowerShop | Aranjamente Florale Constanța |

`SN-W04141` · other-landing · light mode · Sinera Atlas theme `circuit` · language `ro`

## Direction

A soft, gentle page on cream (#fffaf5), with a large serif headline in deep plum-brown (#4b3b3e) and the lead line in rose (#ae4c68). The WhatsApp button and sage-green (#dce9d7) blurred shapes add a quiet second tone, and large soft pink and green shapes sit behind the hero. The overall stance is floral and warm, with rose used for the brand name and actions.

**Mood:** soft, floral, warm, gentle, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffaf5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4b3b3e` | Headings and primary copy |
| Muted text | `#766366` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ae4c68` | Primary action and highlights |
| Second accent | `#dce9d7` | Supporting highlights |

Palette by frequency of use: `#fffaf5` · `#ffffff` · `#503b3f` · `#766366` · `#ae4c68` · `#eea8bb` · `#be4d6d` · `#f9ece8` · `#dce9d7` · `#78946f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, DM Sans, Parisienne
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_12px_28px_rgba(86,77,62,0.10)]`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden items-center gap-2 rounded-full bg-[#78946f] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#637f5a] hover:shadow-md sm:flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fffaf5;
  --color-surface: #ffffff;
  --color-text: #4b3b3e;
  --color-muted: #766366;
  --color-border: #ffffff;
  --color-accent: #ae4c68;
  --color-accent-2: #dce9d7;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffaf5',
    surface: '#ffffff',
    ink: '#4b3b3e',
    muted: '#766366',
    line: '#ffffff',
    accent: '#ae4c68',
    accent2: '#dce9d7',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif face in deep plum-brown (#4b3b3e) on cream (#fffaf5)
- **Do:** Use rose (#ae4c68) for the brand name, the lead line and primary actions
- **Do:** Keep sage green (#dce9d7) to soft background shapes and secondary accents
- **Don't:** Don't use rose for body paragraphs
- **Don't:** Don't place saturated colour blocks on the cream ground
- **Don't:** Don't set headlines in a sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
