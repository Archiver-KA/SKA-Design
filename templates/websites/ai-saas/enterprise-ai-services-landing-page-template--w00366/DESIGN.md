# Design system — Enterprise AI Services Landing Page Template

`SN-W00366` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, near-black page with white Inter headlines set large, where the second line of the headline is dimmed to grey for contrast. Orange appears only as a small uppercase badge and a faint warm glow behind the hero, and the primary button is solid white beside a dark secondary.

**Mood:** dark, restrained, consultancy, typographic, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0f` | Page ground |
| Surface | `#0d1117` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#71717a` · `#a1a1aa` · `#fb923c` · `#0d1117` · `#0a0a0f` · `#52525b` · `#18181b` · `#07070a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_rgba(249,115,22,0.2)]`, `shadow-[0_0_40px_rgba(249,115,22,0.3)]`, `shadow-[0_0_60px_rgba(249,115,22,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center h-14 px-10 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-1 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Stats band (`stats`)
6. Process / steps (`how-it-works`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0f;
  --color-surface: #0d1117;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --color-accent-2: #1e3a8a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0f',
    surface: '#0d1117',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb923c',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at large size with white first line and a grey second line.
- **Do:** Keep orange (#f97316) to the small eyebrow badge and the hero glow, not to buttons.
- **Do:** Use a solid white primary button next to a dark secondary button, centred under the copy.
- **Don't:** Don't put orange on the primary button; it is solid white.
- **Don't:** Don't switch to a light background; the design is dark.
- **Don't:** Don't add illustrations or decorative shapes; the hero is type, one paragraph and two buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
