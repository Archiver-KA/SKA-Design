# Design system — Non-profit Support Landing Page Template

`SN-W03633` · events · dark mode · Sinera Atlas theme `workshop` · language `no`

## Direction

A calm, centred hero on a deep navy ground, with a wide-tracked serif wordmark at the top and a large serif headline in cream. A gold serif subtitle sits beneath it, and the primary button is a tan-gold fill beside an outlined secondary. The palette is restrained, and gold appears only in the button and the subtitle, which keeps the tone reassuring.

**Mood:** calm, restrained, reassuring, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d1b2a` | Page ground |
| Text | `#f9f5ec` | Headings and primary copy |
| Border | `#f9f5ec` | Hairlines, dividers, outlines |
| Accent | `#c6a878` | Primary action and highlights |
| Second accent | `#1a2d42` | Supporting highlights |

Palette by frequency of use: `#f9f5ec` · `#d9b871` · `#c6a878` · `#0d1b2a` · `#1a2d42` · `#111111` · `#b91c1c` · `#000000` · `#0b1521`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-5`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="px-8 py-4 bg-[#D9B871] text-[#0D1B2A] font-medium tracking-wide text-sm hover:bg-[#C6A878] transition-colors duration-500 w-full md:w-auto text-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Feature grid (`features`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0d1b2a;
  --color-text: #f9f5ec;
  --color-border: #f9f5ec;
  --color-accent: #c6a878;
  --color-accent-2: #1a2d42;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d1b2a',
    ink: '#f9f5ec',
    line: '#f9f5ec',
    accent: '#c6a878',
    accent2: '#1a2d42',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif in cream (#f9f5ec) on the navy ground (#0d1b2a)
- **Do:** Use the muted gold (#c6a878) for the primary button and the subtitle only
- **Do:** Keep the layout centred with generous vertical space
- **Don't:** Don't use bright colours or saturated reds in the hero
- **Don't:** Don't place busy photographic backgrounds behind the text
- **Don't:** Don't set the uppercase line under the buttons larger than a caption

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
