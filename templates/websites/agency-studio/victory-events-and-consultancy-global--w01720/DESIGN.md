# Design system — Victory Events & Consultancy - Global

`SN-W01720` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark event-agency page on pure black [#000000] with white heavy sans headlines and a single red accent [#e81d25] used on the last word of the headline. The red is the only chroma on the page, so it reads as a signal rather than decoration. Photography is shown as grayscale with a small red label, which keeps the imagery consistent with the monochrome base.

**Mood:** bold, dark, industrial, high-contrast, monochrome with red

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e81d25` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e81d25` · `#000000` · `#9ca3af` · `#6b7280` · `#111111` · `#050505` · `#1e3a8a` · `#d1d5db` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Figtree
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full py-4 bg-[#e81d25] text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Marquee (`marquee`)
6. Case studies (`case-studies`)
7. Feature grid (`features`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #e81d25;
  --color-accent-2: #1e3a8a;
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#111111',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#e81d25',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy sans in white and colour only the final word in red (#e81d25)
- **Do:** Show photography in grayscale and tag it with a small red label
- **Do:** Keep card and section surfaces near-black (#111111)
- **Don't:** Don't use the red accent for buttons; the primary button is white
- **Don't:** Don't add colour photography to the hero
- **Don't:** Don't introduce a second accent hue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
