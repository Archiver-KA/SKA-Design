# Design system — Home Remodeling Landing Page Template

`SN-W02046` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A contractor landing page where the hero is a deep green (#00550d) field fading to grey, with white serif headline text and italic words set in yellow (#f4b81a). The yellow is the one bright colour and marks every point of action: the italic emphasis and the main consultation button. The rest of the page is white and grey.

**Mood:** trustworthy, bold, traditional, high-contrast, local

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f4b81a` | Primary action and highlights |
| Second accent | `#00550d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00550d` · `#f4b81a` · `#57534e` · `#f5f5f4` · `#1c1917` · `#fafaf9` · `#78716c` · `#e7e5e4` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Cormorant Garamond, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="inline-block px-10 py-4 bg-[#00550D] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#00550D] transition-colors shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f4;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #ffffff;
  --color-accent: #f4b81a;
  --color-accent-2: #00550d;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f4',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#ffffff',
    accent: '#f4b81a',
    accent2: '#00550d',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use yellow (#f4b81a) for italic headline emphasis and the main button only.
- **Do:** Keep the hero on the deep green (#00550d) with white serif headline text.
- **Do:** Set headlines in a serif display face at large size.
- **Don't:** Don't use yellow for body text or thin lines; it fails on white.
- **Don't:** Don't add a second bright colour beside the yellow.
- **Don't:** Don't set the hero copy in sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
