# Design system — AI Systems Agency Landing Page Template

`SN-W01428` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black navy hero with a fine starfield texture, where the headline is white on the first line and pale blue (#60a5fa) on the second, creating a cool two-tone heading. The primary button is white and the secondary is dark with a thin border, and a small outlined tag sits above the headline. The blue and the dark navy ground make it cold and spacious.

**Mood:** cold, spacious, navy, technical, starfield

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#02040a` | Page ground |
| Surface | `#060b14` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#02040a` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#3b82f6` · `#ffffff` · `#6b7280` · `#60a5fa` · `#02040a` · `#9ca3af` · `#2563eb` · `#1e3a8a` · `#93c5fd` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_30px_rgba(37,99,235,0.1)]`, `shadow-[0_0_20px_rgba(37,99,235,0.4)]`, `shadow-[0_0_25px_rgba(255,255,255,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-x-2`

**Primary button**

```html
<a class="hidden md:inline-flex group relative items-center justify-center px-5 py-2 overflow-hidden font-medium text-white transition-all duration-300 bg-blue-600/20 border border-blue-500/50 rounded-full hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Spline 3D, AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #02040a;
  --color-surface: #060b14;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #02040a;
  --color-accent: #3b82f6;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#02040a',
    surface: '#060b14',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#02040a',
    accent: '#3b82f6',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in pale blue (#60a5fa) and keep the first line white.
- **Do:** Keep the ground near-black navy (#02040a) with a fine dot texture behind the hero.
- **Do:** Use a white primary button and a dark outlined secondary.
- **Don't:** Don't use a light ground; the page is navy-black throughout.
- **Don't:** Don't add warm colours to the hero; the palette is blue and white.
- **Don't:** Don't make the secondary button solid; it stays dark with a thin border.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
