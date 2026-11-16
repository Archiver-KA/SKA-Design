# Design system — AI Marketing Automation Landing Page Template

`SN-W01417` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with an orange (#f97316) primary button, a grey-toned eyebrow pill, and a large sans headline in white. The hero is split: copy and a white-outlined email field with a solid orange trial button on the left, and a dark feature list with orange labels and a faint oversized numeral on the right. Orange is the one strong colour and it marks labels and actions only.

**Mood:** dark, split, orange-led, technical, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f97316` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#262626` · `#a3a3a3` · `#171717` · `#7c2d12` · `#737373` · `#404040` · `#ea580c` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 14px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-orange-500/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="ai-observe bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all ai-hover-target">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Code / terminal (`code-terminal`)
6. Process / steps (`how-it-works`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f97316;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #262626;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f97316',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#262626',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#f97316) for the primary button and the feature labels, and nowhere else.
- **Do:** Keep the email field white-outlined, with a solid orange button beside it.
- **Do:** Keep the oversized numeral as a faint background element, not a focal point.
- **Don't:** Don't use the dark brown (#7c2d12) as an accent.
- **Don't:** Don't fill the email field; it stays outlined.
- **Don't:** Don't set body copy in orange.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
