# Design system — Color Palette Generator

`SN-W01872` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light page on a white ground with a large black serif headline, where the word 'Curated' is set in italic serif. A dark side panel of swatch chips, the theme picker, supplies the only colour on the first screen. A thin black announcement line and a plain black nav sit above the content.

**Mood:** refined, luxury, light, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 30px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-[0.2em]`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1920px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-1`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="text-[var(--bg-contrast)] bg-white hover:bg-[var(--bg-main)] hover:text-[var(--text-main)] uppercase transition-all duration-300 transform hover:-translate-y-0.5 text-xs font-bold tracking-[0.2em] py-4 px-8 border border-white">…</a>
```

## Page structure

Blocks in page order:

1. Booking form (`booking`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Code / terminal (`code-terminal`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large black serif, with one word in italic
- **Do:** Show colour only through the swatch panel or product imagery
- **Do:** Keep the nav thin and black, with small uppercase labels
- **Don't:** Don't use the serif headline face for body text
- **Don't:** Don't add a second typeface
- **Don't:** Don't use the swatch panel for brand accents outside its own UI

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
