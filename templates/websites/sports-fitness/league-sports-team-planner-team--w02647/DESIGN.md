# Design system — League, Sports team , Planner, Team 

`SN-W02647` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A near-black operations console in which almost everything is white or grey on dark panels. The green accent (#00e559) appears only as a faint outline and glow, so it reads as status rather than decoration. Large grotesque headlines sit on the left, and a glass-style panel on the right holds the actions. The look is quiet, controlled and tool-like.

**Mood:** restrained, technical, dark, controlled, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#00e559` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#00e559` · `#a1a1aa` · `#09090b` · `#38bdf8` · `#1a1b1e` · `#3f3f46` · `#0c0d10` · `#1a1c20`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 24px · body 20px
- **Weights in use:** semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[20px]` (20px), `rounded-[100px]` (100px)
- **Shadows:** `shadow-[inset_0_0_100px_rgba(56,189,248,0.02)]`, `shadow-[0_0_40px_-10px_rgba(0,229,89,0.15)]`, `shadow-[0_0_50px_-5px_rgba(0,229,89,0.25)]`
- **Content width:** `max-w-7xl`, `max-w-[1600px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="bg-[#00E559] text-[#09090B] px-6 py-3 rounded-[20px] text-lg font-semibold hover:bg-[#00E559]/90 transition-colors shadow-[0_0_20px_rgba(0,229,89,0.3)] hover:shadow-[0_0_30px_rgba(0,229,89,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Team (`team`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
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
    surface: '#27272a',
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

- **Do:** Keep the page monochrome and use #00e559 only for status or the outline of active elements.
- **Do:** Place headlines left and the action panel right in the hero.
- **Do:** Use dark panels with thin borders for every grouped control.
- **Don't:** Don't fill buttons with the green; use outlines or white fills.
- **Don't:** Don't add decorative imagery behind the panels.
- **Don't:** Don't use the blue (#38bdf8) for anything beyond a secondary highlight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
