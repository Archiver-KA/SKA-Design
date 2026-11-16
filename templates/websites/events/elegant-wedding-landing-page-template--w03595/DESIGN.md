# Design system — Elegant Wedding Landing Page Template

`SN-W03595` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The wedding page sets the couple's names in a deep brown serif (#341508) over a faded cream photograph, so the image shows through the hero. The ampersand is a dusty rose (#c27770), and the date and location line is set in italic gold-brown (#b8844d). Countdown numerals use the same serif, and one dark brown pill button closes the first screen. The warmth comes from brown and gold tones against cream.

**Mood:** romantic, warm, soft, photographic, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf6f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#341508` | Headings and primary copy |
| Border | `#faf6f0` | Hairlines, dividers, outlines |
| Accent | `#b8844d` | Primary action and highlights |

Palette by frequency of use: `#faf6f0` · `#b8844d` · `#341508` · `#c27770` · `#78491f` · `#decdb5` · `#0a0806` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-8`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-block px-10 py-4 bg-espresso dark:bg-ivory text-ivory dark:text-espresso hover:bg-gold dark:hover:bg-gold hover:text-white dark:hover:text-white transition-all duration-500 tracking-[0.2em] text-xs font-sans uppercase rounded-full shadow-sm hover:shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Modal / overlay (`modal-overlay`)
4. Timeline (`timeline`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf6f0;
  --color-surface: #ffffff;
  --color-text: #341508;
  --color-border: #faf6f0;
  --color-accent: #b8844d;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf6f0',
    surface: '#ffffff',
    ink: '#341508',
    line: '#faf6f0',
    accent: '#b8844d',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the names and countdown numerals in the brown serif (#341508)
- **Do:** Use the dusty rose (#c27770) for the ampersand and gold-brown (#b8844d) for the italic date line
- **Do:** Keep the hero photograph faded toward cream so the names stay legible
- **Don't:** Don't use cool colours on the cream palette
- **Don't:** Don't set the names over an unfaded photograph
- **Don't:** Don't use pure black type; keep text in warm brown

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
