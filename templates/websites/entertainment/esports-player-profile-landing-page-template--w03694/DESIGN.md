# Design system — Esports Player Profile Landing Page Template

`SN-W03694` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A centred, dark player profile page where the name is set large in white and a grey word carries the subtitle. A single orange (#f97316) square icon above the name is the only colour mark on the page. The copy beneath is short and muted, which keeps the focus on the player's name.

**Mood:** focused, minimal, dark, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#27272a` · `#71717a` · `#ffffff` · `#09090b` · `#f97316` · `#e4e4e7` · `#a1a1aa` · `#52525b` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 16px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tighter`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-orange-glow`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-[320px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-24`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="pointer-events-auto text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800/50 backdrop-blur-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Marquee (`marquee`)
5. Call to action (`cta`)
6. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #e4e4e7;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#e4e4e7',
    muted: '#71717a',
    line: '#27272a',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#f97316) for the icon and the primary action only
- **Do:** Set the player name large in white, with a grey second word
- **Do:** Keep the supporting copy short and muted, two lines at most
- **Don't:** Don't use the orange for headings
- **Don't:** Don't add a second accent to the profile
- **Don't:** Don't place stats in small type over busy backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
