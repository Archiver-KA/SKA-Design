# Design system — Luxury Chalet Management Landing Page Template

`SN-W03078` · travel · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A dark navy page for a private chalet management firm, with a serif headline and a warm gold (#9c7a4a) primary button set against the deep blue ground (#0f1c2e). The hero is a plain navy field, and gold and cream text in a Cormorant-style serif give the page its formal, discreet tone.

**Mood:** formal, discreet, alpine, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f1c2e` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f0e8` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#9c7a4a` | Primary action and highlights |
| Second accent | `#162338` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9c7a4a` · `#0f1c2e` · `#162338` · `#000000` · `#f5f0e8` · `#c4a06b` · `#131e2d` · `#0a131f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, DM Sans
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 60px · body 14px
- **Weights in use:** light, medium, extralight
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-[#9C7A4A] text-[#0F1C2E] px-8 py-4 rounded text-sm hover:bg-[#C4A06B] transition-all flex items-center gap-2 font-medium w-full sm:w-auto justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Services (`services`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f1c2e;
  --color-surface: #000000;
  --color-text: #f5f0e8;
  --color-border: #ffffff;
  --color-accent: #9c7a4a;
  --color-accent-2: #162338;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f1c2e',
    surface: '#000000',
    ink: '#f5f0e8',
    line: '#ffffff',
    accent: '#9c7a4a',
    accent2: '#162338',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Use the deep navy (#0f1c2e) as the page ground
- **Do:** Set the primary button in gold (#9c7a4a) and the secondary as a thin outline
- **Do:** Keep headlines in the light serif with cream text (#f5f0e8)
- **Don't:** Don't use a bright blue for buttons or links
- **Don't:** Don't set the navy ground to pure black (#000000) for sections
- **Don't:** Don't leave the hero as an empty navy field

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
