# Design system — Runlyx AI SaaS Landing Page Template

`SN-W00676` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark SaaS hero on a pure black ground, with a centred white headline in a heavy sans and one word, 'Build', set inside a deep blue outlined box. Small rounded tags float around the headline like callouts, and the product mock-up is a dark editor window below. The page keeps colour to that one highlight and uses light grey for supporting copy.

**Mood:** dark, technical, confident, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#25358b` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#94a3b8` · `#cbd5e1` · `#d4d4d8` · `#a1a1aa` · `#171717` · `#60a5fa` · `#f4f4f5` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, JetBrains Mono, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_4px_20px_rgba(255,255,255,0.4)]`, `shadow-[0_0_15px_rgba(59,130,246,0.15)]`, `shadow-[0_0_25px_rgba(59,130,246,0.35)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex-1 rounded bg-white px-3 py-2 text-xs font-medium text-neutral-900 hover:bg-zinc-100">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Code / terminal (`code-terminal`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #f1f5f9;
  --color-border: #ffffff;
  --color-accent: #25358b;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#f1f5f9',
    line: '#ffffff',
    accent: '#25358b',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Mark one headline word per section in a deep blue (#25358b) box with a thin border
- **Do:** Keep the ground black (#000000) and the headline white
- **Do:** Place small rounded callout tags around the headline, not inside it
- **Don't:** Don't add yellow highlights; the only colour is the blue box
- **Don't:** Don't add glows to the headline; the highlight box is the only effect
- **Don't:** Don't use a light background for the product window

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
