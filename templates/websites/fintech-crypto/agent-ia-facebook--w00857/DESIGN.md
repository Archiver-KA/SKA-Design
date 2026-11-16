# Design system — Agent IA facebook

`SN-W00857` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A dark navy hero with a large white Inter headline whose second line is set in soft blue (#3b82f6). A solid blue pill and an outlined dark secondary sit under the copy, and a dark product panel with two stat cards sits below. Blue is the one accent, so the page reads as a modern, focused product page.

**Mood:** modern, focused, dark, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1e293b` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#1e293b` · `#334155` · `#3b82f6` · `#64748b` · `#60a5fa` · `#cbd5e1` · `#020617` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-black/50`, `shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="text-xs font-medium px-4 py-2 rounded-full bg-white text-slate-950 hover:bg-slate-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Stats band (`stats`)
4. Process / steps (`how-it-works`)
5. Bento grid (`bento-grid`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1e293b;
  --color-surface: #334155;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #334155;
  --color-accent: #3b82f6;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1e293b',
    surface: '#334155',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#334155',
    accent: '#3b82f6',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue (#3b82f6) for the highlight line and the primary button only
- **Do:** Set the headline in Inter at 60px, centred, in white
- **Do:** Place product panels as dark cards with thin borders and small stat blocks
- **Don't:** Don't put the blue on body copy
- **Don't:** Don't switch the hero to a light background
- **Don't:** Don't add a second bright accent beside the blue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
