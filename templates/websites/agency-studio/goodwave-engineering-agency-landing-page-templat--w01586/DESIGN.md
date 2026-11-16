# Design system — GOODWAVE Engineering Agency Landing Page Template

`SN-W01586` · agency-studio · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A white ground with a very heavy black headline over three lines, one italic word, and a lime (#dfff00) bar behind the final line. Lime also washes softly across the top-left corner, and the primary button is black. Black type on white with one lime highlight gives the page a bold, industrial look.

**Mood:** industrial, bold, high-contrast, direct, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#09090b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dfff00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#dfff00` · `#000000` · `#71717a` · `#e4e4e7` · `#09090b` · `#d4d4d8` · `#a1a1aa` · `#f4f4f5` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 10px · h3 30px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-zinc-200/50`, `shadow-[0_0_50px_rgba(223,255,0,0.5)]`
- **Content width:** `max-w-[100rem]`, `max-w-5xl`
- **Section padding:** `py-40`
- **Common gaps:** `gap-4`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-16 py-8 bg-[#DFFF00] text-black text-sm font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #09090b;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #dfff00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#09090b',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#dfff00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy black sans with one italic word
- **Do:** Use lime (#dfff00) as a highlight bar behind the final headline line only
- **Do:** Keep the primary button black with fully rounded corners
- **Don't:** Don't flood the page with lime; it stays a highlight
- **Don't:** Don't set the italic word in a bold weight; keep the contrast of styles
- **Don't:** Don't set text in lime on white; it is too pale to read

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
