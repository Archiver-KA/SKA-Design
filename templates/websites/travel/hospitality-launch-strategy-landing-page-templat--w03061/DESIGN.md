# Design system — Hospitality Launch Strategy Landing Page Template

`SN-W03061` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A loud editorial launch page on a saturated yellow ground (#facc15), with near-black type and an oversized italic serif headline that reads as a poster. The left column holds the headline and small caps labels, while a short body paragraph sits on the right at small size. Almost no ornament is used; the colour block and type scale carry the page.

**Mood:** bold, poster-like, editorial, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#facc15` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#141414` | Headings and primary copy |
| Border | `#141414` | Hairlines, dividers, outlines |
| Accent | `#141414` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#141414` · `#dc2626` · `#fbf7ef` · `#ffffff` · `#facc15` · `#f2ede4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Instrument Serif, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 60px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-screen-2xl`, `max-w-screen-md`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-3 px-8 py-4 border border-[#141414] bg-[#141414] text-[#FBF7EF] hover:bg-[#DC2626] hover:border-[#DC2626] transition-all duration-300 rounded-full group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #facc15;
  --color-surface: #ffffff;
  --color-text: #141414;
  --color-border: #141414;
  --color-accent: #141414;
  --color-accent-2: #facc15;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#facc15',
    surface: '#ffffff',
    ink: '#141414',
    line: '#141414',
    accent: '#141414',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use yellow (#facc15) as the full page ground for the hero
- **Do:** Set the main headline very large in an italic serif in near-black (#141414)
- **Do:** Keep small body text in a narrow column on the right
- **Don't:** Don't use the cream (#fbf7ef) as the page ground; the page is yellow
- **Don't:** Don't add red (#dc2626) blocks to the hero
- **Don't:** Don't use rounded cards; the layout is square and typographic

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
