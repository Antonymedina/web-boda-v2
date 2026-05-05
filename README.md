# Wedding Website Base

Static technical base for a bilingual single page wedding website built with HTML, CSS and vanilla JavaScript.

The current iteration focuses on the editorial header, hero image, event overview block, chapter intro, unplugged ceremony message, the informational wedding details section, the dark editorial dress code section, the light editorial schedule section, the implemented menu and gifts sections, a minimal FAQ anchor placeholder and the closing footer. The rest of the page remains intentionally minimal while the foundation stays easy to extend.

## Open the site

Open `./index.html` directly in your browser. No server, build tool or framework is required.

Because the project must work with `file://`, all asset references use relative paths.

## Project structure

```text
.
├── DESIGN_TOKENS.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   └── image-placeholder-readme.txt
│   └── fonts/
│       └── fonts-readme.txt
└── README.md
```

## Relative paths

Use relative paths everywhere so the website keeps working when opened with `file://`.

Examples used in this base:
- `./css/styles.css`
- `./js/main.js`
- `./assets/images/hero-desktop.jpg`
- `../assets/fonts/Archivo-Regular.woff2` from inside `./css/styles.css`

Avoid root-relative paths such as `/css/styles.css` or `/assets/fonts/...`.

## Design tokens

`./DESIGN_TOKENS.md` documents the visual variables used by the project by category, including a reusable typography scale, colors, spacing, layout, header, hero, event details, the reusable `Details List` pattern, dark and light editorial section guidance, editorial two-column grids, timeline list guidance, note styling, section dividers, arrow lists, the small footer pattern, inline emphasis, z-index and motion.

## Fonts

Place these local `.woff2` files inside `./assets/fonts/` with these exact names:

- `PlayfairDisplay-Regular.woff2`
- `PlayfairDisplay-Bold.woff2`
- `PlayfairDisplay-SemiBold.woff2`
- `Archivo-Light.woff2`
- `Archivo-Regular.woff2`
- `Archivo-Medium.woff2`

The stylesheet is already configured with `@font-face` for those names.

Fallback stacks:
- Titles: `Playfair Display, Georgia, serif`
- Body: `Archivo, Arial, sans-serif`

Optional note:
You could load the same font families from Google Fonts later if you want, but this base prioritizes local fonts and does not depend on external services.

## Images

Current intro assets:

- `./assets/images/hero-desktop.jpg`
- `./assets/images/hero-mobile.jpg`
- `./assets/images/chapter-couple-desktop.jpg`
- `./assets/images/chapter-couple-mobile.jpg`
- `./assets/images/wedding-details-desktop.jpg`
- `./assets/images/wedding-details-mobile.jpg`
- `./assets/images/schedule-desktop.jpg`
- `./assets/images/schedule-mobile.jpg`
- `./assets/images/logo.svg`

Optional logo fallback:

- `./assets/images/logo.png`

Future section image files:

- `./assets/images/intro-couple.jpg`
- `./assets/images/location-couple.jpg`
- `./assets/images/schedule-couple.jpg`

Pending content decision:
- The current hero text is embedded directly inside the hero images.
- If the hero needs translation in the future, prepare separate assets per language:
  - `./assets/images/hero-desktop-en.jpg`
  - `./assets/images/hero-desktop-es.jpg`
  - `./assets/images/hero-mobile-en.jpg`
  - `./assets/images/hero-mobile-es.jpg`

## Language system

The site supports English and Spanish.

How it works:
- `main.js` first checks `localStorage` for a saved language.
- If no preference exists, it reads `navigator.language`.
- If the language starts with `es`, the site uses Spanish.
- Any other value defaults to English.
- The active language updates text nodes with `data-i18n`, updates `document.documentElement.lang`, updates accessible attributes where needed, and marks the active `EN` or `ES` control with `aria-pressed`.
- For tightly controlled translated markup, the project also supports `data-i18n-html`, which renders trusted HTML strings from the local `i18n` object.

Anchor structure:
- `#event-overview` points to the opening hero and summary block.
- `#wedding-details` points to the informational wedding details section linked from the main navigation.
- `#dress-code` points to the implemented dress code section linked from the main navigation.
- `#schedule` points to the implemented schedule section linked from the main navigation.
- `#menu` points to the implemented dinner preferences section linked from the main navigation.
- `#gifts` points to the implemented gifts section linked from the main navigation.
- `#faq` remains a minimal placeholder anchor so the navigation keeps working until the real FAQ is designed.

## Reveal animations

Elements with the `.reveal` class animate into view using `IntersectionObserver`.

Behavior:
- Base state: low opacity and slight vertical offset.
- Visible state: `.reveal.is-visible`
- Reduced motion: animation is effectively disabled when `prefers-reduced-motion: reduce` is active.
- Inline emphasis inside translated sentences can use the reusable `.text-emphasis` utility.
- Editorial food lists can use `.arrow-list` and `.arrow-list__item` so arrows stay visual and out of the translation strings.
- Secondary guidance can use `.note-text`, and subtle light-section separators can use `.section-divider`.

## Current scope

This base currently includes:
- Semantic `index.html`
- Editorial light header with logo, desktop nav and mobile fullscreen menu
- Responsive hero image using `<picture>`
- Date, location and time block with bilingual content
- Editorial chapter intro with responsive image and unplugged ceremony message
- Informational wedding details section with responsive image and semantic details list
- Dark editorial dress code section with controlled inline emphasis
- Light editorial schedule section with semantic timeline and responsive image
- Menu section with semantic food lists and shared editorial note styling
- Gifts section with centered desktop layout and left-aligned mobile layout
- Minimal `#faq` anchor placeholder that stays out of the way until the final FAQ is designed
- Closing footer placed as the last real block of the page
- Global CSS variables for color, typography, spacing, width, header, hero, motion and z-index
- Shared patterns such as `.section-divider`, `.arrow-list`, `.note-text` and `.text-emphasis`
- Initial bilingual text system

The remaining section layouts and deeper visual polish can be built on top of this foundation in future iterations.
