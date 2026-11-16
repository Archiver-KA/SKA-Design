# Design system — Atlas Music Venue & Creative Space Template

`SN-W03670` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black, high-contrast music venue page with very large uppercase white headlines stacked across the hero, set over a faded photograph and an oversized grey wordmark. The text is left-aligned and dense, and the two calls to action are a solid white button and an outlined one. The design takes its energy from scale and contrast rather than colour.

**Mood:** bold, raw, monochrome, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#18181b` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#000000` · `#71717a` · `#18181b` · `#d4d4d8` · `#3f3f46` · `#09090b` · `#27272a` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 112px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px)
- **Content width:** `max-w-[1400px]`, `max-w-[280px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-between border border-white bg-white text-black px-6 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-transparent hover:text-white transition-colors w-full sm:w-auto min-w-[200px] group duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Listings (`listings`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #18181b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in very large uppercase white type over three lines
- **Do:** Pair a solid white button with an outlined button for the two calls to action
- **Do:** Keep the grey wordmark behind the hero at low contrast
- **Don't:** Don't introduce colour; the page is strictly black, white and grey
- **Don't:** Don't set the headline in a weight lighter than bold
- **Don't:** Don't place body text over the photograph without a dark overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
