# Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié-des-Vosges

Site officiel bilingue (**Français / Anglais**) et responsive du **Pôle des Étudiants Internationaux** de l’**Association des Étudiants (AEPUD)** de l’IUT de Saint-Dié-des-Vosges.

---

## Architecture & Organisation

```text
poleetu inter/
├── index.html                  # Interface publique structurée (6 sections + section phare questionnaire + modale)
├── vercel.json                 # Configuration de déploiement statique Vercel & en-têtes de sécurité
├── css/
│   ├── variables.css           # Design tokens (Blanc éditorial & Violet profond AEPUD)
│   ├── styles.css              # Composants, typographies, cartes, section questionnaire & modale
│   └── responsive.css          # Adaptation fluide (Desktop, Tablette & Mobile)
├── js/
│   ├── content.js              # Données publiques centralisées & traductions FR / EN
│   └── main.js                 # Changement de langue instantané, modale « Rejoindre » & navigation
└── assets/
    ├── icons/
    │   └── logo-pole.svg       # Emblème vectoriel du Pôle
    └── images/
        ├── logo-aepud.png      # Emplacement dédié au logotype officiel de l'AEPUD (activé automatiquement dès présence du fichier)
        ├── ariel-hidinua.jpg   # Portrait officiel — Ariel Hidinua
        ├── credo-charles.jpg   # Portrait officiel — Credo Charles
        ├── hero-international-community.svg # Illustration éditoriale internationale (Accueil)
        └── survey-voice-illustration.svg    # Illustration participation étudiante (Questionnaire)
```

---

## Ordre des sections publiques

1. **Accueil (`#accueil`)** — Proposition de valeur, illustration éditoriale internationale et appels à l’action.
2. **Notre équipe (`#notre-equipe`)** — Présentation immédiate des deux représentants (*Ariel Hidinua* et *Credo Charles*) et de leurs contacts universitaires directs (`mailto:`).
3. **Présentation du pôle (`#le-pole`)** — Mission, public concerné et engagements.
4. **Nos initiatives (`#nos-initiatives`)** — Les 5 piliers d’action du pôle et l’agenda des prochaines activités.
5. **Ressources et accompagnement (`#ressources`)** — Portails officiels utiles (logement, santé/ANEF, études, vie à Saint-Dié) et relais d’entraide étudiante.
6. **Section phare Questionnaire (`#questionnaire`)** — Consultation officielle Google Forms (`https://forms.gle/CHkm3dPJak6t5zyA7`).
7. **Contact / Rejoindre le pôle (`#contact` & `#join-modal`)** — Instagram officiel `@AEPUD` (`https://www.instagram.com/AEPUD/`), campus et contacts directs des représentants.

---

## Sécurité & Séparation Public / Administration

Aucune fonctionnalité d’édition ou d’administration n’est exposée sur l’interface publique. Toute mise à jour de contenu s’effectue exclusivement par modification contrôlée du dépôt Git privé/autorisé (`main` → déploiement automatique Vercel).

## Développement local & Vérification

- Ouvrir `index.html` dans un navigateur moderne ou lancer `npx serve .` ;
- Vérifier la syntaxe JavaScript : `npm run build`.
