# Design system — Strategic Consulting Landing Page Template

`SN-W01706` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep navy page with a large white sans headline that fades to a lavender-grey for its last line, 'growth.' A small rounded pill above the copy shows availability, and two buttons sit under it: a white primary and a dark outlined secondary. Colour is quiet, with indigo as a faint glow rather than a fill.

**Mood:** calm, focused, dark, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#c7d2fe` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#020617` · `#6366f1` · `#64748b` · `#0f172a` · `#475569` · `#818cf8` · `#334155` · `#a5b4fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex text-xs font-medium bg-white/10 hover:bg-white/15 text-white py-2 px-4 rounded-full transition-colors duration-200 border border-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Services (`services`)
7. Timeline (`timeline`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #c7d2fe;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#c7d2fe',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white, with the last line in lavender-grey (#c7d2fe).
- **Do:** Use a white primary button with a dark outlined secondary beside it.
- **Do:** Keep indigo as a background glow, not a fill.
- **Don't:** Don't use indigo (#6366f1) for solid buttons; the primary button is white.
- **Don't:** Don't add a light section; the page is dark.
- **Don't:** Don't put the availability pill in a bright colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
