# Design system — FREESTYLE SILESIA

`SN-W00405` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black music-streaming page where the headline's first word, 'Feel', is set in a pale sky-blue gradient (#7dd3fc) and the rest in white, large and sans. The primary action is a pale sky button with dark text, and a purple waveform sweeps across the lower hero, giving the page its motion. Below, horizontal track cards and a fixed player bar keep the focus on the audio.

**Mood:** cinematic, kinetic, dark, audio-led, sleek

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#7dd3fc` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#1e293b` · `#020617` · `#0ea5e9` · `#7dd3fc` · `#64748b` · `#0f172a` · `#000000` · `#38bdf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, JetBrains Mono
- **Scale (largest breakpoint):** h1 80px · h2 18px · h3 14px · body 12px
- **Weights in use:** semibold, light
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-4xl`, `max-w-[140px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-8 py-3 rounded-xl bg-sky-200 text-slate-950 text-xs font-mono-tech uppercase tracking-wider font-semibold hover:bg-white hover:scale-[1.03] transition-all">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #334155;
  --color-accent: #7dd3fc;
  --color-accent-2: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#334155',
    accent: '#7dd3fc',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first word of the headline in the pale sky gradient (#7dd3fc), and the rest in white.
- **Do:** Use the pale sky button with dark text as the primary action, and an outline button for the second.
- **Do:** Keep the trending track cards in a row below the hero, with the player bar fixed at the bottom.
- **Don't:** Don't use the pale blue on body copy; it is for the headline and primary action.
- **Don't:** Don't add a light background; the page is black.
- **Don't:** Don't add more colours to the waveform beyond its purple and blue.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
