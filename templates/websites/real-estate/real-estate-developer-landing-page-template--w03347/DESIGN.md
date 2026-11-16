# Design system — Real Estate Developer Landing Page Template

`SN-W03347` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A dark, serif-led hero on near-black (#121212). The company name is set very large in white serif capitals, with the second word fading into a grey gradient, and a gold (#c5a065) letter-spaced eyebrow sits above it. Navigation is thin uppercase text with a single outlined button, and a fine vertical line leads the eye down the page. The look is editorial and monumental.

**Mood:** monumental, editorial, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121212` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5a065` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#121212` · `#c5a065` · `#333333` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 24px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[1920px]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-widest uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Map / location (`map-location`)
7. Marquee (`marquee`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #121212;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #c5a065;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121212',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#c5a065',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero name in very large white Cormorant Garamond capitals
- **Do:** Use gold (#c5a065) only for the eyebrow label and small accents
- **Do:** Keep the page on near-black (#121212) with white and grey type
- **Don't:** Don't set the hero name in sans-serif; the serif is the signature
- **Don't:** Don't use gold for large fills or button backgrounds
- **Don't:** Don't add rounded or glossy elements; the edges are square and flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
