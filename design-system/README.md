# Sinera Atlas

Sinera Atlas is the design system for the template library: six themes, one per group of sectors, sharing one set of rules. `tokens.json` is the source of truth; `atlas.css` and `tailwind-preset.js` are generated from it.

## Themes

| Key | Name | Sectors | Ground | Ink | Accent | Second accent | Display / body |
|---|---|---|---|---|---|---|---|
| `circuit` | Circuit | Technology, finance | `#F4F6FA` | `#0E1726` | `#2B5CE6` | `#F2A33A` | Space Grotesk / Inter |
| `workshop` | Workshop | Creative, entertainment, events | `#121212` | `#F2F0EB` | `#C6F135` | `#FF5C39` | Bricolage Grotesque / Inter |
| `calm` | Calm | Healthcare, education, sport | `#F2F7F5` | `#0F2A26` | `#0F766E` | `#F4B860` | Be Vietnam Pro |
| `dwell` | Dwell | Real estate, travel, food, beauty | `#F3F1EC` | `#1D1B1A` | `#1F4D3A` | `#C99A3B` | Fraunces / Be Vietnam Pro |
| `market` | Market | E-commerce, retail | `#FFFFFF` | `#16161A` | `#C8411B` | `#1B3A8A` | Manrope |
| `route` | Route | Logistics, business services | `#EEF1F3` | `#10212B` | `#F26B1D` | `#1F5F8B` | Barlow Condensed / Inter |

Each theme also defines a surface colour, a muted text colour, a line colour, the text colour to use on each accent, and corner radii for controls and cards.

## Rules shared by every theme

- **Colour.** The main accent is for the page's one primary action and one or two highlights. Text meets 4.5:1 contrast against its background. The two accents differ in lightness, so they stay distinguishable without colour. No gradient washes as backgrounds.
- **Type.** At most two families per page. Body text from 16px, captions no smaller than 12px. The fonts must cover the page's script: swap the display face when it lacks the glyphs (Bricolage Grotesque has no Cyrillic, for example).
- **Spacing.** Steps of 4, 8, 12, 16, 24, 32, 48, 64 and 96px. Sections sit 96px apart on desktop and 56px on phones.
- **Content.** Keep the template's original language. A fact that is not known — a price, an address, a figure, a testimonial — stays as a bracketed placeholder such as `[YOUR PRICE]`.

## Applying a theme

With plain CSS, load `atlas.css` and set the theme on the root element:

```html
<html data-theme="route">
<link rel="stylesheet" href="design-system/atlas.css">
<a class="sa-btn" href="#quote">Get a quote</a>
```

The stylesheet sets `--sa-ground`, `--sa-surface`, `--sa-ink`, `--sa-muted`, `--sa-line`, `--sa-accent`, `--sa-on-accent`, `--sa-accent-2`, `--sa-on-accent-2`, the two font variables and the two radii, and provides a few helpers (`.sa-btn`, `.sa-btn--ghost`, `.sa-card`, `.sa-muted`, `.sa-section`).

With Tailwind, add the preset. Its colours resolve to the same variables, so one set of markup can wear any theme:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="design-system/tailwind-preset.js"></script>
<script>tailwind.config = { presets: [sineraAtlas] }</script>

<body class="bg-ground text-ink font-sans">
  <h1 class="font-display">…</h1>
  <button class="bg-accent text-accent-on rounded-control">…</button>
</body>
```

Load the theme's fonts from Google Fonts; the family string for each theme is in `tokens.json` under `font.google`.

## Which theme a template gets

A template takes the theme whose `collections` list contains its collection; otherwise the theme whose `categories` list contains its sector folder. The result is stored as `theme` in the template's `sinera.json` and in `catalog.json`.
