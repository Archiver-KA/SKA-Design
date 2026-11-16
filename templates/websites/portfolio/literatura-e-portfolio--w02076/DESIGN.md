# Design system — Literatura e Portfolio

`SN-W02076` · portfolio · light mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A literary, editorial page on a warm cream ground (#fff8f5) with a large serif headline in near-black, its final line set in terracotta italic (#b35938). The eyebrow is a small tracked uppercase in the same terracotta, and text links are underlined in ink, so the accent is kept to the headline's last line and labels. The mood is essayistic and personal, with generous space above the headline.

**Mood:** literary, warm, personal, editorial, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff8f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#b35938` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#b35938` · `#292524` · `#78716c` · `#e7e5e4` · `#a8a29e` · `#57534e` · `#ffffff` · `#f5f5f4` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 20px
- **Weights in use:** thin, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_20px_40px_-10px_rgba(179,89,56,0.35)]`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-[#B35938] transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fff8f5;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #b35938;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff8f5',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#b35938',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the final line in terracotta italic (#b35938).
- **Do:** Use terracotta for the eyebrow and the emphasis line only.
- **Do:** Keep body copy in warm grey on the cream ground, with ink-underlined text links.
- **Don't:** Don't use terracotta for buttons or large fills; it is for type.
- **Don't:** Don't set the headline in a sans-serif face.
- **Don't:** Don't add cool colours; the palette stays cream, ink and terracotta.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
