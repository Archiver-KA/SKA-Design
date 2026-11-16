# Design system — Vantage Point SaaS Landing Page Template

`SN-W00791` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A high-contrast light page on a warm off-white ground, with a very large headline in near-black and the word 'Ambitious' in vivid orange-red (#ff4d00) as the highlight. The headline is a serif with roman and italic mixed. A hard vertical rule separates a narrow left index of monospace status lines, and the page stays flat with no shadows.

**Mood:** editorial, stark, high-contrast, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f4f1` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#1a1a1a` | Secondary copy, captions |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#ff4d00` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#ff4d00` · `#f4f4f1` · `#d4d4d4` · `#ffffff` · `#ebebe8` · `#e5e5e5` · `#efefef` · `#f97316` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Oswald, Playfair Display, Geist, Roboto
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 30px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-8`, `gap-24`, `gap-16`

**Primary button**

```html
<a class="bg-[#1A1A1A] text-[#F4F4F1] px-5 py-2 font-sans-condensed text-sm uppercase tracking-wide hover:bg-[#FF4D00] transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Comparison (`comparison`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f4f4f1;
  --color-surface: #1a1a1a;
  --color-text: #111111;
  --color-muted: #1a1a1a;
  --color-border: #1a1a1a;
  --color-accent: #ff4d00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f4f1',
    surface: '#1a1a1a',
    ink: '#111111',
    muted: '#1a1a1a',
    line: '#1a1a1a',
    accent: '#ff4d00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlight word in orange-red (#ff4d00)
- **Do:** Mix roman and italic in the large headline
- **Do:** Use a hard vertical rule to divide the left index from the content
- **Don't:** Don't make the page orange; the ground is warm off-white
- **Don't:** Don't add shadows; the page is flat
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
