# Design system — Holiday Web Agency Landing Page Template

`SN-W03057` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark agency page with a near-black ground (#18181b) and a heavy white sans headline that switches to green (#10b981) for its second word. Green is the only accent, used on the highlight word and small badges, while red (#ef4444) appears only on the time-limited price card. A glowing terminal-style panel on the right and a floating promo chip give it an energetic, tech-agency feel.

**Mood:** energetic, dark, techy, promotional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#18181b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#18181b` · `#10b981` · `#71717a` · `#27272a` · `#e4e4e7` · `#dc2626` · `#a1a1aa` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Orbitron, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 80px · body 20px
- **Weights in use:** bold, medium, black
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-none`, `shadow-xl`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="p-2 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-black/50 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #18181b;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#18181b',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#10b981) for the highlighted headline word and small status marks
- **Do:** Reserve red (#ef4444) for the limited-time offer card only
- **Do:** Set headlines in heavy Inter in uppercase
- **Don't:** Don't put a light background behind the hero; the page is dark
- **Don't:** Don't use red for buttons or body text
- **Don't:** Don't add more than one glow shape behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
