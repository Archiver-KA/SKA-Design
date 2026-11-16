# Design system — PaperClaw AI Agent Platform Template

`SN-W00623` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black product page where mint green (#10b981) is the only accent: one headline line set in green and a glowing green primary button. Headlines are Inter in white, with body copy in grey (#a1a1aa) for contrast. Depth comes from the soft green glow around the button and the code window, not from cards or gradients on the surface.

**Mood:** dark, monochrome, developer, glowing, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#a1a1aa` · `#34d399` · `#27272a` · `#71717a` · `#6ee7b7` · `#e4e4e7` · `#3f3f46` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-emerald-500/30`, `shadow-emerald-500/50`
- **Content width:** `max-w-[1200px]`, `max-w-[85%]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group flex items-center justify-center px-4 py-1.5 shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden font-medium text-emerald-950 bg-gradient-to-r from-[#A7F3D0] to-[#10B981] rounded-full text-sm relative">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Code / terminal (`code-terminal`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #10b981;
  --color-accent-2: #38bdf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#10b981',
    accent2: '#38bdf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use mint green (#10b981) for the one highlighted headline line and the primary button
- **Do:** Keep the page black (#030303) with grey body text (#a1a1aa)
- **Do:** Let the soft green glow behind buttons and code windows supply the depth
- **Don't:** Don't add a second accent hue on the hero; keep to green and neutrals
- **Don't:** Don't use bright white for body copy
- **Don't:** Don't add a light section behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
