# Design system — AI Automation Agency Landing Page Template

`SN-W01387` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a left-aligned italic serif headline, where the first phrase, Automate your business, is in sky blue and the closing phrase is in white. Small monospace status text sits above, and a thin line diagram of a node with arcs fills the right half. The italic serif and the fine blue lines carry the page, which feels quiet and technical.

**Mood:** quiet, technical, editorial, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#030303` · `#000000` · `#0a0a0a` · `#050505` · `#10b981` · `#151515` · `#080808` · `#cbd5e1` · `#0f110e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 72px · h3 24px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[32px]` (32px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(56,189,248,0.1)]`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="group relative px-9 py-4 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-[#e5e5e5] flex items-center gap-3 overflow-hidden tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. About (`about`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-2: #38bdf8;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#cbd5e1',
    line: '#ffffff',
    accent: '#38bdf8',
    accent2: '#38bdf8',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in italic serif, with the first phrase in sky blue (#38bdf8) and the rest in white.
- **Do:** Use thin, single-weight blue line diagrams for the right-hand illustration.
- **Do:** Set status labels in small monospace with wide tracking above the headline.
- **Don't:** Don't set the headline in a bold sans; the italic serif is the voice.
- **Don't:** Don't fill the diagram areas with colour.
- **Don't:** Don't add a second accent hue to the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
