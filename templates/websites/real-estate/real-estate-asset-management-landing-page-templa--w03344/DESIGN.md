# Design system — Real Estate Asset Management Landing Page Template

`SN-W03344` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A dark, understated advisory page built on near-black (#0d0d0d), with cream headline type and one gold (#c9a96e) for the eyebrow labels, the italic emphasised word and the primary button. The headline is a large serif with a single italic phrase, and small labels are set in letter-spaced uppercase. Thin gold rules and a centred crest mark give it a private, restrained tone.

**Mood:** refined, dark, understated, private

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f2ede4` | Headings and primary copy |
| Muted text | `#b8b0a2` | Secondary copy, captions |
| Border | `#26231e` | Hairlines, dividers, outlines |
| Accent | `#c9a96e` | Primary action and highlights |

Palette by frequency of use: `#c9a96e` · `#9c7434` · `#b8b0a2` · `#6e675c` · `#0d0d0d` · `#26231e` · `#f2ede4` · `#1c1915` · `#141311` · `#fbf9f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Montserrat
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 12px
- **Weights in use:** normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-[420px]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="relative overflow-hidden group text-xs text-[#0D0D0D] bg-[#C9A96E] hover:bg-[#D4A340] transition-colors px-5 py-3 font-normal">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #ffffff;
  --color-text: #f2ede4;
  --color-muted: #b8b0a2;
  --color-border: #26231e;
  --color-accent: #c9a96e;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#ffffff',
    ink: '#f2ede4',
    muted: '#b8b0a2',
    line: '#26231e',
    accent: '#c9a96e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large serif in cream (#f2ede4) with one italic phrase in gold (#c9a96e)
- **Do:** Use gold (#c9a96e) for the primary button, labels and the emphasised word only
- **Do:** Set small labels in letter-spaced uppercase
- **Don't:** Don't use bright or saturated colours; the palette is near-black, cream and gold
- **Don't:** Don't place gold text on the gold button or on light sections
- **Don't:** Don't add rounded, heavy or glossy buttons; the buttons are flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
