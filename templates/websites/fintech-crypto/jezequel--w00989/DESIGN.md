# Design system — JÉZÉQUEL

`SN-W00989` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A refined advisory page: a light header bar sits above a dark navy hero (#16202b), and the gold accent (#b88645) marks the highlighted phrase and the primary button. The headline is a large serif, with the key phrase set in italic gold, giving the page a warm, private-practice tone. Body text is light grey on navy, with generous space around the call to action.

**Mood:** refined, warm, discreet, advisory, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#16202b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#b88645` | Primary action and highlights |
| Second accent | `#16202b` | Supporting highlights |

Palette by frequency of use: `#b88645` · `#ffffff` · `#16202b` · `#4a5568` · `#1f2937` · `#faf9f6` · `#d1d5db` · `#374151` · `#6b7280` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-[#B88645] text-white px-8 py-3.5 rounded-sm text-sm font-medium hover:bg-[#a0743a] transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-[#B88645]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #16202b;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #1f2937;
  --color-accent: #b88645;
  --color-accent-2: #16202b;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#16202b',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#1f2937',
    accent: '#b88645',
    accent2: '#16202b',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Italicise one key phrase in the headline and set it in gold (#b88645).
- **Do:** Use the gold filled button for the main action and a thin outline button beside it.
- **Do:** Keep the hero on the dark navy ground (#16202b) with light text.
- **Don't:** Don't use gold for body text or small labels.
- **Don't:** Don't set the headline in a sans-serif face.
- **Don't:** Don't fill the secondary button with colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
