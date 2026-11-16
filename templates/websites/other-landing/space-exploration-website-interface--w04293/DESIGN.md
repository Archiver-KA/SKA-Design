# Design system — Space Exploration Website Interface

`SN-W04293` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark space-themed landing page built on near-black navy (#0a0b14), with a large white sans headline in which one word is set in sky blue (#60a5fa). Translucent dark panels hold the copy and a row of short, bold figures, and a large capsule visual fills the right side. Blue is kept for the emphasised word and the badge, so the page stays calm and focused.

**Mood:** cinematic, dark, calm, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0b14` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#60a5fa` · `#3b82f6` · `#fbbf24` · `#0a0b14` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h3 36px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. FAQ (`faq`)
5. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0b14;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0b14',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline in blue (#60a5fa) and keep the rest in white
- **Do:** Hold copy in translucent dark panels with thin borders
- **Do:** Show short figures as large, bold numbers with small labels beneath
- **Don't:** Don't use a light background for the hero
- **Don't:** Don't put blue on the body text
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
