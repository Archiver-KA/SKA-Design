# Design system — Luxury Fashion E-commerce Landing Page Template

`SN-W01216` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A Parisian editorial stance: an off-white page with a huge bold black uppercase wordmark, one red accented letter, and a short red rule beneath it. A tracked uppercase tagline sits below, followed by a single underlined call to action with an arrow. Thin frame lines drift behind the wordmark, and red stays limited to the accent letter and the rule.

**Mood:** bold, editorial, parisian, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f2ed` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1c1c` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#d02020` | Primary action and highlights |

Palette by frequency of use: `#d02020` · `#1c1c1c` · `#a8a29e` · `#f4f2ed` · `#57534e` · `#ffffff` · `#78716c` · `#e7e5e4` · `#eae8e2` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 176px · h2 48px · h3 60px · body 11px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-[0.2em]`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2rem]` (2rem), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-stone-200`
- **Content width:** `max-w-[1800px]`, `max-w-5xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-8`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="border border-[#F4F2ED] text-[#F4F2ED] px-8 py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#D02020] hover:border-[#D02020] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Product grid (`product-grid`)
6. Call to action (`cta`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f4f2ed;
  --color-surface: #ffffff;
  --color-text: #1c1c1c;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #d02020;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f2ed',
    surface: '#ffffff',
    ink: '#1c1c1c',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#d02020',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the brand wordmark in heavy uppercase sans-serif at display size.
- **Do:** Use the red (#d02020) only on one accented letter, the short rule and small highlights.
- **Do:** Use widely tracked uppercase for the tagline and the call to action.
- **Don't:** Don't add a second accent colour; the page is black, off-white and this red.
- **Don't:** Don't use the red as a button fill; the call to action is a text link with an arrow.
- **Don't:** Don't set the wordmark in a serif; use bold sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
