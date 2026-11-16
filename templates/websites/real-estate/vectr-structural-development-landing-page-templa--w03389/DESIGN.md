# Design system — VECTR Structural Development Landing Page Template

`SN-W03389` · real-estate · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

Technical, high-contrast page on near-black with faint grid lines and small monospaced status text such as a system line and coordinates, giving an instrument-panel feel. The headline is large and white in a serif, with its final phrase set in italic red-orange (#ff3300). Buttons are angular, cut at the corners, and the solid red-orange is reserved for the primary action.

**Mood:** technical, severe, high-contrast, engineered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#f3f2ee` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#ff3300` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#0a0a0a` · `#ff3300` · `#f3f2ee` · `#333333` · `#888888` · `#555555` · `#a0a0a0` · `#22c55e` · `#1a1a1a` · `#e0e0e0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader, JetBrains Mono
- **Scale (largest breakpoint):** h3 32px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2px]` (2px), `rounded-none` (0)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_50px_rgba(255,51,0,0.1)]`
- **Content width:** `max-w-[1600px]`, `max-w-[1800px]`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="btn-cut h-[56px] px-8 bg-[#FF3300] text-[#F3F2EE] flex items-center justify-center gap-3 text-[1rem] font-medium transition-colors hover:bg-[#CC2900] group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #333333;
  --color-text: #f3f2ee;
  --color-muted: #888888;
  --color-border: #333333;
  --color-accent: #ff3300;
  --color-accent-2: #22c55e;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#333333',
    ink: '#f3f2ee',
    muted: '#888888',
    line: '#333333',
    accent: '#ff3300',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final phrase of the headline in italic red-orange (#ff3300) and the rest in off-white (#f3f2ee).
- **Do:** Use the solid red-orange button for the primary action only; the secondary stays outlined.
- **Do:** Keep the status line and coordinates in small monospaced type above the headline.
- **Don't:** Don't use the red-orange on body text or on more than one phrase.
- **Don't:** Don't round the button corners; they are cut at an angle.
- **Don't:** Don't remove the faint background grid; it is part of the texture.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
