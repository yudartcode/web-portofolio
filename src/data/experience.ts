import type { Localized } from '../i18n/utils';

export interface Job {
  role: string;
  company: string;
  start: string; // YYYY-MM
  end: string | null; // null = sekarang
  /** 'main' = jalur utama; 'side' = pekerjaan paralel (digambar sebagai cabang). */
  lane: 'main' | 'side';
  points: Localized<string[]>;
}

/** Urut dari yang terbaru dimulai. */
export const jobs: Job[] = [
  {
    role: 'Fullstack Developer',
    company: 'HISP Indonesia',
    start: '2021-08',
    end: '2023-12',
    lane: 'side',
    points: {
      id: [
        'Membangun middleware untuk integrasi dengan DHIS2.',
        'Menambahkan logging dan monitoring untuk keandalan operasional.',
        'Ikut membangun lapisan interoperabilitas sistem kesehatan nasional.',
      ],
      en: [
        'Built middleware for integration with DHIS2.',
        'Added logging and monitoring for operational reliability.',
        'Helped build the interoperability layer for national health systems.',
      ],
    },
  },
  {
    role: 'Fullstack Developer',
    company: 'Castellum Digital Indonesia',
    start: '2021-02',
    end: null,
    lane: 'main',
    points: {
      id: [
        'Sekarang: backend (Go) dan frontend sistem Fellowship Program, serta backend NestJS dan frontend React untuk FCSDS (program TB).',
        'REST API yang skalabel dengan Express.js dan NestJS (Clean Architecture).',
        'Desain database dan model data yang kompleks.',
        'Aplikasi web dan dashboard admin responsif dengan React.js.',
        'Memimpin Esismal V3, DigiHealthSpace, dan integrasi EMR → SATUSEHAT.',
      ],
      en: [
        'Now: Go backend and frontend for the Fellowship Program system, plus the NestJS backend and React frontend for FCSDS (TB program).',
        'Scalable REST APIs with Express.js and NestJS (Clean Architecture).',
        'Design of complex databases and data models.',
        'Responsive web apps and admin dashboards with React.js.',
        'Led Esismal V3, DigiHealthSpace, and EMR → SATUSEHAT integration.',
      ],
    },
  },
  {
    role: 'Fullstack Developer',
    company: 'Lumbung Inovasi',
    start: '2020-09',
    end: '2021-02',
    lane: 'main',
    points: {
      id: [
        'REST API untuk sistem POS dengan Express.js, lengkap dengan unit test.',
        'Dashboard web dengan React.js dan dokumentasi API di Postman.',
      ],
      en: [
        'REST APIs for POS systems with Express.js, with unit tests.',
        'Web dashboards with React.js and API documentation in Postman.',
      ],
    },
  },
  {
    role: 'Frontend Developer',
    company: 'RSIA Permata Hati Mataram',
    start: '2019-10',
    end: '2019-12',
    lane: 'main',
    points: {
      id: ['Sistem pencarian rekam medis yang cepat.', 'Dashboard ketersediaan tempat tidur real-time.'],
      en: ['Fast medical record search system.', 'Real-time bed availability dashboard.'],
    },
  },
];

export const education = [
  {
    title: { id: 'S1 Ilmu Komputer', en: "Bachelor's in Computer Science" } satisfies Localized,
    school: 'Universitas Bumigora Mataram',
    start: '2017-08',
    end: '2021-10',
  },
  {
    title: { id: 'SMK Rekayasa Perangkat Lunak', en: 'Vocational High School, Software Engineering' } satisfies Localized,
    school: 'SMKN 1 Selong',
    start: '2014-07',
    end: '2017-06',
  },
];
