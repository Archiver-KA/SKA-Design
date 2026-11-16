# Design system — Automotive Parts E-commerce Landing Page Template

`SN-W01103` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark industrial parts store on near-black (#09090b), with an uppercase heavy headline split between white and lime (#a3e635). Lime is the single accent, used for the second headline line, the search action and the status card, so the eye follows one colour across the hero. A white rounded search pill sits centred under the headline, with a row of category icons along the bottom.

**Mood:** industrial, dark, technical, bold, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#a3e635` · `#ffffff` · `#09090b` · `#a1a1aa` · `#71717a` · `#18181b` · `#d4d4d8` · `#3f3f46` · `#f4f4f5` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo
- **Body:** Archivo
- **Loaded families:** Archivo, Inter
- **Scale (largest breakpoint):** h2 60px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.5em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-3`

**Primary button**

```html
<a class="group flex items-center gap-4 rounded-2xl bg-lime-400 hover:bg-lime-300 px-5 py-3.5 transition-colors duration-200 cursor-pointer shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Marquee (`marquee`)
5. Call to action (`cta`)
6. Stats band (`stats`)
7. Product grid (`product-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #f4f4f5;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #10b981;
  --font-display: "Archivo", sans-serif;
  --font-body: "Archivo", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#f4f4f5',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Archivo'], sans: ['Archivo'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase heavy sans, with the second line in lime (#a3e635)
- **Do:** Use lime for the search action and one highlight card per screen
- **Do:** Keep the search field as a white rounded pill centred under the headline
- **Don't:** Don't use lime for body copy
- **Don't:** Don't add light grey panels to the dark hero
- **Don't:** Don't mix lowercase into the uppercase headlines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
