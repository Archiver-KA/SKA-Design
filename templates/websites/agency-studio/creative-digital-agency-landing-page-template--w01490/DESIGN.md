# Design system — Creative Digital Agency Landing Page Template

`SN-W01490` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep indigo ground (#0a0325) with a centred, bold sans headline in white. One word, 'Solutions', carries a violet gradient running from #6e2bf9 to lavender (#a987ff), and the last line fades to light grey. A solid white pill button and a dark ghost pill sit beneath the copy. Violet is the only hue, so the gradient word marks the page's key idea.

**Mood:** dark, vivid, polished, tech-forward

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0325` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d6d6e2` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6e2bf9` | Primary action and highlights |
| Second accent | `#a987ff` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6e2bf9` · `#d6d6e2` · `#a987ff` · `#0a0325` · `#431a99` · `#e5e7eb` · `#f3f4f6` · `#050114`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(110,43,249,0.4)]`, `shadow-[0_0_40px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-300 bg-white/10 border border-white/10 rounded-full hover:bg-accent hover:border-accent hover:shadow-[0_0_20px_rgba(110,43,249,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0325;
  --color-text: #ffffff;
  --color-muted: #d6d6e2;
  --color-border: #ffffff;
  --color-accent: #6e2bf9;
  --color-accent-2: #a987ff;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0325',
    ink: '#ffffff',
    muted: '#d6d6e2',
    line: '#ffffff',
    accent: '#6e2bf9',
    accent2: '#a987ff',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Limit the violet gradient to one keyword, running from #6e2bf9 to #a987ff.
- **Do:** Keep the ground deep indigo (#0a0325) and use white and light grey for all other type.
- **Do:** Use a solid white pill for the primary button and a dark ghost pill for the secondary.
- **Don't:** Don't set body copy in violet; it stays light grey.
- **Don't:** Don't add a second gradient to the hero.
- **Don't:** Don't flatten the background to pure black; the indigo tint is part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
