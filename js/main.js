/**
 * ============================================================================
 * LOGIQUE INTERACTIVE PUBLIQUE — js/main.js
 * Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié-des-Vosges
 * Interface strictement publique (Français / Anglais)
 * ============================================================================
 */

(function () {
  "use strict";

  const config = window.SITE_CONFIG;
  const translations = window.TRANSLATIONS;

  const state = {
    lang: getInitialLanguage(),
    lastFocusedElement: null
  };

  /* --------------------------------------------------------------------------
     UTILITAIRES DE LANGUE & D'ÉCHAPPEMENT HTML
     -------------------------------------------------------------------------- */

  function getInitialLanguage() {
    try {
      const saved = localStorage.getItem("pole_lang");
      if (saved && translations[saved] && config.enabledLanguages.includes(saved)) {
        return saved;
      }
    } catch (_) {
      /* Accès stockage restreint : repli sur le français */
    }
    return config.defaultLanguage || "fr";
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

  /* --------------------------------------------------------------------------
     INTÉGRATION DU LOGOTYPE OFFICIEL AEPUD (AVEC VÉRIFICATION PROPRE)
     -------------------------------------------------------------------------- */

  function initBrandLogos() {
    const logoEls = document.querySelectorAll("[data-aepud-logo]");
    const dividerEls = document.querySelectorAll("[data-aepud-divider]");
    if (!logoEls.length) return;

    const logoSrc = (config.branding && config.branding.aepudLogoPath) || "assets/images/logo-aepud.png";
    const probe = new Image();

    probe.onload = function () {
      logoEls.forEach((img) => {
        img.setAttribute("src", logoSrc);
        img.classList.remove("is-missing");
      });
      dividerEls.forEach((div) => div.classList.remove("is-missing"));
    };

    probe.onerror = function () {
      logoEls.forEach((img) => img.classList.add("is-missing"));
      dividerEls.forEach((div) => div.classList.add("is-missing"));
    };

    probe.src = logoSrc;
  }

  /* --------------------------------------------------------------------------
     SYSTÈME BILINGUE INSTANTANÉ (FR | EN)
     -------------------------------------------------------------------------- */

  function renderLanguageSwitcher() {
    const containers = document.querySelectorAll("[data-lang-switcher]");
    const labelMap = {
      fr: "🇫🇷 FR",
      en: "EN"
    };

    containers.forEach((container) => {
      container.innerHTML = config.enabledLanguages
        .map((code) => {
          const activeClass = code === state.lang ? "is-active" : "";
          const ariaPressed = code === state.lang ? "true" : "false";
          const label = labelMap[code] || code.toUpperCase();
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

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    renderLanguageSwitcher();
    renderTeamSection();
    renderEventsBanner();
    renderResourcesSection();
    renderContactReps();
    renderJoinModalReps();
  }

  /* --------------------------------------------------------------------------
     SECTION 2 : NOTRE ÉQUIPE (LES DEUX REPRÉSENTANTS & LEURS E-MAILS)
     -------------------------------------------------------------------------- */

  function renderTeamSection() {
    const grid = document.getElementById("team-grid");
    if (!grid || !Array.isArray(config.team)) return;

    grid.innerHTML = config.team
      .map((member, idx) => {
        const repLabel = idx === 0 ? t("teamRepLabel1") : t("teamRepLabel2");
        const roleText = t(member.roleKey || "teamRoleDefault");
        const bioText = resolveLocalizedValue(member.bio);
        const bioParagraphsHtml = String(bioText)
          .split(/\n\s*\n/)
          .filter(Boolean)
          .map((para) => `<p>${escapeHtml(para.trim())}</p>`)
          .join("");
        const posStyle = member.photoPosition ? ` style="object-position: ${escapeHtml(member.photoPosition)};"` : "";
        const email = String(member.email || "").trim();

        return `
          <article class="rep-card">
            <div class="rep-portrait-wrap">
              <img
                src="${escapeHtml(member.photo)}"
                alt="${escapeHtml(repLabel)} — ${escapeHtml(member.name)}"
                class="rep-portrait"${posStyle}
                loading="lazy"
              >
            </div>
            <div class="rep-info">
              <div>
                <span class="rep-index">${escapeHtml(repLabel)}</span>
                <h3 class="rep-name">${escapeHtml(member.name)}</h3>
                <span class="rep-role">${escapeHtml(roleText)}</span>
                <span class="rep-bio-label">${escapeHtml(t("teamBioLabel"))}</span>
                <div class="rep-bio">${bioParagraphsHtml}</div>
              </div>
              <div class="rep-footer">
                <span class="rep-contact-label">${escapeHtml(t("teamContactLabel"))}</span>
                <a href="mailto:${escapeHtml(email)}" class="rep-contact-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>${escapeHtml(email)}</span>
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  /* --------------------------------------------------------------------------
     SECTION 4 : AGENDA INTÉGRÉ AUX INITIATIVES
     -------------------------------------------------------------------------- */

  function renderEventsBanner() {
    const container = document.getElementById("events-container");
    if (!container) return;

    const allEvents = Array.isArray(config.events) ? config.events : [];

    if (allEvents.length === 0) {
      container.innerHTML = `
        <div class="activities-banner">
          <div class="activities-banner-copy">
            <div class="events-empty-badge">
              <span class="pulse-dot" aria-hidden="true"></span>
              <span>${escapeHtml(t("actSubBadge"))}</span>
            </div>
            <h3 class="activities-banner-title">${escapeHtml(t("actSubTitle"))}</h3>
            <p class="activities-banner-text">${escapeHtml(t("actSubText"))}</p>
          </div>
          <div class="activities-banner-actions">
            <button type="button" class="btn btn--primary" data-open-join-modal>
              <span>${escapeHtml(t("actSubBtnJoin"))}</span>
            </button>
            <a href="#questionnaire" class="btn btn--outline">
              <span>${escapeHtml(t("actSubBtnSurvey"))}</span>
            </a>
          </div>
        </div>
      `;
      bindJoinModalTriggers(container);
      return;
    }

    const cardsHtml = allEvents
      .map((evt) => {
        const isUpcoming = evt.status !== "past";
        const statusLabel = isUpcoming ? t("statusUpcoming") : t("statusPast");
        const statusClass = isUpcoming ? "event-status--upcoming" : "event-status--past";
        const title = resolveLocalizedValue(evt.title);
        const desc = resolveLocalizedValue(evt.description);
        const metaParts = [];
        if (evt.date) metaParts.push(`<span>📅 ${escapeHtml(evt.date)}</span>`);
        if (evt.location) metaParts.push(`<span>📍 ${escapeHtml(evt.location)}</span>`);

        return `
          <article class="event-card">
            ${
              evt.image
                ? `<div class="event-media">
                     <img src="${escapeHtml(evt.image)}" alt="${escapeHtml(title)}" loading="lazy">
                     <span class="event-status ${statusClass}">${escapeHtml(statusLabel)}</span>
                   </div>`
                : ""
            }
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

  /* --------------------------------------------------------------------------
     SECTION 5 : RESSOURCES ET ACCOMPAGNEMENT
     -------------------------------------------------------------------------- */

  function getResourceIconSvg(iconName) {
    switch (iconName) {
      case "home":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
      case "shield":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`;
      case "compass":
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;
      default:
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
    }
  }

  function renderResourcesSection() {
    const grid = document.getElementById("resources-grid");
    if (!grid || !Array.isArray(config.resources)) return;

    grid.innerHTML = config.resources
      .map((res) => {
        const tag = resolveLocalizedValue(res.tag);
        const title = resolveLocalizedValue(res.title);
        const desc = resolveLocalizedValue(res.description);
        const linksHtml = (res.links || [])
          .map((lnk) => {
            const label = resolveLocalizedValue(lnk.label);
            return `
              <a href="${escapeHtml(lnk.url)}" target="_blank" rel="noopener noreferrer" class="resource-link-pill">
                <span>${escapeHtml(label)}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            `;
          })
          .join("");

        return `
          <article class="resource-card">
            <div>
              <div class="resource-card-head">
                <div class="resource-icon">${getResourceIconSvg(res.icon)}</div>
                <span class="resource-tag">${escapeHtml(tag)}</span>
              </div>
              <h3 class="resource-title">${escapeHtml(title)}</h3>
              <p class="resource-desc">${escapeHtml(desc)}</p>
            </div>
            <div class="resource-links">${linksHtml}</div>
          </article>
        `;
      })
      .join("");
  }

  /* --------------------------------------------------------------------------
     CONTACTS DES REPRÉSENTANTS DANS #contact ET DANS LA MODALE #join-modal
     -------------------------------------------------------------------------- */

  function renderContactReps() {
    const list = document.getElementById("contact-reps-list");
    const campusEl = document.getElementById("contact-campus-value");
    if (campusEl && config.contact && config.contact.location) {
      campusEl.textContent = config.contact.location;
    }
    if (!list || !Array.isArray(config.team)) return;

    list.innerHTML = config.team
      .map(
        (member) => `
          <a href="mailto:${escapeHtml(member.email)}" class="contact-rep-item">
            <span class="contact-rep-name">${escapeHtml(member.name)}</span>
            <span class="contact-rep-email">✉ ${escapeHtml(member.email)}</span>
          </a>
        `
      )
      .join("");
  }

  function renderJoinModalReps() {
    const container = document.getElementById("join-modal-reps");
    if (!container || !Array.isArray(config.team)) return;

    const roleLabel = t("teamRoleDefault");
    container.innerHTML = config.team
      .map(
        (member) => `
          <a href="mailto:${escapeHtml(member.email)}" class="contact-rep-item">
            <span class="contact-rep-name">${escapeHtml(member.name)} — ${escapeHtml(roleLabel)}</span>
            <span class="contact-rep-email">✉ ${escapeHtml(member.email)}</span>
          </a>
        `
      )
      .join("");
  }

  /* --------------------------------------------------------------------------
     GESTION DE LA MODALE « REJOINDRE LE PÔLE » & ACCESSIBILITÉ CLAVIER
     -------------------------------------------------------------------------- */

  function openModal(modal, triggerEl) {
    if (!modal) return;
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

  function bindJoinModalTriggers(scope = document) {
    const joinModal = document.getElementById("join-modal");
    if (!joinModal) return;

    scope.querySelectorAll("[data-open-join-modal]").forEach((btn) => {
      btn.addEventListener("click", () => openModal(joinModal, btn));
    });
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
      if (e.key === "Escape") {
        const openBackdrop = document.querySelector(".modal-backdrop.is-open");
        if (openBackdrop) {
          closeModal(openBackdrop);
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     NAVIGATION MOBILE, BARRE DE PROGRESSION, SCROLL SPY & REVEAL
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
        if (window.innerWidth > 1120) closeMobileMenu();
      });
    }

    // Barre de progression de lecture & effet glassmorphism du header
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

    // Suivi de la section active sur les 6 entrées de navigation
    const sections = document.querySelectorAll("section[id]");
    if ("IntersectionObserver" in window && sections.length) {
      const spyObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              const mappedId = id === "questionnaire" ? "ressources" : id;
              navLinks.forEach((link) => {
                const href = link.getAttribute("href");
                link.classList.toggle("is-active", href === `#${mappedId}`);
              });
            }
          });
        },
        { rootMargin: "-32% 0px -55% 0px" }
      );
      sections.forEach((sec) => spyObserver.observe(sec));
    }

    // Animations fluides à l'apparition au défilement
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
        { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
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

    initBrandLogos();
    bindJoinModalTriggers(document);
    initModals();
    initNavigationAndScroll();
    setLanguage(state.lang);
  });
})();
