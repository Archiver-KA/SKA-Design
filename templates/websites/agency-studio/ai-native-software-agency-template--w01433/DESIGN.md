# Design system — AI-Native Software Agency Template

`SN-W01433` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground ([#050505]) with one indigo glow ([#6366f1]) behind the headline gives a quiet, technical stance. The type does the work: a large white grotesk headline over a grey second line, with small monospaced labels for the system status. Depth comes from the glow and shape rather than from cards or borders.

**Mood:** technical, restrained, high-contrast, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#71717a` · `#27272a` · `#6366f1` · `#818cf8` · `#f4f4f5` · `#d4d4d8` · `#ffffff` · `#3f3f46` · `#a1a1aa` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`, `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`, `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`
- **Content width:** `max-w-6xl`, `max-w-[260px]`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="magnetic-btn relative z-10 mt-10 w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm text-white font-medium transition-colors duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">…</a>
```

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Three.js, Lenis smooth scroll, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #6366f1;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#27272a',
    accent: '#6366f1',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at #050505 and use the indigo (#6366f1) only for the glow and primary actions
- **Do:** Set headlines in Geist at large size with tight leading and a grey second line
- **Do:** Use small monospaced labels in the hero for status text
- **Don't:** Don't use the indigo as body text colour
- **Don't:** Don't add card borders or drop shadows for depth
- **Don't:** Don't stack more than one glow shape in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
