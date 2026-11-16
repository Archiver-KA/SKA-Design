# Design system — Real Estate Rental Management Landing Page Template

`SN-W03375` · real-estate · light mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

Clean marketing page with a white top section and a dark navy hero band carrying a large white headline. The teal accent is kept small: an eyebrow label, the primary button and the navbar call to action. The sans-serif headline is stacked over several lines, with lighter supporting copy beneath it, so the hierarchy comes from size and weight rather than colour.

**Mood:** clean, corporate, direct, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Outfit, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h3 20px · body 16px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Section padding:** `py-28`, `py-12`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-4 py-2.5 text-base text-[var(--gray-700)] hover:bg-[var(--teal-pale)] hover:text-[var(--teal-dark)] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline in white on the dark navy hero band at display size.
- **Do:** Use the teal only for the eyebrow label, the primary button and the navbar button.
- **Do:** Keep the supporting copy under the headline lighter in weight than the headline.
- **Don't:** Don't put a photo or colour block behind the headline; the band stays flat.
- **Don't:** Don't add a second accent colour beside the teal.
- **Don't:** Don't centre long paragraphs; keep text left-aligned under the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
