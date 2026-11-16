# Design system — Beauty Salon Landing Page Template

`SN-W02724` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark navy-black page with white serif headlines and a restrained layout. The primary action is a white pill button, with a thin outlined pill beside it, so the white fill does the accenting. Colour is almost absent; the page relies on contrast, generous empty space and a single serif display face for the hero.

**Mood:** restrained, luxurious, dark, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#2563eb` · `#f8fafc` · `#1e3a8a` · `#94a3b8` · `#bfdbfe` · `#334155` · `#64748b` · `#172554`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Cinzel
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 60px · h2 12px · h3 36px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-blue-950/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium bg-white text-blue-950 rounded-full hover:bg-slate-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #f8fafc;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #ffffff;
  --color-accent-2: #fbbf24;
  --font-display: "Cinzel", serif;
  --font-body: "Cinzel", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#f8fafc',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#ffffff',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Cinzel'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a classic serif at large size with tight line spacing
- **Do:** Use white filled pills for the main action and outlined pills for secondary actions
- **Do:** Keep the navy-black ground (#020617) and lift surfaces only slightly
- **Don't:** Don't add saturated colour to buttons; the hero stays white and navy
- **Don't:** Don't fill the hero with imagery or glow; the look is empty space and type
- **Don't:** Don't rely on heavy shadows; separation comes from thin borders and tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
