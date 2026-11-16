# Design system — Dana Asfour - Flutter Developer

`SN-W00327` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet developer portfolio on a near-black navy ground (#020617), with panels a step lighter so the layout reads as stacked slate cards. Type is a system sans, with a large bold two-line name and title. The accent is almost entirely neutral, white pill buttons and light text, and the only colour is a small green availability dot.

**Mood:** quiet, technical, neutral, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#94a3b8` | Hairlines, dividers, outlines |
| Accent | `#f1f5f9` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#cbd5e1` · `#1e293b` · `#94a3b8` · `#f1f5f9` · `#0f172a` · `#f8fafc` · `#e2e8f0` · `#020617` · `#334155` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 20px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-emerald-500/10`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-14`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full border border-slate-700 text-xs sm:text-sm font-medium tracking-tight px-4 py-1.5 text-slate-100 hover:bg-slate-100 hover:text-slate-950 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #f1f5f9;
  --color-muted: #cbd5e1;
  --color-border: #94a3b8;
  --color-accent: #f1f5f9;
  --color-accent-2: #34d399;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
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
    line: '#94a3b8',
    accent: '#f1f5f9',
    accent2: '#34d399',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep primary buttons as white pills with dark text
- **Do:** Use slate panels with thin borders for project and skill blocks
- **Do:** Use the green only for the availability status dot
- **Don't:** Don't add saturated colours to headings
- **Don't:** Don't add a hero image; the layout is text and cards
- **Don't:** Don't add gradients to the name; it is flat white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
