# Design system — Premium Leather E-commerce Landing Page 

`SN-W01304` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, luxury leather page on near-black (#121212) with white condensed uppercase headlines in Oswald, and a warm tan button for the main action. The hero sits in a card with a brown photographic overlay, and a large framed product image sits on the right. Body copy is light grey Manrope, so the page reads as a moody boutique catalogue.

**Mood:** luxurious, moody, dark, tactile, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121212` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f5f5f5` · `#737373` · `#a3a3a3` · `#ef4444` · `#1a1a1a` · `#121212` · `#404040` · `#e0a87e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Manrope
- **Loaded families:** Manrope, Oswald, Satisfy
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 14px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_10px_30px_rgba(224,168,126,0.3)]`
- **Content width:** `max-w-[1600px]`, `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-6`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-brand hover:bg-white hover:scale-105 text-black font-semibold text-sm uppercase tracking-wide px-8 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(224,168,126,0.3)] w-fit">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Articles (`blog-articles`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #121212;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --font-display: "Oswald", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121212',
    surface: '#1a1a1a',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Oswald'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in Oswald uppercase, white on near-black (#121212)
- **Do:** Use the warm tan button for the primary action; it is the only colour in the UI
- **Do:** Keep product photography in a large frame with a dark surround
- **Don't:** Don't use the red (#ef4444) as the accent.
- **Don't:** Don't set body copy in pure white; light grey (#a3a3a3) keeps the hierarchy
- **Don't:** Don't add bright colour to the leather imagery or its frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
