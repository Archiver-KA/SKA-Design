# Design system — Health & Wellness Landing Page Template

`SN-W02390` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, athletic wellness hero on a near-black ground, with a large white sans-serif headline and an italic serif second line. Thin orange rules and small orange numerals mark the sections, so the orange (#f97316) is the one accent and is kept to lines and figures. Cards are dark grey with rounded corners and a soft fade, and the overall effect is bold and performance-led.

**Mood:** athletic, bold, dark, performance-led, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#f97316` · `#a3a3a3` · `#737373` · `#171717` · `#e5e5e5` · `#050505` · `#333333` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 24px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-white/5`
- **Content width:** `max-w-[1600px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="relative group px-5 py-2 rounded-full bg-white hover:bg-neutral-200 shadow-xl shadow-white/5 transition-all overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in large white sans-serif, with a second line in italic serif.
- **Do:** Use the orange (#f97316) for thin rules, numerals and the primary button only.
- **Do:** Keep the page on the near-black ground (#0a0a0a) with dark grey cards (#171717).
- **Don't:** Don't set the page background in orange; it is an accent, not a ground.
- **Don't:** Don't use the green (#22c55e) on this page.
- **Don't:** Don't use orange for body text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
