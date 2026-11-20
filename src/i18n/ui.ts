import type { LocaleCode } from '../data/site';

export interface UiStrings {
  badgeTop: string;
  badgeBottom: string;
  download: string;
  getApp: string;
  stickyTitle: string;
  stickySub: string;
  scanTitle: string;
  scanSub: string;
  nav: { features: string; compare: string; useCases: string; faq: string; guides: string };
  footer: {
    tagline: string;
    product: string;
    guides: string;
    company: string;
    privacy: string;
    support: string;
    language: string;
    rights: string;
    appleNote: string;
  };
  skip: string;
}

export const UI: Record<LocaleCode, UiStrings> = {
  en: {
    badgeTop: 'Download on the',
    badgeBottom: 'App Store',
    download: 'Download BuzzCam',
    getApp: 'Get the app',
    stickyTitle: 'BuzzCam for iPhone',
    stickySub: 'Smile shutter · Self timer burst',
    scanTitle: 'On a computer?',
    scanSub: 'Point your iPhone camera here to open BuzzCam in the App Store.',
    nav: { features: 'Features', compare: 'vs. iPhone timer', useCases: 'Use cases', faq: 'FAQ', guides: 'Guides' },
    footer: {
      tagline: 'The auto shutter and burst camera for iPhone. Your phone takes the photo, you stay in it.',
      product: 'Product',
      guides: 'Guides',
      company: 'Help',
      privacy: 'Privacy policy',
      support: 'Support',
      language: 'Language',
      rights: 'All rights reserved.',
      appleNote: 'Apple, iPhone, Apple ProRAW and App Store are trademarks of Apple Inc.',
    },
    skip: 'Skip to content',
  },
  'zh-Hans': {
    badgeTop: '立即下载',
    badgeBottom: 'App Store',
    download: '下载 Buzz相机',
    getApp: '下载',
    stickyTitle: 'Buzz相机 · iPhone',
    stickySub: '笑脸自动拍照 · 定时连拍',
    scanTitle: '正在用电脑浏览？',
    scanSub: '用 iPhone 相机扫一扫，直接打开 App Store 下载页。',
    nav: { features: '功能', compare: '对比系统相机', useCases: '使用场景', faq: '常见问题', guides: '教程' },
    footer: {
      tagline: 'iPhone 自动拍照与连拍相机。手机负责按快门，你只管站进画面。',
      product: '产品',
      guides: '教程（英文）',
      company: '帮助',
      privacy: '隐私政策',
      support: '技术支持',
      language: '语言',
      rights: '保留所有权利。',
      appleNote: 'Apple、iPhone、Apple ProRAW 和 App Store 是 Apple Inc. 的商标。',
    },
    skip: '跳到正文',
  },
  'zh-Hant': {
    badgeTop: '立即下載',
    badgeBottom: 'App Store',
    download: '下載 Buzz相機',
    getApp: '下載',
    stickyTitle: 'Buzz相機 · iPhone',
    stickySub: '微笑自動拍照 · 定時連拍',
    scanTitle: '正在用電腦瀏覽？',
    scanSub: '用 iPhone 相機掃描，直接開啟 App Store 下載頁。',
    nav: { features: '功能', compare: '比較內建相機', useCases: '使用情境', faq: '常見問題', guides: '教學' },
    footer: {
      tagline: 'iPhone 自動拍照與連拍相機。手機負責按快門，你只要走進畫面。',
      product: '產品',
      guides: '教學（英文）',
      company: '說明',
      privacy: '隱私權政策',
      support: '技術支援',
      language: '語言',
      rights: '保留所有權利。',
      appleNote: 'Apple、iPhone、Apple ProRAW 與 App Store 是 Apple Inc. 的商標。',
    },
    skip: '跳到內容',
  },
  ja: {
    badgeTop: 'ダウンロード',
    badgeBottom: 'App Store',
    download: 'Buzzカメラをダウンロード',
    getApp: '入手',
    stickyTitle: 'Buzzカメラ for iPhone',
    stickySub: '笑顔で自動シャッター・タイマー連写',
    scanTitle: 'パソコンでご覧ですか？',
    scanSub: 'iPhone のカメラで読み取ると App Store のページが開きます。',
    nav: { features: '機能', compare: '標準カメラとの違い', useCases: '使い方', faq: 'よくある質問', guides: 'ガイド' },
    footer: {
      tagline: 'iPhone の自動シャッター＆連写カメラ。シャッターはカメラに任せて、あなたは写真の中へ。',
      product: 'プロダクト',
      guides: 'ガイド（英語）',
      company: 'ヘルプ',
      privacy: 'プライバシーポリシー',
      support: 'サポート',
      language: '言語',
      rights: 'All rights reserved.',
      appleNote: 'Apple、iPhone、Apple ProRAW、App Store は Apple Inc. の商標です。',
    },
    skip: '本文へスキップ',
  },
  ko: {
    badgeTop: '다운로드',
    badgeBottom: 'App Store',
    download: 'Buzz 카메라 다운로드',
    getApp: '받기',
    stickyTitle: 'Buzz 카메라 for iPhone',
    stickySub: '스마일 셔터 · 셀프 타이머 연사',
    scanTitle: '컴퓨터로 보고 계신가요?',
    scanSub: 'iPhone 카메라로 스캔하면 App Store 페이지가 열려요.',
    nav: { features: '기능', compare: '기본 카메라와 비교', useCases: '활용', faq: '자주 묻는 질문', guides: '가이드' },
    footer: {
      tagline: 'iPhone 자동 셔터 & 연사 카메라. 셔터는 카메라에게, 당신은 사진 속으로.',
      product: '제품',
      guides: '가이드 (영어)',
      company: '도움말',
      privacy: '개인정보 처리방침',
      support: '지원',
      language: '언어',
      rights: 'All rights reserved.',
      appleNote: 'Apple, iPhone, Apple ProRAW 및 App Store는 Apple Inc.의 상표입니다.',
    },
    skip: '본문으로 건너뛰기',
  },
  de: {
    badgeTop: 'Laden im',
    badgeBottom: 'App Store',
    download: 'Buzz Cam laden',
    getApp: 'Laden',
    stickyTitle: 'Buzz Cam für iPhone',
    stickySub: 'Lächeln-Auslöser · Timer mit Serie',
    scanTitle: 'Am Computer?',
    scanSub: 'Mit der iPhone-Kamera scannen, um Buzz Cam im App Store zu öffnen.',
    nav: { features: 'Funktionen', compare: 'vs. iPhone-Timer', useCases: 'Einsatz', faq: 'FAQ', guides: 'Ratgeber' },
    footer: {
      tagline: 'Die Kamera mit automatischem Auslöser und Serienbild fürs iPhone. Das iPhone drückt ab, du bist mit drauf.',
      product: 'Produkt',
      guides: 'Ratgeber (Englisch)',
      company: 'Hilfe',
      privacy: 'Datenschutz',
      support: 'Support',
      language: 'Sprache',
      rights: 'Alle Rechte vorbehalten.',
      appleNote: 'Apple, iPhone, Apple ProRAW und App Store sind Marken der Apple Inc.',
    },
    skip: 'Zum Inhalt',
  },
  fr: {
    badgeTop: 'Télécharger dans',
    badgeBottom: 'l’App Store',
    download: 'Télécharger Buzz Cam',
    getApp: 'Obtenir',
    stickyTitle: 'Buzz Cam pour iPhone',
    stickySub: 'Déclenchement au sourire · Retardateur en rafale',
    scanTitle: 'Sur ordinateur ?',
    scanSub: 'Scannez avec l’appareil photo de l’iPhone pour ouvrir Buzz Cam sur l’App Store.',
    nav: { features: 'Fonctions', compare: 'vs retardateur iPhone', useCases: 'Usages', faq: 'FAQ', guides: 'Guides' },
    footer: {
      tagline: 'L’appareil photo à déclenchement automatique et en rafale pour iPhone. L’iPhone déclenche, vous êtes sur la photo.',
      product: 'Produit',
      guides: 'Guides (anglais)',
      company: 'Aide',
      privacy: 'Confidentialité',
      support: 'Assistance',
      language: 'Langue',
      rights: 'Tous droits réservés.',
      appleNote: 'Apple, iPhone, Apple ProRAW et App Store sont des marques d’Apple Inc.',
    },
    skip: 'Aller au contenu',
  },
  es: {
    badgeTop: 'Descárgalo en el',
    badgeBottom: 'App Store',
    download: 'Descargar Buzz Cam',
    getApp: 'Obtener',
    stickyTitle: 'Buzz Cam para iPhone',
    stickySub: 'Disparo al sonreír · Temporizador en ráfaga',
    scanTitle: '¿Estás en el ordenador?',
    scanSub: 'Escanea con la cámara del iPhone para abrir Buzz Cam en el App Store.',
    nav: { features: 'Funciones', compare: 'vs. temporizador iPhone', useCases: 'Usos', faq: 'Preguntas', guides: 'Guías' },
    footer: {
      tagline: 'La cámara con disparo automático y ráfaga para iPhone. El iPhone dispara, tú sales en la foto.',
      product: 'Producto',
      guides: 'Guías (inglés)',
      company: 'Ayuda',
      privacy: 'Privacidad',
      support: 'Soporte',
      language: 'Idioma',
      rights: 'Todos los derechos reservados.',
      appleNote: 'Apple, iPhone, Apple ProRAW y App Store son marcas de Apple Inc.',
    },
    skip: 'Ir al contenido',
  },
};
