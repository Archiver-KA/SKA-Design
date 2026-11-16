# Design system — Foodservice Sustainability & Logistics Landing Page Template

`SN-W03912` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A deep teal ground carries large cream sans headlines, with one key word set in pale lime (#e2f89c) to mark the point of the message. Geist sets the text with generous leading, and the primary action is a pale lime pill beside a quiet text link. The layout is wide and open, with no photography or heavy effects in the hero, so the page reads as calm and organised.

**Mood:** calm, organised, open, technical, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#072524` | Page ground |
| Surface | `#0a2d2c` | Cards, panels, raised areas |
| Text | `#fcfaf5` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#e2f89c` | Primary action and highlights |
| Second accent | `#2463eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fcfaf5` · `#e2f89c` · `#121c40` · `#203b3a` · `#072524` · `#363e5d` · `#2463eb` · `#e5e7eb` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Geist Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 36px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="font-mono text-sm tracking-widest uppercase bg-[#E2F89C] text-[#072524] px-6 py-3 rounded-full hover:bg-white transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Logo cloud (`logo-cloud`)
9. Schedule (`schedule-agenda`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #072524;
  --color-surface: #0a2d2c;
  --color-text: #fcfaf5;
  --color-border: #e5e7eb;
  --color-accent: #e2f89c;
  --color-accent-2: #2463eb;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#072524',
    surface: '#0a2d2c',
    ink: '#fcfaf5',
    line: '#e5e7eb',
    accent: '#e2f89c',
    accent2: '#2463eb',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set one key word of each headline in pale lime (#e2f89c) and keep the rest in cream (#fcfaf5).
- **Do:** Use the pale lime pill for the primary action and text links for secondary ones.
- **Do:** Keep the hero on the deep teal ground with generous space around the headline.
- **Don't:** Don't introduce blue accents; the hero shows only teal, cream and lime.
- **Don't:** Don't use lime for long text; it stays on single words and buttons.
- **Don't:** Don't crowd the hero; keep wide margins around the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
