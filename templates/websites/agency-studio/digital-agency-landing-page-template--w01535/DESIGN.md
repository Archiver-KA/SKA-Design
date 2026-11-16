# Design system — Digital Agency Landing Page Template

`SN-W01535` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black page where a three-line headline does the work, with the middle word set in mid grey between two white lines. A small wordmark and monospace navigation sit at the top, and a line of body text sits at the bottom left. The page uses no accent colour, so hierarchy comes from scale and the grey middle line.

**Mood:** monochrome, bold, severe, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#18181b` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#18181b` · `#71717a` · `#a1a1aa` · `#27272a` · `#09090b` · `#52525b` · `#d4d4d8` · `#050505` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h2 30px · h3 60px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-screen-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="interactive group relative px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-medium overflow-hidden">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #18181b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans-serif, with the middle line in grey
- **Do:** Use monospace for the navigation and the scroll cue
- **Do:** Keep the page ground at #09090b with no accent colour
- **Don't:** Don't add an accent colour to the hero
- **Don't:** Don't place body copy over the large headline
- **Don't:** Don't use light backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
