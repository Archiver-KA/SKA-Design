# Design system — Northline Creative Agency Landing Page Template

`SN-W01652` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black minimal page where the only colour is a lime green (#c7ff39) on the header button and accent marks. The header is sparse, with a small wordmark and a few text links, and the hero is largely empty dark space. The stance is spare and confident, with the lime doing all the emphasis.

**Mood:** minimal, sparse, confident, high-contrast, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#060807` | Page ground |
| Surface | `#0a0d0b` | Cards, panels, raised areas |
| Text | `#f2f4ef` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c7ff39` | Primary action and highlights |

Palette by frequency of use: `#c7ff39` · `#ffffff` · `#a1a1aa` · `#71717a` · `#d4d4d8` · `#071008` · `#0a0d0b` · `#060807` · `#e1ff8b` · `#0d100e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-5`, `gap-3`

**Primary button**

```html
<a class="hidden items-center gap-2 rounded-sm bg-[#c7ff39] px-4 py-2.5 text-sm font-semibold text-[#071008] transition hover:bg-[#e1ff8b] focus:outline-none focus:ring-2 focus:ring-white md:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #060807;
  --color-surface: #0a0d0b;
  --color-text: #f2f4ef;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #c7ff39;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#060807',
    surface: '#0a0d0b',
    ink: '#f2f4ef',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#c7ff39',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#c7ff39) only for the header button and one highlight per section
- **Do:** Keep the hero mostly empty dark space with type placed left or centred
- **Do:** Set nav links in muted grey (#a1a1aa) at small size
- **Don't:** Don't use lime for large fills or backgrounds
- **Don't:** Don't add a second accent colour
- **Don't:** Don't crowd the hero with imagery; the design relies on negative space

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
