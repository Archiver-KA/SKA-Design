# Design system — Financial Psychology & MoneySign Landing Page Template

`SN-W00935` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, scientific-feeling hero on warm black [#1c1917], with a faint red-brown radial glow and scattered serif words in low contrast that read as texture. White navigation sits on the top bar, and the Login link is muted gold.

**Mood:** scientific, mysterious, dark, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#d6d3d1` · `#a8a29e` · `#f5f5f4` · `#e7e5e4` · `#78716c` · `#57534e` · `#fdfbf7` · `#d4af37`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Fira Sans, Playfair Display, Cinzel
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-[1440px]`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="relative z-10 inline-flex items-center gap-3 bg-gold hover:bg-yellow-400 text-stone-950 px-10 py-5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(212,175,55,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #d4af37;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#d4af37',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Keep the background warm black with a low-opacity glow behind the hero
- **Do:** Use muted gold (#d4af37) for the login link and key labels only
- **Do:** Set scattered labels in a serif at low contrast so they read as texture
- **Don't:** Don't brighten the hero beyond the glow
- **Don't:** Don't use cream backgrounds; the ground is warm black
- **Don't:** Don't set body copy in gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
