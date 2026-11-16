# Design system — Nexus SaaS Landing Page Template

`SN-W00584` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, developer-focused SaaS hero on a charcoal-navy ground with a warm orange glow behind the headline. The headline is set in two lines of large sans: the first line solid white, the second a fading grey gradient. The primary action is a solid white pill beside a dark outlined button. Orange appears only as the glow and a small status dot, so the page reads as calm and technical.

**Mood:** dark, developer-focused, calm, technical, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#030712` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#a8a29e` · `#d6d3d1` · `#f97316` · `#fb923c` · `#6366f1` · `#ef4444` · `#000000` · `#ec4899`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(99,102,241,0.5)]`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium px-4 py-2 rounded-full transition-colors bg-white text-black hover:bg-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Testimonials (`testimonials`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #030712;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#030712',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to dark navy (#030712) with a single warm glow behind the hero.
- **Do:** Split headlines into a solid white first line and a grey gradient second line.
- **Do:** Keep the primary button solid white (#ffffff) and the secondary a dark outline.
- **Don't:** Don't use the indigo (#6366f1) as the page ground; the ground is dark navy.
- **Don't:** Don't use orange (#f97316) on text or buttons; it is used only in the glow and badge dot.
- **Don't:** Don't add more than one glow behind the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
