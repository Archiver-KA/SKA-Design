# Design system — Buro710 design 

`SN-W01852` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `uk`

## Direction

A dark, quiet studio page on near-black (#0c0a09) where the headline is a large white serif with the first word in italic. Small letter-spaced uppercase navigation sits along the top, and a thin hairline separates the hero from the short body text. Warmth comes from the type and the near-black ground, not from colour.

**Mood:** refined, dark, editorial, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#0c0a09` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f5f5f4` · `#ffffff` · `#78716c` · `#e7e5e4` · `#0c0a09` · `#a8a29e` · `#57534e` · `#d6d3d1` · `#1c1917` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Cormorant Garamond, DM Sans
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 36px · body 14px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1800px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="bg-stone-100 text-stone-950 px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-stone-300 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Feature grid (`features`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #0c0a09;
  --color-text: #ffffff;
  --color-muted: #a8a29e;
  --color-border: #ffffff;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#0c0a09',
    ink: '#ffffff',
    muted: '#a8a29e',
    line: '#ffffff',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large white serif, with the first word in italic
- **Do:** Keep navigation small, uppercase and letter-spaced
- **Do:** Separate the hero from body copy with a thin hairline
- **Don't:** Don't add an accent colour to the first screen
- **Don't:** Don't set the display headline in DM Sans.
- **Don't:** Don't set body copy in the display serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
