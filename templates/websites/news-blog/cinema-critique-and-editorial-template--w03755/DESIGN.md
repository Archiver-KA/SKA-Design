# Design system — Cinema Critique & Editorial Template

`SN-W03755` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark cinematic journal hero on a near-black ground [#09090b]. A large uppercase serif title sits above an italic grey serif subtitle, framed by a small gold eyebrow line in tan [#b89558]. Body copy is light grey and centred, and the page relies on the serif type and generous space rather than colour or imagery.

**Mood:** cinematic, classic, restrained, literary, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#09090b` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#b89558` | Primary action and highlights |

Palette by frequency of use: `#b89558` · `#27272a` · `#f4f4f5` · `#a1a1aa` · `#09090b` · `#71717a` · `#52525b` · `#d4d4d8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** EB Garamond
- **Body:** EB Garamond
- **Loaded families:** EB Garamond
- **Scale (largest breakpoint):** h2 96px · h3 24px · body 16px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(184,149,88,0.5)]`, `shadow-[0_0_40px_rgba(9,9,11,0.8)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="px-6 py-3 bg-zinc-800/80 text-zinc-100 hover:bg-[#b89558] hover:text-zinc-950 text-xs font-medium tracking-widest uppercase transition-colors border border-l-0 border-zinc-800/80 group-focus-within:border-[#b89558]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Swiper
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #3f3f46;
  --color-text: #09090b;
  --color-muted: #27272a;
  --color-border: #27272a;
  --color-accent: #b89558;
  --font-display: "EB Garamond", serif;
  --font-body: "EB Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#3f3f46',
    ink: '#09090b',
    muted: '#27272a',
    line: '#27272a',
    accent: '#b89558',
  },
  fontFamily: { display: ['EB Garamond'], sans: ['EB Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in a classic serif, uppercase for the title and italic for the subtitle
- **Do:** Use the gold tone (#b89558) only for the eyebrow label and thin rules
- **Do:** Keep the hero centred, with generous space above and below
- **Don't:** Don't use sans-serif for headings
- **Don't:** Don't add bright colour or gradients to the hero
- **Don't:** Don't set body copy in italic

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
