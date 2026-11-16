# Design system — Pilates Studio & Café Landing Page Template

`SN-W02668` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, light studio page on off-white (#faf9f6) in which a full-width rounded photograph carries the hero. The headline mixes upright and italic serif words, set in dark warm brown (#4a4036), so the type feels editorial and calm. A marquee strip of italic serif words runs under the hero. Buttons are white or outlined pills, which keeps the palette quiet and neutral.

**Mood:** calm, editorial, warm-neutral, airy, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4a4036` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f0` | Hairlines, dividers, outlines |
| Accent | `#bc8f78` | Primary action and highlights |

Palette by frequency of use: `#bc8f78` · `#ffffff` · `#78716c` · `#4a4036` · `#292524` · `#faf9f6` · `#d6d3cd` · `#f5f5f0` · `#eae8e4` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_20px_40px_rgba(0,0,0,0.04)]`, `shadow-xl`, `shadow-[#292524]/5`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-8`, `gap-6`, `gap-20`

**Primary button**

```html
<a class="w-full py-3 rounded-xl bg-[#BC8F78] text-white text-sm hover:bg-[#A67C65] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #4a4036;
  --color-muted: #78716c;
  --color-border: #f5f5f0;
  --color-accent: #bc8f78;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    ink: '#4a4036',
    muted: '#78716c',
    line: '#f5f5f0',
    accent: '#bc8f78',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Mix upright and italic serif in the headline, with the italic on the key words.
- **Do:** Frame hero photographs with a rounded radius of about 2rem.
- **Do:** Use dark warm brown (#4a4036) for headline text on the off-white ground.
- **Don't:** Don't use the terracotta accent as a large fill; the page is neutral.
- **Don't:** Don't set body copy in the serif.
- **Don't:** Don't use pure black for text; the warm brown is the text colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
