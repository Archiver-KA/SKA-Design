# Design system — Club Made in City

`SN-W03037` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black page with a faint carved-arch pattern behind the hero. The headline is a heavy, high-contrast serif in white over two centred lines, with the last word in a silver gradient. Thin-outlined buttons carry the actions, and small spaced uppercase labels keep the tone exclusive.

**Mood:** exclusive, dark, editorial, discreet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#c09c6e` · `#737373` · `#525252` · `#0a0a0a` · `#080808` · `#a3a3a3` · `#000000` · `#0f0f0f` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system
- **Loaded families:** Geist, Roboto, Montserrat, Playfair Display, Poppins, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full group inline-flex justify-center items-center gap-3 px-8 py-4 bg-[#C09C6E] text-black text-[11px] uppercase tracking-widest font-semibold hover:bg-[#d4b58b] transition-colors mt-6 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Timeline (`timeline`)
5. Services (`services`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#333333',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy high-contrast serif, with the final word in silver gradient
- **Do:** Use thin-outlined buttons for the actions
- **Do:** Keep the background near-black with the faint architectural pattern
- **Don't:** Don't use camel (#c09c6e) as a background; the ground is black.
- **Don't:** Don't set the headline in a sans; it is serif.
- **Don't:** Don't add bright colour; the palette is black, white and silver

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
