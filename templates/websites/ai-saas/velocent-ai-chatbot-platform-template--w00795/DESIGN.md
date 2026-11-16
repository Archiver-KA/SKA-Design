# Design system — Velocent AI Chatbot Platform Template

`SN-W00795` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark AI-platform page with a centred hero and a bold Inter headline, where the word 'Scale' is set in coral (#f43f5e). The primary button is a red-to-orange gradient pill beside a dark outlined secondary, and a glowing code window sits below the fold. A near-black ground and one hot colour keep the energy disciplined.

**Mood:** energetic, dark, focused, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#171717` · `#737373` · `#f43f5e` · `#0a0a0a` · `#f97316` · `#e11d48` · `#a855f7` · `#fecdd3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 14px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-rose-900/20`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/10 rounded-full px-4 py-1.5 transition-all text-neutral-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Sidebar (`sidebar`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #f43f5e;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#f43f5e',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one key word of the headline in coral (#f43f5e)
- **Do:** Use the red-to-orange gradient only on the primary button
- **Do:** Pair the primary button with a dark outlined secondary button
- **Don't:** Don't use the gradient for headings or body text
- **Don't:** Don't add a second hot colour beside the coral
- **Don't:** Don't place the code window on a light ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
