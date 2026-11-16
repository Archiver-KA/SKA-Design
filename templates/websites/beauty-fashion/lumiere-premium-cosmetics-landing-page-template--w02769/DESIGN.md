# Design system — Lumière Premium Cosmetics Landing Page Template

`SN-W02769` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cinematic cosmetics landing page with a near-white ground (#faf9fa), dark ink headlines (#1e1b24) and a pink (#f08bb1) accent on one headline word. The hero uses an open two-column layout with a large pink gradient image block and a floating card with a rotating circular label. The distinctive feature is the motion system.

**Mood:** cinematic, airy, refined, soft, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9fa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e1b24` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#f08bb1` | Primary action and highlights |
| Second accent | `#ffcc4f` | Supporting highlights |

Palette by frequency of use: `#1e1b24` · `#f08bb1` · `#ffffff` · `#000000` · `#ffcc4f` · `#e06691` · `#faf9fa` · `#2c2836` · `#f7ebeb` · `#f5eef1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins
- **Scale (largest breakpoint):** h1 88px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.4rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-[3rem]` (3rem)
- **Shadows:** `shadow-[0_1.5rem_5rem_rgba(0,0,0,.28)]`, `shadow-[0_1.5rem_4rem_rgba(0,0,0,.22)]`, `shadow-[0_1rem_2.5rem_rgba(240,139,177,.18)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-8`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="motion-item rounded-md bg-[#1e1b24] px-10 py-4 text-sm font-medium text-white shadow-[0_1.25rem_4rem_rgba(0,0,0,.08)] transition hover:-translate-y-0.5 hover:bg-[#2c2836] focus:outline-none focus:ring-2 focus:ring-[#1e1b24]/70">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Newsletter signup (`newsletter`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Team (`team`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9fa;
  --color-surface: #ffffff;
  --color-text: #1e1b24;
  --color-muted: #6b7280;
  --color-border: #000000;
  --color-accent: #f08bb1;
  --color-accent-2: #ffcc4f;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9fa',
    surface: '#ffffff',
    ink: '#1e1b24',
    muted: '#6b7280',
    line: '#000000',
    accent: '#f08bb1',
    accent2: '#ffcc4f',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Colour one word per headline in pink (#f08bb1) and keep the rest in ink (#1e1b24).
- **Do:** Keep the page background near-white (#faf9fa) and frame products in soft pink panels.
- **Do:** Let motion carry the entrance; keep the static layout open and uncluttered.
- **Don't:** Don't use yellow (#ffcc4f) for large areas.
- **Don't:** Don't fill the hero with extra text beside the headline.
- **Don't:** Don't add heavy black outlines around cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
