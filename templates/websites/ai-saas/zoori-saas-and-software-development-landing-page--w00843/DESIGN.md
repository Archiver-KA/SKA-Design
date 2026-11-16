# Design system — Zoori SaaS and Software Development Landing Page Template

`SN-W00843` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark agency hero on a near-black ground, with a large white Inter headline where Zoori is set in teal (#2dd4bf). A soft teal pill button sits beside a dark secondary, and a small rounded tag above the headline carries the status line. Teal is the single accent, so the page reads as modern and focused.

**Mood:** modern, focused, dark, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2dd4bf` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#2dd4bf` · `#71717a` · `#14b8a6` · `#a1a1aa` · `#18181b` · `#09090b` · `#27272a` · `#52525b` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(45,212,191,0.3)]`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="hidden md:flex items-center justify-center px-4 h-8 bg-white text-black text-xs font-semibold rounded-full hover:bg-zinc-200 transition-colors tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Process / steps (`how-it-works`)
6. Services (`services`)
7. Case studies (`case-studies`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #3f3f46;
  --color-text: #ffffff;
  --color-muted: #27272a;
  --color-border: #ffffff;
  --color-accent: #2dd4bf;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#3f3f46',
    ink: '#ffffff',
    muted: '#27272a',
    line: '#ffffff',
    accent: '#2dd4bf',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the teal (#2dd4bf) for one highlighted word and the primary button
- **Do:** Set the headline in Inter at 72px, centred, with tight line spacing
- **Do:** Keep the secondary button as a dark pill with grey text
- **Don't:** Don't switch the hero to a teal background
- **Don't:** Don't use the teal for body copy
- **Don't:** Don't add a second bright accent to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
