# Design system — Barbershop Landing Page Template

`SN-W02713` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Barbershop page whose hero is a dark photograph of a man with a hand in his hair, not the tan ground the template is labelled with. A white serif headline sits on the left, with the second line in lighter grey italic, and a small tracked label sits above it. The page is cinematic and restrained, and the serif carries the tone with no colour accent on the first screen.

**Mood:** cinematic, restrained, dark, serif

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#171717` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#bca37f` · `#ffffff` · `#030303` · `#737373` · `#d4d4d4` · `#171717` · `#a3a3a3` · `#e5e5e5` · `#000000` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Cormorant Garamond, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 12px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-40`, `py-12`
- **Common gaps:** `gap-12`, `gap-16`, `gap-24`

**Primary button**

```html
<a class="w-full bg-white text-black py-4 px-8 uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#bca37f] hover:text-white transition-all duration-500 mt-4 group flex justify-center items-center space-x-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Timeline (`timeline`)
5. Logo cloud (`logo-cloud`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #171717;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    ink: '#ffffff',
    muted: '#525252',
    line: '#171717',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the hero on a dark photograph with a black gradient overlay on the left.
- **Do:** Set headlines in a white serif, with the second line in italic light grey.
- **Do:** Keep the small kicker label tracked and uppercase above the headline.
- **Don't:** Don't set the page ground in tan (#bca37f); the first screen is dark.
- **Don't:** Don't set headlines in black; they are white on this ground.
- **Don't:** Don't add a bright accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
