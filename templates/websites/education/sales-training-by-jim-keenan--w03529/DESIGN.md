# Design system — Sales Training by Jim Keenan

`SN-W03529` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, confrontational sales page on near-black (#030303) with a bold white headline whose second line turns red (#ef4444) in italic. A small outlined tag sits above the headline, and the navigation action is a dark red-outlined button. Grey supporting copy and a faint warm glow give the page a serious, provocative tone.

**Mood:** provocative, direct, dark, serious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ef4444` · `#27272a` · `#ffffff` · `#18181b` · `#a1a1aa` · `#f87171` · `#3f3f46` · `#d4d4d8` · `#71717a` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-[inset_0_1px_10px_rgba(0,0,0,1)]`, `shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)]`, `shadow-[inset_0_0_40px_rgba(0,0,0,1)]`
- **Content width:** `max-w-[1200px]`, `max-w-[26ch]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="flex items-center justify-center px-4 py-1.5 bg-zinc-800 text-red-400 border border-red-500/30 rounded-sm text-sm font-normal hover:bg-zinc-700 shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all uppercase tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Video / media (`video-media`)
5. Marquee (`marquee`)
6. Stats band (`stats`)
7. Feature grid (`features`)
8. Services (`services`)
9. Call to action (`cta`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #ef4444;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#ef4444',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in red (#ef4444) italic to mark the turn
- **Do:** Use red outlines and tags for the badge and navigation action, not large fills
- **Do:** Keep the grey supporting copy centred below the headline
- **Don't:** Don't use the red italic for more than one line per headline
- **Don't:** Don't fill large areas with red
- **Don't:** Don't add bright blue or green elements to the dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
