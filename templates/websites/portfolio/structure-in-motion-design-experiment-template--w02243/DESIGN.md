# Design system — Structure in Motion Design Experiment Template

`SN-W02243` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black motion-first studio page where the hero is one oversized, tightly tracked, white bold sans set across two lines and filling the frame. Colour is almost absent: the ground is black, the type is white, and small grey text sits in the corners. The distinctiveness comes from scale and emptiness, so the headline does the work that imagery or accent colour would do on other templates.

**Mood:** bold, stark, monochrome, cinematic, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#737373` · `#a3a3a3` · `#0a0a0a` · `#171717` · `#e5e5e5` · `#7f1d1d` · `#dc2626` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Syne, JetBrains Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(239,68,68,0.5)]`, `shadow-2xl`, `shadow-lg`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 text-xs text-white font-medium hover:text-red-500 transition-colors uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full bg-neutral-900/50 backdrop-blur-sm animate-in">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Dashboard preview (`dashboard-preview`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ef4444;
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
    surface: '#171717',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero in a heavy uppercase sans at near-full width with tight tracking.
- **Do:** Keep the page on black (#0a0a0a) with white type and grey secondary text.
- **Do:** Use thin vertical rules as the only structural device in the hero.
- **Don't:** Don't use the red (#dc2626) as a page ground; the ground is black.
- **Don't:** Don't set body copy at display size; supporting text stays small in the corners.
- **Don't:** Don't add a coloured accent to the hero; the look relies on black and white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
