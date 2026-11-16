# Design system — Video Editing & 3D Studio Landing Page Template

`SN-W03749` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark black opening screen with a bold white sans-serif wordmark, centred. A thin red rule and a small red monospaced status line sit beneath it, and red is the only colour, used at just those two points. The page keeps to a black ground with monospace text for system-style messages.

**Mood:** stark, minimal, severe, systematic, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fee2e2` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#ca8a04` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#a3a3a3` · `#000000` · `#171717` · `#50000a` · `#737373` · `#7f1d1d` · `#dc2626` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a monospace face
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 12px · h3 18px · body 10px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_#50000A]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="neon-glow-btn px-10 py-5 bg-[#50000A] text-white font-bold tracking-widest uppercase rounded-sm hover:bg-[#700010] transition-colors flex items-center gap-3 border border-red-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Case studies (`case-studies`)
6. Team (`team`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #fee2e2;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #ca8a04;
  --font-display: "a monospace face", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#fee2e2',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#ca8a04',
  },
  fontFamily: { display: ['a monospace face'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use red (#ef4444) only for thin rules and status text
- **Do:** Set the wordmark in bold white sans-serif, centred
- **Do:** Use monospaced uppercase for system messages and status lines
- **Don't:** Don't add colour to large areas; the ground stays black
- **Don't:** Don't round the corners of rules or badges
- **Don't:** Don't set the wordmark in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
