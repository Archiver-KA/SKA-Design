# Design system — Growth Architect Personal Landing Page Template

`SN-W03243` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A dark slate page fades from deep navy-grey at the top to a lighter blue-grey lower down, with a wordmark and a dark pill contact button in the header. A centred outlined pill reading Wie arbeiten wir sits over a row of partner logos. The look is calm and cool, built on slate tones and white type.

**Mood:** calm, cool, quiet, corporate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#334155` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#c7d2fe` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#71717a` · `#e4e4e7` · `#52525b` · `#f4f4f5` · `#d4d4d8` · `#27272a` · `#a1a1aa` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Newsreader
- **Loaded families:** Newsreader, Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex nav-btn items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-300 group text-white border-white/10 bg-white/5 hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Services (`services`)
6. About (`about`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #334155;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #e4e4e7;
  --color-accent: #ef4444;
  --color-accent-2: #c7d2fe;
  --font-display: "Newsreader", serif;
  --font-body: "Newsreader", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#334155',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#e4e4e7',
    accent: '#ef4444',
    accent2: '#c7d2fe',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Newsreader'] },
} }
```

## Do and don't

- **Do:** Use a slate gradient from deep navy-grey at the top to a lighter blue-grey below.
- **Do:** Keep the header to a wordmark and one dark pill contact button with an arrow.
- **Do:** Use white outlined pills for secondary calls to action on the slate ground.
- **Don't:** Don't add red or saturated colour; the red accent (#ef4444) stays out of the page.
- **Don't:** Don't rely on the partner logo row for the look; the slate gradient and type carry it.
- **Don't:** Don't set the header on a light background; it sits on the dark gradient.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
