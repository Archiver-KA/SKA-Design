# Design system — Real Estate Public Sale Landing Page Template

`SN-W03372` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, neon-lit sale page on near-black violet (#05010d), with a large white uppercase display headline and a soft violet glow behind it. Panels have angled corners and thin borders, and the progress bar in magenta (#d946ef) carries the funding status. The page is a single-screen stage, with a centred pill and a countdown set under the headline.

**Mood:** neon, dark, futuristic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05010d` | Page ground |
| Surface | `#130623` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4c1d95` | Primary action and highlights |
| Second accent | `#14b8a6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#05010d` · `#130623` · `#0b0214` · `#000000` · `#d946ef` · `#14b8a6` · `#4c1d95` · `#020105`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h3 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_rgba(168,85,247,1)]`, `shadow-[0_0_15px_rgba(124,58,237,0.3)]`, `shadow-[0_0_20px_rgba(124,58,237,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-transparent border border-brand-primary text-brand-accent px-6 py-2 rounded text-xs font-semibold tracking-wide hover:bg-brand-primary/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #05010d;
  --color-surface: #130623;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #4c1d95;
  --color-accent-2: #14b8a6;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05010d',
    surface: '#130623',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#4c1d95',
    accent2: '#14b8a6',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black violet (#05010d) with white uppercase headlines
- **Do:** Use magenta (#d946ef) only for progress and status fills
- **Do:** Cut panel corners at an angle and keep the thin borders
- **Don't:** Don't use magenta for body text
- **Don't:** Don't add glow colours beyond the violet and magenta
- **Don't:** Don't use rounded corners on the panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
