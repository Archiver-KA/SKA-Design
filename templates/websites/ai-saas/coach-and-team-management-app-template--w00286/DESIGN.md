# Design system — Coach & Team Management App Template

`SN-W00286` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark mobile-first app screen on near-black [#09090b] with grey cards [#1a1b1e]. The one signal colour is bright green [#00e559], used for the live status dot, the active tab and the key text labels, while blue [#38bdf8] marks secondary notices. Inter sets all the text at small sizes, and rounded pill chips and cards give the screen a friendly, sporty feel.

**Mood:** dark, friendly, sporty, mobile-first

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#1a1b1e` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#00e559` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#a1a1aa` · `#00e559` · `#1a1b1e` · `#38bdf8` · `#09090b` · `#3f3f46` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 14px · h2 24px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[20px]` (20px), `rounded-[16px]` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[#00E559]/5`
- **Content width:** `max-w-[420px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="w-full bg-[#27272A] hover:bg-[#3f3f46] text-white text-sm font-medium py-3 rounded-[12px] flex items-center justify-between px-4 transition-colors">…</a>
```

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Unicorn Studio (WebGL scenes), React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #1a1b1e;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #00e559;
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
    background: '#09090b',
    surface: '#1a1b1e',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#00e559',
    accent2: '#38bdf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#00e559) only for status, the active tab and the next-event label
- **Do:** Set cards on a surface one step lighter than the page (#1a1b1e on #09090b)
- **Do:** Keep the layout to one column with a bottom tab bar on phone width
- **Don't:** Don't use green for large fills or backgrounds
- **Don't:** Don't add drop shadows to cards
- **Don't:** Don't set body text larger than the small scale the screen uses

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
