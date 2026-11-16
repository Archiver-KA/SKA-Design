# Design system — AI-R Restaurant OS Landing Page Template

`SN-W02831` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark product page on near-black (#09090b) where the hero headline switches between a white line and a muted grey line, and the cyan (#06b6d4) fills the primary demo button. The interface mock uses layered #18181b panels with #27272a hairline borders, so depth comes from tone and outline rather than shadow. Small status pills and dense product cards make the page read as an operating console.

**Mood:** dark, technical, precise, console-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |

Palette by frequency of use: `#27272a` · `#18181b` · `#f4f4f5` · `#a1a1aa` · `#71717a` · `#d4d4d8` · `#ffffff` · `#06b6d4` · `#09090b` · `#0891b2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 16px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 text-sm font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Sign-in form (`auth-form`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #fafafa;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #06b6d4;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#fafafa',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#06b6d4',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in bold white, with the second line in muted grey (#a1a1aa)
- **Do:** Use the cyan (#06b6d4) for the primary button and status dots only
- **Do:** Build panels on #18181b with #27272a borders
- **Don't:** Don't use a serif face; the page is system sans-serif
- **Don't:** Don't use cyan for body text or large areas
- **Don't:** Don't add gradients to the headline; the contrast comes from white and grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
