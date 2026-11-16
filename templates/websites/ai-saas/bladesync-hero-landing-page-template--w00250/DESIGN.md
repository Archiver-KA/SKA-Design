# Design system — BladeSync Hero Landing Page Template

`SN-W00250` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, sci-fi hero component: a near-black ground (#171717) with a very large white Inter headline and a faint oversized wordmark along the bottom edge. Orange (#f97316) appears only in the highlighted phrase and small chips, and thin grey linework crosses the scene to suggest circuits. Blurred glow shapes and small monospaced labels add the technical tone, with the headline doing most of the work.

**Mood:** dark, technical, futuristic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#050505` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#f97316` · `#262626` · `#404040` · `#171717` · `#737373` · `#ffffff` · `#525252` · `#a3a3a3` · `#050505` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-[120px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="group relative px-5 py-2 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm overflow-hidden hover:border-neutral-500 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #171717;
  --color-text: #050505;
  --color-muted: #ffffff;
  --color-border: #262626;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#171717',
    ink: '#050505',
    muted: '#ffffff',
    line: '#262626',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #171717 and the headline in white Inter at very large size
- **Do:** Use orange (#f97316) only for the highlighted phrase and small chips
- **Do:** Keep the thin grey linework and oversized wordmark low in contrast behind the headline
- **Don't:** Don't use orange for large fills or backgrounds
- **Don't:** Don't set the small monospaced labels below readable sizes
- **Don't:** Don't add more than one glow shape per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
