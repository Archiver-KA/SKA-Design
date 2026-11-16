# Design system — Mentalist Performer Landing Page Template

`SN-W03724` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black page with a softly vignetted centre and a large bold sans headline in white over two or three lines, with a grey paragraph beneath. Primary buttons are a muted gold fill paired with a dark outlined secondary, and a small pale pill badge sits above the title. Gold is reserved for the calls to action, so the palette feels premium and theatrical.

**Mood:** premium, theatrical, centred, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#2f4a42` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#d4a849` | Primary action and highlights |

Palette by frequency of use: `#e5ba5a` · `#09090b` · `#27272a` · `#f4f4f5` · `#d4d4d8` · `#a1a1aa` · `#2f4a42` · `#18181b` · `#71717a` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 12px · h3 48px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-black`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-[#e5ba5a] text-zinc-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#d4a849] transition-all font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Timeline (`timeline`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-text: #f4f4f5;
  --color-muted: #2f4a42;
  --color-border: #27272a;
  --color-accent: #d4a849;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    ink: '#f4f4f5',
    muted: '#2f4a42',
    line: '#27272a',
    accent: '#d4a849',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans, centred, across two or three lines
- **Do:** Use the muted gold (#d4a849) for the primary buttons only
- **Do:** Put a small pale pill badge above the headline
- **Don't:** Don't use gold for headlines or body copy
- **Don't:** Don't left-align the hero block
- **Don't:** Don't set the page on a light gold background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
