# Design system — Futuristic UX Portfolio Landing Page Template

`SN-W02029` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground (#0a0a0a) carries bordered panels, monospaced labels and a neon green (#00ff66) that marks the key phrase, the status bars and the outlined buttons. The headline is a bold white sans over several lines, with the middle line grey and the last phrase in green. Panels with small uppercase headers and progress bars make the page read as a control panel rather than a brochure.

**Mood:** technical, terminal-like, dark, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ff66` | Primary action and highlights |

Palette by frequency of use: `#00ff66` · `#ffffff` · `#737373` · `#000000` · `#d4d4d4` · `#a3a3a3` · `#0a0a0a` · `#050505` · `#525252` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Inter
- **Loaded families:** Inter, Space Mono
- **Scale (largest breakpoint):** h1 20px · h2 48px · h3 18px · body 12px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_8px_#00FF66]`, `shadow-[0_0_10px_#00FF66]`
- **Content width:** `max-w-[1600px]`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-3 p-3 rounded border border-transparent hover:border-neon/30 hover:bg-neon/5 hover:text-neon transition-all group">…</a>
```

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #00ff66;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#00ff66',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the neon green (#00ff66) for the key phrase, status bars and outlined buttons only
- **Do:** Set labels and panel headers in a monospaced face, small and uppercase
- **Do:** Keep panels as thin-bordered boxes on the dark ground
- **Don't:** Don't use the green as a page background; the ground is near-black
- **Don't:** Don't set body copy in green; it is for emphasis and status
- **Don't:** Don't add more than one bright colour inside a single panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
