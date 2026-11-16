# Design system — B2B YouTube Growth Partner Landing Page Template

`SN-W01828` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

Conversion-focused dark landing: a near-black ground with a centred bold white headline, a purple (#7c3aed) primary button, and a soft purple glow behind the hero. A large grey video placeholder sits below the fold. Purple is the single brand colour, and the centred layout makes the button the clear focus.

**Mood:** conversion-focused, dark, centred, purple

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#151515` | Cards, panels, raised areas |
| Text | `#d9d9d9` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#7c3aed` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#7c3aed` · `#d9d9d9` · `#000000` · `#0d0d0d` · `#141414` · `#151515` · `#8b5cf6` · `#a78bfa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Montserrat
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 15px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-black/20`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-5`, `gap-3.5`, `gap-3`

**Primary button**

```html
<a class="hidden rounded-full bg-[#7c3aed] px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#7c3aed]/20 transition hover:-translate-y-0.5 hover:bg-[#8b5cf6] hover:shadow-[#7c3aed]/35 active:translate-y-0 md:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. About (`about`)
7. FAQ (`faq`)
8. Logo cloud (`logo-cloud`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #151515;
  --color-text: #d9d9d9;
  --color-border: #ffffff;
  --color-accent: #7c3aed;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#151515',
    ink: '#d9d9d9',
    line: '#ffffff',
    accent: '#7c3aed',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the purple (#7c3aed) for the primary button only
- **Do:** Centre the hero headline and subline
- **Do:** Keep the soft purple glow to a single area behind the hero
- **Don't:** Don't use purple for body text
- **Don't:** Don't add a light ground behind the hero
- **Don't:** Don't remove the glow; it defines the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
