Image assets and placeholders

The current intro uses these real files:
- ./assets/images/hero-desktop.jpg
- ./assets/images/hero-mobile.jpg
- ./assets/images/chapter-couple-desktop.jpg
- ./assets/images/chapter-couple-mobile.jpg
- ./assets/images/logo.svg

Optional logo fallback:
- ./assets/images/logo.png

Future section images can replace these files when the rest of the layout is designed:
- ./assets/images/intro-couple.jpg
- ./assets/images/location-couple.jpg
- ./assets/images/schedule-couple.jpg

Important decision pending:
- The current hero text is embedded directly inside the hero images.
- If the hero ever needs to be translated by language, export separate localized files:
  - ./assets/images/hero-desktop-en.jpg
  - ./assets/images/hero-desktop-es.jpg
  - ./assets/images/hero-mobile-en.jpg
  - ./assets/images/hero-mobile-es.jpg

Recommendations:
- Keep the same file names whenever possible so future HTML/CSS references remain stable.
- Export web-optimized JPG files with the final crop needed for each section.
- Match logo proportions if switching from logo.svg to logo.png.
