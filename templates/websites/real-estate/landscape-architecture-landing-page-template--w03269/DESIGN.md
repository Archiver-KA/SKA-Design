# Design system — Landscape Architecture Landing Page Template

`SN-W03269` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Cinematic and editorial, on a near-black ground (#050505). A very large serif headline stacks two lines, the first in white and the second in italic grey, centred under a thin top bar with small tracked labels. A pale lime pill marks the eyebrow, and the spacing is generous, so the first screen reads like a magazine cover rather than a sales page.

**Mood:** cinematic, editorial, restrained, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#84cc16` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#84cc16` · `#a1a1aa` · `#52525b` · `#71717a` · `#000000` · `#050505` · `#65a30d` · `#365314` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Newsreader
- **Scale (largest breakpoint):** h1 160px · h2 72px · h3 30px · body 18px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-[1600px]`, `max-w-5xl`
- **Section padding:** `py-[140px]`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="btn-beam hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase font-medium text-white hover:scale-105 transition-transform duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Awards / press (`awards-press`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Schedule (`schedule-agenda`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #84cc16;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#84cc16',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif display face, with the second line in italic grey.
- **Do:** Use the lime (#84cc16) only for the small eyebrow pill.
- **Do:** Keep the ground near-black (#050505) and centre the hero copy.
- **Don't:** Don't tint the page background green; the ground stays black.
- **Don't:** Don't place bright colour blocks behind the headline.
- **Don't:** Don't set the headline in a sans face at this size.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
