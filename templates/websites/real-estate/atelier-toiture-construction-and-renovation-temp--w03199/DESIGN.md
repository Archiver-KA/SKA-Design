# Design system — Atelier Toiture Construction & Rénovation Template

`SN-W03199` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black roofing-contractor page with a large white sans-serif headline whose second line is set in lighter grey italic. Body copy is small and sits in a narrow column on the right, and the buttons are white pills. The page is monochrome, and a thin rule and small spaced caps divide the footer.

**Mood:** direct, monochrome, professional, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#18181b` · `#e4e4e7` · `#d4d4d8` · `#71717a` · `#52525b` · `#09090b` · `#a1a1aa` · `#fafafa` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 104px · h2 60px · h3 20px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-[0.14em]`, `tracking-[-0.03em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-5`, `gap-2`

**Primary button**

```html
<a class="group hidden items-center gap-2 rounded-full border border-white/40 bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 transition duration-300 hover:-translate-y-0.5 md:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Bento grid (`bento-grid`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #ffffff;
  --color-text: #e4e4e7;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#ffffff',
    ink: '#e4e4e7',
    muted: '#71717a',
    line: '#e4e4e7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large sans-serif, with the second line in light grey italic
- **Do:** Use white pill buttons for the primary and secondary actions
- **Do:** Divide the footer with a thin rule and small spaced caps
- **Don't:** Don't add colour to the page; it is monochrome
- **Don't:** Don't set body copy wider than the narrow right column
- **Don't:** Don't use light backgrounds for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
