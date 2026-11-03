import type { Localized } from '../i18n/utils';

export interface Project {
  name: string;
  context: Localized;
  role: Localized;
  summary: Localized;
  points: Localized<string[]>;
  tech: string[];
  /** Opsional: tautan demo/repo. Kosongkan jika tidak publik. */
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    name: 'FCSDS',
    context: { id: 'Program tuberkulosis (sedang berjalan)', en: 'Tuberculosis program (ongoing)' },
    role: { id: 'Backend & frontend', en: 'Backend & frontend' },
    summary: {
      id: 'Sistem untuk program tuberkulosis yang sedang saya kembangkan dari sisi backend dan frontend.',
      en: "A system for a tuberculosis program that I'm currently building on both the backend and frontend.",
    },
    points: {
      id: ['Backend dengan NestJS.', 'Frontend dengan React.js.'],
      en: ['Backend with NestJS.', 'Frontend with React.js.'],
    },
    tech: ['NestJS', 'React'],
    links: [{ label: 'fcsds.stoptbindonesia.org', href: 'https://fcsds.stoptbindonesia.org/' }],
  },
  {
    name: 'Fellowship Program',
    context: { id: 'Sistem program fellowship (sedang berjalan)', en: 'Fellowship program system (ongoing)' },
    role: { id: 'Backend & frontend', en: 'Backend & frontend' },
    summary: {
      id: 'Sistem untuk Fellowship Program yang sedang saya kembangkan, dengan backend berbasis Go.',
      en: "A system for the Fellowship Program that I'm currently building, with a Go-based backend.",
    },
    points: {
      id: ['Backend dengan Go (Golang).', 'Pengembangan frontend.'],
      en: ['Backend with Go (Golang).', 'Frontend development.'],
    },
    tech: ['Go'],
  },
  {
    name: 'Esismal V3',
    context: { id: 'Sistem Informasi Malaria', en: 'Malaria Information System' },
    role: { id: 'Lead backend & frontend', en: 'Backend & frontend lead' },
    summary: {
      id: 'Sistem pencatatan dan pelaporan malaria, tersedia sebagai aplikasi web dan desktop yang tetap jalan tanpa internet.',
      en: 'Malaria recording and reporting system, available as a web app and a desktop app that keeps working offline.',
    },
    points: {
      id: [
        'Memimpin pengembangan backend dan frontend.',
        'Aplikasi desktop offline dengan Electron.js untuk fasilitas dengan koneksi terbatas.',
        'Dashboard analitik interaktif, termasuk peta sebaran.',
        'Pertukaran data otomatis dengan DHIS2.',
      ],
      en: [
        'Led backend and frontend development.',
        'Offline desktop app with Electron.js for facilities with limited connectivity.',
        'Interactive analytics dashboards, including maps.',
        'Automated data exchange with DHIS2.',
      ],
    },
    tech: ['NestJS', 'React', 'Electron', 'PostgreSQL', 'DHIS2'],
    links: [{ label: 'sismal.kemkes.go.id', href: 'https://sismal.kemkes.go.id/' }],
  },
  {
    name: 'EMR → SATUSEHAT (TB)',
    context: { id: 'Proyek CHISU', en: 'CHISU project' },
    role: { id: 'Desain & implementasi', en: 'Design & implementation' },
    summary: {
      id: 'Interoperabilitas data kasus tuberkulosis dari rekam medis elektronik fasilitas kesehatan ke platform SATUSEHAT.',
      en: 'Interoperability for tuberculosis case data from facility electronic medical records into the SATUSEHAT platform.',
    },
    points: {
      id: [
        'Merancang alur dan pemetaan data EMR ke SATUSEHAT untuk use case TB.',
        'Memelihara lapisan mediator untuk interoperabilitas data.',
      ],
      en: [
        'Designed the EMR-to-SATUSEHAT data flow and mapping for the TB use case.',
        'Maintain the mediator layer that handles data interoperability.',
      ],
    },
    tech: ['Node.js', 'NestJS', 'SATUSEHAT', 'Mediator'],
  },
  {
    name: 'SILACAK',
    context: { id: 'Pelacakan kontak COVID-19 berbasis DHIS2', en: 'DHIS2-based COVID-19 contact tracing' },
    role: { id: 'Fullstack & maintainer', en: 'Fullstack & maintainer' },
    summary: {
      id: 'Platform pelacakan data COVID-19 nasional. Saya memelihara aplikasinya hingga versi 3 dan membangun fitur di atas DHIS2.',
      en: 'National COVID-19 data tracking platform. I maintained it through version 3 and built features on top of DHIS2.',
    },
    points: {
      id: [
        'Dashboard KPI sebagai ekstensi DHIS2.',
        'Formulir registrasi mandiri untuk SILACAK V3.',
        'Pemeliharaan dan perbaikan aplikasi SILACAK V3.',
      ],
      en: [
        'KPI dashboards as a DHIS2 extension.',
        'Self-registration form for SILACAK V3.',
        'Ongoing maintenance of the SILACAK V3 application.',
      ],
    },
    tech: ['React', 'Node.js', 'DHIS2'],
  },
  {
    name: 'DigiHealthSpace',
    context: { id: 'Platform belajar DHIS2 (DHS Indonesia)', en: 'DHIS2 learning platform (DHS Indonesia)' },
    role: { id: 'Lead backend', en: 'Backend lead' },
    summary: {
      id: 'Platform pembelajaran untuk pengguna dan pengelola DHIS2 di Indonesia.',
      en: 'Learning platform for DHIS2 users and administrators in Indonesia.',
    },
    points: {
      id: ['Memimpin desain dan pengembangan backend.'],
      en: ['Led backend design and development.'],
    },
    tech: ['NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'Integrasi DHIS2',
    context: { id: 'Pelaporan malaria & ASDK', en: 'Malaria reporting & ASDK' },
    role: { id: 'Backend', en: 'Backend' },
    summary: {
      id: 'Layanan API yang mengirim data dari sistem sumber ke platform analitik berbasis DHIS2.',
      en: 'API services that send data from source systems into DHIS2-based analytics platforms.',
    },
    points: {
      id: [
        'API pelaporan malaria ke platform analitik DHIS2.',
        'Integrasi sistem antara ASDK dan DHIS2.',
        'Middleware dengan logging dan monitoring untuk keandalan operasional.',
      ],
      en: [
        'Malaria reporting API into a DHIS2 analytics platform.',
        'System integration between ASDK and DHIS2.',
        'Middleware with logging and monitoring for operational reliability.',
      ],
    },
    tech: ['Express', 'Node.js', 'DHIS2', 'MongoDB'],
  },
  {
    name: 'RSIA Permata Hati',
    context: { id: 'Rumah sakit ibu & anak, Mataram', en: "Mother & child hospital, Mataram" },
    role: { id: 'Frontend', en: 'Frontend' },
    summary: {
      id: 'Alat internal rumah sakit untuk mempercepat pencarian rekam medis dan memantau tempat tidur.',
      en: 'Internal hospital tools for faster medical record lookup and bed monitoring.',
    },
    points: {
      id: ['Pencarian rekam medis yang cepat.', 'Dashboard ketersediaan tempat tidur real-time.'],
      en: ['Fast medical record search.', 'Real-time bed availability dashboard.'],
    },
    tech: ['React', 'JavaScript'],
  },
];
