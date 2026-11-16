# Design system — Wedding Photography Portfolio Template

`SN-W02298` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `nl`

## Direction

A dark, desaturated landscape photograph of a couple on a misty hill, with a large centred white uppercase sans headline stacked over four lines. A single solid white button with dark caps sits at the bottom centre, and the navigation is small, spaced capitals. Black, white and grey only, so the page reads as quiet and formal.

**Mood:** formal, quiet, monochrome, elegant, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#151515` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#aeaeae` | Secondary copy, captions |
| Border | `#aeaeae` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#aeaeae` · `#151515` · `#ffffff` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Oswald
- **Scale (largest breakpoint):** h1 112px · h2 60px · h3 72px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-5xl`
- **Section padding:** `py-16`, `py-40`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="mt-8 px-10 py-5 bg-white text-[#151515] text-xs uppercase tracking-[0.2em] hover:bg-[#aeaeae] hover:text-white transition-all duration-500 flex items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #151515;
  --color-text: #ffffff;
  --color-muted: #aeaeae;
  --color-border: #aeaeae;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#151515',
    ink: '#ffffff',
    muted: '#aeaeae',
    line: '#aeaeae',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white uppercase sans, stacked and centred
- **Do:** Use a solid white button with dark caps as the only call to action
- **Do:** Keep navigation in small, spaced uppercase
- **Don't:** Don't add colour accents; the palette is black, white and grey
- **Don't:** Don't use a pale photograph behind the white headline
- **Don't:** Don't left-align the headline; it is centred

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
