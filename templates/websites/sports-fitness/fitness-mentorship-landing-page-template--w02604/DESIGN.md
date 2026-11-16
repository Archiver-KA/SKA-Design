# Design system — Fitness Mentorship Landing Page Template

`SN-W02604` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A near-black coaching page with a red accent. The dark ground (#080304) carries large uppercase headlines with a red gradient on one word, and a red button sits at the top right. A dashboard card on a dark grey surface (#1e1e1e) with a red checkbox mirrors the product, so the page is recognised by red on black and tightly set uppercase headlines.

**Mood:** dark, aggressive, uppercase, red-accented, tight

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080304` | Page ground |
| Surface | `#1e1e1e` | Cards, panels, raised areas |
| Text | `#f0f0f0` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#1e1e1e` | Hairlines, dividers, outlines |
| Accent | `#e63946` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e63946` · `#ff4d4d` · `#1e1e1e` · `#a0a0a0` · `#080304` · `#110507` · `#333333` · `#f0f0f0` · `#0a0304`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Barlow Condensed
- **Body:** Barlow Condensed
- **Loaded families:** Barlow Condensed, Bebas Neue, DM Sans
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 36px · body 18px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_20px_40px_rgba(230,57,70,0.1)]`, `shadow-[0_0_20px_rgba(230,57,70,0.4)]`, `shadow-[0_0_20px_rgba(255,77,77,1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-gradient-to-r from-[#E63946] to-[#FF4D4D] hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] text-white text-sm font-normal px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #080304;
  --color-surface: #1e1e1e;
  --color-text: #f0f0f0;
  --color-muted: #555555;
  --color-border: #1e1e1e;
  --color-accent: #e63946;
  --font-display: "Barlow Condensed", sans-serif;
  --font-body: "Barlow Condensed", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080304',
    surface: '#1e1e1e',
    ink: '#f0f0f0',
    muted: '#555555',
    line: '#1e1e1e',
    accent: '#e63946',
  },
  fontFamily: { display: ['Barlow Condensed'], sans: ['Barlow Condensed'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase with tight leading.
- **Do:** Use red (#e63946) for the primary button and one highlighted word per headline only.
- **Do:** Keep panels on the dark ground using the #1e1e1e surface.
- **Don't:** Don't use light section backgrounds; the page stays dark.
- **Don't:** Don't set long body paragraphs in uppercase.
- **Don't:** Don't use red as a large background fill.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
