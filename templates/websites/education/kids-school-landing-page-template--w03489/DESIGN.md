# Design system — Kids School Landing Page Template

`SN-W03489` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A playful kids' school page on white, with a heavy rounded sans headline in dark slate where the words Fun and Love are coloured in sky blue (#5bc0eb) and pink (#ff8fab). A photograph of coloured building bricks sits in a rounded frame beside the copy, with a small pill tag and a pale green rating card adding warmth. Each block feels bright and light-hearted.

**Mood:** playful, bright, cheerful, friendly, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#2b2b2b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#5bc0eb` | Primary action and highlights |
| Second accent | `#ff8fab` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#5bc0eb` · `#1e293b` · `#ffd93d` · `#ff8fab` · `#64748b` · `#f1f5f9` · `#2b2b2b` · `#f8fafc` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Fredoka, Nunito, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-8 py-4 bg-[#5BC0EB] text-white text-base font-semibold rounded-full shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:scale-105 transition-all duration-300 w-full sm:w-auto flex justify-center items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Feature grid (`features`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-muted: #2b2b2b;
  --color-border: #f1f5f9;
  --color-accent: #5bc0eb;
  --color-accent-2: #ff8fab;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    muted: '#2b2b2b',
    line: '#f1f5f9',
    accent: '#5bc0eb',
    accent2: '#ff8fab',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Colour one or two key words of each headline in sky blue (#5bc0eb) or pink (#ff8fab)
- **Do:** Use sky blue (#5bc0eb) for the primary button
- **Do:** Frame photographs in rounded panels with a small rating card
- **Don't:** Don't use sky blue for body text on white
- **Don't:** Don't add more than three bright colours to one section
- **Don't:** Don't set the primary button in pink; pink is for highlights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
