# Design system — Lovesick AI Generative Audio Visual Landing Page Template

`SN-W00506` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light grey page with heavy black Inter headlines, one word in saturated magenta (#d926cd) for emphasis, and a dark terminal-style prompt box as the focal element. The magenta is the one bold hue, applied to the headline word and the prompt cursor, while a dark status bar anchors the bottom. The look is raw and experimental, closer to a tool interface than a brochure.

**Mood:** raw, experimental, bold, glitchy, tool-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#d926cd` | Primary action and highlights |

Palette by frequency of use: `#d926cd` · `#18181b` · `#ffffff` · `#e4e4e7` · `#71717a` · `#a1a1aa` · `#d4d4d8` · `#52525b` · `#27272a` · `#f0f0f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 144px · h2 60px · h3 30px · body 18px
- **Weights in use:** light, bold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[8px_8px_0px_0px_rgba(217,38,205,1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="font-condensed uppercase tracking-wide bg-zinc-900 text-white px-6 py-2 text-lg hover:bg-[#d926cd] transition-colors active:scale-95 duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Code / terminal (`code-terminal`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #18181b;
  --color-text: #111111;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #d926cd;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#18181b',
    ink: '#111111',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#d926cd',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one word of each hero headline in magenta (#d926cd).
- **Do:** Frame the prompt input as a hard-edged box with a solid offset shadow in magenta.
- **Do:** Keep the status bar dark (#18181b) with small monospaced text.
- **Don't:** Don't use magenta for large background areas.
- **Don't:** Don't soften the prompt box with rounded corners or gradients.
- **Don't:** Don't set body copy in the light grey (#a1a1aa); it is hard to read on white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
