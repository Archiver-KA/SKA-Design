# Design system — AI Testing Cohort Landing Page Template

`SN-W00166` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark editorial page on near-black (#030303) with a serif display face, Newsreader, set against Inter for buttons and body copy. Key words in the headline are set in a cool blue italic, and the rest of the type steps down from white to grey. Small uppercase labels in square brackets add a course-catalogue tone.

**Mood:** editorial, dark, academic, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#0f110e` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#030303` · `#000000` · `#050505` · `#0f110e` · `#ef4444` · `#eab308` · `#22c55e` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-black/50`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="flex gap-2 hover:bg-brand-sky hover:text-black transition-colors group text-xs font-semibold text-white bg-white/10 rounded-full py-2 px-4 items-center">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Benefits (`benefits`)
5. Feature grid (`features`)
6. Team (`team`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #0f110e;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #eab308;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#0f110e',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Newsreader, with one or two words in blue italic for emphasis
- **Do:** Use bracketed uppercase labels for status and deadline lines
- **Do:** Keep the ground near-black and style the primary button as a dark pill with a thin blue outline
- **Don't:** Don't set the headline in a sans-serif; the serif carries the look
- **Don't:** Don't fill the hero with images; the page is type, a few controls and empty space
- **Don't:** Don't use bright blue for body text; it is reserved for emphasis words

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
