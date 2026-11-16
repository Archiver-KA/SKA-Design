# Design system — AI Journaling App Landing Page Template

`SN-W00108` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `it`

## Direction

Nema is a dark, quiet app landing page on a near-black ground (#030304), with a large bold white sans headline and a soft grey sub-line. The primary calls to action are two white and dark pill buttons for the app stores, and a phone mock-up sits below the hero. The look is minimal and calm, with contrast carried by white type and very little colour.

**Mood:** minimal, calm, dark, quiet, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030304` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#000000` · `#a1a1aa` · `#27272a` · `#d4d4d8` · `#52525b` · `#3f3f46` · `#e4e4e7` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** PP Telegraf
- **Body:** PP Telegraf
- **Loaded families:** PP Telegraf
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-inner`, `shadow-[0_0_10px_rgba(255,255,255,0.05)]`, `shadow-lg`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-all hover:scale-105 duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. App download (`app-download`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030304;
  --color-surface: #000000;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "PP Telegraf", sans-serif;
  --font-body: "PP Telegraf", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030304',
    surface: '#000000',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['PP Telegraf'], sans: ['PP Telegraf'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in bold white sans with a soft grey fade
- **Do:** Use white pill buttons for the main action and dark outline pills for the secondary
- **Do:** Show the app inside a dark phone frame below the hero
- **Don't:** Don't add an accent colour; the page is monochrome
- **Don't:** Don't use bright fills for the store buttons
- **Don't:** Don't set body copy in pure white; use the muted grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
