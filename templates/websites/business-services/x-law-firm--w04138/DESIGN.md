# Design system — X Law Firm

`SN-W04138` · business-services · dark mode · Sinera Atlas theme `route` · language `en-US`

## Direction

A near-black hero with a large white serif headline, where the final word is set in italic bronze (#9d6b3d). The primary button is bronze with white text, beside a thin-outlined secondary button. A row of large serif figures sits beneath, each above a small uppercase label, and the restrained palette keeps bronze as the only colour.

**Mood:** premium, restrained, dark, serif-led, authoritative

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#9ca3af` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#9d6b3d` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9d6b3d` · `#6b7280` · `#9ca3af` · `#050505` · `#0a0a0a` · `#d1d5db` · `#0f0f0f` · `#000000` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_30px_-5px_rgba(157,107,61,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="w-full bg-[#9d6b3d] text-white py-4 text-center text-sm font-semibold uppercase tracking-widest rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Team (`team`)
6. Logo cloud (`logo-cloud`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #9ca3af;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #9d6b3d;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#9ca3af',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#9d6b3d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif face with the final word in italic bronze (#9d6b3d)
- **Do:** Use bronze (#9d6b3d) for the primary button only
- **Do:** Present figures as large serif numerals above small uppercase labels
- **Don't:** Don't add bright colours to the hero
- **Don't:** Don't use drop shadows on the buttons
- **Don't:** Don't set headlines in a sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
