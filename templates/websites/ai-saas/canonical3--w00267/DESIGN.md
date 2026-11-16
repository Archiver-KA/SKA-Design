# Design system — Canonical3

`SN-W00267` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, quiet AI-infrastructure hero: a near-black ground (#0a0a0a) with a large white Inter headline, the second line faded to a cool grey. Thin white rounded buttons, one filled and one outlined, set the primary action, and a faint violet glow sits behind the headline. Colour stays out of the type, so the page reads as a technical whitepaper landing rather than a product launch.

**Mood:** dark, technical, restrained, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f87171` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#000000` · `#0a0a0a` · `#f87171` · `#a855f7` · `#ef4444` · `#050505` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f87171;
  --color-accent-2: #f87171;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f87171',
    accent2: '#f87171',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #0a0a0a and headlines in white Inter at very large size
- **Do:** Fade the second headline line in grey as the one tonal contrast
- **Do:** Use one filled and one outlined white pill for the two hero actions
- **Don't:** Don't add bright red or violet fills; the accent does not show in the hero
- **Don't:** Don't set body copy in pure white; use the grey (#9ca3af)
- **Don't:** Don't use square corners on the hero buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
