# Design system — Electrical Services Landing Page Template

`SN-W03889` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A near-black page with very large uppercase white sans-serif headlines, where the second part of the headline is set in mid grey. A red eyebrow label and a red primary button are the only colour, and the hero is a full-width type block with no imagery. The scale and weight of the type carry the layout.

**Mood:** bold, stark, industrial, direct, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#999999` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e8222a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e8222a` · `#999999` · `#111111` · `#18181b` · `#141414` · `#161616` · `#000000` · `#0a0a0a` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Barlow Condensed
- **Body:** Barlow Condensed
- **Loaded families:** Barlow Condensed, Barlow
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 30px · body 14px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="hidden md:inline-flex bg-[#E8222A] hover:bg-white hover:text-[#111111] transition-colors duration-300 text-white font-condensed font-semibold uppercase tracking-wider text-xs px-6 py-3 items-center justify-center rounded-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Logo cloud (`logo-cloud`)
8. FAQ (`faq`)
9. Articles (`blog-articles`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #999999;
  --color-border: #ffffff;
  --color-accent: #e8222a;
  --font-display: "Barlow Condensed", sans-serif;
  --font-body: "Barlow Condensed", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#999999',
    line: '#ffffff',
    accent: '#e8222a',
  },
  fontFamily: { display: ['Barlow Condensed'], sans: ['Barlow Condensed'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans-serif, with the second part in grey
- **Do:** Use red (#e8222a) for the eyebrow label and the primary button only
- **Do:** Keep the hero to type alone, with the scale carrying the layout
- **Don't:** Don't set headlines in mixed case; the uppercase is the style
- **Don't:** Don't add imagery to the hero; the type fills the first screen
- **Don't:** Don't use red for large areas; it marks action and labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
