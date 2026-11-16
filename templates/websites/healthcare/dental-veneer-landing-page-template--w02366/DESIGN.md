# Design system — Dental Veneer Landing Page Template

`SN-W02366` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, cinematic hero on a near-black navy ground, with the headline set large in Inter and split between white and cyan (#22d3ee) on the word Smile. Soft glow shapes sit behind the centred type, and the cyan is used only for that one highlighted word. The mood is precise and futuristic, supported by the generous line height and centred layout.

**Mood:** cinematic, precise, futuristic, dark, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#7f1d1d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#020617` · `#94a3b8` · `#0f172a` · `#06b6d4` · `#1e293b` · `#083344` · `#64748b` · `#7f1d1d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_25px_rgba(255,255,255,0.4)]`, `shadow-[0_0_40px_rgba(34,211,238,0.05)]`, `shadow-[0_0_10px_#22d3ee]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #f8fafc;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #7f1d1d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#f8fafc',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#7f1d1d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at display size, centred, with the key word in cyan (#22d3ee).
- **Do:** Keep the page on the near-black navy ground (#020617) with the lighter navy card surface (#0f172a).
- **Do:** Use the cyan only for the highlighted word and the primary button.
- **Don't:** Don't add a second accent colour to the hero.
- **Don't:** Don't left-align the hero headline; the layout is centred.
- **Don't:** Don't put cyan on body text, which is grey (#94a3b8).

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
