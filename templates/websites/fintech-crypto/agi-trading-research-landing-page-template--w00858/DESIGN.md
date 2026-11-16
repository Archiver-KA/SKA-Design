# Design system — AGI Trading Research Landing Page Template

`SN-W00858` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black, editorial hero with a large white serif headline in Instrument Serif, where the middle line is set in italic grey and the final phrase 'proves it.' is set in amber (#f5a524). Small uppercase monospaced-style ticker text runs across the top, and the amber primary button sits under the copy. The serif and the single amber phrase give it a research-report tone.

**Mood:** editorial, research-led, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e8e6e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5a524` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f5a524` · `#0d0a05` · `#0a0a0a` · `#e8e6e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Instrument Serif
- **Loaded families:** Instrument Serif, JetBrains Mono, Inter
- **Scale (largest breakpoint):** h3 24px · body 14px
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-28`
- **Common gaps:** `gap-6`, `gap-3`, `gap-16`

**Primary button**

```html
<a class="px-2.5 py-1 hover:bg-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. 3D / canvas scene (`3d-canvas`)
5. Code / terminal (`code-terminal`)
6. Feature grid (`features`)
7. Stats band (`stats`)
8. Logo cloud (`logo-cloud`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #e8e6e1;
  --color-border: #ffffff;
  --color-accent: #f5a524;
  --font-display: "Instrument Serif", serif;
  --font-body: "Instrument Serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#e8e6e1',
    line: '#ffffff',
    accent: '#f5a524',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif, with one italic grey line and one amber phrase
- **Do:** Use the amber (#f5a524) for the final highlight phrase and the primary button only
- **Do:** Keep the ticker strip small, uppercase and grey at the top of the hero
- **Don't:** Don't set body copy in the serif at small sizes
- **Don't:** Don't put more than one amber phrase in a headline
- **Don't:** Don't add a light background to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
