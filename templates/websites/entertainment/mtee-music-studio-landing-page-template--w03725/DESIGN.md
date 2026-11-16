# Design system — Mtee Music Studio Landing Page Template

`SN-W03725` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

Warm taupe ground with a soft vertical gradient and a large bold sans wordmark in white, set with open letter spacing and centred over a line of small uppercase services. Navigation sits in a translucent brown glass bar, and a single cream pill carries the reservation action. The palette is earthy and quiet, and the brown tones give the page a warm studio feel.

**Mood:** warm, studio, earthy, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#685141` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8c7563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b2818` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#3b2818` · `#f5ebe1` · `#685141` · `#8c7563` · `#ffffff` · `#eae0d5` · `#fbbc05` · `#25d366` · `#1ebe5d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 18px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2rem]` (2rem), `rounded-full` (9999px), `rounded-[1.75rem]` (1.75rem)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-[0_8px_32px_rgba(59,40,24,0.35)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-3 px-8 py-4 border text-xs uppercase tracking-widest font-medium transition-all duration-300 group border-[#3B2818] bg-[#3B2818] text-[#F5EBE1] hover:bg-[#685141] hover:border-[#685141] rounded-full hover:scale-105 active:scale-95 shadow-lg self-start md:self-auto">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #685141;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #8c7563;
  --color-border: #ffffff;
  --color-accent: #3b2818;
  --color-accent-2: #25d366;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 2rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#685141',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#8c7563',
    line: '#ffffff',
    accent: '#3b2818',
    accent2: '#25d366',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the warm taupe ground (#685141) with a soft vertical gradient
- **Do:** Set the wordmark in bold white sans with open letter spacing
- **Do:** Keep the primary action as a single cream pill
- **Don't:** Don't use bright colours in the hero
- **Don't:** Don't put white headlines on a light ground
- **Don't:** Don't use sharp square buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
