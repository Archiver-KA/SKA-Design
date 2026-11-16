# Design system — Brutalist Designer Portfolio Template

`SN-W01847` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark navy technical layout where a large left headline sits beside a right column of labelled facts. Labels are small, uppercase and tracked, with values set large in Host Grotesk, so the page reads like a spec sheet. A horizontal marquee of repeated 'SELECTED WORKS' text and hairline grid lines give the structure. Colour is limited to navy and pale blue-white type.

**Mood:** technical, structured, dark, system-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030d17` | Page ground |
| Surface | `#182029` | Cards, panels, raised areas |
| Text | `#eff7ff` | Headings and primary copy |
| Border | `#182029` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#eff7ff` · `#182029` · `#030d17` · `#05111d` · `#071320` · `#0b1623` · `#dceeff` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Host Grotesk
- **Body:** Host Grotesk
- **Loaded families:** Geist, Geist Mono, Host Grotesk
- **Scale (largest breakpoint):** h1 14px · h2 96px · h3 36px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1440px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="flex items-center justify-between w-full py-4 border-t border-[#182029] group-hover:border-[#EFF7FF] transition-colors mt-4 bg-[#EFF7FF] text-[#030D17] px-4 -mx-4 group-hover:bg-[#dceeff]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Marquee (`marquee`)
3. Dashboard preview (`dashboard-preview`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030d17;
  --color-surface: #182029;
  --color-text: #eff7ff;
  --color-border: #182029;
  --font-display: "Host Grotesk", sans-serif;
  --font-body: "Host Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030d17',
    surface: '#182029',
    ink: '#eff7ff',
    line: '#182029',
  },
  fontFamily: { display: ['Host Grotesk'], sans: ['Host Grotesk'] },
} }
```

## Do and don't

- **Do:** Use small uppercase labels above large values in the right column
- **Do:** Separate blocks with hairline rules in #182029
- **Do:** Run a horizontal marquee of repeated text as the section divider
- **Don't:** Don't round the corners of the grid blocks
- **Don't:** Don't add colour accents; the page is navy and pale blue-white only
- **Don't:** Don't replace the hairline grid with filled cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
