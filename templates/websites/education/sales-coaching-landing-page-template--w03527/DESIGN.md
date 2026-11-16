# Design system — Sales Coaching Landing Page Template

`SN-W03527` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dramatic dark hero with diagonal streaks of cyan light (#0ea5e9) sweeping across a near-black ground. The headline is set large in white, with its final line fading into grey, and small translucent pills list the coaching approach beneath it. Cyan appears only in the light streaks and the primary button, so the page feels cinematic and centred on the speaker.

**Mood:** cinematic, focused, dark, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0b` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4d4d8` · `#a1a1aa` · `#f4f4f5` · `#0ea5e9` · `#38bdf8` · `#e4e4e7` · `#34d399` · `#0a0a0b` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-white/10`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="border-gradient before:rounded-2xl group inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-100 text-zinc-900 hover:bg-white px-6 py-3.5 text-sm font-medium tracking-tight transition-all hover:-translate-y-0.5 shadow-lg shadow-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Process / steps (`how-it-works`)
4. Booking form (`booking`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0b;
  --color-surface: #f4f4f5;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #0ea5e9;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0b',
    surface: '#f4f4f5',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#0ea5e9',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large in white, with the final line fading into grey
- **Do:** Use cyan (#0ea5e9) only for the light streaks and the primary button
- **Do:** Put short approach tags in small translucent pills beneath the headline
- **Don't:** Don't place the cyan light streaks behind body text
- **Don't:** Don't use a white background for the hero
- **Don't:** Don't add extra accent colours to the pills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
