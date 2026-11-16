# Design system — Grynnerup Aesthetics

`SN-W02383` · healthcare · light mode · Sinera Atlas theme `calm` · language `da`

## Direction

An editorial aesthetic-clinic hero on a warm off-white ground, with a large dark serif headline and one italic word set in a lighter grey. A tall, natural treatment photograph sits on the right, so the imagery and type share a calm, unhurried tone. Dark green buttons are the only solid colour, and the page reads as refined and restrained.

**Mood:** editorial, refined, natural, calm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#a8a29e` · `#f5f5f4` · `#fafaf9` · `#57534e` · `#292524` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 14px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-4`, `gap-12`, `gap-16`

**Primary button**

```html
<a class="bg-brand-800 text-white px-5 py-2.5 rounded-sm text-xs font-medium tracking-wide uppercase hover:bg-brand-900 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Logo cloud (`logo-cloud`)
5. FAQ (`faq`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#f5f5f4',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display with one italic emphasis word.
- **Do:** Keep the page on the warm off-white ground (#fafaf9) with white cards.
- **Do:** Use the photograph as the main visual on the hero, with the copy on the left.
- **Don't:** Don't set the headline in a sans-serif; the serif is the voice.
- **Don't:** Don't add bright accent colours to the hero.
- **Don't:** Don't use strong shadows on photography or cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
