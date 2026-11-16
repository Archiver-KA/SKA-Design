# Design system — Head of Marketing

`SN-W01594` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A restrained dark hero on near-black (#050505) with a large, centred Inter headline in white that fades to grey on its second line. Colour is nearly absent: a soft indigo glow sits behind the hero, and the primary button is a white pill, so the indigo (#6366f1) works as atmosphere rather than action. Hierarchy comes from size and tone, with rounded-full pills for navigation and calls to action.

**Mood:** minimal, dark, confident, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#6366f1` · `#0a0a0a` · `#94a3b8` · `#818cf8` · `#475569` · `#050505` · `#cbd5e1` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.5)]`, `shadow-[0_0_15px_rgba(99,102,241,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Map / location (`map-location`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #34d399;
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
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at large size with tight tracking, white with the second line in grey
- **Do:** Keep primary buttons as white pills with dark text
- **Do:** Use the indigo (#6366f1) only as a soft background glow, not on buttons or body text
- **Don't:** Don't use bright fills for primary buttons; the main action stays white
- **Don't:** Don't use hard-edged cards in the hero; keep pills and rounded-2xl shapes
- **Don't:** Don't place the indigo glow behind body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
