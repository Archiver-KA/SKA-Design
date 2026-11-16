# Design system — Nexus SaaS Landing Page Template

`SN-W00587` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark SaaS hero on a charcoal-navy ground with a warm orange glow behind the headline. The headline is two lines of large white sans, the second in a fading grey gradient. The primary action is a solid white pill beside a dark outline, and orange shows only in the glow and badge dot.

**Mood:** dark, developer-focused, calm, warm-glowing, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
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

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #292524;
  --color-text: #ffffff;
  --color-muted: #78716c;
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
    surface: '#292524',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to dark navy (#030712) with one warm orange glow behind the hero.
- **Do:** Split headlines into a solid white first line and a grey gradient second line.
- **Do:** Keep the primary button solid white (#ffffff) and the secondary a dark outline.
- **Don't:** Don't use orange (#f97316) on text or buttons; it appears only in the glow and badge dot.
- **Don't:** Don't set the headline in a condensed face; the letterforms are wide.
- **Don't:** Don't add a second glow or a coloured gradient to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
