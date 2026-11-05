# Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié

Landing page moderne, bilingue (**Français / Anglais**, avec architecture multilingue prête incluant le Portugais) et responsive conçue pour le **Pôle des Étudiants Internationaux** de l’**Association des Étudiants (AEPUD)** de l’IUT de Saint-Dié-des-Vosges.

---

## Structure du projet

```text
poleetu inter/
├── index.html                  # Structure sémantique principale et modales interactives
├── css/
│   ├── variables.css           # Palette (Blanc & Violet AEPUD), typographies, espacements
│   ├── styles.css              # Design éditorial, composants, animations & lightbox
│   └── responsive.css          # Adaptation Tablette, Mobile & Smartphones
├── js/
│   ├── content.js              # FICHIER UNIQUE À ÉDITER (liens, équipe, événements, textes FR/EN/PT)
│   └── main.js                 # Changement de langue, galerie, filtres et interactions
└── assets/
    ├── icons/
    │   └── logo-pole.svg       # Emblème vectoriel du Pôle
    └── images/                 # Portraits remplaçables & visuels temporaires de la galerie
```

---

## Guide rapide de mise à jour (pour les responsables du Pôle)

Toutes les données modifiables sont centralisées dans **`js/content.js`** — vous n'avez pas besoin de modifier `index.html` ni le CSS.

### 1. Connecter votre Google Forms
Dans `js/content.js`, remplacez `[GOOGLE_FORMS_URL]` par l’adresse réelle de votre formulaire :
```js
googleFormsUrl: "https://forms.gle/VOTRE_LIEN_ICI",
```
Dès que ce lien est renseigné, les boutons **« PARTAGER MES BESOINS »** et **« REJOINDRE LE PÔLE »** l’ouvrent directement dans un nouvel onglet sécurisé (avec un paramètre `?source=needs` ou `?source=join`).

### 2. Ajouter les photos et informations des 2 représentants
Deux méthodes simples :
1. **Depuis le navigateur :** cliquez sur **« Personnaliser les profils »** dans la section *Notre Équipe* pour sélectionner vos portraits, saisir vos textes, vérifier le rendu en direct, puis cliquez sur **« Copier le code pour content.js »**.
2. **Directement dans `js/content.js` :** déposez vos photos dans `assets/images/` (ex. `rep-1.jpg`, `rep-2.jpg`) et mettez à jour le tableau `team` :
```js
team: [
  {
    id: "rep-1",
    photo: "assets/images/rep-1.jpg",
    isPlaceholderPhoto: false,
    name: "Prénom Nom",
    roleKey: "teamRoleDefault",
    bio: "Étudiant(e) à l'IUT de Saint-Dié...",
    contact: "prenom.nom@etu.univ-lorraine.fr"
  },
  // ... Représentant 2
]
```

### 3. Publier un événement ou une activité
Dans `js/content.js`, remplissez le tableau `events` (tant qu'il est vide `[]`, un message d'attente élégant s'affiche automatiquement) :
```js
events: [
  {
    id: "evt-1",
    image: "assets/images/cafe-accueil.jpg",
    status: "upcoming", // "upcoming" (À venir) ou "past" (Terminé)
    title: {
      fr: "Café d’accueil international",
      en: "International Welcome Coffee"
    },
    description: {
      fr: "Un premier moment convivial pour faire connaissance autour d'un café.",
      en: "A warm first meetup to get to know each other over coffee."
    },
    date: "Jeudi 15 octobre · 17h30",
    location: "Foyer AEPUD — IUT de Saint-Dié"
  }
],
```

### 4. Renseigner l’e-mail officiel et Instagram
Dans `js/content.js`, complétez l’objet `contact` :
```js
contact: {
  association: "Association des Étudiants (AEPUD) — IUT de Saint-Dié",
  pole: "Pôle des Étudiants Internationaux",
  email: "pole.international@exemple.fr",
  instagram: "@votre_compte_instagram",
  otherNetwork: "https://discord.gg/...",
  location: "IUT de Saint-Dié-des-Vosges · 11 Rue de l’Université, 88100 Saint-Dié-des-Vosges"
}
```

### 5. Remplacer les images temporaires de la galerie
Placez vos vraies photos dans `assets/images/`, mettez à jour `src` dans `gallery` (`js/content.js`) et passez `isTemporary: false` pour retirer automatiquement le badge *« Visuel temporaire · À remplacer »*.

---

## Lancer le site en local

Aucun outil de compilation n'est requis :
- Ouvrez directement `index.html` dans n'importe quel navigateur moderne (Chrome, Edge, Firefox, Safari) ;
- Ou utilisez un serveur local léger (ex. extension *Live Server* sur VS Code ou `npx serve .`).
