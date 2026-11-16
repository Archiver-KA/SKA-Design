# Design system — Business Services Landing Page Template

`SN-W03849` · business-services · light mode · Sinera Atlas theme `route` · language `id`

## Direction

A white, airy hero with a bold dark sans-serif headline stacked over three lines, where the second and third lines are set in bright green (#25d366). A solid green primary button and a white outline button sit beside a short list of services in grey. A rounded photograph of an office with a floating status card, and a green chat bubble in the corner, give the composition a product-like feel.

**Mood:** fresh, clear, corporate, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1d1d1f` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#25d366` | Primary action and highlights |

Palette by frequency of use: `#25d366` · `#ffffff` · `#1d1d1f` · `#6b7280` · `#fafafa` · `#9ca3af` · `#f3f4f6` · `#e5e7eb` · `#d1d5db` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1.5rem]` (1.5rem), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[#25D366]/5`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#20bd5a] transition-all shadow-xl shadow-[#25D366]/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Integrations (`integrations`)
5. Logo cloud (`logo-cloud`)
6. Call to action (`cta`)
7. Footer (`footer`)
8. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #1d1d1f;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #25d366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#1d1d1f',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second and third headline lines in green (#25d366).
- **Do:** Use the green for the primary button and the chat bubble only.
- **Do:** Keep the photograph rounded and place a small status card over its lower edge.
- **Don't:** Don't set body text in green.
- **Don't:** Don't add a second accent colour beside the green.
- **Don't:** Don't place the status card over the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
