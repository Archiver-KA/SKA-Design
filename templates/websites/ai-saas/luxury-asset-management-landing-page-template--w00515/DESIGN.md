# Design system — Luxury Asset Management Landing Page Template

`SN-W00515` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A black and gold private-wealth page on #0d0d0d with cream headlines, one of which is set in gold (#c9a96e) italic. Gold fills the primary button and the section rules, and grey-beige body copy sits quietly beneath. Blurred glass panels and a serif display face give it the restrained tone of a discreet advisory firm.

**Mood:** discreet, elegant, restrained, gold, formal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#141311` | Cards, panels, raised areas |
| Text | `#f2ede4` | Headings and primary copy |
| Muted text | `#b8b0a2` | Secondary copy, captions |
| Border | `#e3ddd1` | Hairlines, dividers, outlines |
| Accent | `#c9a96e` | Primary action and highlights |

Palette by frequency of use: `#c9a96e` · `#0d0d0d` · `#f2ede4` · `#b8b0a2` · `#9c7434` · `#26231e` · `#e3ddd1` · `#6e675c` · `#d4a340` · `#1c1915`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 16px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px)
- **Content width:** `max-w-[1140px]`, `max-w-[800px]`
- **Section padding:** `py-16`, `py-28`
- **Common gaps:** `gap-4`, `gap-10`, `gap-8`

**Primary button**

```html
<a class="bg-[#C9A96E] text-[#0D0D0D] text-xs font-semibold tracking-[0.14em] uppercase py-4 px-9 rounded min-h-[52px] flex items-center justify-center hover:bg-[#D4A340] hover:-translate-y-px transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. FAQ (`faq`)
6. Footer (`footer`)
7. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #141311;
  --color-text: #f2ede4;
  --color-muted: #b8b0a2;
  --color-border: #e3ddd1;
  --color-accent: #c9a96e;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#141311',
    ink: '#f2ede4',
    muted: '#b8b0a2',
    line: '#e3ddd1',
    accent: '#c9a96e',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Use gold (#c9a96e) for the primary button and the emphasis line in the headline.
- **Do:** Set headlines in cream (#f2ede4) on the black ground.
- **Do:** Keep body copy in the warm grey (#b8b0a2) at a readable size.
- **Don't:** Don't use gold for body text.
- **Don't:** Don't add saturated colour to the sections.
- **Don't:** Don't use a light background for the FAQ or footer.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
