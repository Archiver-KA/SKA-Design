# Design system — Right to Try Advocacy Landing Page Template

`SN-W02517` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A civic advocacy page on near-white (#f8fafc), with a full-width dark grey hero that fades to pale green at its base and carries a bold white sans headline. Below it, white cards with a thin green top rule hold the policy update and calls to action. The palette is nearly neutral, so green is the one colour that marks status and progress.

**Mood:** civic, clear, neutral, serious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#0f172a` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#007f73` · `#64748b` · `#0f172a` · `#ffffff` · `#475569` · `#e2e8f0` · `#f1f5f9` · `#f8fafc` · `#94a3b8` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[#007F73]/20`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-3`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium text-[#007F73] bg-[#007F73]/5 rounded-full transition-colors font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #0f172a;
  --color-text: #f5f5f5;
  --color-muted: #0f172a;
  --color-border: #f1f5f9;
  --color-accent: #e2e8f0;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#0f172a',
    ink: '#f5f5f5',
    muted: '#0f172a',
    line: '#f1f5f9',
    accent: '#e2e8f0',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold white sans on the dark hero
- **Do:** Use the pale green fade only at the base of the hero, not as text or buttons
- **Do:** Mark update cards with a thin green top rule
- **Don't:** Don't use the teal (#007f73) as a page ground; the page is near-white
- **Don't:** Don't set body copy on the dark hero in grey; use white
- **Don't:** Don't add decorative colour to policy text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
