# Design system — Narrative Artist Portfolio Website Template

`SN-W02135` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A restrained editorial author page on a warm cream ground (#f9f7f2) with near-black serif headlines in Lora. The second line of the hero is set in italic mid grey (#6b6b6b), a quiet contrast that does the emphasis job without colour. Small pill labels, a thin outline contact button and a circular scroll control give the chrome a literary, printed feel.

**Mood:** literary, editorial, warm, quiet, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f7f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2c2c2c` | Headings and primary copy |
| Muted text | `#6b6b6b` | Secondary copy, captions |
| Border | `#2c2c2c` | Hairlines, dividers, outlines |
| Accent | `#6b6b6b` | Primary action and highlights |

Palette by frequency of use: `#2c2c2c` · `#c8a398` · `#1a1a1a` · `#ffffff` · `#6b6b6b` · `#000000` · `#f9f7f2` · `#e5e0d8` · `#d4c5b0` · `#f2ece4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lora
- **Body:** Lora
- **Loaded families:** Lora, Playfair Display, Inter, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-[2px]` (2px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#1A1A1A] text-white px-8 py-4 rounded-sm font-sans-ui text-xs uppercase tracking-widest hover:bg-[#C8A398] transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Bento grid (`bento-grid`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9f7f2;
  --color-surface: #ffffff;
  --color-text: #2c2c2c;
  --color-muted: #6b6b6b;
  --color-border: #2c2c2c;
  --color-accent: #6b6b6b;
  --font-display: "Lora", serif;
  --font-body: "Lora", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f7f2',
    surface: '#ffffff',
    ink: '#2c2c2c',
    muted: '#6b6b6b',
    line: '#2c2c2c',
    accent: '#6b6b6b',
  },
  fontFamily: { display: ['Lora'], sans: ['Lora'] },
} }
```

## Do and don't

- **Do:** Set headlines in Lora, with the second line in italic mid grey (#6b6b6b).
- **Do:** Keep the cream ground (#f9f7f2) and use white (#ffffff) only for cards.
- **Do:** Use thin outline pills for small labels and the contact action.
- **Don't:** Don't add a dusty-pink accent to the page.
- **Don't:** Don't set headlines in heavy weights; the look depends on the serif's natural weight.
- **Don't:** Don't use dark section backgrounds in the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
