# Design system — Restaurant Landing Page Template

`SN-W02983` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, cinematic serif page: the near-black ground (#0a0a0a) carries a very large Forum headline in white, with the phrase Crafted by Fire set in rust italic (#c65a1e). Copy is grey and centred, and the same rust is the one solid button, Book a Table. Below the hero the page moves into a form card on a dark surface.

**Mood:** dark, cinematic, serif-led, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c65a1e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c65a1e` · `#0a0a0a` · `#737373` · `#111111` · `#a3a3a3` · `#d4d4d4` · `#525252` · `#a84915` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Forum
- **Body:** Forum
- **Loaded families:** Forum, Open Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(198,90,30,0.4)]`, `shadow-[0_0_25px_rgba(198,90,30,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#C65A1E] rounded-xl hover:bg-[#a84915] hover:shadow-[0_0_20px_rgba(198,90,30,0.4)] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Booking form (`booking`)
4. About (`about`)
5. Feature grid (`features`)
6. Menu list (`menu-list`)
7. Timeline (`timeline`)
8. Articles (`blog-articles`)
9. Map / location (`map-location`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #111111;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #c65a1e;
  --font-display: "Forum", sans-serif;
  --font-body: "Forum", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#111111',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#ffffff',
    accent: '#c65a1e',
  },
  fontFamily: { display: ['Forum'], sans: ['Forum'] },
} }
```

## Do and don't

- **Do:** Set the rust italic (#c65a1e) on one phrase per headline only.
- **Do:** Use the rust fill for the Book a Table button only.
- **Do:** Set headlines in Forum at a large size, centred, with line breaks after short phrases.
- **Don't:** Don't set body copy in white; use the muted grey.
- **Don't:** Don't set the whole headline in the rust italic.
- **Don't:** Don't put a light ground behind the copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
