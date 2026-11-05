/**
 * ============================================================================
 * LOGIQUE INTERACTIVE PRINCIPALE — js/main.js
 * Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié
 * ============================================================================
 */

(function () {
  "use strict";

  const config = window.SITE_CONFIG;
  const translations = window.TRANSLATIONS;

  // État courant de l'application
  const state = {
    lang: getInitialLanguage(),
    eventFilter: "all",
    lightboxIndex: 0,
    activeRepTab: 0,
    lastFocusedElement: null,
    customFormsUrl: sessionStorage.getItem("pole_preview_forms_url") || "",
    teamData: loadTeamState()
  };

  /* --------------------------------------------------------------------------
     UTILITAIRES D'ÉTAT & SÉCURITÉ D'AFFICHAGE
     -------------------------------------------------------------------------- */

  function getInitialLanguage() {
    try {
      const saved = localStorage.getItem("pole_lang");
      if (saved && translations[saved] && config.enabledLanguages.includes(saved)) {
        return saved;
      }
    } catch (_) {
      /* Accès stockage restreint : repli sur langue par défaut */
    }
    return config.defaultLanguage || "fr";
  }

  function loadTeamState() {
    try {
      const saved = sessionStorage.getItem("pole_team_preview_v2");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 2) {
          return parsed;
        }
      }
    } catch (_) {
      /* Ignorer erreur JSON */
    }
    return JSON.parse(JSON.stringify(config.team));
  }

  function t(key) {
    const dict = translations[state.lang] || translations.fr;
    return dict[key] !== undefined ? dict[key] : (translations.fr[key] || key);
  }

  function resolveLocalizedValue(val) {
    if (val && typeof val === "object") {
      return val[state.lang] || val.fr || "";
    }
    return val || "";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function isPlaceholderValue(val) {
    const resolved = resolveLocalizedValue(val);
    if (!resolved) return true;
    const trimmed = String(resolved).trim();
    return (
      trimmed === "" ||
      trimmed === "[À RENSEIGNER]" ||
      trimmed === "[TO BE COMPLETED]" ||
      trimmed === "[A PREENCHER]" ||
      trimmed === "[GOOGLE_FORMS_URL]"
    );
  }

  function formatDisplayValue(val) {
    const resolved = resolveLocalizedValue(val);
    return isPlaceholderValue(resolved) ? t("placeholderText") : resolved;
  }

  /* --------------------------------------------------------------------------
     NOTIFICATIONS VISUELLES (TOAST)
     -------------------------------------------------------------------------- */

  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById("app-toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 3400);
  }

  /* --------------------------------------------------------------------------
     MULTILINGUE INSTANTANÉ (FR / EN + ARCHITECTURE EXTENSIBLE)
     -------------------------------------------------------------------------- */

  function renderLanguageSwitcher() {
    const containers = document.querySelectorAll("[data-lang-switcher]");
    const flagMap = {
      fr: "🇫🇷 FR",
      en: "EN",
      pt: "🇵🇹 PT"
    };

    containers.forEach((container) => {
      container.innerHTML = config.enabledLanguages
        .map((code) => {
          const activeClass = code === state.lang ? "is-active" : "";
          const ariaPressed = code === state.lang ? "true" : "false";
          const label = flagMap[code] || code.toUpperCase();
          return `<button type="button" class="lang-btn ${activeClass}" data-lang="${code}" aria-pressed="${ariaPressed}">${label}</button>`;
        })
        .join("");
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextLang = btn.getAttribute("data-lang");
        if (nextLang && nextLang !== state.lang) {
          setLanguage(nextLang);
        }
      });
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    state.lang = lang;
    try {
      localStorage.setItem("pole_lang", lang);
    } catch (_) {
      /* Ignorer */
    }

    document.documentElement.lang = lang;
    document.title = t("metaTitle");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t("metaDescription"));
    }

    // Traduction des textes simples
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });

    // Traduction des titres avec accent typographique contrôlé
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      el.innerHTML = t(key);
    });

    // Attributs d'accessibilité
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    renderLanguageSwitcher();
    renderEventsSection();
    renderTeamSection();
    renderGallerySection();
    renderContactChannels();
  }

  /* --------------------------------------------------------------------------
     IMAGE HERO & REPLI HORS-LIGNE
     -------------------------------------------------------------------------- */

  function initHeroMedia() {
    const heroImg = document.getElementById("hero-main-photo");
    if (!heroImg) return;
    heroImg.addEventListener("error", function handleHeroError() {
      if (heroImg.getAttribute("src") !== config.heroMedia.fallback) {
        heroImg.setAttribute("src", config.heroMedia.fallback);
      }
    });
    heroImg.setAttribute("src", config.heroMedia.src);
  }

  /* --------------------------------------------------------------------------
     SECTION 6 : ÉVÉNEMENTS & ACTIVITÉS
     -------------------------------------------------------------------------- */

  function renderEventsSection() {
    const container = document.getElementById("events-container");
    const filterWrap = document.getElementById("events-filter-wrap");
    if (!container) return;

    const allEvents = Array.isArray(config.events) ? config.events : [];

    // Aucun événement renseigné : affichage d'un message chaleureux sans inventer de dates
    if (allEvents.length === 0) {
      if (filterWrap) filterWrap.style.display = "none";

      container.innerHTML = `
        <div class="events-empty-card">
          <div>
            <div class="events-empty-badge">
              <span class="pulse-dot" aria-hidden="true"></span>
              <span>${escapeHtml(t("emptyBadge"))}</span>
            </div>
            <h3 class="events-empty-title">${escapeHtml(t("emptyTitle"))}</h3>
            <p class="events-empty-text">${escapeHtml(t("emptyText"))}</p>
            <div class="events-empty-actions">
              <button type="button" class="btn btn--primary" data-form-trigger="needs">
                <span>${escapeHtml(t("emptyCtaSuggest"))}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <a href="#contact" class="btn btn--outline">
                <span>${escapeHtml(t("emptyCtaFollow"))}</span>
              </a>
            </div>
          </div>
          <div class="events-preview-list" aria-label="Formats d'activités prévus">
            <div class="events-preview-item">
              <span class="icon-box" aria-hidden="true">✦</span>
              <span>${escapeHtml(t("emptyPreview1"))}</span>
            </div>
            <div class="events-preview-item">
              <span class="icon-box" aria-hidden="true">⛰</span>
              <span>${escapeHtml(t("emptyPreview2"))}</span>
            </div>
            <div class="events-preview-item">
              <span class="icon-box" aria-hidden="true">🤝</span>
              <span>${escapeHtml(t("emptyPreview3"))}</span>
            </div>
          </div>
        </div>
      `;

      bindFormTriggers(container);
      return;
    }

    // Lorsque des événements réels sont renseignés dans js/content.js
    if (filterWrap) filterWrap.style.display = "inline-flex";

    const filtered = allEvents.filter((evt) => {
      if (state.eventFilter === "all") return true;
      return evt.status === state.eventFilter;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="events-empty-card" style="grid-template-columns: 1fr; text-align: center;">
          <p class="events-empty-text" style="margin-inline: auto; margin-bottom: 0;">
            ${escapeHtml(t("emptyFilterNone"))}
          </p>
        </div>
      `;
      return;
    }

    const cardsHtml = filtered
      .map((evt) => {
        const isUpcoming = evt.status !== "past";
        const statusLabel = isUpcoming ? t("statusUpcoming") : t("statusPast");
        const statusClass = isUpcoming ? "event-status--upcoming" : "event-status--past";
        const title = typeof evt.title === "object" ? (evt.title[state.lang] || evt.title.fr) : evt.title;
        const desc = typeof evt.description === "object" ? (evt.description[state.lang] || evt.description.fr) : evt.description;
        const imgSrc = evt.image || "assets/images/gallery-1.svg";

        const metaParts = [];
        if (evt.date && !isPlaceholderValue(evt.date)) {
          metaParts.push(`<span class="event-meta-item">📅 ${escapeHtml(evt.date)}</span>`);
        }
        if (evt.location && !isPlaceholderValue(evt.location)) {
          metaParts.push(`<span class="event-meta-item">📍 ${escapeHtml(evt.location)}</span>`);
        }

        return `
          <article class="event-card">
            <div class="event-media">
              <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(title)}" loading="lazy">
              <span class="event-status ${statusClass}">${escapeHtml(statusLabel)}</span>
            </div>
            <div class="event-body">
              <h3 class="event-title">${escapeHtml(title)}</h3>
              <p class="event-desc">${escapeHtml(desc)}</p>
              ${metaParts.length ? `<div class="event-meta">${metaParts.join("")}</div>` : ""}
            </div>
          </article>
        `;
      })
      .join("");

    container.innerHTML = `<div class="events-grid">${cardsHtml}</div>`;
  }

  function initEventFilters() {
    document.querySelectorAll("[data-event-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.eventFilter = btn.getAttribute("data-event-filter") || "all";
        document.querySelectorAll("[data-event-filter]").forEach((b) => {
          b.classList.toggle("is-active", b === btn);
        });
        renderEventsSection();
      });
    });
  }

  /* --------------------------------------------------------------------------
     SECTION 7 : NOTRE ÉQUIPE & INTERFACE DE PERSONNALISATION
     -------------------------------------------------------------------------- */

  function renderRepContact(contactVal) {
    if (isPlaceholderValue(contactVal)) {
      return `<span class="rep-placeholder-pill">${escapeHtml(t("placeholderText"))}</span>`;
    }

    const trimmed = String(contactVal).trim();
    if (trimmed.includes("@") && !trimmed.startsWith("http") && !trimmed.startsWith("@")) {
      return `<a href="mailto:${escapeHtml(trimmed)}" class="rep-contact-link">✉ ${escapeHtml(trimmed)}</a>`;
    }

    if (trimmed.startsWith("@")) {
      const handle = trimmed.slice(1);
      return `<a href="https://instagram.com/${encodeURIComponent(handle)}" target="_blank" rel="noopener noreferrer" class="rep-contact-link">↗ ${escapeHtml(trimmed)}</a>`;
    }

    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      return `<a href="${escapeHtml(trimmed)}" target="_blank" rel="noopener noreferrer" class="rep-contact-link">↗ ${escapeHtml(trimmed)}</a>`;
    }

    return `<span class="rep-contact-link">${escapeHtml(trimmed)}</span>`;
  }

  function renderTeamSection() {
    const grid = document.getElementById("team-grid");
    if (!grid) return;

    grid.innerHTML = state.teamData
      .map((member, idx) => {
        const repLabel = idx === 0 ? t("teamRepLabel1") : t("teamRepLabel2");
        const displayName = formatDisplayValue(member.name);
        const displayBio = formatDisplayValue(member.bio);
        const bioParagraphsHtml = String(displayBio)
          .split(/\n\s*\n/)
          .filter(Boolean)
          .map((para) => `<p>${escapeHtml(para.trim())}</p>`)
          .join("");
        const roleText = member.customRole ? member.customRole : t(member.roleKey || "teamRoleDefault");
        const photoSrc = member.photo || `assets/images/portrait-placeholder-${idx + 1}.svg`;
        const posStyle = member.photoPosition ? ` style="object-position: ${escapeHtml(member.photoPosition)};"` : "";
        const showSlotBadge = Boolean(member.isPlaceholderPhoto);

        return `
          <article class="rep-card">
            <div class="rep-portrait-wrap">
              <img
                src="${escapeHtml(photoSrc)}"
                alt="${escapeHtml(repLabel)} — ${escapeHtml(displayName)}"
                class="rep-portrait"${posStyle}
                loading="lazy"
              >
              ${showSlotBadge ? `<span class="rep-slot-badge">${escapeHtml(t("teamSlotBadge"))}</span>` : ""}
            </div>
            <div class="rep-info">
              <div>
                <span class="rep-index">${escapeHtml(repLabel)}</span>
                <h3 class="rep-name">${escapeHtml(displayName)}</h3>
                <span class="rep-role">${escapeHtml(roleText)}</span>
                <span class="rep-bio-label">${escapeHtml(t("teamBioLabel"))}</span>
                <div class="rep-bio">${bioParagraphsHtml}</div>
              </div>
              <div class="rep-footer">
                <span class="rep-contact-label">${escapeHtml(t("teamContactLabel"))}</span>
                ${renderRepContact(member.contact)}
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function initTeamEditorModal() {
    const openBtn = document.getElementById("open-team-editor");
    const modal = document.getElementById("team-modal");
    const tabBtns = document.querySelectorAll("[data-rep-tab]");
    const nameInput = document.getElementById("rep-name-input");
    const bioInput = document.getElementById("rep-bio-input");
    const contactInput = document.getElementById("rep-contact-input");
    const photoFileInput = document.getElementById("rep-photo-file");
    const applyBtn = document.getElementById("rep-apply-btn");
    const copyBtn = document.getElementById("rep-copy-config-btn");
    const resetBtn = document.getElementById("rep-reset-btn");

    if (!openBtn || !modal) return;

    function populateEditorFields(index) {
      state.activeRepTab = index;
      tabBtns.forEach((b, i) => b.classList.toggle("is-active", i === index));
      const rep = state.teamData[index];
      const currentBio = resolveLocalizedValue(rep.bio);
      nameInput.value = isPlaceholderValue(rep.name) ? "" : rep.name;
      bioInput.value = isPlaceholderValue(currentBio) ? "" : currentBio;
      contactInput.value = isPlaceholderValue(rep.contact) ? "" : rep.contact;
      if (photoFileInput) photoFileInput.value = "";
    }

    function saveCurrentTabFields() {
      const rep = state.teamData[state.activeRepTab];
      rep.name = nameInput.value.trim() || "[À RENSEIGNER]";
      const nextBioText = bioInput.value.trim() || "[À RENSEIGNER]";
      if (rep.bio && typeof rep.bio === "object") {
        rep.bio[state.lang] = nextBioText;
      } else {
        rep.bio = nextBioText;
      }
      rep.contact = contactInput.value.trim() || "[À RENSEIGNER]";
    }

    openBtn.addEventListener("click", () => {
      populateEditorFields(0);
      openModal(modal, openBtn);
    });

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        saveCurrentTabFields();
        const nextIdx = Number(btn.getAttribute("data-rep-tab")) || 0;
        populateEditorFields(nextIdx);
      });
    });

    if (photoFileInput) {
      photoFileInput.addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (ev) {
          if (ev.target && typeof ev.target.result === "string") {
            state.teamData[state.activeRepTab].photo = ev.target.result;
            state.teamData[state.activeRepTab].isPlaceholderPhoto = false;
            state.teamData[state.activeRepTab].suggestedFileName = `assets/images/${file.name}`;
          }
        };
        reader.readAsDataURL(file);
      });
    }

    if (applyBtn) {
      applyBtn.addEventListener("click", () => {
        saveCurrentTabFields();
        try {
          sessionStorage.setItem("pole_team_preview_v2", JSON.stringify(state.teamData));
        } catch (_) {
          /* Ignorer quota si image lourde */
        }
        renderTeamSection();
        closeModal(modal);
        showToast(t("toastSavedTeam"));
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        saveCurrentTabFields();
        const exportTeam = state.teamData.map((m, idx) => ({
          id: m.id,
          photo: m.suggestedFileName || (m.photo.startsWith("data:") ? `assets/images/rep-${idx + 1}.jpg` : m.photo),
          photoPosition: m.photoPosition || "center 50%",
          isPlaceholderPhoto: Boolean(m.isPlaceholderPhoto),
          name: m.name,
          roleKey: "teamRoleDefault",
          bio: m.bio,
          contact: m.contact
        }));
        const snippet = `team: ${JSON.stringify(exportTeam, null, 2)},`;
        copyTextToClipboard(snippet, t("toastCopiedConfig"));
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.teamData = JSON.parse(JSON.stringify(config.team));
        sessionStorage.removeItem("pole_team_preview_v2");
        populateEditorFields(state.activeRepTab);
        renderTeamSection();
      });
    }
  }

  /* --------------------------------------------------------------------------
     SECTION 8 : GOOGLE FORMS (PARTAGER MES BESOINS / REJOINDRE LE PÔLE)
     -------------------------------------------------------------------------- */

  function getActiveGoogleFormUrl() {
    if (state.customFormsUrl && state.customFormsUrl.startsWith("https://")) {
      return state.customFormsUrl;
    }
    if (!isPlaceholderValue(config.googleFormsUrl) && config.googleFormsUrl.startsWith("http")) {
      return config.googleFormsUrl;
    }
    return "";
  }

  function handleFormAction(intent, triggerEl) {
    const activeUrl = getActiveGoogleFormUrl();
    if (activeUrl) {
      const separator = activeUrl.includes("?") ? "&" : "?";
      const targetUrl = `${activeUrl}${separator}source=${encodeURIComponent(intent)}`;
      window.open(targetUrl, "_blank", "noopener,noreferrer");
      return;
    }

    // Si [GOOGLE_FORMS_URL] n'est pas encore renseigné, ouvrir la modale interactive dédiée
    const formModal = document.getElementById("forms-modal");
    const titleEl = document.getElementById("forms-modal-title");
    const inputEl = document.getElementById("forms-url-input");
    if (!formModal) return;

    if (titleEl) {
      titleEl.textContent = intent === "join" ? t("formModalTitleJoin") : t("formModalTitleNeeds");
    }
    if (inputEl) {
      inputEl.value = state.customFormsUrl || "";
    }
    formModal.setAttribute("data-current-intent", intent);
    openModal(formModal, triggerEl);
  }

  function bindFormTriggers(scope = document) {
    scope.querySelectorAll("[data-form-trigger]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const intent = btn.getAttribute("data-form-trigger") || "needs";
        handleFormAction(intent, btn);
      });
    });
  }

  function initFormsModal() {
    const formModal = document.getElementById("forms-modal");
    const saveOpenBtn = document.getElementById("forms-save-open-btn");
    const inputEl = document.getElementById("forms-url-input");

    if (!formModal || !saveOpenBtn || !inputEl) return;

    saveOpenBtn.addEventListener("click", () => {
      const val = inputEl.value.trim();
      if (!val.startsWith("https://")) {
        showToast(t("toastInvalidUrl"));
        inputEl.focus();
        return;
      }
      state.customFormsUrl = val;
      try {
        sessionStorage.setItem("pole_preview_forms_url", val);
      } catch (_) {
        /* Ignorer */
      }
      const intent = formModal.getAttribute("data-current-intent") || "needs";
      closeModal(formModal);
      window.open(val, "_blank", "noopener,noreferrer");
      void intent;
    });
  }

  /* --------------------------------------------------------------------------
     SECTION 9 : GALERIE MASONRY & LIGHTBOX PLEIN ÉCRAN
     -------------------------------------------------------------------------- */

  function renderGallerySection() {
    const grid = document.getElementById("gallery-masonry");
    if (!grid) return;

    grid.innerHTML = config.gallery
      .map((item, index) => {
        const title = item.title[state.lang] || item.title.fr;
        const subtitle = item.subtitle[state.lang] || item.subtitle.fr;

        return `
          <button
            type="button"
            class="gallery-item"
            data-gallery-index="${index}"
            aria-label="${escapeHtml(title)}"
          >
            ${item.isTemporary ? `<span class="gallery-temp-badge">${escapeHtml(t("galTempBadge"))}</span>` : ""}
            <img src="${escapeHtml(item.src)}" alt="${escapeHtml(title)}" loading="lazy">
            <span class="gallery-overlay">
              <span class="gallery-caption-title">${escapeHtml(title)}</span>
              <span class="gallery-caption-sub">${escapeHtml(subtitle)}</span>
            </span>
          </button>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-gallery-index]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-gallery-index")) || 0;
        openLightbox(idx, btn);
      });
    });
  }

  function updateLightboxView() {
    const total = config.gallery.length;
    if (!total) return;
    const item = config.gallery[state.lightboxIndex];
    const imgEl = document.getElementById("lightbox-image");
    const captionEl = document.getElementById("lightbox-caption");
    const counterEl = document.getElementById("lightbox-counter");

    const title = item.title[state.lang] || item.title.fr;
    const subtitle = item.subtitle[state.lang] || item.subtitle.fr;

    if (imgEl) {
      imgEl.setAttribute("src", item.src);
      imgEl.setAttribute("alt", title);
    }
    if (captionEl) {
      captionEl.textContent = `${title} — ${subtitle}`;
    }
    if (counterEl) {
      counterEl.textContent = `${state.lightboxIndex + 1} / ${total}`;
    }
  }

  function openLightbox(index, triggerEl) {
    const modal = document.getElementById("lightbox-modal");
    if (!modal) return;
    state.lightboxIndex = index;
    updateLightboxView();
    openModal(modal, triggerEl);
  }

  function stepLightbox(delta) {
    const total = config.gallery.length;
    if (!total) return;
    state.lightboxIndex = (state.lightboxIndex + delta + total) % total;
    updateLightboxView();
  }

  function initLightboxControls() {
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");
    if (prevBtn) prevBtn.addEventListener("click", () => stepLightbox(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => stepLightbox(1));
  }

  /* --------------------------------------------------------------------------
     SECTION 10 : CONTACT & RÉSEAUX SOCIAUX
     -------------------------------------------------------------------------- */

  function renderContactChannels() {
    const emailValEl = document.getElementById("contact-email-value");
    const instaValEl = document.getElementById("contact-insta-value");
    const otherValEl = document.getElementById("contact-other-value");
    const campusValEl = document.getElementById("contact-campus-value");

    if (emailValEl) {
      if (isPlaceholderValue(config.contact.email)) {
        emailValEl.textContent = t("placeholderText");
      } else {
        emailValEl.innerHTML = `<a href="mailto:${escapeHtml(config.contact.email)}">${escapeHtml(config.contact.email)}</a>`;
      }
    }

    if (instaValEl) {
      if (isPlaceholderValue(config.contact.instagram)) {
        instaValEl.textContent = t("placeholderText");
      } else {
        const raw = config.contact.instagram.trim();
        const url = raw.startsWith("http")
          ? raw
          : `https://instagram.com/${encodeURIComponent(raw.replace(/^@/, ""))}`;
        instaValEl.innerHTML = `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(raw)}</a>`;
      }
    }

    if (otherValEl) {
      if (isPlaceholderValue(config.contact.otherNetwork)) {
        otherValEl.textContent = t("placeholderText");
      } else {
        const raw = config.contact.otherNetwork.trim();
        otherValEl.innerHTML = raw.startsWith("http")
          ? `<a href="${escapeHtml(raw)}" target="_blank" rel="noopener noreferrer">${escapeHtml(raw)}</a>`
          : escapeHtml(raw);
      }
    }

    if (campusValEl) {
      campusValEl.textContent = config.contact.location;
    }
  }

  function initContactAction() {
    const contactBtn = document.getElementById("main-contact-btn");
    const contactModal = document.getElementById("contact-modal");
    if (!contactBtn) return;

    contactBtn.addEventListener("click", () => {
      if (!isPlaceholderValue(config.contact.email)) {
        copyTextToClipboard(config.contact.email, t("contactCopySuccess"));
        window.location.href = `mailto:${config.contact.email}`;
      } else if (contactModal) {
        openModal(contactModal, contactBtn);
      }
    });
  }

  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      });
    } else {
      const temp = document.createElement("textarea");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
      showToast(successMsg);
    }
  }

  /* --------------------------------------------------------------------------
     GESTION GÉNÉRIQUE DES MODALES & ACCESSIBILITÉ CLAVIER
     -------------------------------------------------------------------------- */

  function openModal(modal, triggerEl) {
    state.lastFocusedElement = triggerEl || document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const closeBtn = modal.querySelector("[data-modal-close]");
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
      state.lastFocusedElement.focus();
    }
  }

  function initModals() {
    document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          closeModal(backdrop);
        }
      });

      backdrop.querySelectorAll("[data-modal-close]").forEach((btn) => {
        btn.addEventListener("click", () => closeModal(backdrop));
      });
    });

    document.addEventListener("keydown", (e) => {
      const openBackdrop = document.querySelector(".modal-backdrop.is-open");
      if (!openBackdrop) return;

      if (e.key === "Escape") {
        closeModal(openBackdrop);
      } else if (openBackdrop.id === "lightbox-modal") {
        if (e.key === "ArrowLeft") stepLightbox(-1);
        if (e.key === "ArrowRight") stepLightbox(1);
      }
    });
  }

  /* --------------------------------------------------------------------------
     NAVIGATION MOBILE, BARRE DE PROGRESSION & SCROLL REVEAL
     -------------------------------------------------------------------------- */

  function initNavigationAndScroll() {
    const header = document.getElementById("site-header");
    const progressBar = document.getElementById("scroll-progress");
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    const navLinks = document.querySelectorAll(".nav-link");

    function closeMobileMenu() {
      if (!menuToggle || !mainNav) return;
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    }

    if (menuToggle && mainNav) {
      menuToggle.addEventListener("click", () => {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!expanded));
        mainNav.classList.toggle("is-open", !expanded);
      });

      navLinks.forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mainNav.classList.contains("is-open")) {
          closeMobileMenu();
          menuToggle.focus();
        }
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 860) closeMobileMenu();
      });
    }

    // Progression du défilement & effet glassmorphism du header
    let ticking = false;
    function updateOnScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressBar) {
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
      if (header) {
        header.classList.toggle("is-scrolled", scrollTop > 20);
      }
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateOnScroll);
          ticking = true;
        }
      },
      { passive: true }
    );
    updateOnScroll();

    // Suivi de la section active dans la barre de navigation
    const sections = document.querySelectorAll("section[id]");
    if ("IntersectionObserver" in window && sections.length) {
      const spyObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              const mappedId = id === "galerie" || id === "contact" ? "nous-rejoindre" : id;
              navLinks.forEach((link) => {
                const href = link.getAttribute("href");
                link.classList.toggle("is-active", href === `#${mappedId}`);
              });
            }
          });
        },
        { rootMargin: "-35% 0px -55% 0px" }
      );
      sections.forEach((sec) => spyObserver.observe(sec));
    }

    // Animations d'apparition au défilement
    const revealEls = document.querySelectorAll("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-revealed"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
    }
  }

  /* --------------------------------------------------------------------------
     INITIALISATION AU CHARGEMENT DU DOM
     -------------------------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    initHeroMedia();
    initEventFilters();
    bindFormTriggers(document);
    initFormsModal();
    initTeamEditorModal();
    initLightboxControls();
    initContactAction();
    initModals();
    initNavigationAndScroll();

    // Applique la langue par défaut (FR) ou celle mémorisée et génère tous les blocs dynamiques
    setLanguage(state.lang);
  });
})();
