# Design system — Nightclub Landing Page Template

`SN-W03734` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black page with a purple radial glow behind a large sans headline that fades from white to pale lilac. A small outlined pill shows the opening status above, and the primary button is a solid magenta-violet pill beside a dark outlined secondary. Purple light is confined to the centre glow of the hero, which gives the venue a nocturnal, atmospheric feel.

**Mood:** nocturnal, atmospheric, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d946ef` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#d946ef` · `#18181b` · `#09090b` · `#000000` · `#71717a` · `#27272a` · `#d4d4d8` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(192,38,211,0.3)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Timeline (`timeline`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #d946ef;
  --color-accent-2: #2563eb;
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
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#d946ef',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large sans, white fading to pale lilac
- **Do:** Use the magenta (#d946ef) for the primary button only
- **Do:** Keep the purple glow centred behind the hero
- **Don't:** Don't use purple for body text
- **Don't:** Don't left-align the hero headline
- **Don't:** Don't add a second saturated colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
