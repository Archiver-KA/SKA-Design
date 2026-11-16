# Design system — MCP Server Development Landing Page Template

`SN-W00527` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark developer-services page on #020617 with large white headlines and a cyan (#67e8f9) primary button. A diagram panel on the right maps agent tool calls through checks to business systems, using dark outlined cards with cyan selection states. The diagram does most of the explaining, and the cyan marks the active path.

**Mood:** technical, dark, diagrammatic, precise, developer-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#67e8f9` | Primary action and highlights |
| Second accent | `#fcd34d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#67e8f9` · `#020617` · `#94a3b8` · `#a5f3fc` · `#cbd5e1` · `#64748b` · `#e2e8f0` · `#083344` · `#6ee7b7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-cyan-950/30`, `shadow-[0_0_35px_rgba(34,211,238,0.16)]"`
- **Content width:** `max-w-3xl`, `max-w-7xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden rounded-full bg-cyan-300 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:scale-105 hover:bg-cyan-200 lg:inline-flex">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #67e8f9;
  --color-accent-2: #fcd34d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#67e8f9',
    accent2: '#fcd34d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the cyan (#67e8f9) for the primary button and the active state in diagrams.
- **Do:** Draw process diagrams as dark outlined cards joined by thin arrows.
- **Do:** Keep headlines large and white on the #020617 ground.
- **Don't:** Don't use the yellow (#fcd34d) except for a single status mark.
- **Don't:** Don't fill the diagram cards with light colours.
- **Don't:** Don't add decorative glows behind the diagram.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
