# Design system — Web3 PR Agency Landing Page Template

`SN-W01736` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, neon-accented agency page on near-black [#0a0a0a] with a heavy white uppercase headline and the phrase AI SEARCH in green [#00ff00]. A solid green primary button sits beside a dark outlined button, and a line diagram of connected nodes in the hero is drawn in green on black. The design is stark and high-contrast, with colour limited to the accent and the diagram.

**Mood:** stark, high-contrast, techy, urgent, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ff00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#00ff00` · `#888888` · `#111111` · `#666666` · `#0a0a0a` · `#333333` · `#444444` · `#222222` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, JetBrains Mono
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_-10px_rgba(0,255,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 bg-[#00FF00] text-black rounded font-semibold hover:bg-[#00CC00] transition-colors text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #666666;
  --color-border: #ffffff;
  --color-accent: #00ff00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#666666',
    line: '#ffffff',
    accent: '#00ff00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase white with the key phrase in green (#00ff00)
- **Do:** Use a solid green primary button beside a dark outlined secondary button
- **Do:** Draw hero diagrams as thin green lines and nodes on black
- **Don't:** Don't use a light background; this template is dark throughout
- **Don't:** Don't set paragraphs in the green accent
- **Don't:** Don't round the buttons into pills; they keep a square or slightly rounded shape

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
