# Design system — Smart Home App Landing Page Template

`SN-W00715` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Three phone screens of a smart-home app shown side by side on a white ground, built from light grey tiles and white cards. The one strong colour is a magenta-to-violet gradient on the weather card, while the toggles, icons and thermostat ring stay neutral. The type is small Inter, so the screens themselves carry the visual weight and the page needs no illustration.

**Mood:** clean, app-like, light, functional, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d946ef` | Primary action and highlights |
| Second accent | `#d946ef` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e2e8f0` · `#cbd5e1` · `#64748b` · `#f1f5f9` · `#475569` · `#f8fafc` · `#d946ef` · `#8b5cf6` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 28px · h2 22px · body 13px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-md`, `shadow-[0_8px_16px_-8px_rgba(124,58,237,0.5)]`, `shadow-[inset_0_8px_24px_-12px_rgba(2,6,23,0.15),0_10px_24px_-12px_rgba(2,6,23,0.25)]`
- **Content width:** `max-w-[1600px]`
- **Common gaps:** `gap-1`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="py-3 px-4 rounded-xl text-[13px] font-medium bg-white ring-1 ring-slate-200/80 text-slate-700 hover:bg-slate-50 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #d946ef;
  --color-accent-2: #d946ef;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#d946ef',
    accent2: '#d946ef',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the magenta-violet gradient only on the single hero status card per screen.
- **Do:** Keep device tiles light with white cards, small icons and neutral toggles.
- **Do:** Show the screens as UI mockups, with no decorative illustration.
- **Don't:** Don't put a gradient on every card; one gradient card per screen is the limit.
- **Don't:** Don't use dark tiles on this light layout.
- **Don't:** Don't enlarge the headline; the display size here is small (28px).

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
