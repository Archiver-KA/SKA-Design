# Design system — Tommy French

`SN-W03550` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Tommy French uses a near-black ground with a faint warm glow on one side. The key phrase of the headline is set in emerald (#10b981) italic, the only colour in the hero. Secondary buttons are dark translucent pills with green text, and the body copy is a muted grey. The large, centred sans-serif headline makes the page read as direct and confident.

**Mood:** confident, dark, direct, focused, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#10b981` · `#18181b` · `#a1a1aa` · `#ffffff` · `#34d399` · `#6ee7b7` · `#71717a` · `#f59e0b` · `#06b6d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, extralight, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)]`, `shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]`, `shadow-[inset_0_0_40px_rgba(0,0,0,1)]`
- **Content width:** `max-w-[1200px]`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="flex items-center justify-center px-4 py-1.5 bg-zinc-800 text-emerald-400 border border-emerald-500/30 rounded-full text-sm font-normal hover:bg-zinc-700 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Team (`team`)
6. Testimonials (`testimonials`)
7. Process / steps (`how-it-works`)
8. About (`about`)
9. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
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
  --color-accent: #10b981;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
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
    accent: '#10b981',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in emerald (#10b981) italic
- **Do:** Use dark translucent pills for secondary buttons
- **Do:** Keep body text in muted grey (#a1a1aa)
- **Don't:** Don't set whole headlines in green
- **Don't:** Don't add light backgrounds behind the hero
- **Don't:** Don't add a second glow colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
