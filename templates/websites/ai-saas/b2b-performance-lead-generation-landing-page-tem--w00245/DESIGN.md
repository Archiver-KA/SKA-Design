# Design system — B2B Performance Lead Generation Landing Page Template

`SN-W00245` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, editorial agency page: a white ground with a serif display face (Instrument Serif) at very large size, and the key words set in blue (#3b82f6) italic. The blue is the only accent, used for a pill tag, the emphasised words and an underline, while the navigation and CTA stay near-black navy (#111827). Headlines sit inside a rounded white panel, which gives the page a considered, print-like tone.

**Mood:** editorial, confident, light, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#22d3ee` · `#e5e7eb` · `#6b7280` · `#3b82f6` · `#9ca3af` · `#f3f4f6` · `#06b6d4` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, WistiaPlayerInterNumbersSemiBold
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-blue-500 text-white text-xs font-montserrat font-light tracking-wide rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-400/20 shrink-0 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Video / media (`video-media`)
6. FAQ (`faq`)
7. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e7eb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #3b82f6;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5e7eb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif at display size, with the key phrase in blue (#3b82f6) italic
- **Do:** Use #3b82f6 only for the pill tag, emphasised words and the underline
- **Do:** Keep the nav button and primary CTA in dark navy (#111827)
- **Don't:** Don't set headlines in a sans-serif; the serif carries the voice
- **Don't:** Don't use the blue for large background areas
- **Don't:** Don't put a gradient behind the hero; the ground is flat white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
