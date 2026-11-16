# Design system — 3D Architectural Concept Landing Page Template

`SN-W03162` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A stark, monochrome 3D architecture stage on pure black (#050505). A wide-tracked uppercase wordmark sits top left, and a stacked menu on the left shows the active item in white and the others in grey. A floating dark control panel with white slider knobs and segmented chips on the right makes the page read as a tool. Colour is absent, so the controls and the type carry the design.

**Mood:** technical, monochrome, precise, minimal, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e5e5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#050505` · `#e5e5e5` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Afacad
- **Body:** Afacad
- **Loaded families:** Afacad
- **Scale (largest breakpoint):** h2 60px · body 24px
- **Weights in use:** normal, semibold, medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_rgba(255,255,255,0.5)]`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex-1 py-2 text-xs font-semibold tracking-wide rounded-md bg-white/10 text-white transition-all duration-200 hover:bg-white/20">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Contact form (`contact-form`)
3. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #e5e5e5;
  --color-border: #ffffff;
  --font-display: "Afacad", sans-serif;
  --font-body: "Afacad", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#e5e5e5',
    line: '#ffffff',
  },
  fontFamily: { display: ['Afacad'], sans: ['Afacad'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a wide-tracked uppercase sans in white
- **Do:** Show the active menu item in white and inactive items in grey (#e5e5e5)
- **Do:** Build controls as dark cards with white knobs and short labels
- **Don't:** Don't add an accent colour; the page is black, white, and grey
- **Don't:** Don't use light panels on the black stage
- **Don't:** Don't crowd the left menu; keep the items spaced and large

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
