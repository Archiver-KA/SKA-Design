# Design system — AI Automation Agency Landing Page Template

`SN-W01380` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a centred headline in Inter, the first line white and the second a violet gradient on intelligent agents. A white primary button sits beside a dark outlined secondary, and a row of small icon tiles joined by connectors sits below the hero to show a process. Violet (#a855f7) is the accent for the gradient phrase, and the rest stays white on black.

**Mood:** violet, dark, clean, flow-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a855f7` · `#27272a` · `#a1a1aa` · `#c084fc` · `#71717a` · `#09090b` · `#3f3f46` · `#e4e4e7` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_0_8px_rgba(9,9,11,1)]`, `shadow-[0_0_8px_rgba(168,85,247,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="text-sm font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #4ade80;
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
    surface: '#27272a',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the violet (#a855f7) gradient on one headline phrase only.
- **Do:** Keep the primary button white and the secondary dark and outlined.
- **Do:** Use small icon tiles joined by thin connectors to show a process.
- **Don't:** Don't use violet for buttons or large fills.
- **Don't:** Don't add a second gradient to the same headline.
- **Don't:** Don't set the page on a light ground; the black base is the design.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
