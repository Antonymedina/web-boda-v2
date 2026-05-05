const STORAGE_KEY = "wedding-site-language";
const MOBILE_BREAKPOINT = 800;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const i18n = {
  en: {
    ui: {
      skipToContent: "Skip to content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      toggleMenu: "Toggle navigation menu",
    },
    hero: {
      heading: "Antony & Joaneen wedding website",
      alt: "Antony and Joaneen together in the wedding portrait.",
    },
    chapterIntro: {
      title: "Thank you for being part of this chapter.",
      body: "We want to share this moment with all our loved ones, and you are one of them.",
    },
    nav: {
      weddingDetails: "Wedding details",
      dressCode: "Dress code",
      schedule: "Schedule",
      menu: "Menu",
      gifts: "Gifts",
      faq: "FAQ",
    },
    eventDetails: {
      ariaLabel: "Wedding event details",
      date: {
        label: "DATE",
        value: "27.06.26",
      },
      location: {
        label: "LOCATION",
        value: "Market Hotel Barcelona",
        extra: "Comte Borrell, 68, Eixample, 08015 Barcelona",
      },
      time: {
        label: "TIME",
        value: "16h",
      },
    },
    unplugged: {
      eyebrow: "Unplugged ceremony",
      title: "Please leave your phones away and be fully present with us.",
      body: "We would love for the ceremony to feel quiet and intimate. Our photographers will capture everything, so we kindly ask you not to take photos or videos during the ceremony itself.",
    },
    weddingDetailsSection: {
      eyebrow: "Wedding details",
      title: "Everything you need to know before you arrive.",
      intro: "Please keep these details handy on the day of the celebration.",
      details: {
        date: {
          label: "DATE",
          value: "27.06.26",
        },
        time: {
          label: "TIME",
          value: "16h",
        },
        location: {
          label: "LOCATION",
          value: "Market hotel Barcelona",
          meta: "Comte Borrell, 68, Eixample, 08015 Barcelona",
        },
        emergencyContact: {
          label: "EMERGENCY CONTACT",
          value: "Ria Bos",
          meta: "+34 631 04 14 13",
        },
      },
    },
    dressCodeSection: {
      eyebrow: "Dress code",
      title: "Formal / Semi-formal",
      intro: "Elegant, polished and comfortable enough to dance in.",
      detailsEyebrow: "More details",
      minimalTitle: "Minimal, timeless and softly tailored",
      minimalBody: "Neutral tones, black, deep green, navy, muted colors will all fit beautifully.",
      avoidTitle: "What to avoid",
      avoidBodyHtml:
        'We kindly ask guests to avoid <strong class="text-emphasis">yellow</strong>, <strong class="text-emphasis">orange</strong>, <strong class="text-emphasis">red</strong> and <strong class="text-emphasis">patterns</strong> so the overall palette stays calm and harmonious in photos.',
    },
    scheduleSection: {
      eyebrow: "Schedule",
      title: "A gentle timeline for the day.",
      intro: "We have planned the day with plenty of time to linger, greet one another and enjoy the setting.",
      items: {
        arrival: {
          time: "16h",
          title: "Arrival & welcome drink",
          text: "A first toast in the gardens while everyone settles in.",
        },
        ceremony: {
          time: "17h",
          title: "Ceremony",
          text: "Our ceremony begins shortly after guests are seated.",
        },
        cocktail: {
          time: "18h",
          title: "Cocktail hour",
          text: "Music, seasonal bites and time to wander through the venue.",
        },
        dinner: {
          time: "19h",
          title: "Dinner",
          text: "A seated dinner with speeches, wine and a slow evening pace.",
        },
        cake: {
          time: "21h",
          title: "Cake & first dance",
          text: "We will open the dance floor just after dessert.",
        },
        celebration: {
          time: "21:30h",
          title: "Celebration",
          text: "Dancing time.",
        },
      },
    },
    menuSection: {
      eyebrow: "Menu",
      title: "Please share your dinner preferences.",
      intro: "It won’t be possible to change what you pick, so please, be sure what you choose.",
      starters: {
        title: "Starters to share",
        note: "You don’t need to choose starters.",
        items: {
          burrata: "Burrata with tomato and roasted olives with rosemary and garlic",
          bravas: "Classic bravas with chistorra, spicy romesco and roasted garlic aioli",
          omelette: "Spanish omelette with tomato bread and salad",
          salad: "Catalan salad with goat cheese and assorted cured meats",
          aubergines: "Crispy aubergines with honey and hazelnuts",
        },
      },
      main: {
        title: "Main dish",
        note: "Choose one and let us know on WhatsApp.",
        items: {
          octopus: "Baby octopus with onions, a spicy touch, crushed potato and aioli.",
          chicken: "Menudo roasted chicken with French fries",
          duck: "Duck magret with sweet potato purée and pears in red wine",
          risotto: "Cep mushroom risotto with wild mushrooms and Parmesan cheese",
        },
      },
    },
    giftsSection: {
      eyebrow: "Gifts",
      title: "Your presence is already the greatest gift.",
      intro: "Being together is what matters most to us.",
      body: "For those who have asked, we would be grateful for a contribution toward our honeymoon and the home we are building together.",
    },
    faqSection: {
      placeholderTitle: "FAQ",
    },
    footer: {
      names: "Joaneen & Antony",
      message: "With love, and excitement for the celebration ahead.",
    },
    sections: {
      dressCode: {
        title: "Dress code",
        body: "Placeholder content for the dress code section. Final design and content will be added later.",
      },
      schedule: {
        title: "Schedule",
        body: "Placeholder content for the schedule section. Final design and content will be added later.",
      },
      menu: {
        title: "Menu",
        body: "Placeholder content for the menu section. Final design and content will be added later.",
      },
      gifts: {
        title: "Gifts",
        body: "Placeholder content for the gifts section. Final design and content will be added later.",
      },
      faq: {
        title: "FAQ",
        body: "Placeholder content for the FAQ section. Final design and content will be added later.",
      },
    },
  },
  es: {
    ui: {
      skipToContent: "Saltar al contenido",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      toggleMenu: "Alternar menú de navegación",
    },
    hero: {
      heading: "Web de boda de Antony y Joaneen",
      alt: "Antony y Joaneen juntos en el retrato principal de la boda.",
    },
    chapterIntro: {
      title: "Gracias por ser parte de este capítulo.",
      body: "Queremos compartir este momento con todas las personas que queremos, y tú eres una de ellas.",
    },
    nav: {
      weddingDetails: "Detalles de la boda",
      dressCode: "Código de vestimenta",
      schedule: "Cronograma",
      menu: "Menú",
      gifts: "Regalos",
      faq: "FAQ",
    },
    eventDetails: {
      ariaLabel: "Detalles principales del evento",
      date: {
        label: "FECHA",
        value: "27.06.26",
      },
      location: {
        label: "UBICACIÓN",
        value: "Market Hotel Barcelona",
        extra: "Comte Borrell, 68, Eixample, 08015 Barcelona",
      },
      time: {
        label: "HORA",
        value: "16h",
      },
    },
    unplugged: {
      eyebrow: "Ceremonia sin móviles",
      title: "Por favor, guarda tu móvil y vive este momento con nosotros.",
      body: "Nos encantaría que la ceremonia se sintiera tranquila e íntima. Nuestros fotógrafos capturarán todo, así que te pedimos amablemente que no tomes fotos ni vídeos durante la ceremonia.",
    },
    weddingDetailsSection: {
      eyebrow: "Detalles de la boda",
      title: "Todo lo que necesitas saber antes de llegar.",
      intro: "Ten estos detalles a mano el día de la celebración.",
      details: {
        date: {
          label: "FECHA",
          value: "27.06.26",
        },
        time: {
          label: "HORA",
          value: "16h",
        },
        location: {
          label: "UBICACIÓN",
          value: "Market hotel Barcelona",
          meta: "Comte Borrell, 68, Eixample, 08015 Barcelona",
        },
        emergencyContact: {
          label: "CONTACTO DE EMERGENCIA",
          value: "Ria Bos",
          meta: "+34 631 04 14 13",
        },
      },
    },
    dressCodeSection: {
      eyebrow: "Código de vestimenta",
      title: "Formal / Semiformal",
      intro: "Elegante, cuidado y cómodo para bailar.",
      detailsEyebrow: "Más detalles",
      minimalTitle: "Minimalista, atemporal y suavemente entallado",
      minimalBody: "Los tonos neutros, negro, verde oscuro, azul marino y colores apagados encajarán perfectamente.",
      avoidTitle: "Qué evitar",
      avoidBodyHtml:
        'Pedimos amablemente a los invitados que eviten <strong class="text-emphasis">amarillo</strong>, <strong class="text-emphasis">naranja</strong>, <strong class="text-emphasis">rojo</strong> y <strong class="text-emphasis">estampados</strong> para que la paleta general se mantenga tranquila y armoniosa en las fotos.',
    },
    scheduleSection: {
      eyebrow: "Programa",
      title: "Una cronología tranquila para el día.",
      intro: "Hemos planeado el día con tiempo suficiente para disfrutar, saludar y compartir el ambiente.",
      items: {
        arrival: {
          time: "16h",
          title: "Llegada y copa de bienvenida",
          text: "Un primer brindis en los jardines mientras todos se acomodan.",
        },
        ceremony: {
          time: "17h",
          title: "Ceremonia",
          text: "La ceremonia comenzará poco después de que los invitados tomen asiento.",
        },
        cocktail: {
          time: "18h",
          title: "Cóctel",
          text: "Música, bocados de temporada y tiempo para recorrer el espacio.",
        },
        dinner: {
          time: "19h",
          title: "Cena",
          text: "Una cena sentada con discursos, vino y un ritmo de noche pausado.",
        },
        cake: {
          time: "21h",
          title: "Tarta y primer baile",
          text: "Abriremos la pista de baile justo después del postre.",
        },
        celebration: {
          time: "21:30h",
          title: "Celebración",
          text: "Hora de bailar.",
        },
      },
    },
    menuSection: {
      eyebrow: "Menú",
      title: "Por favor, comparte tus preferencias para la cena.",
      intro: "No será posible cambiar lo que elijas, así que, por favor, asegúrate de tu elección.",
      starters: {
        title: "Entrantes para compartir",
        note: "No necesitas elegir entrantes.",
        items: {
          burrata: "Burrata con tomate y aceitunas asadas al romero y ajos",
          bravas: "Las bravas de siempre con chistorra, romesco picante y alioli de ajos rustidos",
          omelette: "Tortilla de patatas con pan con tomate y ensalada",
          salad: "Ensalada catalana con queso de cabra y embutidos variados",
          aubergines: "Berenjenas crujientes con miel y avellanas",
        },
      },
      main: {
        title: "Plato principal",
        note: "Elige uno y háznoslo saber por WhatsApp.",
        items: {
          octopus: "Pulpitos encebollados con toque picante, patata machacada y alioli.",
          chicken: "Menudo pollo asado con patatas fritas",
          duck: "Magret de pato con puré de moniato y peras al vino tinto",
          risotto: "Risotto de ceps con setas y queso parmesano",
        },
      },
    },
    giftsSection: {
      eyebrow: "Regalos",
      title: "Vuestra presencia ya es el mejor regalo.",
      intro: "Estar juntos es lo que más nos importa.",
      body: "Para quienes nos lo han preguntado, agradeceremos mucho una contribución para nuestra luna de miel y el hogar que estamos construyendo juntos.",
    },
    faqSection: {
      placeholderTitle: "Preguntas frecuentes",
    },
    footer: {
      names: "Joaneen & Antony",
      message: "Con amor y emoción por la celebración que nos espera.",
    },
    sections: {
      dressCode: {
        title: "Código de vestimenta",
        body: "Contenido provisional para la sección de código de vestimenta. El diseño y el contenido final se añadirán más adelante.",
      },
      schedule: {
        title: "Cronograma",
        body: "Contenido provisional para la sección de cronograma. El diseño y el contenido final se añadirán más adelante.",
      },
      menu: {
        title: "Menú",
        body: "Contenido provisional para la sección de menú. El diseño y el contenido final se añadirán más adelante.",
      },
      gifts: {
        title: "Regalos",
        body: "Contenido provisional para la sección de regalos. El diseño y el contenido final se añadirán más adelante.",
      },
      faq: {
        title: "FAQ",
        body: "Contenido provisional para la sección de preguntas frecuentes. El diseño y el contenido final se añadirán más adelante.",
      },
    },
  },
};

const root = document.documentElement;
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const languageButtons = document.querySelectorAll("[data-language-switch]");
const internalLinks = document.querySelectorAll('a[href^="#"]');
const revealElements = document.querySelectorAll(".reveal");

function getValueByPath(source, path) {
  return path.split(".").reduce((value, key) => (value ? value[key] : undefined), source);
}

function getStoredLanguage() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function storeLanguage(language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    /* Ignore storage errors so file:// usage still works without breaking the page. */
  }
}

function getInitialLanguage() {
  const storedLanguage = getStoredLanguage();

  if (storedLanguage === "en" || storedLanguage === "es") {
    return storedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function updateLanguageButtons(activeLanguage) {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.languageSwitch === activeLanguage;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyTranslations(language) {
  const translations = i18n[language] || i18n.en;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = getValueByPath(translations, key);

    if (typeof translation === "string") {
      element.textContent = translation;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    const translation = getValueByPath(translations, key);

    if (typeof translation === "string") {
      element.innerHTML = translation;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const translation = getValueByPath(translations, key);

    if (typeof translation === "string") {
      element.setAttribute("aria-label", translation);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    const translation = getValueByPath(translations, key);

    if (typeof translation === "string") {
      element.setAttribute("alt", translation);
    }
  });
}

function updateMenuToggleLabel(isOpen) {
  if (!menuToggle) {
    return;
  }

  const currentLanguage = root.lang === "es" ? "es" : "en";
  const labelKey = isOpen ? "ui.closeMenu" : "ui.openMenu";
  const label = getValueByPath(i18n[currentLanguage], labelKey) || i18n.en.ui.openMenu;

  menuToggle.setAttribute("aria-label", label);
}

function updateMobileMenuOffset() {
  if (!siteHeader) {
    return;
  }

  root.style.setProperty("--mobile-menu-offset", `${siteHeader.offsetHeight}px`);
}

function setLanguage(language) {
  const nextLanguage = language === "es" ? "es" : "en";

  applyTranslations(nextLanguage);
  updateLanguageButtons(nextLanguage);
  root.lang = nextLanguage;
  storeLanguage(nextLanguage);
  updateMenuToggleLabel(menuToggle?.getAttribute("aria-expanded") === "true");
  window.requestAnimationFrame(updateMobileMenuOffset);
}

function setMobileMenuState(isOpen) {
  if (!menuToggle || !mobileMenu) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  mobileMenu.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("has-mobile-menu-open", isOpen);
  updateMenuToggleLabel(isOpen);
}

function closeMobileMenu() {
  setMobileMenuState(false);
}

function toggleMobileMenu() {
  if (!menuToggle) {
    return;
  }

  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMobileMenuState(!isOpen);
}

function handleInternalNavigation(event) {
  const link = event.currentTarget;
  const targetId = link.getAttribute("href");

  if (!targetId || targetId === "#") {
    return;
  }

  const target = document.querySelector(targetId);

  if (!target) {
    return;
  }

  event.preventDefault();
  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });

  if (window.innerWidth < MOBILE_BREAKPOINT) {
    closeMobileMenu();
  }
}

function initRevealAnimations() {
  if (!revealElements.length) {
    return;
  }

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

function initEvents() {
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu);
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.languageSwitch);
    });
  });

  internalLinks.forEach((link) => {
    link.addEventListener("click", handleInternalNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    updateMobileMenuOffset();

    if (window.innerWidth >= MOBILE_BREAKPOINT) {
      closeMobileMenu();
    }
  });

  window.addEventListener("load", updateMobileMenuOffset);
}

function init() {
  setLanguage(getInitialLanguage());
  setMobileMenuState(false);
  updateMobileMenuOffset();
  initEvents();
  initRevealAnimations();
}

init();
