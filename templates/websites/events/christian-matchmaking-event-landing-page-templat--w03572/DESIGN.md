# Design system — Christian Matchmaking Event Landing Page Template

`SN-W03572` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Betrothed is a dark, quiet invitation page on near-black (#0a0a0a). The headline is a large white serif, and the small uppercase event line is set in amber-brown (#b45309). The sign-up form sits in a panel on the right with thin field labels and one solid white button. The look is restrained and intimate, and the form does most of the work.

**Mood:** restrained, intimate, dark, serif, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b45309` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#78350f` · `#171717` · `#f59e0b` · `#737373` · `#0a0a0a` · `#b45309` · `#404040` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-x-16`

**Primary button**

```html
<a class="w-full bg-white text-black py-4 mt-2 font-medium text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #b45309;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#b45309',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in white serif
- **Do:** Use amber-brown (#b45309) for event details and small labels
- **Do:** Keep the form's submit button as the only solid white control
- **Don't:** Don't use bright or saturated colours
- **Don't:** Don't add rounded, filled form fields
- **Don't:** Don't set the headline in a sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
