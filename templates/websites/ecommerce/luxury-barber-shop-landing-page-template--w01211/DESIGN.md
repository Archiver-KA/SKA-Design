# Design system — Luxury Barber Shop Landing Page Template

`SN-W01211` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en-GB`

## Direction

A cinematic dark stance: a near-black field with a large white serif headline on two lines, the second word in italic silver-grey with a gradient. The primary button is a burnt orange gradient, the only saturated colour on the screen. Small uppercase tracked labels and a faint monospaced data panel in the lower corner add a technical, grooming-studio tone.

**Mood:** cinematic, dark, precise, masculine

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#404040` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#737373` · `#a3a3a3` · `#000000` · `#030303` · `#d4d4d4` · `#78350f` · `#fde68a` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Playfair Display, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 16px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_-10px_rgba(180,83,9,0.3)]`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white text-[10px] uppercase tracking-[0.2em] font-medium hover:brightness-110 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(180,83,9,0.3)] rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Booking form (`booking`)
5. Awards / press (`awards-press`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #404040;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #22c55e;
  --font-display: "Playfair Display", serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#404040',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white serif, with the second word in italic silver gradient.
- **Do:** Use the burnt orange button as the only saturated colour in a section.
- **Do:** Keep the near-black ground and place small uppercase labels above headlines.
- **Don't:** Don't use the amber as a page background; it is an accent only.
- **Don't:** Don't add bright decoration; the mood depends on the dark field and one colour.
- **Don't:** Don't add a second accent colour; the page uses orange and neutrals only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
