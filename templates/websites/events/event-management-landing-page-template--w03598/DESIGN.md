# Design system — Event Management Landing Page Template

`SN-W03598` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The show company page is a dark, theatrical hero on black (#000000). The headline is a large bold serif in uppercase, with THE SHOW in white and COMPANY in a warm gold-beige (#c6a87c) that reads like a spotlight fill. A small tracked line sits above it and an italic subtitle sits below. The page depends on the contrast between the two tones and a restrained navigation bar.

**Mood:** theatrical, dramatic, classic, dark, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#334155` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c6a87c` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#c6a87c` · `#ffffff` · `#e2e8f0` · `#94a3b8` · `#64748b` · `#050505` · `#000000` · `#cbd5e1` · `#334155` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 36px · body 12px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-screen-xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="w-full py-4 bg-[#c6a87c]/10 border border-[#c6a87c]/30 text-[#c6a87c] text-xs uppercase tracking-[0.2em] hover:bg-[#c6a87c] hover:text-black transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Articles (`blog-articles`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Feature grid (`features`)
7. Logo cloud (`logo-cloud`)
8. Team (`team`)
9. Testimonials (`testimonials`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #334155;
  --color-border: #ffffff;
  --color-accent: #c6a87c;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#334155',
    line: '#ffffff',
    accent: '#c6a87c',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headings in a bold serif in uppercase, with the second line in gold (#c6a87c)
- **Do:** Keep the page on black (#000000) with white headings and light subtitles
- **Do:** Keep the spacing around the headline wide, with tracked small caps above it
- **Don't:** Don't use gold for body copy or long text
- **Don't:** Don't add bright hues beside the gold
- **Don't:** Don't set the italic subtitle in uppercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
