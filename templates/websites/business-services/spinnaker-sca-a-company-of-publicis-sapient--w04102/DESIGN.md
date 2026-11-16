# Design system — Spinnaker SCA | A company of Publicis Sapient

`SN-W04102` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A black, technical layout where cyan (#22d3ee) is the single accent, used for one headline word and the call-to-action button. The headline is large and tightly set in sans-serif, while small monospaced nav and eyebrow labels give it an engineering tone. Thin dark borders keep the page precise rather than decorative.

**Mood:** technical, precise, dark, monospace-accented, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |

Palette by frequency of use: `#22d3ee` · `#a1a1aa` · `#06b6d4` · `#09090b` · `#d4d4d8` · `#ffffff` · `#71717a` · `#27272a` · `#000000` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Montserrat, Sora, GFS Didot
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 16px
- **Weights in use:** semibold, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded` (4px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[320px]`
- **Section padding:** `py-16`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full py-2.5 rounded border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 transition text-cyan-400 font-mono text-base">…</a>
```

## Page structure

Blocks in page order:

1. Articles (`blog-articles`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Team (`team`)
5. Logo cloud (`logo-cloud`)
6. Feature grid (`features`)
7. 3D / canvas scene (`3d-canvas`)
8. Stats band (`stats`)
9. Services (`services`)
10. FAQ (`faq`)
11. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #22d3ee;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#22d3ee) for one headline word and the primary button only
- **Do:** Set navigation and eyebrow labels in monospace capitals
- **Do:** Separate panels with thin dark borders (#27272a)
- **Don't:** Don't add a second bright accent colour
- **Don't:** Don't round the buttons into pills; keep the small radius
- **Don't:** Don't fill sections with light backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
