# Design system — Luxury Dental Clinic Landing Page Template

`SN-W02440` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The aesthetic dentistry hero is almost entirely black (#020202) and typographic. A very large white serif headline runs over two lines, with the middle word in italic grey (#71717a) as the only emphasis. Small outlined labels and thin-ruled link rows sit to the right, and one white button sits in the nav. The page is editorial and austere, and the headline size does the work.

**Mood:** austere, editorial, typographic, black

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#71717a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#52525b` · `#a1a1aa` · `#3f3f46` · `#000000` · `#18181b` · `#020202` · `#27272a` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 30px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="text-xs font-medium text-black bg-white px-4 py-2 hover:bg-zinc-200 transition-all duration-300 tracking-tight rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Services (`services`)
6. Articles (`blog-articles`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020202;
  --color-surface: #3f3f46;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #71717a;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    surface: '#3f3f46',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#71717a',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline very large in white serif, with the middle word in italic grey (#71717a)
- **Do:** Use outlined link rows with arrows for secondary navigation
- **Do:** Keep the page ground black (#020202) and let the headline fill the first screen
- **Don't:** Don't add colour; the page stays black, white and grey.
- **Don't:** Don't set the headline in sans-serif; the serif carries the look
- **Don't:** Don't add a filled button in the hero; the solid white control is the nav button only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
