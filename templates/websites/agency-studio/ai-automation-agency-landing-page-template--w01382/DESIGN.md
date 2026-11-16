# Design system — AI Automation Agency Landing Page Template

`SN-W01382` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a centred headline in Inter, where the first line is white and the second is a blue-to-violet gradient on the words Intelligent AI Agents. A bright blue primary button sits beside a dark outlined secondary, and a trusted-by line sits at the foot of the first screen. The gradient is the signature and sets the tone: confident, technical and cool.

**Mood:** confident, cool, technical, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020408` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#64748b` · `#000000` · `#e2e8f0` · `#020408` · `#475569` · `#03060a` · `#cbd5e1` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020408;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020408',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white Inter, with one phrase in a blue-to-violet gradient.
- **Do:** Use the bright blue for the primary button, paired with a dark outlined secondary.
- **Do:** Keep the trusted-by line small and grey at the foot of the first screen.
- **Don't:** Don't apply the gradient to body copy or buttons.
- **Don't:** Don't set the primary button in violet; blue is the action colour.
- **Don't:** Don't use a light background; the near-black ground is the design.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
