# Design system — SATURNIAN Space Exploration

`SN-W00693` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A stark, cinematic black hero with a large, bold uppercase sans title, centred over a small letter-spaced eyebrow. Body copy is short and light grey, and a thin outlined button with uppercase labels is the only interactive element on the first screen. The page relies on negative space and type rather than colour, which gives it a restrained, space-mission tone.

**Mood:** cinematic, stark, restrained, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · body 16px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Common gaps:** `gap-6`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-10 py-4 border border-white text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the title in a large bold uppercase sans, centred on black
- **Do:** Use a thin outlined button with letter-spaced uppercase labels as the only action
- **Do:** Keep body copy short and light grey, with a small uppercase eyebrow above the title
- **Don't:** Don't add colour to the hero; the page is black and white
- **Don't:** Don't fill the button; the outline is the style
- **Don't:** Don't add a background image without a dark overlay; the title needs contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
