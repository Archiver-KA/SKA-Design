# Design system — Lumina AI & Spatial Computing Landing Page Template

`SN-W00509` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black futuristic page on #09090b with large, uppercase white headlines in Inter and a thin left-hand vertical navigation rail in small monospaced labels. Cyan (#22d3ee) marks the active states and the call to action, and a faint 3D form sits behind the copy. The spacing and tiny rail labels make it read as a research-lab interface.

**Mood:** futuristic, dark, austere, technical, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#030303` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |

Palette by frequency of use: `#22d3ee` · `#27272a` · `#18181b` · `#f4f4f5` · `#71717a` · `#52525b` · `#030303` · `#a1a1aa` · `#e4e4e7` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 14px · body 12px
- **Weights in use:** light, thin, extralight
- **Letter spacing:** `tracking-widest`, `tracking-[0.24em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_15px_rgba(34,211,238,0.2)]`, `shadow-[0_0_8px_rgba(0,229,255,0.8)]`, `shadow-[0_20px_40px_-15px_rgba(0,229,255,0.08)]`
- **Content width:** `max-w-5xl`, `max-w-[22rem]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#030303] text-zinc-100 px-6 py-4 rounded flex items-center gap-4 transition-all duration-300 h-full w-full hover:bg-[#050505]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Sidebar (`sidebar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Code / terminal (`code-terminal`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #030303;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
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
    background: '#09090b',
    surface: '#030303',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase white Inter at large size.
- **Do:** Use the cyan (#22d3ee) for active states and the primary call to action.
- **Do:** Keep the side navigation rail as small monospaced labels.
- **Don't:** Don't use cyan for body copy.
- **Don't:** Don't add light panels to the dark sections.
- **Don't:** Don't crowd the 3D form behind the headline text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
