# Design system — AI Services Landing Page Template

`SN-W00155` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark, centred service-business page with a large white sans headline whose second line is set in a pale indigo-to-lavender gradient. Two equal white pill buttons split the audience by role, and a soft radial glow sits behind the hero. Indigo (#6366f1) is kept to the nav button, so the page reads as calm and direct.

**Mood:** calm, direct, dark, local

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#6366f1` | Page ground |
| Surface | `#444444` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#64748b` · `#6366f1` · `#475569` · `#f87171` · `#ef4444` · `#818cf8` · `#000000` · `#4f46e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-indigo-500/20`, `shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-x-2`

**Primary button**

```html
<a class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Services (`services`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #6366f1;
  --color-surface: #444444;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    background: '#6366f1',
    surface: '#444444',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the headline in white sans with the second line in a pale gradient
- **Do:** Offer two equal white pill buttons for the audience split
- **Do:** Keep indigo (#6366f1) to the nav button and one highlight
- **Don't:** Don't use indigo as a page background
- **Don't:** Don't add a third button style to the hero
- **Don't:** Don't use coral (#f87171) for large areas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
