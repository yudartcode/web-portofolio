import type { Localized } from '../i18n/utils';

export const profile = {
  fullName: 'L Yuda Rahmani Karnaen',
  shortName: 'Yuda Karnaen',
  location: 'Mataram, Lombok',
  email: 'yuda.karnaen11@gmail.com',
  cv: '/cv-yuda-karnaen.pdf',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yudakarnaen/' },
    // Tambahkan GitHub dll. di sini, contoh:
    // { label: 'GitHub', href: 'https://github.com/username' },
  ],
  languages: {
    id: 'Indonesia (asli), Inggris (menengah)',
    en: 'Indonesian (native), English (intermediate)',
  } satisfies Localized,
  bio: {
    id: [
      'Saya full stack developer dengan pengalaman lebih dari 6 tahun. Keseharian saya ada di backend — membangun REST API dengan Node.js, Express, dan NestJS mengikuti Clean Architecture, dan kini juga Go — serta di frontend dengan React untuk dashboard dan aplikasi admin.',
      'Sebagian besar pekerjaan saya ada di sektor kesehatan publik: program tuberkulosis, sistem informasi malaria, pelacakan kontak COVID-19, dan integrasi data antara rekam medis elektronik, SATUSEHAT, dan DHIS2. Saya senang di titik pertemuan antar sistem, tempat data harus sampai dengan utuh dan bisa dipercaya.',
    ],
    en: [
      "I'm a full stack developer with 6+ years of experience. Most days I work on the backend — building REST APIs with Node.js, Express, and NestJS following Clean Architecture, and now Go as well — and on the frontend with React for dashboards and admin apps.",
      'Much of my work is in public health: tuberculosis programs, malaria information systems, COVID-19 contact tracing, and data exchange between electronic medical records, SATUSEHAT, and DHIS2. I like working where systems meet, where data has to arrive complete and trustworthy.',
    ],
  } satisfies Localized<string[]>,
};
