# Design system — Barbershop Commercial Growth Template

`SN-W00248` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A dark, monochrome conversion page: warm off-white type (#fff9f3) on near-black (#1a1a1a), with grey (#8e8e8e) secondary copy and a soft glow behind the hero for atmosphere. The hero shows no accent colour, so the page reads as a stark black-and-cream editorial system.

**Mood:** dark, editorial, monochrome, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#515151` | Cards, panels, raised areas |
| Text | `#fff9f3` | Headings and primary copy |
| Muted text | `#8e8e8e` | Secondary copy, captions |
| Border | `#515151` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#fff9f3` · `#515151` · `#8e8e8e` · `#1a1a1a` · `#141414` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, DM Serif Display, Space Mono, Belgiano Serif
- **Scale (largest breakpoint):** h1 88px · h2 64px · h3 28px · body 15px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-[0.3em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Content width:** `max-w-[80rem]`, `max-w-[40rem]`
- **Section padding:** `py-[10rem]`, `py-14`
- **Common gaps:** `gap-3`, `gap-4`, `gap-px`

**Primary button**

```html
<a class="text-[0.8125rem] font-medium px-5 py-2.5 rounded-full glass text-[#FFF9F3] hover:bg-[rgba(255,249,243,0.1)] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Schedule (`schedule-agenda`)
5. Bento grid (`bento-grid`)
6. Stats band (`stats`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #515151;
  --color-text: #fff9f3;
  --color-muted: #8e8e8e;
  --color-border: #515151;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#515151',
    ink: '#fff9f3',
    muted: '#8e8e8e',
    line: '#515151',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#1a1a1a) and the text warm off-white (#fff9f3)
- **Do:** Set headlines large, with one phrase in a lighter grey italic for contrast
- **Do:** Keep stat tiles and cards in the same grey scale without colour
- **Don't:** Don't introduce a brand accent colour; none appears on screen
- **Don't:** Don't set body copy in pure white; use the grey (#8e8e8e)
- **Don't:** Don't add a second text colour beyond warm off-white and grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
