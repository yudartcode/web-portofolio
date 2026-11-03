export const languages = { id: 'Indonesia', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'id';

export const ui = {
  id: {
    'meta.description':
      'Yuda Karnaen — full stack developer di Mataram yang membangun sistem informasi kesehatan, API, dan dashboard data.',
    'nav.about': 'Tentang',
    'nav.projects': 'Proyek',
    'nav.experience': 'Pengalaman',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontak',
    'nav.menu': 'Menu',
    'nav.skip': 'Lewati ke konten',
    'theme.toggle': 'Ganti tema terang/gelap',
    'lang.switch': 'Read in English',
    'hero.role': 'Full stack developer',
    'hero.lead':
      'Saya membangun jalur data untuk kesehatan publik Indonesia — dari rekam medis di klinik sampai dashboard nasional.',
    'hero.cta.projects': 'Lihat proyek',
    'hero.cta.cv': 'Unduh CV (PDF)',
    'hero.diagram.caption':
      'Contoh alur yang saya kerjakan: data kasus TB dari EMR fasilitas kesehatan, lewat mediator, ke SATUSEHAT dan DHIS2.',
    'about.title': 'Tentang saya',
    'about.location': 'Lokasi',
    'about.years': 'Pengalaman',
    'about.yearsValue': '6+ tahun',
    'about.languages': 'Bahasa',
    'about.focus': 'Fokus',
    'about.focusValue': 'Backend, interoperabilitas, dashboard',
    'projects.title': 'Proyek pilihan',
    'projects.intro': 'Sebagian besar sistem ini dipakai oleh dinas kesehatan dan program nasional.',
    'projects.role': 'Peran',
    'experience.title': 'Pengalaman',
    'experience.intro':
      'Dua jalur paralel di 2021–2023: pekerjaan utama di Castellum dan integrasi DHIS2 bersama HISP Indonesia.',
    'experience.present': 'sekarang',
    'education.title': 'Pendidikan',
    'skills.title': 'Keahlian',
    'blog.title': 'Tulisan',
    'blog.all': 'Semua tulisan',
    'blog.empty': 'Belum ada tulisan. Tulisan baru akan muncul di sini.',
    'blog.back': 'Kembali ke semua tulisan',
    'blog.readTime': 'menit baca',
    'contact.title': 'Mari bekerja sama',
    'contact.lead':
      'Sedang mencari developer untuk API, integrasi sistem kesehatan, atau dashboard data? Kirim email — saya biasanya membalas dalam 1–2 hari kerja.',
    'contact.email': 'Kirim email',
    'footer.built': 'Dibangun dengan Astro.',
  },
  en: {
    'meta.description':
      'Yuda Karnaen — full stack developer in Mataram, Indonesia, building health information systems, APIs, and data dashboards.',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'theme.toggle': 'Toggle light/dark theme',
    'lang.switch': 'Baca dalam Bahasa Indonesia',
    'hero.role': 'Full stack developer',
    'hero.lead':
      'I build the data pipes behind Indonesian public health — from clinic medical records to national dashboards.',
    'hero.cta.projects': 'See projects',
    'hero.cta.cv': 'Download CV (PDF)',
    'hero.diagram.caption':
      'A flow I work on: TB case data from a facility EMR, through a mediator, into SATUSEHAT and DHIS2.',
    'about.title': 'About me',
    'about.location': 'Location',
    'about.years': 'Experience',
    'about.yearsValue': '6+ years',
    'about.languages': 'Languages',
    'about.focus': 'Focus',
    'about.focusValue': 'Backend, interoperability, dashboards',
    'projects.title': 'Selected projects',
    'projects.intro': 'Most of these systems are used by health offices and national programs.',
    'projects.role': 'Role',
    'experience.title': 'Experience',
    'experience.intro':
      'Two parallel tracks in 2021–2023: main work at Castellum and DHIS2 integration with HISP Indonesia.',
    'experience.present': 'present',
    'education.title': 'Education',
    'skills.title': 'Skills',
    'blog.title': 'Writing',
    'blog.all': 'All posts',
    'blog.empty': 'No posts yet. New writing will show up here.',
    'blog.back': 'Back to all posts',
    'blog.readTime': 'min read',
    'contact.title': "Let's work together",
    'contact.lead':
      'Looking for a developer for APIs, health system integration, or data dashboards? Send an email — I usually reply within 1–2 working days.',
    'contact.email': 'Send email',
    'footer.built': 'Built with Astro.',
  },
} as const;

export type UIKey = keyof (typeof ui)['id'];
