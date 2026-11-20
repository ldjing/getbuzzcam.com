import type { HomeContent } from './types';

export const de: HomeContent = {
  meta: {
    title: 'Buzz Cam: Lächeln-Auslöser & Selbstauslöser mit Serienbild fürs iPhone',
    description:
      'Buzz Cam löst automatisch aus, wenn jemand lächelt, ins Objektiv schaut oder alle im Bild sind. Selbstauslöser mit Serienbild, Intervallaufnahme, RAW und ProRAW. Einmalkauf, kein Abo.',
  },
  hero: {
    eyebrow: 'Neu: Automatische Aufnahme',
    h1a: 'Lächeln.',
    h1b: 'Das iPhone drückt ab.',
    sub: 'Buzz Cam ist eine Kamera-App mit automatischem Auslöser fürs iPhone. Sie löst aus, wenn Menschen lächeln, ins Objektiv schauen oder alle im Bild stehen. Dazu ein Selbstauslöser, der nach dem Countdown eine ganze Serie aufnimmt. Allein auf Reisen oder beim Gruppenfoto: Endlich bist du selbst mit drauf.',
    price: 'Einmalkauf · Kein Abo · Keine Werbung · Kein Konto',
    chip: 'Lächeln',
    alt1: 'Buzz Cam löst automatisch aus, als vier Freunde lächeln',
    alt2: 'Countdown der Timer-Serie in Buzz Cam, während eine Reisende ins Bild läuft',
  },
  what: {
    q: 'Was ist Buzz Cam?',
    a: 'Buzz Cam (BuzzCam) ist eine kostenpflichtige Kamera-App fürs iPhone (ab iOS 26.2), die für dich auslöst. Du wählst eine Bedingung (Person im Bild, Gesicht sichtbar, Lächeln, Gesicht zur Kamera, Blick ins Objektiv oder mindestens 1 bis 10 Personen), tippst einmal auf den Auslöser, und sie fotografiert, sobald die Bedingung erfüllt ist. Außerdem: Serienaufnahme, 3, 5 oder 10 Sekunden Timer mit anschließender Serie, Aufnahmeintervalle von etwa 0,1 bis 3 Sekunden sowie HEIF, JPEG, RAW (DNG) und Apple ProRAW mit bis zu 48 MP auf unterstützten iPhones. Die Erkennung läuft auf dem iPhone. Keine Werbung, kein Abo, kein Konto, keine Beauty-Filter.',
  },
  how: {
    title: 'Drei Schritte. Dann leg das iPhone ab.',
    steps: [
      { t: 'iPhone aufstellen', d: 'Stativ, Mauer, Bank oder Rucksack. Mit der Rückkamera den Bildausschnitt wählen.' },
      { t: 'Auslöser-Bedingung wählen', d: 'Lächeln, Blick ins Objektiv, alle im Bild oder ein Timer mit 3, 5 oder 10 Sekunden.' },
      { t: 'Einmal tippen, ins Bild gehen', d: 'Buzz Cam wartet und nimmt dann eine Serie auf. Erneut tippen zum Stoppen. Favoriten wählst du in Fotos.' },
    ],
  },
  features: {
    title: 'Alles, was eine Freihand-Kamera braucht',
    sub: 'Für die Fotos, die sonst niemand macht: von dir, deiner Gruppe, deinen Kindern, deinem Outfit.',
    items: [
      { kicker: 'Automatische Aufnahme', t: 'Ein Auslöser, der auf den richtigen Moment wartet', d: 'Auslöser antippen, und Buzz Cam prüft das Bild direkt auf dem iPhone. Ist deine Bedingung erfüllt, wird fotografiert. In der Serie pausiert die Aufnahme, wenn die Bedingung wegfällt, und läuft weiter, sobald sie wieder erfüllt ist.', bullets: ['Person im Bild', 'Gesicht sichtbar', 'Lächeln (Lächeln-Auslöser)', 'Gesicht zur Kamera', 'Blick ins Objektiv', 'Mindestanzahl: 1 bis 10 Personen', 'Optional: auf eine ruhige Pose warten'], shot: 2, alt: 'Einstellungen der automatischen Aufnahme von Person im Bild bis Blick ins Objektiv' },
      { kicker: 'Gruppenfotos', t: 'Diesmal ist der Fotograf mit drauf', d: 'Stell die Mindestanzahl an Personen auf die Größe deiner Gruppe. Buzz Cam wartet, bis so viele Personen im Bild sind, und löst dann aus. Mit Lächeln oder Blick ins Objektiv gibt es weniger geschlossene Augen und weggedrehte Köpfe.', shot: 1, alt: 'Gruppenfoto von vier Freunden, automatisch aufgenommen', chip: 'Mindestanzahl · 4' },
      { kicker: 'Selbstauslöser + Serie', t: 'Ein Countdown. Eine ganze Fotoserie.', d: 'Der Timer zählt 3, 5 oder 10 Sekunden herunter und nimmt dann eine Serie auf, bis du stoppst oder die eingestellte Anzahl bzw. Dauer erreicht ist. Das Countdown-Licht lässt die Taschenlampe blinken, damit du den Timer auch aus einigen Metern Entfernung siehst.', shot: 3, alt: 'Timer-Serie mit 10 Sekunden Countdown, eine Reisende läuft in eine Gasse', chip: 'Countdown-Licht' },
      { kicker: 'Kinder und Familie', t: 'Klick, sobald sie ins Objektiv schauen', d: 'Schluss mit „Schau mal hier!“. Wähle Blick ins Objektiv oder Gesicht zur Kamera, und der Auslöser löst aus, sobald sie sich zum iPhone drehen.', shot: 4, alt: 'Familienfoto, automatisch aufgenommen, als das Kind ins Objektiv schaut', chip: 'Blick ins Objektiv' },
      { kicker: 'Serienaufnahme', t: 'Kein Sprung wird mehr verpasst', d: 'Auslöser antippen startet die Serie, erneut antippen stoppt sie. Den höchsten Punkt eines Sprungs oder einer Drehung suchst du später in Fotos aus.', shot: 5, alt: 'Serienaufnahme eines Mannes beim Sprung am Strand, 36 Fotos' },
      { kicker: 'Intervallaufnahme', t: 'Outfit-Fotos von Kopf bis Fuß', d: 'Stell das Aufnahmeintervall auf 1, 2 oder 3 Sekunden und wechsle zwischen den Bildern die Pose. Ein Tipp, ein ganzes Set Ganzkörperfotos. Keine Beauty-Filter, keine Retusche.', shot: 6, alt: 'Ganzkörper-Outfitfotos im Intervall von 2 Sekunden', chip: 'Intervall · 2 Sek.' },
      { kicker: 'Bildqualität', t: '48 MP, Apple ProRAW und RAW DNG', d: 'Fotografiere in HEIF, JPEG, RAW (DNG) oder Apple ProRAW, mit 12 MP oder 48 MP auf unterstützten iPhones und Objektiven. Wechsle zwischen Ultraweitwinkel, Weitwinkel und Tele. Standard speichert Originale sofort für AirDrop; „Tempo zuerst“ beschleunigt 48-MP-Serien.', shot: 9, alt: 'Fotooptionen in Buzz Cam: HEIF, JPEG, RAW, 12 MP, 48 MP, Intervall und Verarbeitung' },
    ],
  },
  compare: {
    title: 'Warum nicht einfach den iPhone-Timer nutzen?',
    sub: 'Der eingebaute Timer reicht für ein schnelles Foto. Buzz Cam ist für die Momente, in denen du mit aufs Bild willst und trotzdem ein gutes Foto brauchst.',
    colA: 'Timer der iPhone-Kamera',
    colB: 'Buzz Cam',
    rows: [
      ['Timer-Dauer', '3 oder 10 Sekunden', '3, 5 oder 10 Sekunden'],
      ['Fotos pro Countdown', 'Eine kurze, feste Serie', 'So viele du willst: nach Anzahl, Dauer oder bis du stoppst'],
      ['Abstand zwischen den Fotos', 'Fest', 'Maximal (ca. 0,1 s), 0,4, 1, 2 oder 3 s'],
      ['Löst beim Lächeln aus', '—', 'Ja'],
      ['Wartet, bis alle im Bild sind', '—', 'Ja, 1 bis 10 Personen'],
      ['Löst beim Blick ins Objektiv aus', '—', 'Ja'],
      ['Countdown aus der Ferne sichtbar', 'Nur auf dem Display', 'Taschenlampe blinkt während des Countdowns'],
    ],
    note: 'Das Verhalten der iPhone-Kamera hängt von der iOS-Version und Einstellungen wie Live Photos ab.',
  },
  uses: {
    title: 'Wofür Buzz Cam genutzt wird',
    sub: 'Situationen, in denen niemand frei ist, um abzudrücken.',
    items: [
      { t: 'Allein reisen', d: 'iPhone aufs Ministativ, 10 Sekunden Timer, rein in die Szene. Dutzende Bilder, ohne Fremde zu fragen.', photo: 'solo', alt: 'Reisende, fotografiert mit Timer-Serie vom Stativ' },
      { t: 'Gruppenfotos mit allen', d: 'Die Mindestanzahl wartet, bis die ganze Gruppe samt Fotograf im Bild ist.', photo: 'group', alt: 'Lächelnde Freunde auf einem automatischen Gruppenfoto' },
      { t: 'Outfit- und Ganzkörperfotos', d: 'Mit 1 bis 3 Sekunden Intervall wechselst du die Pose, ohne das iPhone anzufassen.', photo: 'ootd', alt: 'Kontaktbogen von Outfitfotos im Intervall' },
      { t: 'Sprünge und Action', d: 'Die schnellste Serie erwischt den höchsten Punkt eines Sprungs oder einer Drehung.', photo: 'jump', alt: 'Serienaufnahme eines Sprungs am Strand' },
      { t: 'Kinder und Familie', d: 'Lächeln und Blick ins Objektiv lösen aus, wenn der Ausdruck stimmt.', photo: 'family', alt: 'Familienfoto, als alle ins Objektiv schauten' },
      { t: 'Haustiere', d: 'Die automatische Aufnahme erkennt nur Menschen. Für Haustiere die schnelle Serie oder das Intervall nutzen.', photo: 'tripod', alt: 'iPhone auf einem kleinen Stativ' },
    ],
  },
  trust: {
    title: 'Privat. Einmal bezahlt.',
    items: [
      { t: 'Einmalkauf', d: 'Kein Abo, keine In-App-Käufe, keine Werbung.' },
      { t: 'Kein Konto', d: 'Öffnen und fotografieren. Keine Anmeldung.' },
      { t: 'Nur Hinzufügen', d: 'Speichert in Fotos und liest deine Mediathek nie.' },
      { t: 'Erkennung auf dem Gerät', d: 'Gesichter und Lächeln werden auf dem iPhone analysiert. Kein Upload.' },
      { t: 'Keine Beauty-Filter', d: 'Natürliche Fotos. Kein Weichzeichnen, keine Retusche.' },
      { t: 'Acht Sprachen', d: 'Deutsch, English, 简体中文, 繁體中文, 日本語, 한국어, Français, Español.' },
    ],
  },
  specs: {
    title: 'Buzz Cam auf einen Blick',
    rows: [
      ['Plattform', 'iPhone, ab iOS 26.2'],
      ['Preis', 'Kostenpflichtig, Einmalkauf (Preis je nach Land). Kein Abo, keine Werbung, keine In-App-Käufe'],
      ['Aufnahmemodi', 'Foto, Serienaufnahme, Timer (3/5/10 s Countdown, dann Serie)'],
      ['Bedingungen der automatischen Aufnahme', 'Person im Bild, Gesicht sichtbar, Lächeln, Gesicht zur Kamera, Blick ins Objektiv; Mindestanzahl 1–10; auf eine ruhige Pose warten'],
      ['Aufnahmeintervall', 'Maximal (Ziel ca. 0,1 s), 0,4 s, 1 s, 2 s, 3 s'],
      ['Serienlimit', 'Nach Anzahl, nach Dauer oder unbegrenzt bis zum Stopp'],
      ['Formate', 'HEIF, JPEG, RAW (DNG), Apple ProRAW auf kompatiblen Kameras'],
      ['Auflösung', '12 MP oder 48 MP auf unterstützten iPhones und Objektiven'],
      ['Objektive', 'Ultraweitwinkel, Weitwinkel, Tele (je nach Modell)'],
      ['Datenschutz', 'Kein Konto, keine Datenerhebung, Fotos nur hinzufügen, GPS optional (standardmäßig aus)'],
    ],
  },
  faq: {
    title: 'Häufige Fragen',
    items: [
      { q: 'Gibt es eine Kamera-App, die beim Lächeln auslöst?', a: 'Ja. Öffne in Buzz Cam die automatische Aufnahme, wähle Lächeln und tippe auf den Auslöser. Die Kamera wartet und fotografiert, sobald sie ein Lächeln erkennt. In der Serie fotografiert sie weiter, solange gelächelt wird.' },
      { q: 'Wie macht der iPhone-Selbstauslöser mehrere Fotos?', a: 'Nutze den Timer-Modus von Buzz Cam: 3, 5 oder 10 Sekunden Countdown und ein Aufnahmeintervall wählen, Auslöser antippen. Nach dem Countdown folgt eine Serie, bis du stoppst oder Anzahl bzw. Dauer erreicht ist.' },
      { q: 'Wie mache ich ein Gruppenfoto, auf dem auch ich bin?', a: 'iPhone aufs Stativ oder eine stabile Fläche stellen, in der automatischen Aufnahme die Mindestanzahl auf die Gruppengröße setzen, Auslöser antippen und dazustellen. Sind alle im Bild, löst Buzz Cam aus.' },
      { q: 'Wie fotografiere ich mich selbst, wenn ich allein reise?', a: 'iPhone auf ein Ministativ, eine Mauer oder eine Bank stellen, mit der Rückkamera den Ausschnitt wählen, eine Timer-Serie mit 10 Sekunden starten und in Position gehen. Mit dem Countdown-Licht siehst du den Timer auch aus der Ferne.' },
      { q: 'Wählt Buzz Cam das beste Foto für mich aus?', a: 'Nein. Buzz Cam entscheidet nur, wann ausgelöst wird. Deine Favoriten wählst du in Fotos. Posen-Tipps oder Personenerkennung gibt es nicht.' },
      { q: 'Funktioniert die automatische Aufnahme mit Haustieren?', a: 'Nein, sie erkennt nur Menschen. Für Haustiere die Serienaufnahme mit maximalem Tempo oder den Timer nutzen.' },
      { q: 'Unterstützt Buzz Cam ProRAW und 48 MP?', a: 'Ja, auf unterstützten iPhones und Objektiven: HEIF, JPEG, RAW (DNG) und Apple ProRAW mit 12 MP oder 48 MP.' },
      { q: 'Ist Buzz Cam kostenlos? Gibt es ein Abo?', a: 'Buzz Cam ist eine kostenpflichtige App mit Einmalpreis, der je nach Land variiert. Kein Abo, keine In-App-Käufe, keine Werbung.' },
      { q: 'Lädt Buzz Cam Fotos hoch oder liest meine Mediathek?', a: 'Nein. Fotos werden mit der Berechtigung „Nur hinzufügen“ direkt in Fotos gespeichert, die Mediathek kann die App nicht lesen. Die Erkennung läuft auf dem iPhone, ohne Konto und ohne Datenerhebung.' },
      { q: 'Welche iPhones werden unterstützt?', a: 'Alle iPhones mit iOS 26.2 oder neuer. 48 MP, ProRAW, Tele und Countdown-Licht hängen von Modell und Objektiv ab.' },
    ],
  },
  cta: {
    title: 'Sei auf deinen eigenen Fotos.',
    sub: 'Lächeln-Auslöser, Timer-Serie und ProRAW in einer Kamera. Einmal zahlen, für immer behalten.',
    price: 'iPhone · iOS 26.2+ · Einmalkauf',
  },
};
