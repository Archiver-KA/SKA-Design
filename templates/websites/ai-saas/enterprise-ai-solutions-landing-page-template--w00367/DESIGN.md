# Design system — Enterprise AI Solutions Landing Page Template

`SN-W00367` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a bold monospace headline set large in white, where the last line fades to grey. Almost everything is text: a small nav, one white pill button at top right, and wide empty black space below the headline. The look is terminal-like and austere, and it depends on the white-to-grey contrast of the headline rather than on colour or imagery.

**Mood:** austere, terminal-like, monochrome, minimal, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#27272a` · `#18181b` · `#a1a1aa` · `#52525b` · `#10b981` · `#000000` · `#34d399` · `#7f1d1d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-inter)
- **Body:** var(--font-inter)
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_15px_rgba(16,185,129,0.3)]`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-1 group font-geist-mono">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #3b82f6;
  --font-display: "var(--font-inter)", sans-serif;
  --font-body: "var(--font-inter)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['var(--font-inter)'], sans: ['var(--font-inter)'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a bold monospace face at around 72px, left-aligned, in white.
- **Do:** Fade the last line of the headline to grey (#71717a) to create the only tonal shift.
- **Do:** Keep the nav to a few text links and one white pill button as the single filled element.
- **Don't:** Don't add imagery or gradient fills to the hero; the page is type on black.
- **Don't:** Don't switch to a light background; the design is black throughout.
- **Don't:** Don't centre the headline; it sits on the left edge of the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
