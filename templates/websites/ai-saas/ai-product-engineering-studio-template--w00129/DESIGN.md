# Design system — AI Product Engineering Studio Template

`SN-W00129` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Light editorial studio page on off-white (#fafafa) with very large Space Grotesk headlines in near-black (#0f172a). The one accent is burnt orange (#c2410c), used on a single keyword in the headline, and a soft peach radial glow sits behind the type. The result reads as confident and gallery-like, with the typography doing most of the work.

**Mood:** editorial, confident, warm, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#c2410c` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#c2410c` · `#ffffff` · `#0f172a` · `#1e293b` · `#e2e8f0` · `#cbd5e1` · `#94a3b8` · `#334155` · `#64748b` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 88px · h2 60px · h3 36px · body 18px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_1.25rem_2.5rem_-0.9375rem_rgba(194,65,12,0.2)]`, `shadow-[0_0_0.625rem_#C2410C]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="nav-btn relative flex items-center justify-center px-6 py-2.5 text-sm font-normal text-white bg-slate-900 rounded-full overflow-hidden group shadow-[0_4px_15px_transparent] hover:shadow-[0_4px_20px_rgba(194,65,12,0.3)] transition-shadow duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Process / steps (`how-it-works`)
7. Newsletter signup (`newsletter`)
8. About (`about`)
9. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #334155;
  --color-accent: #c2410c;
  --color-accent-2: #1e293b;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#334155',
    accent: '#c2410c',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in Space Grotesk at large size in #0f172a
- **Do:** Use burnt orange (#c2410c) on one keyword per headline only
- **Do:** Place the soft peach glow behind the hero type, not behind body text
- **Don't:** Don't use the orange for buttons or large fills
- **Don't:** Don't set body copy in pure black; keep it in the slate greys
- **Don't:** Don't add heavy drop shadows; the page is flat on #fafafa

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
