# Design system — Health & Wellness Consultant Template

`SN-W02389` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A restrained consultant hero on a warm off-white ground, with a large tight sans-serif headline in near-black and a short grey intro line. The primary button is a solid near-black pill, and the right side holds a neutral placeholder panel for a headshot. There is no accent colour on the first screen, so the page relies on type scale, space and a single dark button.

**Mood:** restrained, professional, spacious, neutral, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#292524` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#292524` · `#1c1917` · `#e7e5e4` · `#f5f5f4` · `#a8a29e` · `#57534e` · `#ffffff` · `#44403c` · `#fafaf9` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-stone-100/50`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-5`, `gap-3`, `gap-16`

**Primary button**

```html
<a class="inline-flex justify-center items-center bg-stone-900 text-stone-50 px-8 py-4 rounded-full font-medium text-sm hover:bg-stone-800 transition-all shadow-sm w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Services (`services`)
7. Testimonials (`testimonials`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #292524;
  --color-border: #e7e5e4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#292524',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter with tight leading and a large size.
- **Do:** Use the near-black pill (#1c1917) as the single primary button.
- **Do:** Keep the page on the warm off-white ground (#fafaf9) with white panels.
- **Don't:** Don't add a brand colour; the page is neutral.
- **Don't:** Don't crowd the headshot panel with overlays.
- **Don't:** Don't use a second filled button in the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
