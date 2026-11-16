# Design system — AI Developer Platform Landing Page Template

`SN-W00085` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Evolvium is a dark, atmospheric hero on a deep navy-black ground, with a large white serif-italic lead-in above a bold Inter headline. The cyan (#22d3ee) primary button is the only saturated colour in the hero, and monospace labels add a technical tone.

**Mood:** dark, atmospheric, technical, bold, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#09090b` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#3f3f46` · `#09090b` · `#a1a1aa` · `#06b6d4` · `#71717a` · `#22d3ee` · `#d4d4d8` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 20px · body 14px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="h-14 px-8 bg-cyan-500 rounded-lg border-b-4 border-cyan-700 text-black font-medium hover:bg-cyan-400 hover:border-cyan-600 active:translate-y-1 active:border-b-0 transition-all flex items-center gap-3 group shadow-[0_5px_0_rgb(8,145,178)] active:shadow-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Case studies (`case-studies`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #3f3f46;
  --color-text: #ffffff;
  --color-muted: #27272a;
  --color-border: #09090b;
  --color-accent: #22d3ee;
  --color-accent-2: #a855f7;
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
    surface: '#3f3f46',
    ink: '#ffffff',
    muted: '#27272a',
    line: '#09090b',
    accent: '#22d3ee',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on a near-black ground (#09090b) with white Inter headlines
- **Do:** Use cyan (#22d3ee) for the primary button and one highlight per section
- **Do:** Set labels and status tags in monospace, in small uppercase
- **Don't:** Don't use the cyan (#06b6d4) as a page background; it is a button colour
- **Don't:** Keep the dark treatment across the template
- **Don't:** Don't add more than one saturated accent to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
