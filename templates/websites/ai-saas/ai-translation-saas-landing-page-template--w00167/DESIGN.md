# Design system — AI Translation SaaS Landing Page Template

`SN-W00167` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `de`

## Direction

Dark product page on deep navy (#020617) with large blurred blue glows behind the hero, which give the page its depth. Inter at heavy weight sets a centred German headline in white, and a solid blue (#3b82f6) button leads the calls to action. A Teams-style chat window showing the product sits below the headline.

**Mood:** dark, glowing, corporate, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#64748b` · `#60a5fa` · `#94a3b8` · `#020617` · `#cbd5e1` · `#1e293b` · `#2563eb` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-blue-500/20`, `shadow-blue-500/40`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Video / media (`video-media`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #020617;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#020617',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on deep navy (#020617) and place the blue glows behind the headline only
- **Do:** Set headlines in heavy Inter, centred, in white
- **Do:** Use the blue (#3b82f6) for the main button as the primary call to action
- **Don't:** Don't use the blue as a page background; it lives in glows and buttons
- **Don't:** Don't switch German headlines to a condensed or decorative face; keep Inter
- **Don't:** Don't move to a light background; the hero stays dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
