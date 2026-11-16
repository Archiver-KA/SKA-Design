# Design system — Minecraft Developer Portfolio Template

`SN-W02116` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark developer hero on a near-black ground [#0a0a0a] with a faint warm glow at the top. The two-line white headline dims its descriptor words to grey [#a3a3a3], and the primary button is solid amber [#fbbf24] beside a dark outlined secondary button. The nav is minimal, with one white pill on the right, and the copy stays in a narrow left column.

**Mood:** dark, focused, warm, technical, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#262626` · `#ffffff` · `#d4d4d4` · `#171717` · `#a3a3a3` · `#f59e0b` · `#0a0a0a` · `#fbbf24` · `#404040` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-inner`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full border border-transparent bg-amber-500 px-6 py-3 text-sm font-medium text-neutral-950 transition-all hover:bg-amber-400">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #fbbf24;
  --color-accent-2: #c084fc;
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
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#fbbf24',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Dim the descriptor words of the headline to grey (#a3a3a3) and keep the name in white.
- **Do:** Use amber (#fbbf24) for the primary button only.
- **Do:** Keep the nav minimal, with one white pill button on the right.
- **Don't:** Don't use amber for headline text.
- **Don't:** Don't turn the warm glow above the hero into a solid colour block.
- **Don't:** Don't add a second filled button beside the amber one.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
