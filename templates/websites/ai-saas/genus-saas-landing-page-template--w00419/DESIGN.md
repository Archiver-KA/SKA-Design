# Design system — Genus SaaS Landing Page Template

`SN-W00419` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark page with a teal (#21d8cf) glow falling from the top, and a three-line headline that steps down in tone: white, then muted grey, then teal on the final word, Provably. The primary button is a solid teal pill, paired with a dark outlined secondary. A thin bordered status label sits above the headline, which keeps the emphasis on the promise rather than on decoration.

**Mood:** confident, dark, clean, focused, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#21d8cf` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#21d8cf` · `#71717a` · `#18181b` · `#09090b` · `#a1a1aa` · `#d4d4d8` · `#52525b` · `#3f3f46` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Funnel Display
- **Body:** Funnel Display
- **Loaded families:** Funnel Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_15px_rgba(33,216,207,0.1)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-medium text-base border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Map / location (`map-location`)
6. Feature grid (`features`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #21d8cf;
  --font-display: "Funnel Display", sans-serif;
  --font-body: "Funnel Display", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#21d8cf',
  },
  fontFamily: { display: ['Funnel Display'], sans: ['Funnel Display'] },
} }
```

## Do and don't

- **Do:** Use teal (#21d8cf) for the final headline word and the primary button only
- **Do:** Build the headline in three steps of tone: white, muted grey, then teal
- **Do:** Place a thin bordered status label above the headline
- **Don't:** Don't use teal for body text; it is reserved for the emphasis word and the button
- **Don't:** Don't add a second accent colour
- **Don't:** Don't put the glow behind the paragraph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
