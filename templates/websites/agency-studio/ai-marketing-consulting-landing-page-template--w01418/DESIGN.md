# Design system — AI Marketing Consulting Landing Page Template

`SN-W01418` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with an upright serif headline in white and the second phrase set in an italic serif in grey. A small orange eyebrow with a rule introduces the section, and the primary button is a square-cornered solid pale button in uppercase sans. Thin rules, a live-status panel with slider bars and a faint technical footer carry the look: quiet, editorial and precise.

**Mood:** quiet, editorial, precise, dark, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#fafafa` · `#262626` · `#a3a3a3` · `#0a0a0a` · `#737373` · `#171717` · `#404040` · `#ea580c` · `#e5e5e5` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 36px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`, `shadow-black/50`, `shadow-[0_0_8px_rgba(34,197,94,0.4)]`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="block px-6 py-3 font-mono text-xs tracking-widest hover:text-ink uppercase transition-colors text-neutral-400 hover:bg-neutral-800/50">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. Articles (`blog-articles`)
7. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #fafafa;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #ea580c;
  --color-accent-2: #22c55e;
  --font-display: "Cormorant Garamond", serif;
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
    ink: '#fafafa',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#ea580c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in the upright serif in white, with the second phrase in italic grey.
- **Do:** Use square corners and uppercase sans for the buttons.
- **Do:** Keep the orange (#ea580c) to the eyebrow and one highlight, not to fills.
- **Don't:** Don't round the buttons; the square corners are part of the look.
- **Don't:** Don't set body copy in the serif; it is sans.
- **Don't:** Don't add bright gradients; the page uses flat black and grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
