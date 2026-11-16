# Design system — Futuristic Agency Landing Page Template

`SN-W01578` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black ground with a heavy uppercase headline in a silver gradient, its second line rendered as a faint outlined ghost behind it for depth. Lime (#ccff00) fills the primary button and marks the status labels, and tracked monospace text sets the supporting message in small type. Hard edges and a square-cornered button give it a tactical, high-impact tone.

**Mood:** tactical, high-impact, stark, layered, electric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |

Palette by frequency of use: `#ccff00` · `#ffffff` · `#27272a` · `#71717a` · `#18181b` · `#000000` · `#a1a1aa` · `#52525b` · `#030303` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h2 48px · h3 14px · body 12px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="px-6 py-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Bento grid (`bento-grid`)
7. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #ccff00;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#ccff00',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase with a silver gradient and an outline ghost line behind
- **Do:** Use lime (#ccff00) for the primary button and status labels only
- **Do:** Keep buttons square-cornered, as in the hero
- **Don't:** Don't round the primary button into a pill; the hard edge is the style
- **Don't:** Don't use lime for large areas of background
- **Don't:** Don't drop the ghost outline text; it gives the headline its depth

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
