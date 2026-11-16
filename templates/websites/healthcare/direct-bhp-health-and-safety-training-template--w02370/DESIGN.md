# Design system — Direct BHP Health and Safety Training Template

`SN-W02370` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A bold, institutional safety-training page with a deep navy hero band and a white content area below. Amber (#f59e0b) is the only warm colour, used for the active nav item, the image block and the main contact button, so it reads as the call to action. Headlines are large sans-serif in white on navy, and the tone is direct and functional, close to a corporate training catalogue.

**Mood:** institutional, direct, functional, navy, reliable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#172554` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#172554` · `#1e3a8a` · `#f1f5f9` · `#fbbf24` · `#f8fafc` · `#94a3b8` · `#475569` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 20px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-amber-500 text-white px-8 py-4 rounded-xl font-normal text-xl hover:bg-amber-600 transition-colors w-full flex items-center justify-center space-x-2">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Articles (`blog-articles`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)
8. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #172554;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#172554',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on the deep navy (#172554) with white headlines.
- **Do:** Use the amber (#f59e0b) only for the main contact button and the active nav item.
- **Do:** Set cards on the light ground with simple rounded corners and small headings.
- **Don't:** Don't use amber for body text or large areas; it is reserved for actions.
- **Don't:** Don't add decorative gradients to the hero; the navy is flat.
- **Don't:** Don't mix in a second bright accent beside the amber.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
