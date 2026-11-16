# Design system — Fusion Energy Startup Landing Page Template

`SN-W00407` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, serif-led hero for a deep-tech company. The large light serif headline has its second line dimmed to grey, giving an editorial voice rather than a typical SaaS sans. Purple light (#d946ef) comes from a soft blurred glow beside the headline, with a small hairline-bordered stat card over it.

**Mood:** editorial, dark, cinematic, quiet, luminous

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e879f9` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d946ef` · `#a3a3a3` · `#737373` · `#0a0a0a` · `#262626` · `#e879f9` · `#171717` · `#c026d3` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(217,70,239,0.8)]`, `shadow-[0_0_30px_rgba(217,70,239,0.6)]`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex px-4 py-2 rounded-full text-xs font-medium transition-all border bg-white/10 hover:bg-white/20 text-white border-white/5 hover:border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Timeline (`timeline`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #e879f9;
  --color-accent-2: #6366f1;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#e879f9',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large serif, with the second line in grey (#a3a3a3)
- **Do:** Keep the purple glow (#d946ef) beside the visual and out of the text column
- **Do:** Use a bordered stat card with a small purple dot for live metrics
- **Don't:** Don't put the purple glow behind body copy
- **Don't:** Don't use a light page ground; the page is near-black (#0a0a0a)
- **Don't:** Don't stack more than one glow shape in a section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
