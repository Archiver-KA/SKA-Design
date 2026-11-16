# Design system — Discord Automation and Bot Showcase Template

`SN-W00349` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark bot-showcase page on near-black where the second headline line carries a violet-to-pink gradient, the page's signature move. Headlines are large Inter, white on the first line, with a centred pill label above. A white solid button sits beside a dark ghost button, and violet glow is the only accent, kept to the headline and the logo badge.

**Mood:** energetic, polished, dark, gamer

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8b5cf6` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#27272a` · `#8b5cf6` · `#a78bfa` · `#18181b` · `#71717a` · `#d4d4d8` · `#52525b` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_15px_rgba(139,92,246,0.5)]`, `shadow-lg`, `shadow-violet-500/20`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-4 py-2 rounded-lg text-xs font-semibold tracking-wide hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #27272a;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #8b5cf6;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#27272a',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#8b5cf6',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the violet-to-pink gradient
- **Do:** Use the white solid button as the primary action beside the dark ghost secondary
- **Do:** Keep the violet (#8b5cf6) for the logo badge and small pill labels
- **Don't:** Don't use the gradient on body text
- **Don't:** Don't add a third hue to the headline gradient
- **Don't:** Don't put light backgrounds behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
