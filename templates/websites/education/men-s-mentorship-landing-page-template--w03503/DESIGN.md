# Design system — Men’s Mentorship Landing Page Template

`SN-W03503` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A minimal, text-led page on a near-black ground (#1a1a1a) with a serif headline in Cormorant Garamond set large and centred. Small, widely tracked grey uppercase labels sit above the headline, and the layout relies on generous empty space rather than imagery. The effect is quiet and literary, letting the long headline carry the page.

**Mood:** quiet, literary, spacious, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Second accent | `#f87171` | Supporting highlights |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#333333` · `#d4d0c8` · `#888888` · `#e0e0e0` · `#000000` · `#1a1a1a` · `#ffffff` · `#c8a96e` · `#222222` · `#444444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-[0_2px_10px_rgba(0,0,0,0.03)]`
- **Content width:** `max-w-[1080px]`, `max-w-[720px]`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-[#C8A96E] hover:bg-[#B8994E] text-[#1A1A1A] font-medium tracking-wider uppercase text-sm px-10 py-5 rounded transition-colors duration-300 w-full sm:w-auto shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Services (`services`)
7. FAQ (`faq`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #888888;
  --color-border: #333333;
  --color-accent-2: #f87171;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    ink: '#ffffff',
    muted: '#888888',
    line: '#333333',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Cormorant Garamond at large size, centred, with tight leading
- **Do:** Use small tracked uppercase grey labels above headlines for context
- **Do:** Keep the opening section on a single dark ground with no imagery
- **Don't:** Don't add bright accent colours to the text or buttons
- **Don't:** Don't set the headline in a sans-serif
- **Don't:** Don't fill the page with cards or decorative shapes

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
