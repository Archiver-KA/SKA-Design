# Design system — SaaS Chaos Management Landing Page Template

`SN-W00683` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A high-end consulting page with a large black serif headline set over five lines, balanced against a short sans-serif paragraph on the right. The page is monochrome, with no accent colour, and a grey uppercase marquee band runs along the bottom of the first screen. The serif does the expressive work, so the layout feels editorial and calm.

**Mood:** editorial, monochrome, calm, high-end

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#dcdcdc` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#d5d5d5` · `#dbdbdb` · `#dcdcdc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Value Serif Pro
- **Body:** var(--font-sans)
- **Loaded families:** Value Serif Pro, Supreme
- **Scale (largest breakpoint):** h1 72px · h3 36px · body 14px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-[0.15em]`, `tracking-[0.1em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1600px]`, `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-6`, `gap-5`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-block bg-brand-dark text-white text-[10px] sm:text-xs uppercase tracking-[0.1em] px-6 py-4 hover:bg-black transition-colors z-10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. Case studies (`case-studies`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Tailwind CSS v4 (browser), Three.js, AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #dcdcdc;
  --color-text: #111111;
  --color-border: #ffffff;
  --font-display: "Value Serif Pro", serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#dcdcdc',
    ink: '#111111',
    line: '#ffffff',
  },
  fontFamily: { display: ['Value Serif Pro'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large serif (Value Serif Pro) in near-black on white
- **Do:** Keep the page monochrome; use grey for supporting copy and the marquee
- **Do:** Place a short sans-serif paragraph opposite the headline, not under it
- **Don't:** Don't add an accent colour to the page
- **Don't:** Don't set the headline in a sans-serif; the serif is the identity
- **Don't:** Don't leave the logo as a broken image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
