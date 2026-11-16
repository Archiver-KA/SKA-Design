# Design system — Studio Tret  | Visual Equity for SaaS & Consulting

`SN-W01711` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en-US`

## Direction

A near-black split hero with a left-aligned headline stacked in three heavy lines, and the last line, 'It's an asset.', in muted grey. A small outlined pill with spaced caps sits above the headline, and a wireframe mock sits on the right. Pink-red (#f60261) is kept to the logo dot and the label pill, and the primary button is white.

**Mood:** bold, stark, premium, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0d10` | Page ground |
| Surface | `#0b0d10` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f60261` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#0b0d10` · `#9ca3af` · `#f60261` · `#111111` · `#000000` · `#d1d5db` · `#4b5563` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter Tight, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tightest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-[0_0_30px_rgba(246,2,97,0.15)]`
- **Content width:** `max-w-[1440px]`, `max-w-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 border border-white/20 text-xs font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Services (`services`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0b0d10;
  --color-surface: #0b0d10;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f60261;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0d10',
    surface: '#0b0d10',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f60261',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Stack the headline in three heavy lines, and set the last line in muted grey (#6b7280).
- **Do:** Use pink-red (#f60261) only for the logo dot and the small label pill.
- **Do:** Make the primary button white with black text.
- **Don't:** Don't use pink-red as a button fill; keep buttons white.
- **Don't:** Don't use a light background; the ground is near-black.
- **Don't:** Don't add shadows to the wireframe mock; separate it with a thin border.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
