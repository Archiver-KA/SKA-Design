# Design system — VOX Speech-to-Text Studio Template

`SN-W00815` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, dense dashboard for transcription on a grey-black workspace, with a left sidebar and panels for a live waveform, a large timer and input-level sliders. White toggles and bars carry the emphasis. The layout is a three-column tool grid with thin dividers, and no accent colour is used.

**Mood:** dense, technical, dark, utilitarian

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#27272a` · `#a1a1aa` · `#71717a` · `#ffffff` · `#d4d4d8` · `#52525b` · `#0a0a0a` · `#18181b` · `#3f3f46` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h2 14px · h3 14px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-[0_0_8px_rgba(255,255,255,0.4)]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Navigation bar (`navbar`)
3. Call to action (`cta`)
4. Dashboard preview (`dashboard-preview`)
5. Process / steps (`how-it-works`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #0a0a0a;
  --color-text: #d4d4d8;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#0a0a0a',
    ink: '#d4d4d8',
    muted: '#a1a1aa',
    line: '#27272a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use grey-black panels with thin dividers between the columns
- **Do:** Show live state with a white waveform and a status label
- **Do:** Keep controls as white toggles and thin sliders
- **Don't:** Don't add colour accents to the controls
- **Don't:** Don't use cards with a large radius
- **Don't:** Don't centre the layout; it is a left-aligned tool grid

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
