# Design system — Jean-Luc De Wachter - Conseiller spirituel

`SN-W02061` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A dark, austere coaching page on near-black (#0a0a0a) with a faint monochrome portrait behind a centred white serif headline. The only colour is a thin gold (#b8860b) outline on the call to action, and the small tracked eyebrow above the title is gold too. The headline is large and light, so the page reads as formal and quiet.

**Mood:** austere, formal, quiet, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#b8860b` | Primary action and highlights |

Palette by frequency of use: `#f5f5f5` · `#d4af37` · `#0a0a0a` · `#b8860b` · `#555555` · `#222222` · `#020617` · `#ffffff` · `#cccccc` · `#9c7109`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant
- **Body:** Cormorant
- **Loaded families:** Cormorant, Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 36px · body 18px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-none` (0)
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Section padding:** `py-48`, `py-[80px]`
- **Common gaps:** `gap-3`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-3 border border-[#D4AF37] text-[#D4AF37] px-10 py-5 rounded-full hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-500 font-light text-lg group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #555555;
  --color-border: #f5f5f5;
  --color-accent: #b8860b;
  --font-display: "Cormorant", serif;
  --font-body: "Cormorant", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    muted: '#555555',
    line: '#f5f5f5',
    accent: '#b8860b',
  },
  fontFamily: { display: ['Cormorant'], sans: ['Cormorant'] },
} }
```

## Do and don't

- **Do:** Set the headline in Cormorant at large size, in white, centred.
- **Do:** Use gold (#b8860b) only for the outline button and the eyebrow line.
- **Do:** Keep the ground near-black with a faint monochrome image behind the copy.
- **Don't:** Don't fill the gold button; it is an outline.
- **Don't:** Don't use bright colours in the hero.
- **Don't:** Don't set the headline in a bold sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
