# Design system — Personal Trainer Landing Page Template

`SN-W02663` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A near-black coaching page on #0d0d0d with large white sans-serif headlines, where the verb MOVE is set in orange (#ff7a1a). A large circular dark shape with an orange glow sits behind the hero as a focal point, without a photograph. Orange appears in the nav button and the highlighted word, so it signals action.

**Mood:** bold, warm, dark, focused, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#0d0d0d` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff7a1a` | Primary action and highlights |

Palette by frequency of use: `#ff6b00` · `#ffffff` · `#0d0d0d` · `#a1a1aa` · `#d4d4d8` · `#71717a` · `#27272a` · `#ff7a1a` · `#000000` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 30px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-[0_0_60px_rgba(255,107,0,0.15)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex bg-[#FF6B00] text-[#0D0D0D] px-6 py-2.5 rounded-full text-base font-medium hover:bg-[#FF7A1A] transition-colors items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Pricing (`pricing`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #0d0d0d;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff7a1a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#0d0d0d',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff7a1a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one verb or key word per headline in #ff7a1a.
- **Do:** Use a large dark circle with an orange rim as the hero focal shape.
- **Do:** Keep the nav button as the only solid orange fill above the fold.
- **Don't:** Don't use the orange (#ff6b00) as a page background; it is only for emphasis.
- **Don't:** Don't use orange body text.
- **Don't:** Don't add a second accent hue.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
