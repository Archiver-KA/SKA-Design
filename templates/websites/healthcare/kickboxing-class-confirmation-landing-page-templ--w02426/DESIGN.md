# Design system — Kickboxing Class Confirmation Landing Page Template

`SN-W02426` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The kickboxing confirmation page is a black, high-impact screen. A large white all-caps headline has one word in yellow (#ffc629), a yellow check ring sits above it, and a dark card holds the reference number in yellow. Three icon-led steps run in a row below. Yellow is the only colour, which gives the page a direct, sporting tone. It is a confirmation screen, not a sales page.

**Mood:** direct, sporting, high-contrast, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#333333` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffc629` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#6b7280` · `#ffc629` · `#9ca3af` · `#050505` · `#d1d5db` · `#171717` · `#333333` · `#555555`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h3 18px · body 12px
- **Weights in use:** bold, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #333333;
  --color-border: #ffffff;
  --color-accent: #ffc629;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#333333',
    line: '#ffffff',
    accent: '#ffc629',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline in yellow (#ffc629) and the rest in white capitals
- **Do:** Put confirmation details in a dark card with the reference number in yellow
- **Do:** Use three icon-led steps in a row, each with a short label and one line of copy
- **Don't:** Don't use the yellow (#eab308) as a ground; the page is black.
- **Don't:** Don't add a second accent; the yellow is the only colour
- **Don't:** Don't set headlines in lowercase; the all-caps voice is part of the style

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
