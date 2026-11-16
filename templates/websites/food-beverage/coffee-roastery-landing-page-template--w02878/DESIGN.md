# Design system — Coffee Roastery Landing Page Template

`SN-W02878` · food-beverage · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

Dark, warm and editorial, in brown-black and pale cream. A tan italic kicker (#d4a373) sits above a very large uppercase headline in pale cream (#e9edc9), and the pairing of italic serif and heavy caps does the work. The primary button is tan with dark type, and cards lift onto a slightly lighter brown surface (#2f2a28). Contrast is high, and the tan is kept for accents.

**Mood:** warm, dark, editorial, craft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1614` | Page ground |
| Surface | `#2f2a28` | Cards, panels, raised areas |
| Text | `#e9edc9` | Headings and primary copy |
| Border | `#2f2a28` | Hairlines, dividers, outlines |
| Accent | `#d4a373` | Primary action and highlights |
| Second accent | `#e9edc9` | Supporting highlights |

Palette by frequency of use: `#d4a373` · `#e9edc9` · `#2f2a28` · `#1a1614`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Oswald
- **Loaded families:** Oswald, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[0_0_15px_rgba(212,163,115,0.15)]`, `shadow-2xl`, `shadow-[#D4A373]/20`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-1/3 bg-[#D4A373] text-[#1A1614] font-oswald uppercase tracking-widest font-semibold py-4 rounded-xl hover:bg-[#E9EDC9] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Services (`services`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Process / steps (`how-it-works`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1614;
  --color-surface: #2f2a28;
  --color-text: #e9edc9;
  --color-border: #2f2a28;
  --color-accent: #d4a373;
  --color-accent-2: #e9edc9;
  --font-display: "Oswald", sans-serif;
  --font-body: "Oswald", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1614',
    surface: '#2f2a28',
    ink: '#e9edc9',
    line: '#2f2a28',
    accent: '#d4a373',
    accent2: '#e9edc9',
  },
  fontFamily: { display: ['Oswald'], sans: ['Oswald'] },
} }
```

## Do and don't

- **Do:** Pair a tan italic kicker (#d4a373) with a large uppercase cream headline (#e9edc9)
- **Do:** Use the tan (#d4a373) for the primary button and kicker lines only
- **Do:** Lift cards onto the brown surface (#2f2a28) rather than adding strong borders
- **Don't:** Don't set the headline in lowercase
- **Don't:** Don't use the cream headline colour for small body paragraphs
- **Don't:** Don't add a bright accent beside the tan

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
