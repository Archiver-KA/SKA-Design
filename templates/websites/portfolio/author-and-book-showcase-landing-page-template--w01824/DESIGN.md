# Design system — Author & Book Showcase Landing Page Template

`SN-W01824` · portfolio · light mode · Sinera Atlas theme `workshop` · language `tr`

## Direction

Literary and warm on white: a large serif headline in deep navy (#14213d) sits beside a fanned row of colourful book covers, with a navy primary button and a thin underlined text link beside it. Small grey trust lines sit below. The design is calm and bookish, with the covers supplying the colour and the navy giving the structure. A dark navy strip runs across the top.

**Mood:** literary, calm, bookish, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#14213d` | Primary action and highlights |
| Second accent | `#0e1b34` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#14213d` · `#cbd5e1` · `#0e1b34` · `#e2e8f0` · `#64748b` · `#5a6478` · `#94a3b8` · `#f1f5f9` · `#2f5fd0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fraunces
- **Body:** Fraunces
- **Loaded families:** Fraunces, Inter, Kumbh Sans
- **Scale (largest breakpoint):** h1 52px · h2 48px · h3 20px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_6px_24px_-16px_rgba(20,33,61,0.25)]`, `shadow-[0_14px_38px_-20px_rgba(20,33,61,0.32)]`, `shadow-[0_10px_20px_-8px_rgba(20,33,61,0.45)]`
- **Content width:** `max-w-[1340px]`, `max-w-7xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-lg bg-[#14213D] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_12px_30px_-12px_rgba(20,33,61,0.55)] transition-colors hover:bg-[#1E3157]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #14213d;
  --color-accent-2: #0e1b34;
  --font-display: "Fraunces", serif;
  --font-body: "Fraunces", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f1f5f9',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#14213d',
    accent2: '#0e1b34',
  },
  fontFamily: { display: ['Fraunces'], sans: ['Fraunces'] },
} }
```

## Do and don't

- **Do:** Set the main headline in serif with navy (#14213d) text
- **Do:** Let the book covers supply the colour in the hero
- **Do:** Pair a navy filled button with an underlined text link
- **Don't:** Don't use the green (#10b981) in the hero.
- **Don't:** Don't tint the page background; keep it white
- **Don't:** Don't set headlines in a sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
