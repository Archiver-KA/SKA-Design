# Design system — Private Investigator Services Landing Page Template

`SN-W04067` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A quiet, text-led hero on white, with a large dark sans headline and a grey intro paragraph. The two actions are a solid near-black button and a light outlined button, and the hero uses no colour at all. Restraint carries the trust; the personality comes from type size, weight and generous white space.

**Mood:** quiet, professional, restrained, textual, discreet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#a1a1aa` · `#f4f4f5` · `#71717a` · `#e4e4e7` · `#fafafa` · `#52525b` · `#3f3f46` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="px-4 py-2 text-xs font-medium bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Contact form (`contact-form`)
6. Newsletter signup (`newsletter`)
7. Articles (`blog-articles`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#52525b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero to a dark headline, a grey intro and two buttons
- **Do:** Use the near-black button (#18181b) as the only solid fill in the hero
- **Do:** Leave generous white space above the headline
- **Don't:** Don't add decorative colour or gradients to the hero
- **Don't:** Don't add a second solid button colour
- **Don't:** Don't use grey text below the body size for contact details

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
