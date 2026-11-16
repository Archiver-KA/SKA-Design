# Design system — Interior Design Studio Landing Page Template

`SN-W03261` · real-estate · light mode · Sinera Atlas theme `dwell` · language `sk`

## Direction

Bold and service-led: the first screen sits on a dimmed grey photograph with a large white sans headline in short lines. Supporting copy is a muted light grey, and a row of white stat cards runs along the bottom edge with plain figures and small labels. Buttons are a solid pale pill beside an outlined pill. The overall stance is clear and direct, with big statements and short copy.

**Mood:** bold, direct, service-led, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e7e5e4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#ffffff` · `#57534e` · `#e7e5e4` · `#a8a29e` · `#fafaf9` · `#f5f5f4` · `#78716c` · `#656d4a` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-stone-200/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-stone-900 rounded-full hover:bg-stone-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Call to action (`cta`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #e7e5e4;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e7e5e4',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#57534e',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in Plus Jakarta Sans at large size, in short lines of white over the dimmed photograph.
- **Do:** Show key figures as plain numbers on white cards along the hero's lower edge.
- **Do:** Pair one solid pill button with one outlined pill for the primary and secondary actions.
- **Don't:** Don't lighten the hero overlay; the white headline needs the dimmed ground.
- **Don't:** Don't add a second accent colour; the page stays neutral.
- **Don't:** Don't use long paragraphs in the hero; keep copy to a few lines.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
