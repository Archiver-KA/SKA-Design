# Design system — Hair Salon Booking Landing Page Template

`SN-W02752` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

Black, low-key salon page with a centred two-line serif headline: the first line is white and the second is set in grey italic. The main booking action is a white filled rectangle with tracked uppercase text, and the header action is a thin outlined box. Square edges and small caps labels give the page a precise, tailored tone.

**Mood:** low-key, tailored, precise, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0f0f0f` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#bfa173` · `#78716c` · `#0a0a0a` · `#a8a29e` · `#0f0f0f` · `#000000` · `#292524` · `#1c1917` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_#bfa173]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="text-xs tracking-widest uppercase font-medium border border-[#bfa173] text-[#bfa173] px-5 py-2.5 hover:bg-[#bfa173] hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0f0f0f;
  --color-text: #ffffff;
  --color-muted: #a8a29e;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0f0f0f',
    ink: '#ffffff',
    muted: '#a8a29e',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, with the first line white and the second in grey italic
- **Do:** Use a white filled rectangle with tracked uppercase text for the main booking action
- **Do:** Keep buttons square-cornered and outline the header action in thin white
- **Don't:** Don't use a tan background (#bfa173); the page is black
- **Don't:** Don't add rounded pill buttons; the buttons are square
- **Don't:** Don't add coloured accents; the page is black, white and grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
