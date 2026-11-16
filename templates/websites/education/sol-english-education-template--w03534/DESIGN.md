# Design system — SOL English Education Template

`SN-W03534` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, community-style English course page on near-black (#090a0c), with a large white Inter headline whose closing word takes a blue-to-cyan gradient (#6b7cff to #4fd1e0). A white pill primary button sits beside a dark outlined secondary, and a dark app window below shows progress. The palette is cool and calm, and the gradient word is the signature.

**Mood:** cool, community, polished, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#090a0c` | Page ground |
| Surface | `#0f1217` | Cards, panels, raised areas |
| Text | `#f4f5f7` | Headings and primary copy |
| Muted text | `#9598a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6b7cff` | Primary action and highlights |
| Second accent | `#4fd1e0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9598a3` · `#6b7cff` · `#6b6e78` · `#4fd1e0` · `#8e9bff` · `#090a0c` · `#13151a` · `#0f1217` · `#0b0c10`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Content width:** `max-w-[1140px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2.5`, `gap-2`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Feature grid (`features`)
6. Team (`team`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #090a0c;
  --color-surface: #0f1217;
  --color-text: #f4f5f7;
  --color-muted: #9598a3;
  --color-border: #ffffff;
  --color-accent: #6b7cff;
  --color-accent-2: #4fd1e0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#090a0c',
    surface: '#0f1217',
    ink: '#f4f5f7',
    muted: '#9598a3',
    line: '#ffffff',
    accent: '#6b7cff',
    accent2: '#4fd1e0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing headline word in a blue-to-cyan gradient (#6b7cff to #4fd1e0)
- **Do:** Use a white pill button for the primary action beside a dark outlined secondary
- **Do:** Keep the interface preview in dark panels with subtle borders
- **Don't:** Don't use the gradient on body copy or small labels
- **Don't:** Don't add warm accent colours to the cool palette
- **Don't:** Don't use light panels inside the dark interface preview

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
