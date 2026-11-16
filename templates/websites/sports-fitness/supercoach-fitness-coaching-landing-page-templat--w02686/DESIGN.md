# Design system — Supercoach Fitness Coaching Landing Page Template

`SN-W02686` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Stark coaching landing page on near-black (#0a0a0a) with pure white type and no accent colour. The headline is three short lines of very large, heavy Inter with tight spacing, and it does almost all of the work. Supporting copy is small and muted, and actions are pill-shaped buttons, so the page reads as monochrome and confident.

**Mood:** stark, high contrast, monochrome, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f8fafc` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#0a0a0a` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 128px · h2 48px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/90 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition animate-on-scroll">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Team (`team`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #f8fafc;
  --color-border: #ffffff;
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
    surface: '#000000',
    ink: '#ffffff',
    muted: '#f8fafc',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep headlines in heavy Inter at display size on #0a0a0a with tight line spacing.
- **Do:** Use white for headings and the muted tone (#f8fafc) for supporting copy.
- **Do:** Shape buttons as full pills and keep them the only rounded shapes in the hero.
- **Don't:** Don't add an accent colour; the page is black, white and grey only.
- **Don't:** Don't shrink the headline below display size; the scale is the design.
- **Don't:** Don't put photos behind the hero text; the type sits on flat black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
