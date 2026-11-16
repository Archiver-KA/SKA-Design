# Design system — Boat Detailing Annapolis MD | Mobile Marine Detailing | MAD Marine Auto Services

`SN-W03843` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy hero (#0f172a) with a large sans-serif headline in pale blue (#bfdbfe) for its opening words, followed by white subtitle text and a short paragraph of local service copy. A white header bar with blue buttons sits above the hero, so the page alternates between a light top and a dark hero. Pill-shaped tags and a plain logo strip keep the layout simple and local.

**Mood:** local, clear, marine, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#bfdbfe` | Primary action and highlights |
| Second accent | `#14b8a6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#475569` · `#e2e8f0` · `#0f172a` · `#f1f5f9` · `#bfdbfe` · `#334155` · `#94a3b8` · `#2563eb` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-main)
- **Body:** var(--font-main)
- **Loaded families:** Inter, Pacifico
- **Scale (largest breakpoint):** h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-none`, `shadow-[0_0_15px_rgba(20,184,166,0.4)]`
- **Content width:** `max-w-3xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="flex flex-col items-center justify-center px-8 py-10 bg-blue-900 border border-blue-800 border-t-4 border-t-teal-500 rounded-3xl shadow-[0_0_15px_rgba(20,184,166,0.4)] hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] hover:-translate-y-1 hover:border-blue-700 transition-all duration-300 text-center no-underline group min-h-[180px] relative overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Menu list (`menu-list`)
4. Logo cloud (`logo-cloud`)
5. Hero (`hero`)
6. Booking form (`booking`)
7. Team (`team`)
8. Services (`services`)
9. Testimonials (`testimonials`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-border: #f1f5f9;
  --color-accent: #bfdbfe;
  --color-accent-2: #14b8a6;
  --font-display: "var(--font-main)", sans-serif;
  --font-body: "var(--font-main)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#f8fafc',
    ink: '#ffffff',
    line: '#f1f5f9',
    accent: '#bfdbfe',
    accent2: '#14b8a6',
  },
  fontFamily: { display: ['var(--font-main)'], sans: ['var(--font-main)'] },
} }
```

## Do and don't

- **Do:** Set the opening headline words in pale blue (#bfdbfe) on the dark navy ground.
- **Do:** Keep the header light and the hero dark, with blue buttons at the top.
- **Do:** Use pill-shaped tags above the headline for the service area.
- **Don't:** Don't place a light background behind the hero text.
- **Don't:** Don't use the pale blue for body copy.
- **Don't:** Don't add a second headline colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
