# Design system — Elite Tennis Coaching Landing Page Template

`SN-W03460` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, photographic page for a tennis academy. Large Playfair Display headlines, with an italic second line, sit over greyscale sports imagery. Lime (#dfff4f) appears only in small uppercase labels and a circular seal badge, so the type and photography carry the page. Thin rules and generous spacing add a restrained, editorial feel.

**Mood:** editorial, dark, restrained, athletic, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dfff4f` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#dfff4f` · `#a1a1aa` · `#71717a` · `#09090b` · `#18181b` · `#000000` · `#e4e4e7` · `#d4d4d8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-accent`
- **Content width:** `max-w-7xl`, `max-w-[1800px]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="mt-8 w-full py-3 border border-white/10 text-white text-xs uppercase tracking-widest hover:bg-[#DFFF4F] hover:text-black transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Timeline (`timeline`)
5. Pricing (`pricing`)
6. Feature grid (`features`)
7. Logo cloud (`logo-cloud`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #dfff4f;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#dfff4f',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display, with italic for the second line
- **Do:** Use lime (#dfff4f) for small labels and one highlight per section
- **Do:** Keep hero imagery greyscale or darkened under the headline
- **Don't:** Don't use lime as a background fill for large areas
- **Don't:** Don't set the serif headlines in bold weights
- **Don't:** Don't place light text over bright photo areas without a dark overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
