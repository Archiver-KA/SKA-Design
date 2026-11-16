# Design system — UI/UX Designer Portfolio Landing Page Template

`SN-W02265` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark navy designer portfolio with a serif name-and-role headline on a near-black ground (#020617), where the second line is set smaller and in white. Cards sit in a stacked right column with a thin blue progress bar and small tags, and the primary button is a bright sky blue (#38bdf8) paired with a dark outline button. The sky-blue action button and the stacked project card are what make the page recognisable.

**Mood:** modern, dark, focused, tidy, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#020617` · `#cbd5e1` · `#334155` · `#38bdf8` · `#0ea5e9` · `#f1f5f9` · `#7dd3fc` · `#e2e8f0` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 14px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_3rem_rgba(15,23,42,0.9)]`, `shadow-[0_0_0.5rem_rgba(16,185,129,0.9)]`, `shadow-[0_0_1.5rem_rgba(56,189,248,0.6)]`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center rounded-full border border-sky-500/50 bg-slate-900/60 px-3 py-1.5 text-xs font-medium tracking-tight text-sky-300 hover:bg-sky-500/10 hover:border-sky-400/70 transition">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Timeline (`timeline`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Case studies (`case-studies`)
8. Feature grid (`features`)
9. Process / steps (`how-it-works`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #f1f5f9;
  --color-muted: #cbd5e1;
  --color-border: #334155;
  --color-accent: #38bdf8;
  --color-accent-2: #34d399;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#f1f5f9',
    muted: '#cbd5e1',
    line: '#334155',
    accent: '#38bdf8',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use the sky blue (#38bdf8) for the primary button and the progress bar only.
- **Do:** Set the name-and-role headline in serif, with the role on a second line.
- **Do:** Build project cards with small tags and a thin progress bar.
- **Don't:** Don't use the blue for body text or links; it is the action colour.
- **Don't:** Don't mix in a warm accent; the page is blue on navy.
- **Don't:** Don't set the headline in a bold weight; it reads better lighter.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
