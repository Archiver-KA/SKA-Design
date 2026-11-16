# Design system — AI Website Builder Landing Page Template

`SN-W00191` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark navy hero (#020617) with a centred headline in white, where the words Stunning and Instantly are set in a lavender-to-indigo gradient (#a855f7 to #818cf8). A large dark prompt panel with a white Generate button is the main element, and small model chips sit in its footer. An indigo glow behind the panel carries the page colour, and the type does the rest.

**Mood:** dark, polished, glowing, tool-first

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#94a3b8` · `#818cf8` · `#a855f7` · `#64748b` · `#020617` · `#cbd5e1` · `#c084fc` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-purple-500/20`, `shadow-[0_0_20px_rgba(99,102,241,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="group relative px-5 py-2 rounded-full bg-indigo-600/20 border border-indigo-500/50 text-indigo-100 text-sm font-medium overflow-hidden transition-all hover:bg-indigo-600/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Bento grid (`bento-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #020617;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #34d399;
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
    surface: '#020617',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans-serif white, with the key words in the violet-to-indigo gradient
- **Do:** Use the white Generate button as the primary action in the prompt panel
- **Do:** Keep the page on deep navy (#020617) with the indigo glow behind the prompt panel
- **Don't:** Don't use the gradient on buttons or body copy; it is for headline words
- **Don't:** Don't turn the hero light; the page stays navy
- **Don't:** Don't add more panels beside the prompt; it is the only input in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
