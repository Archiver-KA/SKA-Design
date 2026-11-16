# Design system — SignalWorks AI Engineering Template

`SN-W00712` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, violet-tinted engineering statement: a deep indigo-black ground (#0a051e) with a faint grid and bold white Inter headlines in three blunt lines, the middle one repeated as a grey ghosted line. Purple glow sits behind the type and is atmosphere rather than an action colour; the nav button and eyebrow label stay white. The stack of short lines reads as a team's manifesto.

**Mood:** bold, engineered, dark, atmospheric, blunt

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a051e` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c084fc` · `#000000` · `#0a051e` · `#a855f7` · `#faf5ff` · `#581c87` · `#34d399` · `#9333ea` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 60px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-black/20`, `shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-[1600px]`, `max-w-3xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider bg-white text-black py-4 px-6 rounded-sm hover:bg-purple-50 transition-colors">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Unicorn Studio (WebGL scenes), React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a051e;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a051e',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines as short, heavy white lines with a grey ghosted repeat for contrast.
- **Do:** Keep the violet glow behind the type, not on buttons or labels.
- **Do:** Use white for the nav button and small labels on the dark ground.
- **Don't:** Don't leave the WebGL background unloaded behind the headline.
- **Don't:** Don't add purple fills to buttons; the purple is ambient light.
- **Don't:** Don't set body copy in pure white; use a softer grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
