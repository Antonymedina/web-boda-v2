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
      title: "Thank you for being a part of our big day.",
      body: "We want to share our special day with our loved ones, and you are one of them.",
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
      title: "We kindly ask that no photos or videos be taken during the ceremony.",
      body: "Thank you for being present with us.",
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
      },
    },
    dressCodeSection: {
      eyebrow: "Dress code",
      title: "Formal / Semi-formal",
      intro: "Elegant, polished and comfortable enough to dance in.",
      detailsEyebrow: "More details",
      minimalTitle: "Modest, minimal, timeless and softly tailored",
      minimalBody: "Neutral tones, black, deep green, navy, muted colors will all fit beautifully.",
      avoidTitle: "What to avoid",
      avoidBodyHtml:
        'We kindly ask guests to avoid <strong class="text-emphasis">yellow</strong>, <strong class="text-emphasis">orange</strong>, <strong class="text-emphasis">red</strong> and <strong class="text-emphasis">patterns</strong> so the overall palette stays calm and harmonious in photos.',
    },
    scheduleSection: {
      eyebrow: "Schedule",
      title: "Our timeline for the day",
      intro: "We have planned the day with plenty of time to linger, greet one another and enjoy the setting.",
      items: {
        arrival: {
          time: "16.00 - 16.30",
          title: "Guest arrival and welcome drink",
          text: "We kindly ask guests to arrive on time, settle into their seats, enjoy a welcome drink, and take a moment to connect with friends.",
        },
        ceremony: {
          time: "16.30 - 17.30",
          title: "Ceremony",
          text: "Our ceremony begins shortly after guests are seated.",
          note: "Please note: No photos or videos. If you are late, you will have to wait until the ceremony is finished and join us at the cocktail hour, so that the ceremony is not interrupted.",
        },
        cocktail: {
          time: "17.30 - 19.00",
          title: "Cocktail hour",
          text: "Music and time to mingle.",
          note: "One hour open bar with beer, wine, water, soft drinks.",
        },
        dinner: {
          time: "19.00 - 19.30",
          title: "Seating",
          text: "Kindly find your seat so the evening festivities can begin",
        },
        cake: {
          time: "19.30 - 22.00",
          title: "Dinner, speeches, fun & games",
          text: "We will open the dance floor just after dessert.",
        },
        celebration: {
          time: "22.00 - 00.00",
          title: "Party Rock - Dance the night away",
          text: "Dancing time.",
          note: "One and a half hour open bar with beer, wine, water, soft drinks.",
        },
      },
    },
    menuSection: {
      eyebrow: "Menu",
      title: "Please share your dinner preferences.",
      intro: "Please note, once you confirm your main course, it will not be possible to change what you selected.",
      starters: {
        title: "Starters",
        note: "All of these will be to share.",
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
        note: "Please choose your main course and let us know on whatsapp, before 1 June 2026.",
        items: {
          octopus: "Grilled salmon with salad",
          chicken: "Beef Fricandó with rice",
          duck: "Duck Confit with mashed potatoes",
          risotto: "Octopus and artichoke paella",
        },
      },
      dessert: {
        title: "Dessert",
        items: {
          cupcakes: "Vanilla wedding cupcakes",
        },
      },
      drinks: {
        title: "Drinks",
        text: "Two drinks are included with your dinner. You can choose between beer, wine, water and soft drinks.",
      },
      cta: "Choose my dinner",
    },
    giftsSection: {
      eyebrow: "Gifts",
      title: "Your presence is already the greatest gift.",
      intro: "Being with us on this day is what matters most to us",
      body: "If you insist on spoiling us even more, a cash contribution towards our honeymoon fund would help us to have even more fun. There will be a card box at the wedding for any envelopes",
    },
    faqSection: {
      placeholderTitle: "FAQ",
      eyebrow: "FAQ",
      title: "Do you have extra questions?",
      items: {
        plusOne: {
          question: "Can I bring a +1?",
          answer:
            "Sadly, due to limited space, we are only able to accommodate the guests included in the invitation.",
        },
        pet: {
          question: "Can I bring a pet?",
          answer: "Unfortunately, pets are not allowed at the venue.",
        },
        parking: {
          question: "Is there parking nearby?",
          answer:
            "There is parking nearby, but as the venue is located in the city centre, we recommend using public transport to avoid any inconvenience.",
        },
        endTime: {
          question: "What time does the celebration end?",
          answer:
            "You can find all the details in the Schedule section. The final part of the evening will be the dance floor, starting at 22:00.",
        },
        late: {
          question: "What happens if I am late?",
          answer:
            "If you arrive after 16:30, when the ceremony begins, you will need to wait until it finishes, around 17:30, before joining us for the cocktail hour. If you arrive later during the celebration, you can join us at the appropriate moment.",
        },
        extraDrinks: {
          question:
            "Can I order drinks other than those included, such as beer, wine, water and soft drinks?",
          answer:
            "Yes. We have arranged open bar moments with selected drinks. If you would like anything outside of what is included, you will be able to purchase it directly at the venue.",
        },
        accommodation: {
          question: "Is there accommodation nearby?",
          answer:
            "Yes. The celebration will take place at a hotel-restaurant, so there may be rooms available at the venue. Since it is located in the city centre, there are also many accommodation options nearby.",
        },
        allergies: {
          question: "What if I have any allergies or dietary requirements?",
          answer:
            "Please let us know when you fill in your menu preferences, and we will do our best to arrange suitable options.",
        },
        cannotAttend: {
          question: "What if I can no longer attend?",
          answer: "Please let us know as soon as possible. Thank you for understanding.",
        },
      },
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
      title: "Gracias por formar parte de nuestro gran día.",
      body: "Queremos compartir este día tan especial con las personas que queremos, y tú eres una de ellas.",
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
      title: "Les rogamos que no tomen fotos ni vídeos durante la ceremonia.",
      body: "Gracias por estar presente con nosotros.",
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
      },
    },
    dressCodeSection: {
      eyebrow: "Código de vestimenta",
      title: "Formal / Semiformal",
      intro: "Elegante, cuidado y cómodo para bailar.",
      detailsEyebrow: "Más detalles",
      minimalTitle: "Recatado, minimalista, atemporal y suavemente entallado",
      minimalBody: "Los tonos neutros, negro, verde oscuro, azul marino y colores apagados encajarán perfectamente.",
      avoidTitle: "Qué evitar",
      avoidBodyHtml:
        'Pedimos amablemente a los invitados que eviten <strong class="text-emphasis">amarillo</strong>, <strong class="text-emphasis">naranja</strong>, <strong class="text-emphasis">rojo</strong> y <strong class="text-emphasis">estampados</strong> para que la paleta general se mantenga tranquila y armoniosa en las fotos.',
    },
    scheduleSection: {
      eyebrow: "Programa",
      title: "El horario del día",
      intro: "Hemos planeado el día con tiempo suficiente para disfrutar, saludar y compartir el ambiente.",
      items: {
        arrival: {
          time: "16.00 - 16.30",
          title: "Llegada de los invitados y copa de bienvenida",
          text: "Les rogamos a nuestros invitados que lleguen puntualmente, se acomoden en sus asientos, disfruten de una bebida de bienvenida y se tomen un momento para charlar.",
        },
        ceremony: {
          time: "16.30 - 17.30",
          title: "Ceremonia",
          text: "La ceremonia comenzará poco después de que los invitados tomen asiento.",
          note: "Por favor, ten en cuenta que no se permiten fotos ni vídeos. Si llegas tarde, tendrás que esperar hasta que termine la ceremonia y unirte a nosotros durante el cóctel, para no interrumpirla.",
        },
        cocktail: {
          time: "17.30 - 19.00",
          title: "Cóctel",
          text: "Música y tiempo para conversar.",
          note: "Una hora de barra libre con cerveza, vino, agua y refrescos.",
        },
        dinner: {
          time: "19.00 - 19.30",
          title: "Tomamos asiento",
          text: "Pasa a tomar asiento.",
        },
        cake: {
          time: "19.30 - 22.00",
          title: "Cena, discursos, diversión y juegos",
          text: "Abriremos la pista de baile justo después del postre.",
        },
        celebration: {
          time: "22.00 - 00.00",
          title: "Party Rock - A bailar toda la noche",
          text: "Hora de bailar.",
          note: "Una hora y media de barra libre con cerveza, vino, agua y refrescos.",
        },
      },
    },
    menuSection: {
      eyebrow: "Menú",
      title: "Por favor, comparte tus preferencias para la cena.",
      intro: "No será posible cambiar lo que elijas, así que, por favor, asegúrate de tu elección.",
      starters: {
        title: "Entrantes",
        note: "Todos se servirán para compartir.",
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
        note: "Por favor, elige tu plato principal y háznoslo saber por WhatsApp antes del 1 de junio de 2026.",
        items: {
          octopus: "Salmón a la plancha con ensalada",
          chicken: "Fricandó de ternera con arroz",
          duck: "Confit de pato con puré de patatas",
          risotto: "Paella de pulpo y alcachofas",
        },
      },
      dessert: {
        title: "Postre",
        items: {
          cupcakes: "Cupcakes de vainilla de boda",
        },
      },
      drinks: {
        title: "Bebidas",
        text: "La cena incluye dos bebidas. Puedes elegir entre cerveza, vino, agua y refrescos.",
      },
      cta: "Escoger mi cena",
    },
    giftsSection: {
      eyebrow: "Regalos",
      title: "Vuestra presencia ya es el mejor regalo.",
      intro: "Lo que más nos importa es compartir este día con vosotros.",
      body: "Si aun así queréis tener un detalle con nosotros, una aportación en efectivo para nuestra luna de miel nos ayudará a disfrutarla todavía más. Habrá una caja para tarjetas y sobres el día de la boda.",
    },
    faqSection: {
      placeholderTitle: "Preguntas frecuentes",
      eyebrow: "FAQ",
      title: "¿Tienes alguna pregunta más?",
      items: {
        plusOne: {
          question: "¿Puedo llevar acompañante?",
          answer:
            "Lamentablemente, por cuestiones de espacio, solo podemos recibir a las personas incluidas en la invitación.",
        },
        pet: {
          question: "¿Puedo llevar mascota?",
          answer: "Lamentablemente, no se permiten mascotas en el espacio del evento.",
        },
        parking: {
          question: "¿Hay aparcamiento cerca?",
          answer:
            "Sí, hay aparcamiento cerca. Sin embargo, al estar en el centro de la ciudad, recomendamos usar transporte público para evitar cualquier contratiempo.",
        },
        endTime: {
          question: "¿A qué hora termina la celebración?",
          answer:
            "Puedes encontrar todos los detalles en la sección de Programa. La última parte de la noche será el baile, que comenzará a las 22:00.",
        },
        late: {
          question: "¿Qué pasa si llego tarde?",
          answer:
            "Si llegas después de las 16:30, cuando comienza la ceremonia, tendrás que esperar hasta que termine, aproximadamente a las 17:30, para unirte al cóctel. Si llegas más tarde durante la celebración, podrás incorporarte en el momento adecuado.",
        },
        extraDrinks: {
          question: "¿Puedo pedir bebidas distintas a las incluidas, como cerveza, vino, agua y refrescos?",
          answer:
            "Sí. Hemos organizado momentos de barra libre con bebidas seleccionadas. Si deseas tomar algo fuera de lo incluido, podrás comprarlo directamente en el lugar.",
        },
        accommodation: {
          question: "¿Hay alojamiento cerca?",
          answer:
            "Sí. La celebración tendrá lugar en un hotel-restaurante, por lo que es posible que haya habitaciones disponibles en el mismo lugar. Además, al estar en el centro de la ciudad, hay muchas opciones de alojamiento cerca.",
        },
        allergies: {
          question: "¿Qué pasa si tengo alergias o requisitos alimentarios?",
          answer:
            "Por favor, indícalo cuando rellenes tus preferencias de menú y haremos todo lo posible por encontrar una opción adecuada.",
        },
        cannotAttend: {
          question: "¿Qué pasa si finalmente no puedo asistir?",
          answer: "Por favor, avísanos lo antes posible. Gracias por tu comprensión.",
        },
      },
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
const accordionAnimationState = new WeakMap();

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
  window.requestAnimationFrame(() => {
    updateMobileMenuOffset();
    syncAccordionPanels();
  });
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

function getAccordionItems(accordion) {
  return Array.from(accordion.querySelectorAll("[data-accordion-button]"))
    .map((button) => {
      const panelId = button.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;

      return panel ? { button, panel } : null;
    })
    .filter(Boolean);
}

function getAccordionAnimationState(panel) {
  if (!accordionAnimationState.has(panel)) {
    accordionAnimationState.set(panel, {
      fallbackTimeoutId: null,
      rafId: null,
      transitionEndHandler: null,
    });
  }

  return accordionAnimationState.get(panel);
}

function clearAccordionAnimationState(panel) {
  const state = getAccordionAnimationState(panel);

  if (state.rafId) {
    window.cancelAnimationFrame(state.rafId);
  }

  if (state.fallbackTimeoutId) {
    window.clearTimeout(state.fallbackTimeoutId);
  }

  if (state.transitionEndHandler) {
    panel.removeEventListener("transitionend", state.transitionEndHandler);
  }

  state.rafId = null;
  state.fallbackTimeoutId = null;
  state.transitionEndHandler = null;
}

function stopAccordionAnimation(panel) {
  clearAccordionAnimationState(panel);

  if (panel.hidden) {
    return;
  }

  panel.style.height = `${panel.getBoundingClientRect().height}px`;
  panel.offsetHeight;
}

function finalizeAccordionPanel(button, panel, isOpen) {
  clearAccordionAnimationState(panel);
  button.setAttribute("aria-expanded", String(isOpen));
  panel.classList.remove("is-opening", "is-closing");
  panel.classList.toggle("is-open", isOpen);

  if (isOpen) {
    panel.hidden = false;
    panel.style.height = "auto";
    return;
  }

  panel.hidden = true;
  panel.style.height = "0px";
}

function openAccordionPanel(button, panel, options = {}) {
  const { immediate = false } = options;

  stopAccordionAnimation(panel);
  button.setAttribute("aria-expanded", "true");
  panel.hidden = false;
  panel.classList.remove("is-closing", "is-open");
  panel.classList.add("is-opening");

  if (immediate || prefersReducedMotion) {
    finalizeAccordionPanel(button, panel, true);
    return;
  }

  panel.style.height = "0px";
  panel.offsetHeight;

  const targetHeight = panel.scrollHeight;
  const state = getAccordionAnimationState(panel);
  const handleTransitionEnd = (event) => {
    if (event.target !== panel || event.propertyName !== "height") {
      return;
    }

    finalizeAccordionPanel(button, panel, true);
  };

  state.transitionEndHandler = handleTransitionEnd;
  panel.addEventListener("transitionend", handleTransitionEnd);
  state.fallbackTimeoutId = window.setTimeout(
    () => handleTransitionEnd({ propertyName: "height", target: panel }),
    560
  );
  state.rafId = window.requestAnimationFrame(() => {
    panel.style.height = `${targetHeight}px`;
    state.rafId = null;
  });
}

function closeAccordionPanel(button, panel, options = {}) {
  const { immediate = false } = options;

  stopAccordionAnimation(panel);
  button.setAttribute("aria-expanded", "false");

  if (immediate || prefersReducedMotion) {
    finalizeAccordionPanel(button, panel, false);
    return;
  }

  panel.hidden = false;
  panel.classList.remove("is-opening", "is-open");
  panel.classList.add("is-closing");
  panel.style.height = `${panel.getBoundingClientRect().height || panel.scrollHeight}px`;
  panel.offsetHeight;

  const state = getAccordionAnimationState(panel);
  const handleTransitionEnd = (event) => {
    if (event.target !== panel || event.propertyName !== "height") {
      return;
    }

    finalizeAccordionPanel(button, panel, false);
  };

  state.transitionEndHandler = handleTransitionEnd;
  panel.addEventListener("transitionend", handleTransitionEnd);
  state.fallbackTimeoutId = window.setTimeout(
    () => handleTransitionEnd({ propertyName: "height", target: panel }),
    560
  );
  state.rafId = window.requestAnimationFrame(() => {
    panel.style.height = "0px";
    state.rafId = null;
  });
}

function syncAccordionPanels() {
  document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    const items = getAccordionItems(accordion);

    if (!items.length) {
      return;
    }

    let hasOpenItem = false;

    items.forEach((item) => {
      const shouldOpen = item.button.getAttribute("aria-expanded") === "true" && !hasOpenItem;

      if (shouldOpen) {
        hasOpenItem = true;
        openAccordionPanel(item.button, item.panel, { immediate: true });
        return;
      }

      closeAccordionPanel(item.button, item.panel, { immediate: true });
    });

    if (!hasOpenItem) {
      openAccordionPanel(items[0].button, items[0].panel, { immediate: true });
    }
  });
}

function initAccordions() {
  document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    const items = getAccordionItems(accordion);

    if (!items.length) {
      return;
    }

    items.forEach((item) => {
      item.button.addEventListener("click", () => {
        if (item.button.getAttribute("aria-expanded") === "true") {
          return;
        }

        items.forEach((otherItem) => {
          if (otherItem === item) {
            openAccordionPanel(otherItem.button, otherItem.panel);
            return;
          }

          closeAccordionPanel(otherItem.button, otherItem.panel);
        });
      });
    });
  });

  syncAccordionPanels();
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
  initAccordions();
  initRevealAnimations();
}

init();
