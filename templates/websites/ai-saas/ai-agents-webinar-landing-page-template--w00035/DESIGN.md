# Design system — AI Agents Webinar Landing Page Template

`SN-W00035` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pl`

## Direction

A dark, warm webinar page: a near-black ground (#0a0a0a) with an orange glow at the top, where orange (#f97316) picks out key phrases in the long Polish headline and fills the primary button. Inter at about 60px sets the headline centred, and the orange keywords carry the emphasis. Sections are short and centred with dark slate dividers, so the page reads as one sales sequence.

**Mood:** warm, dark, direct, energetic, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#f97316` · `#1f2937` · `#0a0a0a` · `#fb923c` · `#ffffff` · `#6b7280` · `#7c2d12` · `#050505` · `#111827` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 16px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_12px_#f97316]`, `shadow-[0_0_30px_rgba(249,115,22,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="relative z-10 group bg-gradient-to-r from-orange-500 to-amber-500 hover:to-orange-400 text-black text-lg font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.7)] hover:-translate-y-0.5 border border-orange-400/50">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #1f2937;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#1f2937',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Colour one or two keywords per headline in orange (#f97316)
- **Do:** Use a solid orange button for the primary sign-up action
- **Do:** Centre the headline and keep sections short and single-column
- **Don't:** Don't use orange for body text; it is for keywords and the button
- **Don't:** Don't put the page on a light background; the ground is near black
- **Don't:** Don't write long headlines without keyword emphasis

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
