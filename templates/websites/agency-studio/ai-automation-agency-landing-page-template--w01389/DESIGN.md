# Design system — AI Automation Agency Landing Page Template

`SN-W01389` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a centred stack of uppercase headline lines in a heavy sans. Some lines are white and others, such as INTELLIGENCE and REVENUE, take a pale blue-lavender gradient on the key nouns. A small pill badge sits above, and a thin vertical light beam runs down behind the headline. The gradient is the only colour in the frame, so the design reads as stark, cinematic and bold.

**Mood:** cinematic, stark, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#a855f7` · `#cbd5e1` · `#c084fc` · `#64748b` · `#000000` · `#60a5fa` · `#3b82f6` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_-3px_rgba(147,51,234,0.3)]`, `shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden md:flex text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full transition-all backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. About (`about`)
4. Services (`services`)
5. Pricing (`pricing`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #334155;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #60a5fa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#334155',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans, stacked over several centred lines.
- **Do:** Alternate white lines with pale blue gradient lines for the key nouns.
- **Do:** Keep the vertical light beam faint and behind the headline.
- **Don't:** Don't set the headline in a light weight; it relies on heavy capitals.
- **Don't:** Don't add a second colour to the gradient lines.
- **Don't:** Don't place body copy inside the gradient lines.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
