# Design system — SENSET Construction Services Template

`SN-W03380` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

Direct, text-first trade-services page on a near-black ground with a large white headline set in sans with tight leading. Two saturated buttons carry the actions: a blue button in the navbar and in the hero, and a solid orange button for the phone call. The layout has no gradients or ornament, so the flat black ground and the bright buttons do all the work.

**Mood:** direct, functional, high-contrast, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-[-0.05em]`, `tracking-[0.08em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-[18px]` (18px)
- **Shadows:** `shadow-[var(--shadow-subtle)]`, `shadow-[var(--shadow-hover)]`
- **Content width:** `max-w-[1280px]`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="button-lift inline-flex items-center gap-2 rounded-xl bg-[var(--brand-primary)] px-4 py-3 text-xs font-medium text-[var(--brand-white)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Sidebar (`sidebar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Pricing (`pricing`)
6. Feature grid (`features`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-text: #ffffff;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    ink: '#ffffff',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in white (#ffffff) on the near-black ground at display size with tight leading.
- **Do:** Use the blue for the main consultation button and the orange for the phone call action only.
- **Do:** Keep the hero text-first, with the headline and one image placeholder beside it.
- **Don't:** Don't place light backgrounds behind the headline; the ground stays black.
- **Don't:** Don't add gradients or glow effects; the page is flat.
- **Don't:** Don't use the orange for more than one action per section.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
