import type { HomeContent } from './types';

export const fr: HomeContent = {
  meta: {
    title: 'Buzz Cam : déclenchement au sourire et retardateur en rafale pour iPhone',
    description:
      'Buzz Cam déclenche toute seule quand on sourit, regarde l’objectif ou quand tout le monde est dans le cadre. Retardateur en rafale, intervalle, RAW et ProRAW. Achat unique, sans abonnement.',
  },
  hero: {
    eyebrow: 'Nouveau : prise de vue automatique',
    h1a: 'Souriez.',
    h1b: 'L’iPhone déclenche.',
    sub: 'Buzz Cam est un appareil photo à déclenchement automatique pour iPhone. Il prend la photo quand les gens sourient, regardent l’objectif ou sont tous dans le cadre. Et son retardateur enchaîne une rafale entière après le compte à rebours. En voyage seul ou en photo de groupe, le photographe est enfin sur la photo.',
    price: 'Achat unique · Sans abonnement · Sans pub · Sans compte',
    chip: 'Sourire',
    alt1: 'Buzz Cam déclenche automatiquement quand quatre amis sourient',
    alt2: 'Compte à rebours du retardateur en rafale pendant qu’une voyageuse entre dans le cadre',
  },
  what: {
    q: 'Qu’est-ce que Buzz Cam ?',
    a: 'Buzz Cam (BuzzCam) est une app photo payante pour iPhone (iOS 26.2 ou ultérieur) qui appuie sur le déclencheur à votre place. Choisissez une condition (personne dans le cadre, visage visible, sourire, visage face à l’appareil, regard vers l’objectif, ou un minimum de 1 à 10 personnes), touchez le déclencheur une fois, et la photo est prise dès que la condition est remplie. Elle propose aussi la rafale, un retardateur de 3, 5 ou 10 secondes suivi d’une rafale, un intervalle d’environ 0,1 à 3 secondes, et les formats HEIF, JPEG, RAW (DNG) et Apple ProRAW jusqu’à 48 Mpx sur les iPhone compatibles. La détection se fait sur l’iPhone. Ni pub, ni abonnement, ni compte, ni filtre beauté.',
  },
  how: {
    title: 'Trois étapes. Puis posez le téléphone.',
    steps: [
      { t: 'Calez votre iPhone', d: 'Un petit trépied, un muret, un banc ou un sac. Cadrez avec la caméra arrière.' },
      { t: 'Choisissez le déclencheur', d: 'Sourire, regard vers l’objectif, tout le monde dans le cadre, ou un minuteur de 3, 5 ou 10 s.' },
      { t: 'Touchez une fois, entrez dans le cadre', d: 'Buzz Cam attend, puis prend une rafale. Touchez à nouveau pour arrêter. Choisissez vos préférées dans Photos.' },
    ],
  },
  features: {
    title: 'Tout ce qu’il faut pour photographier sans les mains',
    sub: 'Pour les photos que personne n’est là pour prendre : vous, votre groupe, vos enfants, votre tenue.',
    items: [
      { kicker: 'Prise de vue automatique', t: 'Un déclencheur qui attend le bon moment', d: 'Armez le déclencheur et Buzz Cam analyse l’image directement sur l’iPhone. Dès que votre condition est remplie, il déclenche. En rafale, il fait une pause quand la condition disparaît et reprend quand elle revient.', bullets: ['Personne dans le cadre', 'Visage visible', 'Sourire (déclenchement au sourire)', 'Visage face à l’appareil', 'Regard vers l’objectif', 'Nombre minimum : 1 à 10 personnes', 'En option : attendre une pose stable'], shot: 2, alt: 'Réglages de la prise de vue automatique, de Personne dans le cadre à Regard vers l’objectif' },
      { kicker: 'Photos de groupe', t: 'Cette fois, le photographe est sur la photo', d: 'Réglez le nombre minimum de personnes sur la taille du groupe. Buzz Cam attend que tout ce monde soit dans le cadre, puis déclenche. Avec Sourire ou Regard vers l’objectif, moins d’yeux fermés et de têtes tournées.', shot: 1, alt: 'Photo de groupe de quatre amis prise automatiquement', chip: 'Nombre minimum · 4' },
      { kicker: 'Retardateur + rafale', t: 'Un compte à rebours. Toute une rafale.', d: 'Le mode Minuteur compte 3, 5 ou 10 secondes, puis lance une rafale jusqu’à ce que vous l’arrêtiez ou jusqu’au nombre ou à la durée choisis. L’éclairage du compte à rebours fait clignoter la lampe pour voir le minuteur à plusieurs mètres.', shot: 3, alt: 'Rafale avec minuteur de 10 secondes, une voyageuse entre dans une ruelle', chip: 'Éclairage du compte à rebours' },
      { kicker: 'Enfants et famille', t: 'Clic, quand ils regardent l’objectif', d: 'Fini les « regarde ici ! » à répétition. Choisissez Regard vers l’objectif ou Visage face à l’appareil : la photo part quand ils se tournent vers l’iPhone.', shot: 4, alt: 'Photo de famille prise quand l’enfant regarde l’objectif', chip: 'Regard vers l’objectif' },
      { kicker: 'Rafale', t: 'Ne ratez plus le saut', d: 'Touchez le déclencheur pour lancer la rafale, touchez à nouveau pour l’arrêter. Choisissez ensuite dans Photos le sommet d’un saut ou d’une pirouette.', shot: 5, alt: 'Rafale d’un homme qui saute sur la plage, 36 photos' },
      { kicker: 'Intervalle', t: 'Vos tenues, de la tête aux pieds', d: 'Réglez l’intervalle sur 1, 2 ou 3 secondes et changez de pose entre deux photos. Une seule touche, toute une série en pied. Sans filtre beauté ni retouche.', shot: 6, alt: 'Photos de tenue en pied prises toutes les 2 secondes', chip: 'Intervalle · 2 s' },
      { kicker: 'Qualité d’image', t: '48 Mpx, Apple ProRAW et RAW DNG', d: 'Photographiez en HEIF, JPEG, RAW (DNG) ou Apple ProRAW, en 12 ou 48 Mpx sur les iPhone et objectifs compatibles. Passez de l’ultra grand-angle au grand-angle et au téléobjectif. Le traitement par défaut enregistre les originaux tout de suite pour AirDrop ; Vitesse prioritaire accélère les rafales en 48 Mpx.', shot: 9, alt: 'Options photo de Buzz Cam : HEIF, JPEG, RAW, 12 Mpx, 48 Mpx, intervalle et traitement' },
    ],
  },
  compare: {
    title: 'Pourquoi pas le retardateur de l’iPhone ?',
    sub: 'Le retardateur intégré suffit pour une photo rapide. Buzz Cam, c’est pour être sur la photo et en avoir une réussie.',
    colA: 'Retardateur de l’app Appareil photo',
    colB: 'Buzz Cam',
    rows: [
      ['Durée du retardateur', '3 ou 10 secondes', '3, 5 ou 10 secondes'],
      ['Photos par compte à rebours', 'Une courte rafale fixe', 'Autant que vous voulez : par nombre, par durée ou jusqu’à l’arrêt'],
      ['Temps entre les photos', 'Fixe', 'Maximale (environ 0,1 s), 0,4, 1, 2 ou 3 s'],
      ['Déclenche au sourire', '—', 'Oui'],
      ['Attend que tout le monde soit là', '—', 'Oui, de 1 à 10 personnes'],
      ['Déclenche quand on regarde l’objectif', '—', 'Oui'],
      ['Compte à rebours visible de loin', 'À l’écran seulement', 'La lampe clignote pendant le décompte'],
    ],
    note: 'Le comportement de l’app Appareil photo varie selon la version d’iOS et des réglages comme Live Photos.',
  },
  uses: {
    title: 'À quoi sert Buzz Cam',
    sub: 'Toutes ces situations où personne n’est libre pour appuyer.',
    items: [
      { t: 'Voyager seul', d: 'iPhone sur un mini trépied, minuteur de 10 s, entrez dans le décor. Des dizaines de photos, sans demander à un inconnu.', photo: 'solo', alt: 'Voyageuse photographiée par une rafale avec minuteur sur trépied' },
      { t: 'Photos de groupe au complet', d: 'Le nombre minimum attend que tout le groupe, photographe compris, soit dans le cadre.', photo: 'group', alt: 'Amis souriants sur une photo de groupe automatique' },
      { t: 'Tenues et photos en pied', d: 'Avec un intervalle de 1 à 3 s, changez de pose sans toucher l’iPhone.', photo: 'ootd', alt: 'Planche de photos de tenue prises à intervalle' },
      { t: 'Sauts et action', d: 'La rafale la plus rapide capte le sommet d’un saut ou d’une pirouette.', photo: 'jump', alt: 'Rafale d’un saut sur la plage' },
      { t: 'Enfants et famille', d: 'Sourire et Regard vers l’objectif déclenchent quand l’expression est là.', photo: 'family', alt: 'Photo de famille prise quand tout le monde regardait l’objectif' },
      { t: 'Animaux', d: 'La prise de vue automatique ne détecte que les personnes. Pour les animaux, utilisez la rafale rapide ou l’intervalle.', photo: 'tripod', alt: 'iPhone sur un petit trépied' },
    ],
  },
  trust: {
    title: 'Respect de la vie privée. Payé une fois.',
    items: [
      { t: 'Achat unique', d: 'Sans abonnement, sans achat intégré, sans pub.' },
      { t: 'Sans compte', d: 'Ouvrez et photographiez. Aucune inscription.' },
      { t: 'Ajout uniquement', d: 'Enregistre dans Photos sans jamais lire votre photothèque.' },
      { t: 'Détection sur l’appareil', d: 'Visages et sourires sont analysés sur l’iPhone. Rien n’est envoyé.' },
      { t: 'Aucun filtre beauté', d: 'Des photos naturelles, sans lissage ni retouche.' },
      { t: 'Huit langues', d: 'Français, English, 简体中文, 繁體中文, 日本語, 한국어, Deutsch, Español.' },
    ],
  },
  specs: {
    title: 'Buzz Cam en bref',
    rows: [
      ['Plateforme', 'iPhone, iOS 26.2 ou ultérieur'],
      ['Prix', 'App payante, achat unique (prix selon le pays). Sans abonnement, pub ni achat intégré'],
      ['Modes', 'Photo, Rafale, Minuteur (3/5/10 s puis rafale)'],
      ['Conditions de prise de vue automatique', 'Personne dans le cadre, Visage visible, Sourire, Visage face à l’appareil, Regard vers l’objectif ; nombre minimum 1–10 ; attendre une pose stable'],
      ['Intervalle', 'Maximale (environ 0,1 s visé), 0,4 s, 1 s, 2 s, 3 s'],
      ['Limite de rafale', 'Par nombre, par durée, ou illimitée jusqu’à l’arrêt'],
      ['Formats', 'HEIF, JPEG, RAW (DNG), Apple ProRAW sur appareils compatibles'],
      ['Résolution', '12 Mpx ou 48 Mpx sur iPhone et objectifs compatibles'],
      ['Objectifs', 'Ultra grand-angle, grand-angle, téléobjectif (selon le modèle)'],
      ['Confidentialité', 'Sans compte, aucune collecte, accès Photos en ajout seul, GPS facultatif (désactivé par défaut)'],
    ],
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      { q: 'Existe-t-il une app photo qui déclenche quand on sourit ?', a: 'Oui. Dans Buzz Cam, ouvrez la prise de vue automatique, choisissez Sourire et touchez le déclencheur. L’appareil attend et prend la photo dès qu’il détecte un sourire. En rafale, il continue tant que l’on sourit.' },
      { q: 'Comment prendre plusieurs photos avec le retardateur de l’iPhone ?', a: 'Utilisez le mode Minuteur de Buzz Cam : choisissez 3, 5 ou 10 s et un intervalle, puis touchez le déclencheur. Après le décompte, une rafale démarre jusqu’à ce que vous l’arrêtiez ou jusqu’au nombre ou à la durée fixés.' },
      { q: 'Comment faire une photo de groupe où je suis aussi ?', a: 'Posez l’iPhone sur un trépied ou un support stable, réglez le nombre minimum de personnes sur la taille du groupe, touchez le déclencheur et rejoignez les autres. Buzz Cam déclenche quand tout le monde est dans le cadre.' },
      { q: 'Comment se prendre en photo en voyageant seul ?', a: 'Calez l’iPhone sur un mini trépied, un muret ou un banc, cadrez avec la caméra arrière, lancez une rafale avec minuteur de 10 s et placez-vous. L’éclairage du compte à rebours permet de voir le minuteur de loin.' },
      { q: 'Buzz Cam choisit-il la meilleure photo ?', a: 'Non. Buzz Cam décide seulement quand déclencher. Vous choisissez vos photos dans Photos. Pas de conseils de pose ni de reconnaissance des personnes.' },
      { q: 'La prise de vue automatique fonctionne-t-elle avec les animaux ?', a: 'Non, elle ne détecte que les personnes. Pour les animaux, utilisez la rafale en vitesse maximale ou le minuteur.' },
      { q: 'ProRAW et 48 Mpx sont-ils pris en charge ?', a: 'Oui, sur les iPhone et objectifs compatibles : HEIF, JPEG, RAW (DNG) et Apple ProRAW, en 12 ou 48 Mpx.' },
      { q: 'Buzz Cam est-il gratuit ? Y a-t-il un abonnement ?', a: 'Buzz Cam est une app payante à achat unique, dont le prix varie selon le pays. Pas d’abonnement, pas d’achat intégré, pas de publicité.' },
      { q: 'Buzz Cam envoie-t-il mes photos ou lit-il ma photothèque ?', a: 'Non. Les photos sont enregistrées dans Photos avec une autorisation en ajout seul, l’app ne peut pas lire votre photothèque. La détection se fait sur l’iPhone, sans compte ni collecte de données.' },
      { q: 'Quels iPhone sont compatibles ?', a: 'Tous les iPhone sous iOS 26.2 ou ultérieur. Le 48 Mpx, ProRAW, le téléobjectif et l’éclairage du compte à rebours dépendent du modèle et de l’objectif.' },
    ],
  },
  cta: {
    title: 'Soyez sur vos propres photos.',
    sub: 'Déclenchement au sourire, retardateur en rafale et ProRAW dans un seul appareil. Payé une fois, à vous pour toujours.',
    price: 'iPhone · iOS 26.2+ · achat unique',
  },
};
