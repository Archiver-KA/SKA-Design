# Design system — Fence Installation Landing Page Template

`SN-W00386` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a very large serif headline in Playfair Display, where the second word is set in italic and both lines are off-white. A small uppercase location tag sits above the headline, and a warm orange-brown button is the only coloured element in the header. The page is restrained and premium, and the italic serif on the second line is what makes it recognisable.

**Mood:** premium, restrained, serif-led, dark, crafted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#000000` · `#94a3b8` · `#cbd5e1` · `#334155` · `#f3f4f6` · `#6b7280` · `#475569` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 14px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_rgba(194,94,40,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-[1400px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-brand-orange hover:bg-brand-orangeHover text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(194,94,40,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display at very large size, with the second word in italic.
- **Do:** Use the warm orange button only for the quote call to action in the header.
- **Do:** Keep the eyebrow to one small uppercase location label above the headline.
- **Don't:** Don't switch to a light background; the page is black throughout.
- **Don't:** Don't use italic in body copy; it is reserved for the headline's second word.
- **Don't:** Don't add product photography to the hero; the type carries the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
