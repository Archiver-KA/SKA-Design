# Design system — Golf Photography Portfolio Landing Page

`SN-W02031` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep forest-green hero (#022c22) with a centred serif headline in white over two lines, the second line set in italic amber (#f59e0b). A filled amber button leads the actions beside a dark outlined button, and a small tracked badge sits above the headline. The green and amber pairing gives a calm, premium tone, and the backdrop is a gradient rather than a photograph.

**Mood:** calm, premium, green-toned, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#022c22` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#064e3b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#022c22` · `#f59e0b` · `#fbbf24` · `#064e3b` · `#78716c` · `#fafaf9` · `#a8a29e` · `#57534e` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 14px
- **Weights in use:** bold, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-emerald-950/5`, `shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-6`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="px-8 py-4 bg-amber-500 text-emerald-950 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-400 transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Awards / press (`awards-press`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #022c22;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #064e3b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#022c22',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#064e3b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a white serif, with the second line in italic amber (#f59e0b)
- **Do:** Use amber (#f59e0b) for the primary button and the italic line only
- **Do:** Keep the backdrop a deep green gradient, with the light glow behind the headline
- **Don't:** Don't put light backgrounds behind the hero; the ground is dark green
- **Don't:** Don't set the amber in body copy
- **Don't:** Don't add a second button colour beside the amber and the dark green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
