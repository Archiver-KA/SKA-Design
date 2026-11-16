# Design system — Creative Studio Portfolio Landing Page Template

`SN-W01912` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark charcoal panel sits inset with rounded corners inside a black frame, so the page reads as an object on a stage. Navigation is small, tracked and grey, with an outline pill button at the right. The headline is a large serif, with 'Crafting' in white over an indented italic 'Culture.' in grey, which gives the hero a formal, cinematic tone.

**Mood:** cinematic, formal, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#0f0f0f` · `#1a1a1a` · `#525252` · `#262626` · `#737373` · `#161616` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 24px · h3 18px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-none`
- **Content width:** `max-w-[96rem]`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full bg-white text-black text-xs font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group-hover:gap-3 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Newsletter signup (`newsletter`)
5. Team (`team`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #1a1a1a;
  --color-text: #f5f5f5;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#1a1a1a',
    ink: '#f5f5f5',
    muted: '#525252',
    line: '#ffffff',
    accent: '#10b981',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the dark panel (#1a1a1a) inset with rounded corners inside the black frame.
- **Do:** Set the headline in a serif, with the second word indented in italic grey.
- **Do:** Keep navigation small, tracked and grey, with one outlined button.
- **Don't:** Don't add accent colour; the page uses greys only.
- **Don't:** Don't set the headline in sans; the serif carries the look.
- **Don't:** Don't remove the inset frame; the panel edge is part of the layout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
