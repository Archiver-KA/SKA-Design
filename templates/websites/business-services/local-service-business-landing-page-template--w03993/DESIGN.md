# Design system — Local Service Business Landing Page Template

`SN-W03993` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, centred hero with a heavy white sans-serif headline, where the second line is set in bright blue (#3b82f6). A single blue primary button sits below a short paragraph, and a faint browser frame at the bottom hints at the product. The page uses blue as its one accent on a near-black ground, which keeps the message focused.

**Mood:** focused, dark, confident, modern, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1f2937` · `#111827` · `#6b7280` · `#3b82f6` · `#4b5563` · `#9ca3af` · `#030712` · `#10b981` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="sm:w-auto hover:bg-blue-500 transition-all flex font-medium text-white bg-blue-600 w-full rounded-lg py-3.5 px-8 shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] gap-2 items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Process / steps (`how-it-works`)
5. Services (`services`)
6. Marquee (`marquee`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #111827;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #1f2937;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#111827',
    ink: '#111111',
    muted: '#ffffff',
    line: '#1f2937',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use bright blue (#3b82f6) for the second headline line and the primary button only
- **Do:** Keep the ground near-black (#030712) with white headlines
- **Do:** Centre the hero text and keep paragraphs to three lines
- **Don't:** Don't use green (#10b981) as a main accent; keep it for small details
- **Don't:** Don't add a light background to the hero
- **Don't:** Don't set body copy in greys darker than the mid-grey tones

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
