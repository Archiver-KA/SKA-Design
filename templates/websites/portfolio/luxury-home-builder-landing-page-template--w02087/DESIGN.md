# Design system — Luxury Home Builder Landing Page Template

`SN-W02087` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet dark homebuilder page with a flat charcoal ground [#1f1f1f] and large white serif headlines, where the second line switches to italic for emphasis. The gold eyebrow label [#d4af37] and the outlined inquiry button are the only colour, used sparingly. Spacing is generous, and the nav is small, light text on the same ground.

**Mood:** quiet, dark, elegant, restrained, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1f1f1f` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4af37` · `#1a1a1a` · `#6b7280` · `#9ca3af` · `#1f1f1f` · `#000000` · `#4b5563` · `#e5e5e5` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_10px_#D4AF37]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="cursor-hover relative overflow-hidden group bg-white text-[#1a1a1a] px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#D4AF37] transition-colors duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Case studies (`case-studies`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1f1f1f;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1f1f1f',
    ink: '#ffffff',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set each headline in serif, with the second line in italic as in the hero.
- **Do:** Use gold (#d4af37) only for eyebrow labels and one link per section.
- **Do:** Keep the nav outlined: a single bordered button on the right, with no fill.
- **Don't:** Don't add a filled colour block to the hero; the ground stays charcoal.
- **Don't:** Don't set headline text in gold.
- **Don't:** Don't put shadows or gradients behind the type.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
