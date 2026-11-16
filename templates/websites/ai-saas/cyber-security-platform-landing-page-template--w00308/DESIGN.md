# Design system — Cyber Security Platform Landing Page Template

`SN-W00308` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark terminal-style landing page on near-black [#0a0a0a], with a large white Inter headline where one word is set in mint green [#34d399]. The hero shows a code window with green prompt and status lines, and the nav is a thin bar with a small green dot. The look is a hacker terminal kept to a single green accent, with monospace used for the labels.

**Mood:** terminal, dark, technical, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#94a3b8` · `#34d399` · `#64748b` · `#06b6d4` · `#ef4444` · `#a855f7` · `#f1f5f9` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(16,185,129,0.2)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white/15 text-white text-xs font-medium px-4 py-1.5 rounded border border-white/10 transition-all hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Code / terminal (`code-terminal`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #333333;
  --color-text: #0a0a0a;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #ef4444;
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
    surface: '#333333',
    ink: '#0a0a0a',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one headline word in mint (#34d399) and keep the rest white
- **Do:** Show code in a dark window with green prompt lines
- **Do:** Use a monospace face for status tags and terminal output
- **Don't:** Don't use the green for long paragraphs
- **Don't:** Don't use a light background; the terminal look depends on the black ground
- **Don't:** Don't add red (#ef4444) to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
