# Design system — AI Receptionist SaaS Landing Page Template

`SN-W00139` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark slate hero on #0f172a with a large white Inter headline in which two keywords sit in solid highlight boxes: call in orange (#f97316) and booking in a dark slate box. A warm photograph of a woman on a phone fills the right side, and a small floating call card adds the product. The effect is confident and direct, with orange used as a marker rather than a background.

**Mood:** confident, direct, warm, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#0f172a` · `#94a3b8` · `#ea580c` · `#e2e8f0` · `#334155` · `#1e293b` · `#64748b` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-medium hover:bg-white/30 transition-all shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Call to action (`cta`)
5. Testimonials (`testimonials`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #020617;
  --color-text: #f8fafc;
  --color-muted: #94a3b8;
  --color-border: #334155;
  --color-accent: #f97316;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#020617',
    ink: '#f8fafc',
    muted: '#94a3b8',
    line: '#334155',
    accent: '#f97316',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Mark one or two keywords per headline with solid highlight boxes
- **Do:** Use orange (#f97316) for the primary button and highlight boxes only
- **Do:** Set a warm photograph beside the hero, with a floating activity card over it
- **Don't:** Don't highlight more than two words in one headline
- **Don't:** Don't use orange for body text
- **Don't:** Don't pair the orange with a second warm accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
