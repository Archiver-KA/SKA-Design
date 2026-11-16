# Design system — Interactive Design Studio Landing Page Template

`SN-W01606` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, technology-leaning studio page on near-black (#050505). The headline is set in Poppins, white, with the words 'Creativity' and 'Cutting-Edge' faded into grey gradients. The lime (#aaf94f) to blue (#4f77f9) gradient appears only on the primary button, and a large circuit-board image on the right adds the technical theme in a two-column split.

**Mood:** technical, glossy, dark, gradient-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#aaf94f` | Primary action and highlights |
| Second accent | `#4f77f9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#aaf94f` · `#4f77f9` · `#050505` · `#030303` · `#000414`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 30px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_30px_rgba(170,249,79,0.3)]`, `shadow-[0_0_15px_#aaf94f]`, `shadow-[0_0_15px_#4f77f9]`
- **Content width:** `max-w-[1440px]`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="hidden md:flex items-center justify-center border border-white/20 rounded-full px-6 py-2.5 text-sm font-light hover:bg-white hover:text-black transition-all duration-300 transform active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Stats band (`stats`)
6. Product grid (`product-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #aaf94f;
  --color-accent-2: #4f77f9;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#aaf94f',
    accent2: '#4f77f9',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Use the lime-to-blue gradient only on the primary button and one highlight
- **Do:** Set headlines in Poppins with a grey gradient on the second clause
- **Do:** Keep the page on near-black (#050505) and frame the hero image on the right
- **Don't:** Don't use lime (#aaf94f) as a page background
- **Don't:** Don't stack a second gradient in the same section
- **Don't:** Don't use flat blue (#4f77f9) for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
