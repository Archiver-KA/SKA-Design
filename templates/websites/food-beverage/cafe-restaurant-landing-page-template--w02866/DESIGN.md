# Design system — Cafe Restaurant Landing Page Template

`SN-W02866` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark and green, with one clear accent. A near-black ground (#09090b) sits under a dimmed photo of the café, and a bold white sans headline is centred over it. Emerald (#10b981) is the only colour, used for the primary View Menu pill and the small eyebrow tag, while the secondary Book a Table action is dark and outlined. Dark rounded placeholder cards below hint at the menu grid.

**Mood:** dark, green-accented, bold, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#27272a` · `#a1a1aa` · `#09090b` · `#71717a` · `#18181b` · `#d4d4d8` · `#34d399` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(16,185,129,0.3)]`, `shadow-[0_0_30px_rgba(16,185,129,0.5)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-white text-zinc-950 text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors hidden md:block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Menu list (`menu-list`)
6. Testimonials (`testimonials`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use emerald (#10b981) for the primary action and the eyebrow tag only
- **Do:** Set headlines in white bold sans, centred over a dimmed photo
- **Do:** Make secondary buttons dark with a thin outline
- **Don't:** Don't use the green for body text or large fills
- **Don't:** Don't add gradients to the buttons; they are flat
- **Don't:** Don't put light cards on the near-black ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
