# Design system — Kerim

`SN-W02067` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, glowing studio hero on a deep blue-black ground with a large white sans headline, in which key words are set in light-blue (#93c5fd) italic serif. A blue glow behind the headline and the solid blue primary button make the page feel luminous rather than flat. The secondary action is a dark ghost button, so the blue is kept for the main call to action and the emphasis words.

**Mood:** luminous, editorial, dark, bold, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#181818` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#93c5fd` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#93c5fd` · `#000000` · `#181818` · `#3b82f6` · `#050505` · `#60a5fa` · `#bfdbfe` · `#525252` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Bricolage Grotesque, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 90px · h2 30px · h3 24px · body 12px
- **Weights in use:** bold, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[100%]` (100%)
- **Shadows:** `shadow-[0_0_35px_-10px_rgba(59,130,246,0.6)]`, `shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]`, `shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-x-5`, `gap-y-5`

**Primary button**

```html
<a class="px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-blue-100 transition-colors shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. About (`about`)
6. Video / media (`video-media`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #181818;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #93c5fd;
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
    surface: '#181818',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#93c5fd',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set emphasis words in italic serif in light blue (#93c5fd) inside the white sans headline.
- **Do:** Keep the solid blue primary button as the only solid blue fill.
- **Do:** Place a soft blue glow behind the headline on a near-black ground.
- **Don't:** Don't set body copy in blue; it is light grey.
- **Don't:** Don't set whole headlines in the italic serif; only the emphasis words.
- **Don't:** Don't flatten the hero onto a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
