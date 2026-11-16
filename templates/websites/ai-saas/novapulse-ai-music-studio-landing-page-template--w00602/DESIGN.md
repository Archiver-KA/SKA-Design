# Design system — NovaPulse AI Music Studio Landing Page Template

`SN-W00602` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black music-studio landing page where the headline is white sans with one phrase, signature sound, in clear blue (#3b82f6). The primary action is a dark blue pill, and the hero shows a rounded dark player card with a glowing disc and a waveform scrubber. Blue is the one strong colour, used for emphasis in type and for the player.

**Mood:** focused, modern, dark, precise, music-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#3b82f6` · `#ffffff` · `#60a5fa` · `#94a3b8` · `#0f172a` · `#020617` · `#cbd5e1` · `#000000` · `#e2e8f0` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Newsreader, Google Sans Flex, Oswald, DM Sans, Cormorant Garamond
- **Scale (largest breakpoint):** h1 60px · h2 20px · h3 18px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-blue-500/40`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-tight text-slate-950 shadow-lg border-blue-400/70 bg-blue-500/90 shadow-blue-500/40 hover:bg-blue-400 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0f172a;
  --color-text: #f1f5f9;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0f172a',
    ink: '#f1f5f9',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the page ground to black (#000000) with white headlines (#f1f5f9).
- **Do:** Use the blue (#3b82f6) for one highlighted headline phrase and the primary button.
- **Do:** Build the hero visual as a dark rounded player card with a glowing disc and a thin scrubber.
- **Don't:** Don't set the whole headline in blue; only the one phrase takes it.
- **Don't:** Don't use the green (#10b981) on the first screen.
- **Don't:** Don't remove the faint disclaimer line under the buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
