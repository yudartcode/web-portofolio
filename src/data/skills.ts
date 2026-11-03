import type { Localized } from '../i18n/utils';

export const skillGroups: { name: Localized; items: string[] }[] = [
  {
    name: { id: 'Backend', en: 'Backend' },
    items: ['Node.js', 'NestJS', 'Express', 'Go', 'TypeScript', 'REST API', 'Clean Architecture'],
  },
  {
    name: { id: 'Frontend', en: 'Frontend' },
    items: ['React', 'Next.js', 'Vite', 'Electron', 'Map dashboards'],
  },
  {
    name: { id: 'Data & integrasi', en: 'Data & integration' },
    items: ['PostgreSQL', 'MongoDB', 'DHIS2', 'SATUSEHAT'],
  },
  {
    name: { id: 'Alat', en: 'Tooling' },
    items: ['Docker', 'Git', 'Postman'],
  },
];
