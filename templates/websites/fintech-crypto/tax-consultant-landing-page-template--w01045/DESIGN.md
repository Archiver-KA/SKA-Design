# Design system — Tax Consultant Landing Page Template

`SN-W01045` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black advisory page has a bold white sans headline over two lines, where the second word is a grey gradient that fades downward. Four stat tiles sit in a row, each with a dark fill, a thin border and a large white figure, which gives a numbers-first, credible tone. Faint dots and a soft glow sit behind the hero, and the page stays almost monochrome.

**Mood:** credible, monochrome, numbers-first, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f5f5f4` | Primary action and highlights |

Palette by frequency of use: `#78716c` · `#a8a29e` · `#e7e5e4` · `#d6d3d1` · `#f5f5f4` · `#57534e` · `#262626` · `#171717` · `#44403c` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-5`

**Primary button**

```html
<a class="magnetic-btn w-full py-4 bg-gradient-to-r from-stone-600 to-stone-700 rounded-xl text-stone-100 font-medium hover:from-stone-500 hover:to-stone-600 transition-all duration-500 flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Marquee (`marquee`)
6. Services (`services`)
7. Articles (`blog-articles`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #d6d3d1;
  --color-muted: #78716c;
  --color-border: #262626;
  --color-accent: #f5f5f4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#d6d3d1',
    muted: '#78716c',
    line: '#262626',
    accent: '#f5f5f4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans, with the second line in a grey gradient
- **Do:** Put key figures in dark stat tiles with thin borders and large white numbers
- **Do:** Keep the page ground at #0a0a0a and cards in #262626 with matching borders
- **Don't:** Don't use brown (#92400e); the page has no brown.
- **Don't:** Don't set the stat figures in colour; they stay white
- **Don't:** Don't let the background glow compete with the stat tiles

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
