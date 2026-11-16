# Design system — AI Automation Agency Landing Page Template

`SN-W01385` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a soft green glow behind the centred hero and a three-line headline in Inter. The first line is white and the last line, Call, Chat, and Convert, is a mint gradient, the one colour in the headline. A small green pill badge sits above it. The green is confined to the glow, the badge and the headline phrase.

**Mood:** green, dark, bright, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#18181b` | Secondary copy, captions |
| Border | `#3f3f46` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#10b981` · `#18181b` · `#27272a` · `#09090b` · `#34d399` · `#d4d4d8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-emerald-500/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-28`, `py-16`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="px-8 py-4 rounded-full border border-zinc-700 text-zinc-200 font-medium hover:bg-zinc-800 transition-colors flex items-center gap-3 text-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Articles (`blog-articles`)
6. About (`about`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #18181b;
  --color-border: #3f3f46;
  --color-accent: #34d399;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#18181b',
    line: '#3f3f46',
    accent: '#34d399',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the headline in white Inter, with the last phrase in mint (#34d399).
- **Do:** Keep the green glow soft and behind the hero, never behind text.
- **Do:** Use the green badge only as a status marker above the headline.
- **Don't:** Don't use mint for body copy; it is for the headline phrase.
- **Don't:** Don't place the glow on the navigation bar.
- **Don't:** Don't set the page on a light ground; the dark base carries the mint.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
