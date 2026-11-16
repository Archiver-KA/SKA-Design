# Design system — Defense Technology Landing Page Template

`SN-W00336` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, military-tech page on a near-black navy ground with a cyan (#22d3ee) highlight on the second half of the headline and on the primary button. Headlines are large, bold and uppercase in white, and floating HUD-style target panels frame the hero. The cyan stays confined to signal and action, so the tactical tone comes from the panels.

**Mood:** tactical, dark, bold, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#22d3ee` · `#000000` · `#94a3b8` · `#10b981` · `#171717` · `#6366f1` · `#64748b` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_rgba(34,211,238,0.5)]`, `shadow-lg`, `shadow-[0_0_30px_rgba(34,211,238,1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-white/10 border border-white/10 px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-white/20 hover:border-white/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Marquee (`marquee`)
5. About (`about`)
6. Services (`services`)
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
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #6366f1;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#334155',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the key headline phrase in cyan (#22d3ee) in uppercase
- **Do:** Keep HUD panels as thin bordered frames with small labels
- **Do:** Use the cyan button only for the main call to action
- **Don't:** Don't use cyan for body text
- **Don't:** Don't fill the HUD panels with bright colour; they stay outlined
- **Don't:** Don't use light grounds; the page stays dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
