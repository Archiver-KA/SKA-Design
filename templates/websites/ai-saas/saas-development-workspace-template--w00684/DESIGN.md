# Design system — SaaS Development Workspace Template

`SN-W00684` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, dense project dashboard for reviewing staging builds, built from near-black panels with hairline dividers and small grey labels. The page title 'Gate Verification' sits in white at a modest size, with side-by-side reference and current previews below it, and status is shown with small coloured pills. The look is functional and quiet, closer to a developer console than a marketing page.

**Mood:** functional, dense, dark, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#71717a` · `#d4d4d8` · `#18181b` · `#ffffff` · `#09090b` · `#34d399` · `#a1a1aa` · `#52525b` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 20px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #34d399;
  --color-accent-2: #fbbf24;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#34d399',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set panels on near-black (#09090b) with hairline borders (#27272a) and no shadows
- **Do:** Use small coloured status pills for states such as Valid and Clean, and keep headings modest
- **Do:** Keep body and labels in grey (#a1a1aa) and reserve white for the page title
- **Don't:** Don't enlarge the page title much beyond 20px; the dashboard uses a small scale
- **Don't:** Don't use the green accent on buttons; it marks status only
- **Don't:** Don't put marketing imagery into panels; the previews are the only images

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
