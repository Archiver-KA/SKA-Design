# Design system — Luxury Wedding Photography Landing Page Template

`SN-W03720` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black page with a large, left-aligned sans headline in white, set over two lines beside a light-grey paragraph in a column on the right. A thin circular text ring in the corner adds a quiet editorial detail, and navigation is a row of small spaced caps. The layout is spare and asymmetric, which leaves room for the photography to lead.

**Mood:** editorial, sparse, asymmetric, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#455ce9` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#6b7280` · `#18181b` · `#d1d5db` · `#000000` · `#9ca3af` · `#374151` · `#4b5563` · `#738065`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Arial
- **Body:** Arial
- **Loaded families:** Google Sans Flex, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 48px · body 20px
- **Weights in use:** extralight, thin, light
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-[100rem]`, `max-w-[90rem]`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-8`, `gap-24`, `gap-12`

**Primary button**

```html
<a class="w-full md:w-auto bg-white text-[#0A0A0A] px-12 py-4 text-sm uppercase tracking-[0.2em] font-thin hover:bg-gray-200 transition-colors duration-300 mt-8 flex items-center justify-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. FAQ (`faq`)
7. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #455ce9;
  --font-display: "Arial", sans-serif;
  --font-body: "Arial", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#455ce9',
  },
  fontFamily: { display: ['Arial'], sans: ['Arial'] },
} }
```

## Do and don't

- **Do:** Set the hero headline large in white, left-aligned, over two lines
- **Do:** Place a light-grey paragraph in a column on the right of the hero
- **Do:** Keep navigation as small spaced caps across the top
- **Don't:** Don't centre the hero; the asymmetry between headline and paragraph is the layout
- **Don't:** Don't add a bright accent colour; the palette stays black, white and grey
- **Don't:** Don't crowd the first screen with cards or badges; empty space carries the tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
