# Design system — Cloud Services Landing Page Template

`SN-W00283` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bold, editorial stance on near-black [#050505]. The headline is built from three stacked lines: solid white, then outlined stroke type, then a full orange line [#ff6b00]. Orange is kept for the primary button and the last headline line, so it reads as the single signal. Unbounded at 96px carries the display voice, and Space Mono sets the body text for a technical tone.

**Mood:** bold, technical, high contrast, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#eaeaea` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6b00` | Primary action and highlights |

Palette by frequency of use: `#ff6b00` · `#ffffff` · `#000000` · `#6b7280` · `#111111` · `#9ca3af` · `#0a0a0a` · `#050505` · `#374151` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Unbounded
- **Body:** Space Mono
- **Loaded families:** Space Mono, Unbounded
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 14px · body 12px
- **Weights in use:** semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,107,0,0.3)]`, `shadow-[0_0_30px_rgba(255,107,0,0.15)]`, `shadow-2xl`
- **Content width:** `max-w-[1800px]`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#FF6B00] text-black font-semibold text-xs px-8 py-4 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2 uppercase tracking-wide font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Dashboard preview (`dashboard-preview`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Feature grid (`features`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #111111;
  --color-text: #eaeaea;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #ff6b00;
  --font-display: "Unbounded", sans-serif;
  --font-body: "Space Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#111111',
    ink: '#eaeaea',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#ff6b00',
  },
  fontFamily: { display: ['Unbounded'], sans: ['Space Mono'] },
} }
```

## Do and don't

- **Do:** Set headlines in Unbounded at display size, with the middle line as outlined stroke type
- **Do:** Use the orange (#ff6b00) only for the primary button and one headline line per screen
- **Do:** Set body and labels in Space Mono, uppercase for buttons and eyebrow labels
- **Don't:** Don't fill the outlined headline line; keep it as a stroke
- **Don't:** Don't add orange to secondary buttons or body text
- **Don't:** Don't use a light page background; the dark ground is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
