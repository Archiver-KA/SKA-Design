# Design system — Hardware Spoofer Setup Landing Page Template

`SN-W00436` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A minimal centred question on a near-black navy ground: a tracked small label, one large question in white, and two side-by-side choice cards, one tinted cyan and one tinted red. Each card takes its own hue as a state cue, and a small grey hint line sits beneath. The page is sparser than the single-card wizard, with no frame around the flow.

**Mood:** minimal, centred, dark, clear, stepwise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020410` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#cbd5e1` · `#ef4444` · `#64748b` · `#67e8f9` · `#22d3ee` · `#f97316` · `#94a3b8` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 30px · h2 16px · h3 14px · body 11px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-[0px_1px_0px_0px_rgba(34,211,238,0.2)_inset]`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[11px] font-medium text-[#020410]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Logo cloud (`logo-cloud`)
3. Testimonials (`testimonials`)
4. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020410;
  --color-surface: #000000;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020410',
    surface: '#000000',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Tint each choice card with its own hue, cyan (#06b6d4) and red (#ef4444)
- **Do:** Centre the question and its hint in a single column
- **Do:** Keep the eyebrow label small, tracked and in muted slate
- **Don't:** Don't add a frame around the question; the page stays open
- **Don't:** Don't use red for anything other than the second choice
- **Don't:** Don't add imagery; the flow is text and choice only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
