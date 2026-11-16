# Design system — Music Course Overview Layout

`SN-W03513` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark navy page on #181926 with a purple-to-pink gradient on the large display headline. A translucent panel sits over faint flowing wave lines, and the content inside is set in Manrope with a short list and an italic pink call-out. Gradient type and a quiet glow give the page a musical feel, while the panel keeps the body text plain.

**Mood:** atmospheric, musical, dark, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#181926` | Page ground |
| Surface | `#20213a` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#fb7185` | Supporting highlights |

Palette by frequency of use: `#fb7185` · `#c084fc` · `#34d399` · `#1e293b` · `#181926` · `#20213a` · `#f1f5f9` · `#cbd5e1` · `#e9d5ff` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Barlow Condensed, Manrope
- **Scale (largest breakpoint):** h1 80px · h2 64px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px)
- **Content width:** `max-w-2xl`
- **Section padding:** `py-14`
- **Common gaps:** `gap-4`, `gap-2`

## Page structure

Blocks in page order:

1. Timeline (`timeline`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #181926;
  --color-surface: #20213a;
  --color-text: #f1f5f9;
  --color-muted: #cbd5e1;
  --color-accent: #c084fc;
  --color-accent-2: #fb7185;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#181926',
    surface: '#20213a',
    ink: '#f1f5f9',
    muted: '#cbd5e1',
    accent: '#c084fc',
    accent2: '#fb7185',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the display headline in Manrope with a purple-to-pink gradient (#c084fc to #fb7185)
- **Do:** Keep content inside one translucent navy panel over the animated background
- **Do:** Use the pink (#fb7185) italic for the single call-out line
- **Don't:** Don't place gradient text inside the panel body
- **Don't:** Don't add opaque white cards to the dark scene
- **Don't:** Don't use more than one gradient headline on the same screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
