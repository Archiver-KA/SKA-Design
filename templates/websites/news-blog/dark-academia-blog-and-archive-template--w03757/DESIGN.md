# Design system — Dark Academia Blog & Archive Template

`SN-W03757` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, warm archive page on a near-black brown ground [#0c0a09]. A large cream serif headline sits over an italic grey second line, with a small amber eyebrow above it. The primary button is filled with burnt amber [#b45309] and the secondary is outlined, and small monospaced amber labels anchor the sections below.

**Mood:** warm, scholarly, dark, archival, nostalgic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#b45309` | Primary action and highlights |
| Second accent | `#14532d` | Supporting highlights |

Palette by frequency of use: `#78716c` · `#292524` · `#b45309` · `#1c1917` · `#fffbeb` · `#f59e0b` · `#a8a29e` · `#d97706` · `#0c0a09` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Crimson Pro
- **Body:** Crimson Pro
- **Loaded families:** Crimson Pro, DM Mono, Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** normal, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-[0_0_15px_-3px_rgba(180,83,9,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-mono text-xs uppercase tracking-widest rounded-sm transition-colors border border-amber-600 shadow-[0_0_15px_-3px_rgba(180,83,9,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Newsletter signup (`newsletter`)
7. Testimonials (`testimonials`)
8. Comparison (`comparison`)
9. Sign-in form (`auth-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #d6d3d1;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #b45309;
  --color-accent-2: #14532d;
  --font-display: "Crimson Pro", serif;
  --font-body: "Crimson Pro", serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#d6d3d1',
    muted: '#78716c',
    line: '#292524',
    accent: '#b45309',
    accent2: '#14532d',
  },
  fontFamily: { display: ['Crimson Pro'], sans: ['Crimson Pro'] },
} }
```

## Do and don't

- **Do:** Set headlines in a classic serif, with the second line in italic and grey
- **Do:** Use the burnt amber (#b45309) for the primary button and small labels only
- **Do:** Set section and navigation labels in small monospace uppercase
- **Don't:** Don't use cool blue or green tones in the chrome
- **Don't:** Don't set the headline in sans-serif
- **Don't:** Don't use amber for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
