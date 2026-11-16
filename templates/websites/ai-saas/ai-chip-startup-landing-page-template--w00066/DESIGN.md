# Design system — AI Chip Startup Landing Page Template

`SN-W00066` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a large white sans headline where the last word fades to grey, a grey subline with one bold white phrase, and a white primary button with a dark outline secondary. A soft dark glow sits behind the copy. The look is severe and technical, with white doing almost all the work.

**Mood:** severe, technical, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#08090a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#0891b2` · `#22d3ee` · `#94a3b8` · `#64748b` · `#030304` · `#08090a` · `#050505` · `#67e8f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(6,182,212,0.6)]`, `shadow-[0_0_15px_-3px_rgba(6,182,212,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #08090a;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #6366f1;
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
    surface: '#08090a',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline word in grey to create a fade
- **Do:** Keep the page ground black (#050505) with white text
- **Do:** Use white for the primary button and a dark outline for the secondary
- **Don't:** Don't add bright colour to the hero
- **Don't:** Don't use the fade effect on more than the last word
- **Don't:** Don't set the subline in pure white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
