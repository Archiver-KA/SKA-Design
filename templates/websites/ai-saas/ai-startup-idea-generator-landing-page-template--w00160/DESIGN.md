# Design system — AI Startup Idea Generator Landing Page Template

`SN-W00160` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Single-screen black splash with a metallic silver-gradient wordmark, IDEA GUY, set very large in a grotesque sans and centred over a faint glowing figure. A small tracked monospace line in grey carries the supporting stat, and one white pill button is the only control. The page is theatrical and minimal, with the wordmark doing all the work.

**Mood:** theatrical, minimal, dark, metallic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#581c87` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#a1a1aa` · `#71717a` · `#a855f7` · `#27272a` · `#581c87` · `#d8b4fe` · `#52525b` · `#9333ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Space Grotesk, JetBrains Mono, Inter
- **Scale (largest breakpoint):** h1 128px · h2 128px · h3 30px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]`, `shadow-[0_0_15px_rgba(168,85,247,0.5)]`, `shadow-[0_0_20px_rgba(168,85,247,0.4)]`
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="mt-16 group relative px-8 py-3 rounded-full bg-white text-black font-medium text-sm tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #581c87;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#581c87',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark very large in a silver gradient on black
- **Do:** Keep the supporting line as tracked uppercase monospace in grey
- **Do:** Use one white pill button as the only control on the screen
- **Don't:** Don't add colour to the wordmark; it stays silver
- **Don't:** Don't stack more than one button
- **Don't:** Don't place body copy above the wordmark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
