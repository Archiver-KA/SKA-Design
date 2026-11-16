# Design system — LLM API Platform Landing Page Template

`SN-W00501` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy product page built on a #020617 ground with a large indigo (#818cf8) glow behind the top of the page. Headlines are white-grey Inter, and indigo marks the sign-in and sign-up actions. Orange (#f97316) is held back for one highlight, so the page feels like a developer console with a clear, measured accent.

**Mood:** technical, dark, measured, glowing, developer-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#818cf8` · `#94a3b8` · `#6366f1` · `#0f172a` · `#020617` · `#f97316` · `#000000` · `#06b6d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 18px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]`, `shadow-[0_0_10px_rgba(99,102,241,0.5)]`, `shadow-[0_0_15px_-3px_rgba(99,102,241,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-4 py-2 rounded-full font-medium transition-all shadow-[0_0_15px_-3px_rgba(99,102,241,0.6)]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Stats band (`stats`)
5. Process / steps (`how-it-works`)
6. Code / terminal (`code-terminal`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #e2e8f0;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#e2e8f0',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the indigo (#818cf8) for primary buttons and key links.
- **Do:** Keep the background on #020617 and panels on #0f172a.
- **Do:** Use the orange (#f97316) for one highlight per section at most.
- **Don't:** Don't place the glow behind body copy.
- **Don't:** Don't use orange for buttons.
- **Don't:** Don't add light panels to the dark sections.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
