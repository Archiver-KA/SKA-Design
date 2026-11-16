# Design system — Agency Landing Page Template

`SN-W01358` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm cream page (#fcf9f5) with a black uppercase announcement strip, a large serif headline in Cormorant Garamond with an italic second word, and a navy card at the right holding a serif monogram. The navy (#172535) is the single dark block that anchors the composition, and everything else is near-black text on cream. It reads as an editorial, gallery-like studio with a restrained palette.

**Mood:** editorial, warm, restrained, gallery-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcf9f5` | Page ground |
| Surface | `#16140d` | Cards, panels, raised areas |
| Text | `#16140d` | Headings and primary copy |
| Muted text | `#ced7e0` | Secondary copy, captions |
| Border | `#16140d` | Hairlines, dividers, outlines |
| Accent | `#172535` | Primary action and highlights |
| Second accent | `#f4eedc` | Supporting highlights |

Palette by frequency of use: `#fcf9f5` · `#16140d` · `#172535` · `#ffffff` · `#ced7e0` · `#d8d2c5` · `#f4eedc` · `#0d1a26` · `#c2bba8` · `#1a2c2a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Jost
- **Loaded families:** Cormorant Garamond, Jost
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-[0.2em]`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-2xl`, `shadow-[#172535]/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="px-9 py-5 bg-[#16140d] text-[#fcf9f5] text-xs font-normal tracking-[0.2em] uppercase border border-[#16140d] hover:bg-transparent hover:text-[#16140d] transition-all duration-300 w-full sm:w-auto text-center">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Services (`services`)
6. Bento grid (`bento-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fcf9f5;
  --color-surface: #16140d;
  --color-text: #16140d;
  --color-muted: #ced7e0;
  --color-border: #16140d;
  --color-accent: #172535;
  --color-accent-2: #f4eedc;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Jost", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcf9f5',
    surface: '#16140d',
    ink: '#16140d',
    muted: '#ced7e0',
    line: '#16140d',
    accent: '#172535',
    accent2: '#f4eedc',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Jost'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large size, with one italic word per headline.
- **Do:** Use the cream (#fcf9f5) as the page ground and near-black (#16140d) for text.
- **Do:** Use the navy (#172535) for one feature block or card per screen.
- **Don't:** Don't set headlines in bold sans-serif; the serif carries the voice.
- **Don't:** Don't add a second dark colour beyond the navy and near-black.
- **Don't:** Don't add drop shadows to the navy card; keep it flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
