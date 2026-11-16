# Design system — AI Security Landing Page Template

`SN-W00153` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Near-black security page on #050505 with a stacked hero headline in white and grey in a large sans, the second line faded. A terminal panel on the right shows monospaced grey log lines and a single green prompt (#22c55e), and the top bar carries small uppercase monospace status labels. Green appears only on the prompt and status text, so the page feels austere and operational.

**Mood:** austere, operational, dark, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#525252` · `#404040` · `#171717` · `#a3a3a3` · `#000000` · `#737373` · `#22c55e` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.3)]`, `shadow-[0_0_10px_white]`
- **Content width:** `max-w-screen-xl`, `max-w-screen-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group flex items-center gap-2 px-4 py-1.5 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all bg-black text-xs text-white font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Product detail (`product-detail`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #262626;
  --color-text: #d4d4d4;
  --color-muted: #525252;
  --color-border: #262626;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#262626',
    ink: '#d4d4d4',
    muted: '#525252',
    line: '#262626',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a sans in white, with the second line in grey
- **Do:** Use the green (#22c55e) only on the terminal prompt and status labels
- **Do:** Set the terminal panel in monospace with grey log lines
- **Don't:** Don't use green for buttons or headlines
- **Don't:** Don't add colourful illustrations to the hero
- **Don't:** Don't add light sections between the terminal and the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
