# Design system — Auto Body Repair Landing Page Template

`SN-W01825` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Hard-edged dark industrial: a pure black ground with a huge white uppercase headline stacked on the left, its lower lines dimmed, and a grey numbered label above. A scrolling ticker band runs along the top, and a before-and-after slider frame sits to the right with a thin white divider. Red appears only as a small tag; the layout is raw, gridded and technical.

**Mood:** industrial, raw, gridded, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#7f1d1d` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#27272a` · `#71717a` · `#18181b` · `#52525b` · `#3f3f46` · `#a1a1aa` · `#09090b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 20px · body 12px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1920px]`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-px`

**Primary button**

```html
<a class="bg-black px-6 py-2 text-xs font-mono uppercase hover:bg-zinc-900 hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Marquee (`marquee`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #7f1d1d;
  --color-accent-2: #22c55e;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#7f1d1d',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy white uppercase with the lower lines dimmed
- **Do:** Use a thin ticker band at the top for status text
- **Do:** Keep numbered section labels above headings in grey
- **Don't:** Don't soften the headline weight; keep it heavy and uppercase
- **Don't:** Don't use red for large fills; it is a small signal
- **Don't:** Don't add decorative imagery over the black ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
