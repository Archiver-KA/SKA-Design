# Design system — Digital Marketing Agency Landing Page Template

`SN-W01549` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a centred, tightly set white headline and a lime button attached to an email field, so the first action is a sign-up. The field is dark with a thin border, and the button is the only saturated shape in the hero. Small grey trust lines sit under the form, with a lime rating mark beside the review count.

**Mood:** bold, playful, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0404` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#a8d507` | Primary action and highlights |
| Second accent | `#6f4abd` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#18181b` · `#71717a` · `#a8d507` · `#a1a1aa` · `#0a0404` · `#09090b` · `#d4d4d8` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(168,213,7,0.2)]`, `shadow-[0_0_30px_rgba(168,213,7,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg bg-[#A8D507] text-zinc-950 text-sm font-semibold hover:bg-[#bbf009] transition-all duration-300 shadow-[0_0_20px_rgba(168,213,7,0.2)] whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Testimonials (`testimonials`)
5. Services (`services`)
6. Case studies (`case-studies`)
7. Feature grid (`features`)
8. Logo cloud (`logo-cloud`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0404;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #a8d507;
  --color-accent-2: #6f4abd;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0404',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#a8d507',
    accent2: '#6f4abd',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the email field and lime button on one line as the hero's only action
- **Do:** Set the headline in tight bold white sans-serif, centred
- **Do:** Use lime (#a8d507) for the primary button and the rating mark only
- **Don't:** Don't add a second button to the hero
- **Don't:** Don't use purple (#6f4abd) in the hero
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
