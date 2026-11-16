# Design system — AI Health App Landing Page Template

`SN-W02314` · healthcare · dark mode · Sinera Atlas theme `calm` · language `ar`

## Direction

A deep navy page with a large white Arabic headline set right-aligned, where the closing phrase is in a green gradient (#34d399 range). A dark app mockup with a chat-style panel sits on the left, with small green status labels and a floating notification chip. The stats row and the green accent give a clinical, tech-forward tone, and the layout runs right-to-left.

**Mood:** clinical, tech-forward, dark, precise, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#1e293b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#334155` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#34d399` · `#94a3b8` · `#1e293b` · `#020617` · `#64748b` · `#0f172a` · `#334155` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Tajawal
- **Body:** Tajawal
- **Loaded families:** Tajawal
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="relative overflow-hidden group bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all border border-white/5 flex items-center gap-2 backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #1e293b;
  --color-text: #ffffff;
  --color-muted: #334155;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #1e293b;
  --font-display: "Tajawal", sans-serif;
  --font-body: "Tajawal", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#1e293b',
    ink: '#ffffff',
    muted: '#334155',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Tajawal'], sans: ['Tajawal'] },
} }
```

## Do and don't

- **Do:** Set the headline right-aligned in white Arabic type, with the closing phrase in green (#34d399)
- **Do:** Build app mockups as dark navy cards with small green status labels
- **Do:** Use white for the primary button and a dark outline for the secondary
- **Don't:** Don't use the bright green (#10b981) as the page background
- **Don't:** Don't left-align Arabic text; keep the layout right-to-left
- **Don't:** Don't add a light section into the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
