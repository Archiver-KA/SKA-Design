# Design system — Custom Furniture Studio Landing Page Template

`SN-W03229` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `cs`

## Direction

A dark, serif-led studio hero on a deep warm-black ground (#1c1917), with a large white serif headline whose second line is set in italic sand. Buttons pair a cream fill with a dark outlined box, and a dark brown button sits top right on a pale header bar. The palette is warm neutral, and the serif and italic do the work that imagery does elsewhere.

**Mood:** warm, refined, serif, studio

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#a07855` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#f5f5f4` · `#ffffff` · `#78716c` · `#57534e` · `#e7e5e4` · `#fafaf9` · `#292524` · `#a8a29e` · `#a07855`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Manrope, Cormorant Garamond
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-5`

**Primary button**

```html
<a class="px-6 py-2.5 bg-wood-900 text-stone-100 text-xs uppercase tracking-widest hover:bg-wood-700 transition-all duration-300 shadow-lg shadow-wood-900/10 hover:shadow-wood-900/20 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Contact form (`contact-form`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #f5f5f4;
  --color-text: #f5f5f4;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #a07855;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#f5f5f4',
    ink: '#f5f5f4',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#a07855',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in a white serif, with the second line in italic sand.
- **Do:** Use the cream fill (#f5f5f4) for the primary button and a dark outline for the secondary.
- **Do:** Keep the hero on the warm-black ground (#1c1917), centred, with a small tracked eyebrow line.
- **Don't:** Don't swap the serif for a geometric sans; the typeface is part of the identity.
- **Don't:** Don't use the tan (#a07855) as a large background; it is for small accents only.
- **Don't:** Don't add colourful accents; the palette stays warm neutral.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
